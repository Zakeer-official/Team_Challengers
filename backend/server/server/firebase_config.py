# firebase_config.py
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate('backend/test.json')
firebase_admin.initialize_app(cred)
