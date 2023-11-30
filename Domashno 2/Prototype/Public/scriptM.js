import L from "leaflet";

import "leaflet/dist/leaflet.css";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const divs = document.querySelectorAll(".coords");
    console.log(divs);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    const coordinates = [latitude, longitude];

    var map = L.map("map").setView(coordinates, 10); // Set the initial map view

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    divs.forEach((marker) => {
      const coords = marker.getAttribute("data-card-id").split(" ");
      L.marker([coords[0], coords[1]])
        .addTo(map)
        .bindPopup(
          '<a href="' + marker.url + '" target="_blank">' + coords[2] + "</a>"
          
        );
    });
  });
}
