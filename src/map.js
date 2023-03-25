// Funzione init caricata all'avvio ...

function init() { //crea le variabili e la mappa
  ol.proj.useGeographic()


//questa parte crea lo style dei marker (in particolare l'icona)

  markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: "Media\\Img\\marker.png",
      anchor: [0.5,0.5],
      scale: 0.1
      })
    })

    markerLayer = new ol.layer.Vector({ //questa parte crea il layer dei marker con i marker dentro
      source: new ol.source.Vector({
      features:[
        new ol.Feature({
          geometry: new ol.geom.Point([11.555649865625005,45.55247714363049]),
          Nome: "Campo di prigionia ITIS A. Rossi"
          }),
        new ol.Feature({
          geometry: new ol.geom.Point([11.537309388338823,45.53916070075534]),
          Nome: "Chiesa Millenaria di San Giorgio"
        })
        ]
      })
    })
  markerLayer.setStyle(markerStyle) //aggiunge lo style al layer dei marker

  popup = document.getElementById('popup'); //ottiene gli elementi html del popup
  innerPopup = document.getElementById('popup-content');
  overlay = new ol.Overlay({ //crea il popup
    element: popup,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

  mappa = new ol.Map({ //crea la mappa con i due layer e l'overlay 
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()}), 
      markerLayer
    ],
    view: new ol.View({
      center: [11.555649865625005,45.55247714363049],
      zoom: 19
    }),
    target: 'map',
    overlays:[overlay]
  });
}
function handleClick(click){ //cosa deve fare quando un utente clicca sulla mappa
  Features = mappa.getFeaturesAtPixel(click.pixel)
  console.log("rilevato click")
  console.log(Features)
  if (Features.length >= 1){
    feature = Features[0]
    console.log("trovata feature")
    console.log(feature)
    coordFeature = feature.values_.geometry.flatCoordinates
    nome = feature.values_.Nome
    overlay.setPosition(coordFeature)
    innerPopup.innerHTML = nome + "<br>" + coordFeature 
  } else {
    overlay.setPosition(undefined)
  }
}
let mappa //variabili globali 
let popup
let innerPopup
let overlay
init() 
mappa.on("singleclick",handleClick) //evento che si trigghera a ogni click

