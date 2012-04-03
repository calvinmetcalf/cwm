var L = this.L;
var m = new L.Map('map');
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var geojson = new L.GeoJSON(null, {
    pointToLayer: function (latlng) {
        return new L.CircleMarker(latlng, geojsonMarkerOptions);
    }
});

var mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy MapQuest',
mQ = new L.TileLayer(mapQuestURL, {attribution: attribution, subdomains: ['1','2','3','4']});
geojson.on("featureparse", function (e) {
  
        e.layer.bindPopup("located at: " + e.properties.TAXI_STOP + "<br />the service is " + e.properties.SERVICE);
    
});
geojson.addGeoJSON(WaterTaxis);
m.setView(new L.LatLng(42.344335,-71.05442), 13).addLayer(mQ).addLayer(geojson);