from django.db import models

class CalidadAgua(models.Model):
    ph = models.FloatField()
    turbiedad = models.FloatField()
    cloro = models.FloatField()
    nitratos = models.FloatField()
    cloruros = models.FloatField()
    fluor = models.FloatField()
    sodios = models.FloatField()
    conductividad = models.FloatField()
    ica = models.FloatField()

    def __str__(self):
        return f"Calidad de Agua - pH: {self.ph}, ICA: {self.ica}"
