var center = new L.LatLng(42.3584308,-71.0597732);
var zoom = 8;
L.FuncLayer = L.TileLayer.extend({getTileUrl: function (tilePoint) {
        this._adjustTilePoint(tilePoint);

		return this._url(L.Util.extend({
			s: this._getSubdomain(tilePoint),
			z: this._getZoomForUrl(),
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	}});

//create the tiles    
var tiles =  new L.FuncLayer(gtu,{minZoom:4,maxZoom:14});
//create the map
var m = new L.Map('map',{
    center:center,
    zoom:zoom,
    layers:[tiles]
    });

function quad(z,x,y){
var bx = x.toString(2);
var by = y.toString(2);
while(bx.length<z){
bx = '0'+bx;
}
while(by.length<z){
by = '0'+by;
}
var i = 0;
var tab={"0":{"0":"a","1":"b"},"1":{"0":"c","1":"d"}};
var r =[];

while(i<z){
r.push(tab[bx[i]][by[i]]);
i++;
}
return r.join('');
}
function gtu(params){
 var url = "http://calvin.cloudant.com/pop/_design/genghis/_show/tiles/"
 return url+quad(params.z,params.x,params.y)
}