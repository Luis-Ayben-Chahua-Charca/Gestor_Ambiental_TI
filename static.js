document.getElementById('verificar-btn').addEventListener('click', verificarValores);

function verificarValores() {
  // Obtener los valores de los inputs
  const ph = document.getElementById('id-ph').value;
  const turbiedad = document.getElementById('id-turbiedad').value;
  const cloro = document.getElementById('id-cloro').value;
  const nitratos = document.getElementById('id-nitratos').value;
  const cloruros = document.getElementById('id-cloruros').value;
  const fluor = document.getElementById('id-fluor').value;
  const sodios = document.getElementById('id-sodios').value;
  const conductividad = document.getElementById('id-conductividad').value;

  // Verificar si todos los campos están llenos
  if (!ph || !turbiedad || !cloro || !nitratos || !cloruros || !fluor || !sodios || !conductividad) {
    alert('Por favor, complete todos los campos');
    return; // Detener la ejecución si falta un campo
  }

  // Convertir a números
  const phValue = parseFloat(ph);
  const turbiedadValue = parseFloat(turbiedad);
  const cloroValue = parseFloat(cloro);
  const nitratosValue = parseFloat(nitratos);
  const clorurosValue = parseFloat(cloruros);
  const fluorValue = parseFloat(fluor);
  const sodiosValue = parseFloat(sodios);
  const conductividadValue = parseFloat(conductividad);

  // Verificar los valores según los criterios dados
  const esPhOptimo = phValue >= 6.5 && phValue <= 8.5;
  const esTurbiedadOptima = turbiedadValue <= 5;
  const esCloroOptimo = cloroValue >= 0.3 && cloroValue <= 2;
  const esNitratosOptimos = nitratosValue <= 50;
  const esClorurosOptimos = clorurosValue <= 250;
  const esFluorOptimo = fluorValue <= 1.5;
  const esSodiosOptimos = sodiosValue <= 1000;
  const esConductividadOptima = conductividadValue <= 1500;

  // Actualizar los resultados en los spans correspondientes
  document.getElementById('ph-result').innerText = esPhOptimo ? 'Optimo' : 'No optimo';
  document.getElementById('turbiedad-result').innerText = esTurbiedadOptima ? 'Optimo' : 'No optimo';
  document.getElementById('cloro-result').innerText = esCloroOptimo ? 'Optimo' : 'No optimo';
  document.getElementById('nitratos-result').innerText = esNitratosOptimos ? 'Optimo' : 'No optimo';
  document.getElementById('cloruros-result').innerText = esClorurosOptimos ? 'Optimo' : 'No optimo';
  document.getElementById('fluor-result').innerText = esFluorOptimo ? 'Optimo' : 'No optimo';
  document.getElementById('sodios-result').innerText = esSodiosOptimos ? 'Optimo' : 'No optimo';
  document.getElementById('conductividad-result').innerText = esConductividadOptima ? 'Optimo' : 'No optimo';

  // Aplicar clases para estilos
  document.getElementById('ph-result').className = esPhOptimo ? 'optimo' : 'no-optimo';
  document.getElementById('turbiedad-result').className = esTurbiedadOptima ? 'optimo' : 'no-optimo';
  document.getElementById('cloro-result').className = esCloroOptimo ? 'optimo' : 'no-optimo';
  document.getElementById('nitratos-result').className = esNitratosOptimos ? 'optimo' : 'no-optimo';
  document.getElementById('cloruros-result').className = esClorurosOptimos ? 'optimo' : 'no-optimo';
  document.getElementById('fluor-result').className = esFluorOptimo ? 'optimo' : 'no-optimo';
  document.getElementById('sodios-result').className = esSodiosOptimos ? 'optimo' : 'no-optimo';
  document.getElementById('conductividad-result').className = esConductividadOptima ? 'optimo' : 'no-optimo';

  // Calcular el ICARHS
  const parametros = {
    pH: { ideal: 6.5, max: 8.5, peso: 0.15 },
    Turbidez: { ideal: 0, max: 5, peso: 0.1 },
    Cloro: { ideal: 0.3, max: 2, peso: 0.15 },
    Nitratos: { ideal: 0, max: 50, peso: 0.15 },
    Cloruros: { ideal: 0, max: 250, peso: 0.1 },
    Fluor: { ideal: 0, max: 1.5, peso: 0.15 },
    Sodio: { ideal: 0, max: 1000, peso: 0.1 },
    Conductividad: { ideal: 0, max: 1500, peso: 0.1 }
  };

  const valores = {
    pH: phValue,
    Turbidez: turbiedadValue,
    Cloro: cloroValue,
    Nitratos: nitratosValue,
    Cloruros: clorurosValue,
    Fluor: fluorValue,
    Sodio: sodiosValue,
    Conductividad: conductividadValue
  };

  /*function calcularSubindiceAjustado(valor, ideal, max, invertido = false) {
    if (invertido) {
      return (1 - (valor / max)) * 100;
    } else {
      return (1 - Math.abs(valor - ideal) / (max - ideal)) * 100;
    }
  }

  let icaTotalAjustado = 0;
  for (const param in parametros) {
    const info = parametros[param];
    const invertido = ['Turbidez', 'Cloro', 'Nitratos', 'Cloruros', 'Sodio', 'Conductividad'].includes(param);
    const subindiceAjustado = calcularSubindiceAjustado(valores[param], info.ideal, info.max, invertido);
    icaTotalAjustado += subindiceAjustado * info.peso;
  }*/

    function calcularSubindice(valor, ideal, max) {
      return (1 - Math.abs(valor - ideal) / (max - ideal)) * 100;
    }
  
    let icaTotal = 0;
    for (const param in parametros) {
      const info = parametros[param];
      const subindice = calcularSubindice(valores[param], info.ideal, info.max);
      icaTotal += subindice * info.peso;
    }
    //cambiar a icatotal o icatotal ajustado
  const ica = icaTotal.toFixed(2);

  // Calificar la calidad del agua según el ICA
  let calificacion;
  if (ica >= 95 && ica <=100) {
    calificacion = 'Excelente - La calidad del agua está protegida, ausencia de amenaza o daño, su condición está muy cercana a los niveles naturales o deseables';
  } else if (ica >= 80 && ica <=94) {
    calificacion = 'Bueno - La calidad del agua se aleja un poco de la calidad natural agua. Sin embargo, las condiciones deseables pueden estar con algunas amenazas o daños de poca magnitud.';
  } else if (ica >= 65 && ica <=79) {
    calificacion = 'Regular - La calidad de agua natural ocasionalmente es amenazada o dañada. La calidad del agua a menudo se aleja de los valores deseables. Muchos de los usos necesitan tratamiento';
  } else if (ica >= 45 && ica <=64) {
    calificacion = 'Malo - La calidad de agua no cumple con los objetivos de calidad, frecuentemente las condiciones deseables están amenazadas o dañadas. Muchos de los usos necesitan tratamiento';
  } else {
    calificacion = 'Pesimo - La calidad del agua no cumple con los objetivos de calidad, casi siempre está amenazada o dañada. Todos los usos necesitan tratamiento';
  }

  // Mostrar el ICA calculado y su calificación
  document.getElementById('icarhs-result').innerText = `${ica} - ${calificacion}`;
}
