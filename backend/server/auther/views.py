from django.http import JsonResponse
import firebase_admin
from firebase_admin import credentials, db
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from apscheduler.schedulers.background import BackgroundScheduler
from .models import WaterQuality
from django.db.utils import IntegrityError
import os
import joblib
import random
import datetime

# Initialize Firebase only once
if not firebase_admin._apps:
    cred = credentials.Certificate(r'E:\hackndore\Team_Challengers\backend\server\server\test.json')
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://team-challengers-37568-default-rtdb.firebaseio.com/'
    })

    cred_interface = credentials.Certificate(r'E:\hackndore\Team_Challengers\backend\server\server\firebase.json')
    firebase_admin.initialize_app(cred_interface, {
        'databaseURL': 'https://test-86b09-default-rtdb.firebaseio.com'
    }, name='interface')

    cred_area_usage = credentials.Certificate(r'E:\hackndore\Team_Challengers\backend\server\server\area_usage.json')
    firebase_admin.initialize_app(cred_area_usage, {
        'databaseURL': 'https://area-usage-default-rtdb.asia-southeast1.firebasedatabase.app/'
    })

def get_water_data():
    ref = db.reference('/')
    water_data = ref.get()
    return water_data

def preprocess_data(water_data):
    df = pd.DataFrame(water_data)
    df = df.dropna()
    
    # Ensure the required columns are present
    required_columns = ['ph', 'Hardness', 'Solids', 'Chloramines', 'Sulfate', 'Conductivity', 'Organic_carbon', 'Trihalomethanes', 'Turbidity']
    if not all(col in df.columns for col in required_columns):
        raise ValueError("Missing required columns in the data")

    X = df[required_columns]
    
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    return X_scaled, df

def predict_potability():
    water_data = get_water_data()
    if not water_data:
        print("No water data found")
        return

    try:
        preprocessed_data, df = preprocess_data(water_data)
    except ValueError as e:
        print(f"Data preprocessing error: {str(e)}")
        return
    except AttributeError as e:
        print(f"Data format error: {str(e)}")
        return

    model_path = os.path.join(
        r'E:\hackndore\Team_Challengers\Model_Development\predictions\Random Forest_best_model.joblib')

    # Debug: Check if the file exists
    if not os.path.isfile(model_path):
        print(f"Model file not found at path: {model_path}")
        return

    try:
        model = joblib.load(model_path)
    except OSError as e:
        print(f"Error loading model: {str(e)}")
        return

    predictions = model.predict(preprocessed_data)
    potability = (predictions > 0.5).astype(int)

    # Update Firebase with the potability predictions
    ref = db.reference('/')
    for i, pot in zip(df.index, potability):
        ref.child(str(i)).update({"Potability": int(pot)})

    print("Predictions updated in Firebase")

    # Save data to Django database, avoid redundancy
    for i, pot in zip(df.index, potability):
        try:
            WaterQuality.objects.update_or_create(
                ph=df.at[i, 'ph'],
                hardness=df.at[i, 'Hardness'],
                solids=df.at[i, 'Solids'],
                chloramines=df.at[i, 'Chloramines'],
                sulfate=df.at[i, 'Sulfate'],
                conductivity=df.at[i, 'Conductivity'],
                organic_carbon=df.at[i, 'Organic_carbon'],
                trihalomethanes=df.at[i, 'Trihalomethanes'],
                turbidity=df.at[i, 'Turbidity'],
                defaults={"potability": int(pot)}
            )
        except IntegrityError:
            print(f"Skipping duplicate entry for index {i}")

    print("Data saved to Django database")

    # Delete all values in Firebase
    ref.set({})
    print("All values deleted in Firebase")
    
    # Convert potability array to list for JSON serialization
    return JsonResponse(data={"Predict": potability.tolist()})

def get_water_quality(request):
    predict_potability()
    return JsonResponse({"status": "Water quality prediction task executed"})

def water_usage(inflow):
    result = []

    for i in range(24):
        result.append(inflow[i] - random.randint(200, 400) + 2 * i) 
    return result 

def inflow():
    result = []
    for i in range(24):
        result.append(random.randint(200, 400) + 2 * i * 5) 
    return result

def get_cities_data(request):
    cities = [
        "Betma", "Depalpur", "Hatod", "Indore", "Manglaya Sadak", "Mhowgaon",
        "Palda", "Rau", "Runji Gautampura", "Sanwer", "Sinhasa", "V Anagar",
        "Palasiya", "Old Palasiya", "Rajin Nagar", "No Laksiyaru", "Divas Nagar",
        "Niranjan Screen", "Bapat Chur", "Sandar Nagar", "Tour Chor",
        "Agaran Dajr", "Hindi Cha"
    ]
    dinflow = inflow() 
    usage = water_usage(dinflow) 
    return JsonResponse({"name": cities, "usage": usage, "inflow": dinflow})

def previousmonth_leakage(request):
    totalwater = 0 
    leakwater = 0 
    percent = (totalwater) / (totalwater + leakwater)
    return JsonResponse({"precentage": percent})

def monthlylimit_consumption(request):
    ul = []
    rl = []
    uc = [] 
    rc = []

    current_year = datetime.datetime.now().year
    current_month = datetime.datetime.now().month

    months = ['01_January', '02_February', '03_March', '04_April', '05_May', '06_June', 
              '07_July', '08_August', '09_September', '10_October', '11_November', '12_December']

    for month in months:
        if months.index(month) < current_month:
            uc.append(random.uniform(150.0, 200.0))  # Simulating urban consumption data
            ul.append(random.uniform(10.0, 30.0))    # Simulating urban leakage data
            rc.append(random.uniform(100.0, 150.0))  # Simulating rural consumption data
            rl.append(random.uniform(10.0, 30.0))    # Simulating rural leakage data
        else:
            uc.append(0)
            ul.append(0)
            rc.append(0)
            rl.append(0)
    
    return JsonResponse({"urbanlimit": ul, "rurallimit": rl, "urbanconsumption": uc, "ruralconsumption": rc})

def yearlylimit_consumption(request):
    ul = []
    rl = []
    uc = [] 
    rc = []

    consumption_range = {'urban': (150.0, 200.0), 'rural': (100.0, 150.0)}
    leakage_range = (10.0, 30.0)

    for year in range(2020, 2025):
        for month in range(1, 13):
            uc.append(random.uniform(*consumption_range['urban']))
            ul.append(random.uniform(*leakage_range))
            rc.append(random.uniform(*consumption_range['rural']))
            rl.append(random.uniform(*leakage_range))
    
    return JsonResponse({"urbanlimit": ul, "rurallimit": rl, "urbanconsumption": uc, "ruralconsumption": rc})

def write_interface_data(year, month, consumption_range, leakage_range, current_year, current_month):
    rural_ref = db.reference(f'interface/{year}/{month}/rural')
    urban_ref = db.reference(f'interface/{year}/{month}/urban')

    if year == current_year and month == current_month:
        rural_data = {
            'consumption': 0.0,
            'leakage': 0.0
        }
        urban_data = {
            'consumption': 0.0,
            'leakage': 0.0
        }
    else:
        rural_consumption, rural_leakage = generate_random_data(consumption_range['rural'], leakage_range)
        urban_consumption, urban_leakage = generate_random_data(consumption_range['urban'], leakage_range)

        rural_data = {
            'consumption': rural_consumption,
            'leakage': rural_leakage
        }
        urban_data = {
            'consumption': urban_consumption,
            'leakage': urban_leakage
        }

    rural_ref.set(rural_data)
    urban_ref.set(urban_data)

    print(f'Data written to Firebase: {year} - {month} - Rural: {rural_data}, Urban: {urban_data}')

def generate_year_data(year, consumption_range, leakage_range):
    current_year = datetime.datetime.now().year
    current_month = datetime.datetime.now().month

    months = ['01_January', '02_February', '03_March', '04_April', '05_May', '06_June', 
              '07_July', '08_August', '09_September', '10_October', '11_November', '12_December']
    for month in months:
        write_interface_data(year, month, consumption_range, leakage_range, current_year, current_month)

if __name__ == '__main__':
    try:
        # Start the area usage data update in a separate thread
        from threading import Thread
        area_usage_thread = Thread(target=update_area_usage_data)
        area_usage_thread.start()

        # Generate data for the Firebase interface
        consumption_range = {
            'urban': (150.0, 200.0),
            'rural': (100.0, 150.0)
        }
        leakage_range = (10.0, 30.0)

        for year in range(2020, 2025):
            print(f"Generating data for {year}...")
            generate_year_data(year, consumption_range, leakage_range)
    except Exception as e:
        print(f'Error: {e}')
