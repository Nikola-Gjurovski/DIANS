import L from "leaflet";

import "leaflet/dist/leaflet.css";
import { sr } from "./search";

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
      if (marker.style.display !== "none") {
        // console.log('klik')
        const coords = marker.getAttribute("data-card-id").split(" ");
        L.marker([coords[0], coords[1]])
          .addTo(map)
          .bindPopup("<p>" + coords[2] + "</p>");
      }
    });
    divs.forEach((marker) => {
      const coords = marker.getAttribute("data-card-id").split(" ");
      marker.addEventListener("click", () => {
        map.setView([coords[0], coords[1]], 13, {
          animate: true,
          pan: {
            duration: 2,
          },
        });
      });
    });
    if (document.getElementById("search-bar")) {
      document.getElementById("search-bar").addEventListener("submit", (e) => {
        e.preventDefault();
        const text = document.getElementById("src").value.toLowerCase();
        map.eachLayer(function (layer) {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });
        divs.forEach((marker) => {
          const coords = marker.getAttribute("data-card-id").split(" ")[2];
          sr(coords, text, marker);
          if (marker.style.display !== "none") {
            // console.log('klik')
            const coords = marker.getAttribute("data-card-id").split(" ");
            L.marker([coords[0], coords[1]])
              .addTo(map)
              .bindPopup("<p>" + coords[2] + "</p>");
          }
        });
      });
    }

    // var mapa = L.map("map").setView(coordinates, 6)
    const div = document.querySelector(".coord");
    if (div) {
      const coords = div.getAttribute("data-card-id").split(" ");
      console.log(coords);
      L.marker([coords[0], coords[1]])
        .addTo(map)
        .bindPopup(
          // '<a href="' + div.url + '" target="_blank">' + coords[2] + "</a>"
          "<h3>" + coords[2] + "</h3>"
        );
      map.setView([coords[0], coords[1]], 13, {
        animate: true,
        pan: {
          duration: 1,
        },
      });
    }
  });
}

const distanceButton = document.getElementById("how_far");

// Event listener for the button click
distanceButton.addEventListener("click", () => {
  // Get your current geolocation coordinates
  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude, longitude } = position.coords;
    const currentCoords = [latitude, longitude];

    // Get the target location coordinates from a specific div attribute (for example, ".coord")
    const targetDiv = document.querySelector(".coord");
    if (targetDiv) {
      const targetCoords = targetDiv.getAttribute("data-card-id").split(" ");

      // Create a polyline between your current location and the target location
      //const polyline = L.polyline([currentCoords, [targetCoords[0], targetCoords[1]]], { color: 'red' }).addTo(map);

      // Calculate distance using turf.js
      const from = turf.point(currentCoords);
      const to = turf.point([targetCoords[0], targetCoords[1]]);
      const options = { units: "kilometers" };
      const distance = turf.distance(from, to, options);

      // Display the distance on the map near the middle of the line
      const middleCoords = [
        (currentCoords[0] + parseFloat(targetCoords[0])) / 2,
        (currentCoords[1] + parseFloat(targetCoords[1])) / 2,
      ];
      L.marker(middleCoords)
        .addTo(map)
        .bindPopup(`<p>Distance: ${distance.toFixed(2)} kilometers</p>`);
    }
  });
});
