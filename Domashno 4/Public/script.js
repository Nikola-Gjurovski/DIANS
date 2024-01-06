import L from "leaflet";

import "leaflet/dist/leaflet.css";
import { sr,fullSearch } from "./search";
import * as turf from "@turf/turf";
import { car } from "./Car";
import { walk } from "./Walk"
import { showBigMap,mapWinery,smallMap } from "./MapWithAllWineries";
import { fullDistance } from "./Distance";
let map;
 
//Showing the big map with all wineries from mongoDB
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // showBigMap(L,position,map,'.coords')
    const divs = document.querySelectorAll(".coords");
    // console.log(divs);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(latitude, longitude);
    const coordinates = [latitude, longitude];

    map = L.map("map").setView(coordinates, 10); // Set the initial map view

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
   
    mapWinery(divs,map)

    //Search for specific winery on the big map
    if (document.getElementById("search-bar")) {
      fullSearch(map,divs)
      
    }

    // Showing map for the specific winery
    const div = document.querySelector(".coord");
    if (div) {
     smallMap(div,L,map)
    }
  });
}

const distanceButton = document.getElementById("how_far");

// Event listener for the button click
distanceButton.addEventListener("click", () => {
 
  navigator.geolocation.getCurrentPosition(function (position) {
    fullDistance(position,map)

  });
});