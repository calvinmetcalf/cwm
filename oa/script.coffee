m = new L.Map("map",
    center: new L.LatLng(42.2, -71)
    zoom: 8
    attributionControl: true
)
h=new L.Hash(m)
defaultLayer = new L.TileLayer.MapQuestOpen.OSM
m.addLayer defaultLayer

baseLayers =
    "OpenStreetMap Default": new L.TileLayer.OpenStreetMap.Mapnik
    "OpenStreetMap German Style": new L.TileLayer.OpenStreetMap.DE
    "MapQuest OSM": defaultLayer


m.addControl L.control.layers(baseLayers)

markers = new L.MarkerClusterGroup()

cb=(d)->
        $.each d.features, (i,v)->
            marker =new L.Marker [v.geometry.coordinates[1],v.geometry.coordinates[0]],{title:v.properties.Name}
            marker.bindPopup v.properties.Description
            markers.addLayer marker
        m.addLayer markers 
    
    
    
$.get("oa.json",cb)
