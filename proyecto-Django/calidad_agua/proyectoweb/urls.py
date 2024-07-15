from django.urls import path
from proyectoweb import views
from .views import inicio
urlpatterns = [
    path('',views.inicio,name="inicio"),
]
