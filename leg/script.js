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
var house = L.geoJson('',{onEachFeature:hpopUp, style: hstyle});
var senate = L.geoJson('',{onEachFeature:spopUp, style: sstyle});
mq.addTo(m);

  var baseMaps = {
    "Map Quest": mq,
    "Open Street Map":osm
  
};

var overlayMaps = {
"State House":house,
"State Senate":senate
};
var lc=L.control.layers(baseMaps, overlayMaps);
lc.addTo(m);

$.get("house.json",function(d){house.addData(d);},"JSON");
$.get("senate.json",function(d){senate.addData(d);},"JSON");
function hpopUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            if(key !== "Shape_Area" && key !== "ORIG_FID"){
                out.push(key+": "+f.properties[key]);
            }
        }
        l.bindPopup(out.join("<br />"));
    }
}
function spopUp(f,l){
    var out = [];
    if (f.properties){
        for(var key in f.properties){
            if(key !== "Shape_Area" && key !== "Shape_Length" && key !== "OBJECTID"){
                out.push(key+": "+f.properties[key]);
            }
        }
        l.bindPopup(out.join("<br />"));
    }
}
function sstyle(feature) {
    var opt={weight:1,color:"#000000"}
        switch (feature.properties.Party) {
            case 'R':  opt.fillColor = "#ff0000";return opt;
            case 'D':    opt.fillColor = "#0000ff";return opt;
        }
    }
function hstyle(feature) {
    var opt={weight:1,color:"#000000"}
        switch (feature.properties.Party) {
            case 'REPUBLICAN':  opt.fillColor = "#ff0000";return opt;
            case 'DEMOCRATIC':    opt.fillColor = "#0000ff";return opt;
        }
    }