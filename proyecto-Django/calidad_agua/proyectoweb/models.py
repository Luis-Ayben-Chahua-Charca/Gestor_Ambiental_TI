from django.db import models

# Create your models here.
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
    calificacion = models.CharField(max_length=255)

    def __str__(self):
        return f"Calidad del agua: {self.ica} - {self.calificacion}"