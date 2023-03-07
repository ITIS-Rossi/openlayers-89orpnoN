// Funzione init caricata all'avvio ...

function init() {
  ol.proj.useGeographic()

  markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: "Media\\Img\\marker.png",
      anchor: [0.5,1],
      scale: 0.5
      })
    })

  markerLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
    features:[
      new ol.Feature({
        geometry: new ol.geom.Point([11.555649865625005,45.55247714363049]),
	style: markerStyle 
        })
      ]
    })
  })

  let map = new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()}), 
      markerLayer
    ],
    view: new ol.View({
      center: [11.555649865625005,45.55247714363049],
      zoom: 19
    }),
    target: 'map',
  });





}
init()

//crea una nuova feature: new ol.feature() devi specificare geometry con funzione new ol.geom.point(posizione), nome e decrizione.
//crea un nuova style con new ol.style.Style() e crea una nuova icona con ol.style.icon()
//aggiungi lo style alla feature 
//aggiungi la feature a una vectorsource
//vectorsource si crea con new ol.vector.source