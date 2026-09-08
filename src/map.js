const clinicCoordinates = [55.7341, 37.6631];

const mapCenter = [55.7341, 37.6680];

const map = L.map('mapdiv', {
    scrollWheelZoom: false
}).setView(mapCenter, 17);

// map.panBy([-1300, 0]);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker(clinicCoordinates)
    .addTo(map)
    .bindPopup(`
        <strong>МЦ</strong><br>
        Москва, Воронцовская ул., 35Б к1
    `)
    .openPopup();