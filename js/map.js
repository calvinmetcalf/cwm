var L = this.L;
var m = new L.Map('map');
var geojson = new L.GeoJSON();

var mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy MapQuest',
mQ = new L.TileLayer(mapQuestURL, {attribution: attribution, subdomains: ['1','2','3','4']});
geojson.addGeoJSON(WaterTaxis);
m.setView(new L.LatLng(42.344335,-71.05442), 13).addLayer(mQ).addLayer(geojson);
