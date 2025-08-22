//-- Variables.
var imagenesIDreliquias =
[
    "https://i.postimg.cc/CMshcF68/1.png",
    "https://i.postimg.cc/SRdmRrzd/2.png",
    "https://i.postimg.cc/RFrSDqB7/3.png",
    "https://i.postimg.cc/6qt9BSTT/4.png","",
    "https://i.postimg.cc/RVCM8jjD/6.png",
    "https://i.postimg.cc/fTHwh8sT/7.png",
    "https://i.postimg.cc/Nj5QGRG8/8.png",
    "https://i.postimg.cc/N0VdcZyW/IMG-20250822-182108.png",
    "https://i.postimg.cc/XvXstnvf/IMG-20250822-182340.png"
];
var videosIDreliquias =
[
    "","","","",
    "https://www.youtube.com/embed/sP5qhKYlQ8I?autoplay=1&loop=1&playlist=sP5qhKYlQ8I&controls=0&rel=0",
    "","",""
];
  var primeraReliquias = 1;
  var pantallaReliquias = document.getElementById("ver-reliquias");
  var imgReliquias = document.createElement("img");
  var iframeReliquias = document.createElement("iframe");
  
  //-- Ctes.
  const totalReliquias = 10;
  
  function mostrarReliquias(auxReliquias) {
    
    //-- Limpiar la pantalla.
    pantallaReliquias.innerHTML = "";
  
    if(imagenesIDreliquias[auxReliquias-1]) {
        imgReliquias.src = imagenesIDreliquias[auxReliquias-1];
        pantallaReliquias.appendChild(imgReliquias);
    }else {
        iframeReliquias.src = videosIDreliquias[auxReliquias-1];
        iframeReliquias.width = "400";
        iframeReliquias.height = "533";
        iframeReliquias.setAttribute("allow", "autoplay");
        iframeReliquias.setAttribute("allowFullscreen", "false");
        pantallaReliquias.appendChild(iframeReliquias);
    }
  }
  
  function imgAnteriorReliquias() {
    if(primeraReliquias > 1) {
        primeraReliquias--;
    }else {
        primeraReliquias = totalReliquias;
    }
    mostrarReliquias(primeraReliquias);
  }
  
  function imgSiguienteReliquias() {
    if(primeraReliquias < totalReliquias) {
        primeraReliquias++;
    }else {
        primeraReliquias = 1;
    }
    mostrarReliquias(primeraReliquias);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-reliquias").addEventListener("click", imgAnteriorReliquias);
  //-- Pulsar flecha derecha.
  document.getElementById("der-reliquias").addEventListener("click", imgSiguienteReliquias);
  
  //-- Punto de inicio del programa.
  mostrarReliquias(primeraReliquias);