from django.urls import path
from .views import get_water_data

urlpatterns = [
    path('water-data/', get_water_data, name='water-data'),
]
