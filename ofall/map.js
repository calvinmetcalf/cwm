var m;
var tid = 3485188;
var zoom = 8;
var center = new google.maps.LatLng(42.04113400940814,-71.795654296875);
var mainLayer;

$(function() {
    fusion();
});

function fusion() {
    
    m = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: zoom,
        mapTypeId: 'roadmap'
    });
    
    mainLayer = new google.maps.FusionTablesLayer(tid);
    mainLayer.setQuery("SELECT 'geometry' FROM " + tid);
    mainLayer.setMap(m);
}