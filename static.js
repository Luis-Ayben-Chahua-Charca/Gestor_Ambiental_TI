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
}
