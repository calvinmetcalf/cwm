/* Author:
Calvin Metcalf
*/
$(function() {
    var g =google.maps;
    var center = new g.LatLng(41.914541,-71.592407);
    var zoom = 8;
    var m = new g.Map(document.getElementById('map'), {
        center: center,
        zoom: zoom,
        mapTypeId: 'roadmap',
        styles:[
  {
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
]
    });
});