export const showBigMap=(L,position,map,cl)=>{
    
          const divs = document.querySelectorAll(`${cl}`);
          if(divs){
          // console.log(divs);
          const { latitude } = position.coords;
          const { longitude } = position.coords;
          // console.log(latitude, longitude);
          const coordinates = [latitude, longitude];
          if(!map){
          map = L.map("map").setView(coordinates, 10);
          } // Set the initial map view
      
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
        //   divs.forEach((marker) => {
        //     const coords = marker.getAttribute("data-card-id").split(" ");
        //     marker.addEventListener("click", () => {
        //       map.setView([coords[0], coords[1]], 13, {
        //         animate: true,
        //         pan: {
        //           duration: 2,
        //         },
        //       });
        //     });
        //   });
        mapWinery(divs,map)
        }
}
      
export const mapWinery=(divs,map)=>{
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
}
export const smallMap=(div,L,map)=>{
       const coords = div.getAttribute("data-card-id").split(" ");
      // console.log(coords);
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