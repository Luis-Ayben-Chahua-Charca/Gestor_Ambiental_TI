from django.urls import path
from .views import tu_vista

urlpatterns = [
    path('', tu_vista, name='tuvista'),  # Cambia 'calidad-agua/' según tu necesidad
]
