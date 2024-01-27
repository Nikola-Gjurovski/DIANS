import { car } from "./Car";
import { walk } from "./Walk";
import * as turf from "@turf/turf";
export const fullDistance=(position,map)=>{
    const { latitude, longitude } = position.coords;
        const currentCoords = [latitude, longitude];
    
        // Get the target location coordinates from a specific div attribute (for example, ".coord")
        const targetDiv = document.querySelector(".coord");
        if (targetDiv) {
          const targetCoords = targetDiv.getAttribute("data-card-id").split(" ");
    
          // Create a polyline between your current location and the target location
          const polylineCoords = [
            currentCoords,
            [targetCoords[0], targetCoords[1]],
          ];
          const polyline = L.polyline(polylineCoords, { color: "red" }).addTo(map);
    
          // Calculate distance using turf.js
          const from = turf.point(currentCoords);
          const to = turf.point([targetCoords[0], targetCoords[1]]);
          const options = { units: "kilometers" };
          const distance = turf.distance(from, to, options);
          
    
          
    
    // Calculate time for travel on foot
        
    
          // Display the distance on the map near the middle of the line
          const middleCoords = [
            (currentCoords[0] + parseFloat(targetCoords[0])) / 2,
            (currentCoords[1] + parseFloat(targetCoords[1])) / 2,
          ];
        
          document.getElementById("distance").innerHTML = `${distance.toFixed(
            2
          )} km`;
          car(distance)
          walk(distance)
    
          // Add markers for the current and target locations
          const stri = "Вашата локација";
          L.marker(currentCoords)
            .addTo(map)
            .bindPopup("<p>" + stri + "</p>");
    
          L.marker([targetCoords[0], targetCoords[1]])
            .addTo(map)
            .bindPopup("<p>" + targetCoords[2] + "</p>");
          map.setView([targetCoords[0], targetCoords[1]], 7, {
            animate: true,
            pan: {
              duration: 1,
            },
          });
        }
}