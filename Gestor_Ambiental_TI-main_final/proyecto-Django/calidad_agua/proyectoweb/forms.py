from django import forms
from .models import CalidadAgua

class CalidadAguaForm(forms.ModelForm):
    class Meta:
        model = CalidadAgua
        fields = ['ph', 'turbiedad', 'cloro', 'nitratos', 'cloruros', 'fluor', 'sodios', 'conductividad', 'ica']
