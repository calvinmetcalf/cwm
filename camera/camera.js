var d= new L.LayerGroup();
var center = new L.LatLng(42.3584308,-71.0597732);
var zoom = 14;
var t={
    url: "http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",
    options:{
        attribution:"Tiles from Mapquest",
        subdomains:["otile1","otile2","otile3","otile4"],
        attribution:"Tiles from Mapquest, Tile data from Open Street Map"
    },
};

t.o = new L.TileLayer(t.url,t.options);


var m = new L.Map('map',{
    center:center,
    zoom:zoom,
    layers:[t.o]
    });
var gj =  new L.GeoJSON();
var d;
m.addLayer(gj);
gj.on("featureparse", function (e) {
    if (e.properties){
        e.layer.bindPopup(makePop(e.properties));
    }
});
var bbox=m.getBounds().toBBoxString();
  $.get("http://services.massdot.state.ma.us/ArcGIS/rest/services/Assets/SmartCameras/MapServer/0/query?outFields=*&f=json&outSR=4326&inSR=4326&geometryType=esriGeometryEnvelope&geometry="+bbox,parseJSONP,"JSONP");
function parseJSONP(data){
d=toJSON(data);
gj.addGeoJSON(d);
};
function reparseJSONP(data){
gj.clearLayers()
d=toJSON(data);
gj.addGeoJSON(d);
};
m.on("dragend",redo)
m.on("zoomend",redo)
function redo(){
bbox=m.getBounds().toBBoxString();
gj.clearLayers()
$.get("http://services.massdot.state.ma.us/ArcGIS/rest/services/Assets/SmartCameras/MapServer/0/query?outFields=*&f=json&outSR=4326&inSR=4326&geometryType=esriGeometryEnvelope&geometry="+bbox,reparseJSONP,"JSONP");
}
function makePop(p){
var a = [];
 for(var key in p){
     a.push(key+": "+p[key]);
 }
 return a.join("<br/>");
}
function toJSON(esri){
    var geo = {"type": "FeatureCollection", "features":[]};
    $.each(esri.features,function(i,v){
        var ft = {"type": "Feature", "id":i}
        ft.geometry={"type":"Point","coordinates":[v.geometry.x,v.geometry.y]}
        ft.properties=v.attributes;
        geo.features.push(ft)
    });
    return geo;
    
}