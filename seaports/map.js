
var m = new L.Map('map');
var MarkerOptions = {
    radius: 6,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};
var PT = new L.GeoJSON(null, {
    pointToLayer: function (latlng) {
        return new L.CircleMarker(latlng, MarkerOptions);
    }
});

var mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy MapQuest',
mQ = new L.TileLayer(mapQuestURL, {attribution: attribution, subdomains: ['1','2','3','4']});


PT.on("featureparse", function (e) {
  
        e.layer.bindPopup(e.properties.TERM_NAME + "<br />the service is " + e.properties.SERVICE + "<br />located in " + e.properties.TOWN);
    
});


PT.addGeoJSON(seaPort);

m.setView(new L.LatLng(42.151187,-70.949707), 9).addLayer(mQ).addLayer(PT);