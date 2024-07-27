# models.py
from django.db import models

class HumidTemp(models.Model):
    firebase_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    # Add other fields as needed
