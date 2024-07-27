from django.urls import path
from .views import get_water_data , get_water_quality  , get_cities_data , previousmonth_leakage , monthlylimit_consumption , yearlylimit_consumption 

urlpatterns = [
    path('water-data/', get_water_data, name='water-data'),
    path('water-purify/', get_water_quality, name='water-data'),
    path('citydata/' , get_cities_data , name = "indore data ") , 
    path('prevmonth/' , previousmonth_leakage , name="previousmonthleakage") , 
    path("monthlylc" , monthlylimit_consumption , name = "monthlylc"), 
    path("yearlylc " , yearlylimit_consumption  , name="monthly consumption ")  ,     
]




