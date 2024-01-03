(function(d, t, e, m){

    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){

        RW.init({
            huid: "494233",
            uid: "d433c7115cd24c2ab754a245603defd7",
            source: "website",
            options: {
                "advanced": {
                    "font": {
                        "hover": {
                            "color": "#d5a917"
                        },
                        "size": "12px",
                        "color": "#906461",
                        "type": "tahoma"
                    }
                },
                "size": "medium",
                "label": {
                    "background": "#FFEDA4"
                },
                "style": "oxygen",
                "isDummy": false
            }
        });
        RW.render();
    };
    // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
    l = d.location, ck = "Y" + t.getFullYear() +
    "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
    f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
    a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
}(document, new Date(), "script", "rating-widget.com/"));

// import L from "leaflet";

// import "leaflet/dist/leaflet.css";

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     const divs = document.querySelector(".coords");
//     console.log(divs);
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(latitude, longitude);
//     const coordinates = [latitude, longitude];

//     var map = L.map("map").setView(coordinates, 10); // Set the initial map view

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

    
//       const coords = divs.getAttribute("data-card-id").split(" ");
//       L.marker([coords[0], coords[1]])
//         .addTo(map)
//         .bindPopup(
//           '<a href="' + marker.url + '" target="_blank">' + coords[2] + "</a>"
          
//         );
    
//   });
// }
