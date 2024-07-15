from django.shortcuts import render, redirect
from .forms import CalidadAguaForm

def inicio(request):
    if request.method == 'POST':
        form = CalidadAguaForm(request.POST)
        if form.is_valid():
            print("Formulario válido")
            # Guardar en la base de datos
            calidad_agua = form.save(commit=False)
            calidad_agua.resultado = request.POST.get('resultado')
            calidad_agua.ica = request.POST.get('ica')
            calidad_agua.save()
            return redirect('pagina_exito')
        else:
            print("Errores en el formulario:", form.errors)
    else:
        form = CalidadAguaForm()
    
    return render(request, 'proyectoweb/index.html', {'form': form})
