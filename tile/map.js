var m = new L.Map('map'),
mapQuestURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
attribution = 'Tiles courtesy MapQuest',
mQ = new L.TileLayer(mapQuestURL, {attribution: attribution, subdomains: ['1','2','3','4']}),marker;
var marker = new L.Marker()
m.setView(new L.LatLng(41.914541,-71.592407), 8).addLayer(mQ)
//http://open.mapquestapi.com/nominatim/v1/search?countrycodes=us&format=json&json_callback=searchResults&q=

$(function() {
        $( "#tabs" ).tabs({
        collapsible: true,
            selected: -1
        });
       $( "input:submit,input:reset" ).button();
        $('input, textarea').placeholder();
});
function geocode(){
 var address = document.getElementById("address").value.replace("'", "\\'");
 var gURL = 'http://open.mapquestapi.com/nominatim/v1/search?countrycodes=us&format=json&q='
  $.ajax({
       type: "GET",
       url: gURL + address,
       dataType: 'jsonp',
       jsonp: 'json_callback',
       success: function (data, textStatus) {
           if(textStatus=="success"){
          var latlng = new L.LatLng(data[0].lat, data[0].lon);
         marker.setLatLng(latlng);
        // var southWest,northEast,bounds;
         m.addLayer(marker);
         m.setView(latlng,17);
       /*  southWest = new L.LatLng(data[0].boundingbox[0],data[0].boundingbox[2]),
        northEast = new L.LatLng(data[0].boundingbox[1],data[0].boundingbox[3]),
  bounds = new L.LatLngBounds(southWest, northEast);
         m.fitBounds(bounds);*/
           }
       }
  });
}

function resetgeo(){
    m.removeLayer(marker);
    m.setView(new L.LatLng(41.914541,-71.592407), 8);
}