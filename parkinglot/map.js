
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
  
        e.layer.bindPopup("STATION: " + e.properties.STATION + "<br />Owner: " + e.properties.Owner +"<br />Cost: " + e.properties.ParkingRat + "<br /> Spots: " + e.properties.Number_Par);
    
});


PT.addGeoJSON(lots);

m.setView(new L.LatLng(41.914541,-71.592407), 8).addLayer(mQ).addLayer(PT);