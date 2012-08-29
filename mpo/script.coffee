opt =
  tile:
    subdomains: ["otile1", "otile2", "otile3", "otile4"]
    attribution: "Tile Data from <a href='http://www.openstreetmap.org/' target='_blank'>OSM</a>, Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"

  map:
    center: [42.151187, -70.949707]
    zoom: 8

t = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpeg", opt.tile)
m = L.map("map", opt.map).addLayer(t)

mpo="http://services.massdot.state.ma.us/ArcGIS/rest/services/Boundaries/MPO/MapServer"
mpl= new L.TileLayer.ESRI mpo
m.addLayer mpl
