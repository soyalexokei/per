//-- Variables.
var imagenesIDseriesTV =
[
  "https://i.postimg.cc/DwpRrfnS/1.png","https://i.postimg.cc/1XKjfsv5/2.png",
  "https://i.postimg.cc/2yYtkVFK/3.png","https://i.postimg.cc/bJkMfQbn/4.png",
  "https://i.postimg.cc/DztDNCWF/5.png","https://i.postimg.cc/hGJ6pFtp/6.png",
  "https://i.postimg.cc/T33Z55M8/7.png","","https://i.postimg.cc/YqZNw6TJ/8.jpg"
];
var videosIDseriesTV =
[
    "","","","","","","",
    "https://www.youtube.com/embed/mT_h_ULDo3g?autoplay=1&loop=1&playlist=mT_h_ULDo3g&controls=0&rel=0",""
];
  var primeraseriesTV = 1;
  var pantallaseriesTV = document.getElementById("ver-seriesTV");
  var imgseriesTV = document.createElement("img");
  var iframeseriesTV = document.createElement("iframe");
  
  //-- Ctes.
  const totalseriesTV = 9;
  
  function mostrarseriesTV(auxseriesTV) {
    
    //-- Limpiar la pantalla.
    pantallaseriesTV.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDseriesTV[auxseriesTV-1]) {
        imgseriesTV.src = imagenesIDseriesTV[auxseriesTV-1];
        pantallaseriesTV.appendChild(imgseriesTV);
    }else {
        iframeseriesTV.src = videosIDseriesTV[auxseriesTV-1];
        iframeseriesTV.width = "400";
        iframeseriesTV.height = "533";
        iframeseriesTV.setAttribute("allow", "autoplay");
        iframeseriesTV.setAttribute("allowFullscreen", "false");
        pantallaseriesTV.appendChild(iframeseriesTV);
    }
  }
  
  function imgAnteriorseriesTV() {
    if(primeraseriesTV > 1) {
        primeraseriesTV--;
    }else {
        primeraseriesTV = totalseriesTV;
    }
    mostrarseriesTV(primeraseriesTV);
  }
  
  function imgSiguienteseriesTV() {
    if(primeraseriesTV < totalseriesTV) {
        primeraseriesTV++;
    }else {
        primeraseriesTV = 1;
    }
    mostrarseriesTV(primeraseriesTV);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-seriesTV").addEventListener("click", imgAnteriorseriesTV);
  //-- Pulsar flecha derecha.
  document.getElementById("der-seriesTV").addEventListener("click", imgSiguienteseriesTV);
  
  //-- Punto de inicio del programa.
  mostrarseriesTV(primeraseriesTV);