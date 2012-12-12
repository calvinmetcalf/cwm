map = new L.Map("map",
  center: new L.LatLng(42.151187, -70.949707)
  zoom: 8
  attributionControl: true
)
h=new L.Hash(map)
defaultLayer = new L.TileLayer.Stamen.Watercolor
map.addLayer defaultLayer
baseLayers =
  "OpenStreetMap Default": new L.TileLayer.OpenStreetMap.Mapnik
  "OpenStreetMap German Style": new L.TileLayer.OpenStreetMap.DE
  "OpenStreetMap Black and White": new L.TileLayer.OpenStreetMap.BlackAndWhite
  "Thunderforest OpenCycleMap": new L.TileLayer.Thunderforest.OpenCycleMap
  "Thunderforest Transport": new L.TileLayer.Thunderforest.Transport
  "Thunderforest Landscape": new L.TileLayer.Thunderforest.Landscape
  "MapQuest OSM": new L.TileLayer.MapQuestOpen.OSM
  "MapQuest Aerial": new L.TileLayer.MapQuestOpen.Aerial
  "MapBox Simple": new L.TileLayer.MapBox.Simple
  "MapBox Streets": new L.TileLayer.MapBox.Streets
  "MapBox Light": new L.TileLayer.MapBox.Light
  "MapBox Lacquer": new L.TileLayer.MapBox.Lacquer
  "MapBox Warden": new L.TileLayer.MapBox.Warden
  "Stamen Toner": new L.TileLayer.Stamen.Toner
  "Stamen Toner Lines": new L.TileLayer.Stamen.TonerLines
  "Stamen Toner Labels ": new L.TileLayer.Stamen.TonerLabels
  "Stamen Terrain": new L.TileLayer.Stamen.Terrain
  "Stamen Watercolor": defaultLayer
  "Esri WorldStreetMap": new L.TileLayer.Esri.WorldStreetMap
  "Esri DeLorme": new L.TileLayer.Esri.DeLorme
  "Esri WorldTopoMap": new L.TileLayer.Esri.WorldTopoMap
  "Esri WorldImagery": new L.TileLayer.Esri.WorldImagery
  "Esri OceanBasemap": new L.TileLayer.Esri.OceanBasemap
  "Esri NatGeoWorldMap": new L.TileLayer.Esri.NatGeoWorldMap

map.addControl new L.Control.Layers(baseLayers, "")