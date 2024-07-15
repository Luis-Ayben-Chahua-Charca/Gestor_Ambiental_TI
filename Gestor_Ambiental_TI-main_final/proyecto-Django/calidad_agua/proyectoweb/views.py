
from django.shortcuts import render
from .models import CalidadAgua

def tu_vista(request):
    if request.method == 'POST':
        ph = request.POST.get('ph')
        turbiedad = request.POST.get('turbiedad')
        cloro = request.POST.get('cloro')
        nitratos = request.POST.get('nitratos')
        cloruros = request.POST.get('cloruros')
        fluor = request.POST.get('fluor')
        sodios = request.POST.get('sodios')
        conductividad = request.POST.get('conductividad')
        ica = request.POST.get('ica')

        # Asegúrate de que todos los campos sean obligatorios
        if not all([ph, turbiedad, cloro, nitratos, cloruros, fluor, sodios, conductividad, ica]):
            return render(request, 'proyectoweb/index.html', {'error': 'Todos los campos son obligatorios.'})

        # Convierte a float y guarda
        calidad_agua = CalidadAgua(
            ph=float(ph),
            turbiedad=float(turbiedad),
            cloro=float(cloro),
            nitratos=float(nitratos),
            cloruros=float(cloruros),
            fluor=float(fluor),
            sodios=float(sodios),
            conductividad=float(conductividad),
            ica=float(ica)
        )
        calidad_agua.save()

        # Redirige o renderiza el template con éxito
        #return render(request, 'proyectoweb/admin', {'success': 'Datos guardados correctamente.'})

    return render(request, 'proyectoweb/index.html')
