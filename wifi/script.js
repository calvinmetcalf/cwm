var t = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpeg", 
{subdomains:["otile1","otile2","otile3","otile4"],
attribution:"Tile Data from <a href='http://www.openstreetmap.org/' target='_blank'>OSM</a>, Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"});


var m = L.map('map', {
    center: [42.151187,-70.949707],
    zoom: 8
}).addLayer(t);

var g = L.geoJson().addTo(m);

$.get("http://calvin.iriscouch.com/w/_design/w/_list/geojson/MAC?group=true",function(d){g.addData(d)},"JSONP");