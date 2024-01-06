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

