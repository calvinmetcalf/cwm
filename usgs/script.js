var m= L.map('map').setView([42.2, -71], 8);
new L.Hash(m);
var mapQuestAttr = 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; ';
var osmDataAttr = 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var mopt = {
    url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpeg',
    options: {attribution:mapQuestAttr + osmDataAttr, subdomains:'1234'}
  };
var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:osmDataAttr});
var mq=L.tileLayer(mopt.url,mopt.options);

mq.addTo(m);
var usgs = L.tileLayer.wms("http://raster.nationalmap.gov/ArcGIS/services/TNM_Large_Scale_Imagery_Overlay/MapServer/WMSServer",{layers: '0,1',
    format: 'image/png',
    transparent: true});
  var baseMaps = {
    "Map Quest": mq,
    "Open Street Map":osm,
  "usgs":usgs
};

var lc=L.control.layers(baseMaps);
lc.addTo(m);

