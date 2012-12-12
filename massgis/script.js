var center = new L.LatLng(42.3584308,-71.0597732);
var zoom = 8;
  

    var o ={
        format: 'image/png',
    transparent: true
        };
       
var wms8 =L.tileLayer.wms("http://giswebservices.massgis.state.ma.us/geoserver/wms",$.extend({layers:"massgis:GISDATA.IMG_COQ2008_30CM"},o));
var wms9 =L.tileLayer.wms("http://giswebservices.massgis.state.ma.us/geoserver/wms",$.extend({layers:"massgis:GISDATA.IMG_COQ2009_30CM"},o));
var el=L.tileLayer.wms("http://giswebservices.massgis.state.ma.us/geoserver/wms",$.extend({layers:"massgis:GISDATA.IMG_ELEV5K_I"},o));
var sr=L.tileLayer.wms("http://giswebservices.massgis.state.ma.us/geoserver/wms",$.extend({layers:"massgis:GISDATA.IMG_SHADEDRELIEF2005",opacity:0.9},o));
var m = new L.Map('map',{
    center:center,
    zoom:zoom
  
    });
    var tiles = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",{
        subdomains:["otile1","otile2",/*"otile3",*/"otile4"],//we'd usually use all 4 but something is up with #3 at the moment
        attribution:"Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"
    }).addTo(m);
L.control.layers({"mapquest":tiles,"2009 orthos":wms9,"2008 orthos":wms8},{"Elevation":el,"Shaded Relief":sr}).addTo(m);