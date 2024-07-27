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

# Initialize Firebase only once
if not firebase_admin._apps:
    cred = credentials.Certificate(r'C:\Users\Jayanth\Documents\GitHub\Team_Challengers\backend\server\server\test.json')
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://team-challengers-37568-default-rtdb.firebaseio.com/'
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
        r'C:\Users\Jayanth\Documents\GitHub\Team_Challengers\Model_Development\predictions\Random Forest_best_model.joblib')

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

def get_water_quality(request):
    predict_potability()
    return JsonResponse({"status": "Water quality prediction task executed"})

# Uncomment the following lines to start the scheduler
# def start_scheduler():
#     scheduler = BackgroundScheduler()
#     scheduler.add_job(predict_potability, 'interval', hours=2)
#     scheduler.start()

# start_scheduler()
