# Generated by Django 5.0.6 on 2024-07-15 05:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyectoweb', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='calidadagua',
            name='calificacion',
        ),
    ]