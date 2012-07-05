
var m = new L.Map('map');
var MarkerOptions = {
    radius: 3,
    fillColor: "#ff7800",
    color: "#000",
    weight: 0.5,
    opacity: 1,
    fillOpacity: 1
};
var PT = new L.GeoJSON(null, {
    pointToLayer: function (latlng) {
        return new L.CircleMarker(latlng, MarkerOptions);
    }
});
var pastel = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
//var stamintarain = 'http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg',
//var mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy stamen',
mQ = new L.TileLayer(pastel, {attribution: attribution, subdomains: ['a','b','c','d']});


PT.on("featureparse", function (e) {
  
        e.layer.bindPopup("type: " + e.properties.Otype + "<br />Shape: " + e.properties.Oshape + "<br />Rise Diameter: " + e.properties.Rise + "<br />Span Diameter: " + e.properties.Span + "<br />Material: " + e.properties.Material);
    
});


PT.addGeoJSON(outFall);

m.setView(new L.LatLng(41.914541,-71.592407), 8).addLayer(mQ)