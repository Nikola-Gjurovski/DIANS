export const fullSearch=(map,divs)=>{
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

export const sr=(slug,text,items)=>{
    if(slug.includes(text)){
        items.style.opacity=1 
        items.style.display='block'
    }
    else{
        items.style.opacity=0
        items.style.display='none'
   
    }
}