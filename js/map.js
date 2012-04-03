
var m = new L.Map('map');
var MarkerOptions = {
    radius: 6,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};
var WT = new L.GeoJSON(null, {
    pointToLayer: function (latlng) {
        return new L.CircleMarker(latlng, MarkerOptions);
    }
});

var mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy MapQuest',
mQ = new L.TileLayer(mapQuestURL, {attribution: attribution, subdomains: ['1','2','3','4']});


WT.on("featureparse", function (e) {
  
        e.layer.bindPopup("located at: " + e.properties.TAXI_STOP + "<br />the service is " + e.properties.SERVICE);
    
});


WT.addGeoJSON(WaterTaxis);

m.setView(new L.LatLng(42.356514,-71.038542), 14).addLayer(mQ).addLayer(WT);