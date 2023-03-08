// Funzione init caricata all'avvio ...

function init() {
  ol.proj.useGeographic()


  markerImage = document.createElement("img")
  markerImage.src = "Media\\Img\\marker.png"
  markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: "Media\\Img\\marker.png",
      anchor: [0.5,0.5],
      scale: 0.1
      })
    })

  markerLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
    features:[
      new ol.Feature({
        geometry: new ol.geom.Point([11.555649865625005,45.55247714363049])
        }),
      new ol.Feature({
        geometry: new ol.geom.Point([11.537309388338823,45.53916070075534])
      })
      ]
    })
  })
  markerLayer.setStyle(markerStyle)

  mappa = new ol.Map({
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

  popup = document.getElementById('popup');
  innerPopup = document.getElementById('popup-content');
  overlay = new ol.Overlay({
    element: popup,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });
}
function handleClick(click){
  Features = mappa.getFeaturesAtPixel(click.pixel)
  if (Features.lenght >= 1){
    overlay.setPosition(click.pixel)
  }
}
let mappa
let popup
let innerPopup
let overlay
init()
mappa.on("singleclick",handleClick)


//crea una nuova feature: new ol.feature() devi specificare geometry con funzione new ol.geom.point(posizione), nome e decrizione.
//crea un nuova style con new ol.style.Style() e crea una nuova icona con ol.style.icon()
//aggiungi lo style alla feature 
//aggiungi la feature a una vectorsource
//vectorsource si crea con new ol.vector.source