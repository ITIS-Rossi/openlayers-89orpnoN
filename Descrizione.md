spero che si veda nella repository.

gli oggetti utilizzati sono i seguenti:

-Icon: serve a mettere un icona alle feature dei vettori
-style: contenitore per modificare "l'aspetto" delle feature dei vettori
-Vectorlayer: un tipo di layer che renderizza i dati in "modo" vettoriale
-VectorSource: fonte di feature per i Vectorlayer
-Feature: oggetto con dati vettoriali,esso ha una posizione e varie altre proprietà. usato per creare i marker.
-Overlay: un elemento da disegnare sempre davanti alla mappa.
-Tile: un tipo di layer utilizzato per disegnare sulla mappa alcune fonti di dati (tra cui L'OSM).
-View: un oggetto che regola la proiezione della mappa, attrevarso le sue proprietà la proiezione (zoom,center,rotation, ecc.)
-Map: il pezzo grosso. esso contiene tutte le informazioni necessarie per la renderizzazione della mappa intera, Come ad esempio la View o I layer e i loro sottocomponenti.