from django.urls import path
from .views import get_water_data , get_water_quality 

urlpatterns = [
    path('water-data/', get_water_data, name='water-data'),
    path('water-purify/', get_water_quality, name='water-data'),
    
]




# Betma
# Depalpur
# Dr. Ambedkar Nagar
# Hatod
# Indore
# Manglaya Sadak
# Mhowgaon
# Palda
# Rau
# Runji Gautampura
# Sanwer
# Sinhasa
# V Anagar
# Palasiya
# Old Palasiya
# Rajin Nagar
# No Laksiyaru
# Divas Nagar
# Niranjan Screen
# Bapat Chur
# Sandar Nagar
# Tour Chora
# Agaran Dajr
# Hindi Cha