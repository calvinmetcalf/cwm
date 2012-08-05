var center = new L.LatLng(42.3584308,-71.0597732);
var zoom = 8;


//create the tiles    
var tiles = new L.TileLayer("http://calvin.cloudant.com/block/_design/genghis/_show/tiles/%2F{z}%2F{x}%2F{y}");
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