// Funzione init caricata all'avvio ...

function init() {
  ol.proj.useGeographic()
  markerLayer = new ol.layer.VectorLayer()
  let map = new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()}), 
      markerLayer
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
let markerstyle = ol.style.Style({image:ol.style.icon({src:"Media\Img\marker.png"}))
let marker = new ol.Feature({geometry: new ol.geom.point([2.2931, 48.8584]), name:"rossimarker", description:"boh rossimarker"})
marker.setStyle(markerstyle)
markerSource = markerLayer.getSource()
console.log(MarkerLayer)
map.addLayer(MarkerLayer)
MarkerLayer.getSource().addFeature(marker)
}
init()

//crea una nuova feature: new ol.feature() devi specificare geometry con funzione new ol.geom.point(posizione), nome e decrizione.
//crea un nuova style con new ol.style.Style() e crea una nuova icona con ol.style.icon()
//aggiungi lo style alla feature 
//aggiungi la feature a una vectorsource
//vectorsource si crea con new ol.vector.source