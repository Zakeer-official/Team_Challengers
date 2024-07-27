from django.http import JsonResponse
from django.shortcuts import render
import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase only once
if not firebase_admin._apps:
    # Path to your service account key file
    cred = credentials.Certificate(r'C:\Users\Jayanth\Documents\GitHub\Team_Challengers\backend\server\server\test.json')
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://team-challengers-37568-default-rtdb.firebaseio.com/'
    })

def get_water_data(request):
    # Reference to your Firebase Realtime Database path
    ref = db.reference('/')

    # Retrieve data
    water_data = ref.get()

    return JsonResponse({"data": water_data})

