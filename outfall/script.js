//set the options
var center = new L.LatLng(42.3584308,-71.0597732);
var zoom = 8;
var url= "http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png";

var options={
        subdomains:["otile1","otile2",/*"otile3",*/"otile4"],//we'd usually use all 4 but something is up with #3 at the moment
        attribution:"Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"
    };
//create the tiles    
var tiles = new L.TileLayer(url,options);
//create the map
var m = new L.Map('map',{
    center:center,
    zoom:zoom,
    layers:[tiles]
    });

var url="http://services.massdot.state.ma.us/ArcGIS/rest/services/Assets/Outfalls/MapServer/0/query?outFields=*&f=json&outSR=4326&inSR=4326&geometryType=esriGeometryEnvelope&geometry=";
var bbox=m.getBounds().toBBoxString();

cwm=L.TileLayer.extend(    {getTileUrl: function (tilePoint) {
this._adjustTilePoint(tilePoint);
return this._url(this._getSubdomain(tilePoint),this._getZoomForUrl(),tilePoint.x,tilePoint.y);
}});
$.get(url+bbox,function(data){
    var c = new L.MarkerClusterGroup();
   var len = data.features.length;
   var i = 0;
   while(i<len){
       var a=data.features[i]
       var title = []
       for(var k in a.attributes){
           if(a.attributes[k]&&a.attributes[k]!==" "){
            title.push(k+": "+a.attributes[k]);
           }
       };
       var t= "div"+title.join("<br/>")+"</div"
       var marker = new L.Marker(new L.LatLng(a.geometry.y,a.geometry.x), { title: a.attributes.PlanName});
       marker.bindPopup(t);
       c.addLayer(marker);
   }
   m.addLayer(c);
    },"JSONP");