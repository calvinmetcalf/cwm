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

digital = new L.MarkerClusterGroup()
td = new L.MarkerClusterGroup()
sf = new L.MarkerClusterGroup()

m.addLayer digital
m.addLayer td
m.addLayer sf

overlays =
    "Digital": digital
    "Traditional Display":td
    "Street Furniture":sf

m.addControl L.control.layers(baseLayers, overlays)



cb=(d)->
        $.each d.features, (i,v)->
            marker =new L.Marker [v.geometry.coordinates[1],v.geometry.coordinates[0]],{title:v.properties.Name}
            marker.bindPopup "Permit Number: "+v.properties.permit+"<br/>Permit Holder: "+v.properties.holder+"<br/>Permit Type: "+v.properties.type+"<br/>Road Intended to Face: "+v.properties.facing+"<br/>City/Town: "+v.properties.muni
            if v.properties.type == "Traditional Display"
                td.addLayer marker
            else if v.properties.type == "Street Furniture"
                sf.addLayer marker
            else
                digital.addLayer marker

$.get("oa.json",cb)
