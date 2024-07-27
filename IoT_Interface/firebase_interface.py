import firebase_admin
import time
import datetime
from firebase_admin import credentials, db
import random

cred = credentials.Certificate('/home/shaik/ml/myenv/firebase.json')

firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://test-86b09-default-rtdb.firebaseio.com/'
    })

def write_data(temperature, humidity):
    now = datetime.datetime.now()
    date_str = now.strftime('%Y-%m-%d')
    time_str = now.strftime('%H:%M:%S')
    
    date_ref = db.reference(date_str)
    
    temp_ref = date_ref.child('Temperature')
    hum_ref = date_ref.child('Humidity')
    
    temp_ref.child(time_str).set(temperature)
    hum_ref.child(time_str).set(humidity)
    
    print(f'Data written to Firebase: {date_str} - {time_str} - Temperature: {temperature} - Humidity: {humidity}')


    
if __name__ == '__main__':
    while True:
        try:
            for i in range(20):
                temp = random.randint(26,32)
                humi = random.randint(60,85)
                write_data(temp, humi)
        except Exception as e:
            print(f'Error: {e}')