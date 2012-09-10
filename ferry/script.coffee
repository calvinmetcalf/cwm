m = new L.Map("map",
    center: new L.LatLng(42.2, -71)
    zoom: 8
    attributionControl: true
)
h=new L.Hash(m)
defaultLayer = new L.TileLayer.MapQuestOpen.OSM
m.addLayer defaultLayer
bbox="-77.1734619140625,39.842286020743394,-66.9671630859375,44.213709909702054"
url = "http://services.massdot.state.ma.us/ArcGIS/rest/services/Transit/FerryRoutes/MapServer/0/query?outFields=*&f=json&outSR=4326&inSR=4326&geometryType=esriGeometryEnvelope&geometry="

makePop = (p) ->
    a = []
    for key of p
        a.push key + ": " + p[key]
    a.join "<br/>"
  
fp = (e,l) ->
    l.bindPopup makePop(e.properties)  if e.properties


ferry = L.geoJson('',{onEachFeature:fp}).addTo(m);
baseLayers =
    "OpenStreetMap Default": new L.TileLayer.OpenStreetMap.Mapnik
    "OpenStreetMap German Style": new L.TileLayer.OpenStreetMap.DE
    "MapQuest OSM": defaultLayer
  
overLays=
    "Ferry Routes": ferry

m.addControl(L.control.layers(baseLayers,overLays,{collapsed: false}));

cb=(d)->
        ferry.addData(d)

parseJSONP=(data)->
    toGeoJSON(data,cb)
    
$.get(url+bbox,parseJSONP,"JSONP")
