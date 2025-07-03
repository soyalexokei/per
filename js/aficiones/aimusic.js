//-- Variables.
var videosIDaimusic =
[
    "https://www.youtube.com/embed/8X7JNaKj4Gk?autoplay=0&loop=1&playlist=8X7JNaKj4Gk&controls=0&rel=0",
    "https://www.youtube.com/embed/WL9rZr_iqcU?autoplay=0&loop=1&playlist=WL9rZr_iqcU&controls=0&rel=0",
    "https://www.youtube.com/embed/HN6CdXciI_8?autoplay=0&loop=1&playlist=HN6CdXciI_8&controls=0&rel=0",
    "https://www.youtube.com/embed/cAbLfUpnI5U?autoplay=0&loop=1&playlist=cAbLfUpnI5U&controls=0&rel=0",
    "https://www.youtube.com/embed/_N7QaKqi1a0?autoplay=0&loop=1&playlist=_N7QaKqi1a0&controls=0&rel=0",
    "https://www.youtube.com/embed/Rou9l8VA2F4?autoplay=0&loop=1&playlist=Rou9l8VA2F4&controls=0&rel=0",
    "https://www.youtube.com/embed/_FSB4nzU23M?autoplay=0&loop=1&playlist=_FSB4nzU23M&controls=0&rel=0",
    "https://www.youtube.com/embed/K6DOmuJkXuk?autoplay=0&loop=1&playlist=K6DOmuJkXuk&controls=0&rel=0",
];
  var primeraaimusic = 1;
  var pantallaaimusic = document.getElementById("ver-aimusic");
  var iframeaimusic = document.createElement("iframe");
  
  //-- Ctes.
  const totalaimusic = 8;
  
  function mostraraimusic(auxaimusic) {
    
    //-- Limpiar la pantalla.
    pantallaaimusic.innerHTML = "";
    iframeaimusic.src = videosIDaimusic[auxaimusic-1];
    iframeaimusic.width = "400";
    iframeaimusic.height = "533";
    iframeaimusic.setAttribute("allowFullscreen", "false");
    pantallaaimusic.appendChild(iframeaimusic);
  }
  
  function imgAnterioraimusic() {
    if(primeraaimusic > 1) {
        primeraaimusic--;
    }else {
        primeraaimusic = totalaimusic;
    }
    mostraraimusic(primeraaimusic);
  }
  
  function imgSiguienteaimusic() {
    if(primeraaimusic < totalaimusic) {
        primeraaimusic++;
    }else {
        primeraaimusic = 1;
    }
    mostraraimusic(primeraaimusic);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-aimusic").addEventListener("click", imgAnterioraimusic);
  //-- Pulsar flecha derecha.
  document.getElementById("der-aimusic").addEventListener("click", imgSiguienteaimusic);
  
  //-- Punto de inicio del programa.
  mostraraimusic(primeraaimusic);