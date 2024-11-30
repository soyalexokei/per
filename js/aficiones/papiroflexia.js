//-- Variables.
var imagenesIDpapiroflexia =
[
  "https://i.postimg.cc/50ZcKRcH/1.jpg","",
  "https://i.postimg.cc/tg4Hs6tg/2.jpg",
  "https://i.postimg.cc/cJkGwJXB/3.jpg",
  "https://i.postimg.cc/ydJ4PzG4/4.jpg",
  "https://i.postimg.cc/KjL66DF0/5.jpg",
  "https://i.postimg.cc/WpkcqTr0/6.jpg",
  "https://i.postimg.cc/BQf9xkck/7.jpg",
  "https://i.postimg.cc/c47qThFH/8.jpg",
];
var videosIDpapiroflexia =
[
  "","https://www.youtube.com/embed/iXNUQjZkuQs?autoplay=1&loop=1&playlist=iXNUQjZkuQs&controls=0&rel=0",
  "","","","","","",""
];
  var primerapapiroflexia = 1;
  var pantallapapiroflexia = document.getElementById("ver-papiroflexia");
  var imgpapiroflexia = document.createElement("img");
  var iframepapiroflexia = document.createElement("iframe");
  
  //-- Ctes.
  const totalpapiroflexia = 9;
  
  function mostrarpapiroflexia(auxpapiroflexia) {
    
    //-- Limpiar la pantalla.
    pantallapapiroflexia.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDpapiroflexia[auxpapiroflexia-1]) {
      imgpapiroflexia.src = imagenesIDpapiroflexia[auxpapiroflexia-1];
      pantallapapiroflexia.appendChild(imgpapiroflexia);
    }else {
      iframepapiroflexia.src = videosIDpapiroflexia[auxpapiroflexia-1];
      iframepapiroflexia.width = "400";
      iframepapiroflexia.height = "533";
      iframepapiroflexia.setAttribute("allow", "autoplay");
      iframepapiroflexia.setAttribute("allowFullscreen", "false");
      pantallapapiroflexia.appendChild(iframepapiroflexia);
    }
  }
  
  function imgAnteriorpapiroflexia() {
    if(primerapapiroflexia > 1) {
      primerapapiroflexia--;
    }else {
      primerapapiroflexia = totalpapiroflexia;
    }
    mostrarpapiroflexia(primerapapiroflexia);
  }
  
  function imgSiguientepapiroflexia() {
    if(primerapapiroflexia < totalpapiroflexia) {
      primerapapiroflexia++;
    }else {
      primerapapiroflexia = 1;
    }
    mostrarpapiroflexia(primerapapiroflexia);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-papiroflexia").addEventListener("click", imgAnteriorpapiroflexia);
  //-- Pulsar flecha derecha.
  document.getElementById("der-papiroflexia").addEventListener("click", imgSiguientepapiroflexia);
  
  //-- Punto de inicio del programa.
  mostrarpapiroflexia(primerapapiroflexia);