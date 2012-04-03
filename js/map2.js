
var m = new L.Map('map');

var FR = new L.GeoJSON();

var mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy MapQuest',
mQ = new L.TileLayer(mapQuestURL, {attribution: attribution, subdomains: ['1','2','3','4']});

FR.on("featureparse", function (e) {
  
       e.layer.bindPopup("Type: " + e.properties.TYPE + "<br />  Operator: " + e.properties.OPERATOR + "<br /> Route: " + e.properties.ROUTE);
    
});



FR.addGeoJSON(ferryRoutes);

m.setView(new L.LatLng(42.356514,-71.038542), 8).addLayer(mQ).addLayer(FR);