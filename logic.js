var map = L.map("map").setView([33.4148, -111.9093], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// fetch JSON data
 const url = "https://data.tempe.gov/datasets/tempegov::1-08-crash-data-report-detail.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D"

d3.json(url).then(function(data) {
    createFeatures(data);
});

function createFeatures(data) {
    console.log(data.features.slice(0, 1000))
    L.geoJSON(data.features.slice(0,1000)).addTo(map);
}















