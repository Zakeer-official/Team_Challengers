from django.urls import path
<<<<<<< HEAD
from .views import get_water_data , get_water_quality 
from  rest_framework.routers import DefaultRouter 

prouter = DefaultRouter()
prouter.register(' ')


=======
from .views import get_water_data , get_water_quality  , get_cities_data , previousmonth_leakage , monthlylimit_consumption , yearlylimit_consumption 
>>>>>>> fb3ee44414eba0c16c75ca057fceca47299d2f24

urlpatterns = [
    path('water-data/', get_water_data, name='water-data'),
    path('water-purify/', get_water_quality, name='water-data'),
    path('citydata/' , get_cities_data , name = "indore data ") , 
    path('prevmonth/' , previousmonth_leakage , name="previousmonthleakage") , 
    path("monthlylc" , monthlylimit_consumption , name = "monthlylc"), 
    path("yearlylc " , yearlylimit_consumption  , name="monthly consumption ")  ,     
]




