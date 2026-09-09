const clinicCoordinates = [55.7341, 37.6631];

let mapCenter = [55.7341, 37.6680];

if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    mapCenter = [55.7341, 37.6655];
}

if (window.innerWidth < 768) {
    mapCenter = [55.7341, 37.6660];
}

if (window.innerWidth <= 320) {
    mapCenter = [55.7341, 37.6648];
}

const map = L.map('mapdiv', {
    scrollWheelZoom: false
}).setView(mapCenter, 17);



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