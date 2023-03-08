function main(){
// Define the coordinates for your markers
var marker1Coords = [51.5074, 0.1278]; // London, UK
var marker2Coords = [40.7128, -74.0060]; // New York City, USA

// Define the URLs for your custom marker images
var marker1ImageURL = 'https://yourwebsite.com/marker1.png';
var marker2ImageURL = 'https://yourwebsite.com/marker2.png';

// Create a new vector layer for your markers
var markerLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      // Create a new marker feature for the first marker
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(marker1Coords)),
        // Set the custom marker image for the first marker
        style: new ol.style.Style({
          image: new ol.style.Icon({
            src: marker1ImageURL,
            anchor: [0.5, 1],
            scale: 0.5
          })
        })
      }),
      // Create a new marker feature for the second marker
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(marker2Coords)),
        // Set the custom marker image for the second marker
        style: new ol.style.Style({
          image: new ol.style.Icon({
            src: marker2ImageURL,
            anchor: [0.5, 1],
            scale: 0.5
          })
        })
      })
    ]
  })
});

// Create a new OpenLayers map with your marker layer
var map = new ol.Map({
  target: 'map', // The ID of the HTML element where your map will be displayed
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM() // Add a base layer of OpenStreetMap tiles
    }),
    markerLayer // Add your custom marker layer to the map
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat(marker1Coords), // Center the map on the first marker
    zoom: 5 // Set an initial zoom level
  })
});


}
main()