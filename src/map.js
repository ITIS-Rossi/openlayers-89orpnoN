// Funzione init caricata all'avvio ...

function init() {
  ol.proj.useGeographic()
  let map = new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()}), 
    ],
    view: new ol.View({
      center: [11.555649865625005,45.55247714363049],
      zoom: 19,
    }),
    target: 'map',
  });

let MarkerLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'marker.png'
    })
  })
});

console.log(MarkerLayer)
map.addLayer(MarkerLayer)
var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([2.2931, 48.8584])));
MarkerLayer.getSource().addFeature(marker)
}
init()