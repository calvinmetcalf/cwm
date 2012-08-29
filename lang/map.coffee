$ ->
  g = google.maps
  tid = "1s2tfQ20l2IwXA2MBaCc6eT7xUpAcEI8JE-NwWBw"
  m = new g.Map(document.getElementById("map"),
    center: new g.LatLng(42.39405101407922, -71.21063209765622)
    zoom: 8
    mapTypeId: "roadmap"
  )
  mainLayer = new g.FusionTablesLayer(
    map: m
    query:
      select: "poly"
      from: tid,
      where:'five = 1'
  )