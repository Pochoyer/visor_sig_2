// Coordenadas exactas de la Plaza de Bolívar, Bogotá, Colombia
const plazaBolivar = [4.5981, -74.0758];

// Inicializar el mapa
const map = L.map('map').setView(plazaBolivar, 17); // Zoom ajustado para ver la plaza

// Capa base: OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcador en la Plaza de Bolívar
L.marker(plazaBolivar)
  .addTo(map)
  .bindPopup('<b>Plaza de Bolívar</b><br>Corazón histórico de Bogotá, Colombia.')
  .openPopup();

// Círculo de referencia (50 metros de radio)
L.circle(plazaBolivar, {
  radius: 50,
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.2,
  weight: 2
}).addTo(map);

// Confirmación en consola
console.log("✅ Mapa cargado correctamente en la Plaza de Bolívar, Bogotá.");