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
    innerPopup.innerHTML = nome + "<br>" + coordFeature + "<br><button onclick=deleteMarker(feature)>Elimina</button>"
  } else {
    overlay.setPosition(undefined)
  }
}

function deleteMarker(feature){
  console.log("funzione deletemarker partita")
  source = mappa.getAllLayers()[1].getSource()
  source.removeFeature(feature) //mi scuso per queste atrocità, sono molto stanco
}


function Cerca(options = "q=", format="json") {
  query = document.getElementById("searchField").value
  console.log(document.getElementById("searchField"))
  let posto
  fetch("https://nominatim.openstreetmap.org/search?" + options + query + "&format=" + format)
  .then((value) => value.json().then((dati) => Refine(dati[0]))) //lamda dentro una lambda, questo codice migliora sempre di più a ogni funzione che faccio
  console.log(posto)
}
function Refine(dati){
  nome = dati.display_name
  coord = [dati.lon,dati.lat]
  placeMarker([nome,coord])
}

function placeMarker(place){
  console.log(mappa.getAllLayers()[1].getSource())
  mappa.getAllLayers()[1].getSource().addFeature(new ol.Feature({geometry: new ol.geom.Point(place[1]), Nome:place[0]})) //mi scuso per queste atrocità, sono molto stanco
}

function Zoom(adjuster){
  mappa.getView().adjustZoom(adjuster)
}

function Center(adjuster){
  mappa.getView().adjustCenter(adjuster)
}

let mappa //variabili globali 
let popup
let innerPopup
let overlay
init() 
mappa.on("singleclick",handleClick) //evento che si trigghera a ogni click

