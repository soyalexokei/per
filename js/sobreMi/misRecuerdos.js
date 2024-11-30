//-- Variables.
var imagenesIDrecuerdos =
[
  "https://i.postimg.cc/8kxDZwLQ/1.jpg",
  "https://i.postimg.cc/4xgGgd8W/2.jpg",
  "https://i.postimg.cc/nVXpKNjG/3.jpg",
  "https://i.postimg.cc/rFWT3W9d/4.jpg",
  "https://i.postimg.cc/2S7D8DMr/5.jpg",
  "https://i.postimg.cc/ZqfzpLJQ/6.jpg",
  "https://i.postimg.cc/tTYQ5VT4/7.jpg",
  "https://i.postimg.cc/tTw0mCZt/8.jpg",
  "https://i.postimg.cc/zvhmmZTm/9.jpg",
  "https://i.postimg.cc/Y2LBLgZX/10.jpg",
  "https://i.postimg.cc/fT4ncyhM/11.jpg",
  "https://i.postimg.cc/BQxWM3qH/12.png",
  "https://i.postimg.cc/QCSNfYWZ/13.png",
  "https://i.postimg.cc/yx7YXCxT/14.png",
  "https://i.postimg.cc/QtQdTd8t/15.png","",
  "https://i.postimg.cc/tgVT9z8F/16.png"
];
var videosIDrecuerdos =
[
  "","","","","","","","","","","","","","","",
  "https://www.youtube.com/embed/jIHHz4n3J7U?autoplay=1&loop=1&playlist=jIHHz4n3J7U&controls=0&rel=0",""
];
  var primerarecuerdos = 1;
  var pantallarecuerdos = document.getElementById("ver-mis-recuerdos");
  var imgrecuerdos = document.createElement("img");
  var iframerecuerdos = document.createElement("iframe");
  
  //-- Ctes.
  const totalrecuerdos = 17;
  
  function mostrarrecuerdos(auxrecuerdos) {
    
    //-- Limpiar la pantalla.
    pantallarecuerdos.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDrecuerdos[auxrecuerdos-1]) {
      imgrecuerdos.src = imagenesIDrecuerdos[auxrecuerdos-1];
      pantallarecuerdos.appendChild(imgrecuerdos);
    }else {
      iframerecuerdos.src = videosIDrecuerdos[auxrecuerdos-1];
      iframerecuerdos.width = "400";
      iframerecuerdos.height = "533";
      iframerecuerdos.setAttribute("allow", "autoplay");
      iframerecuerdos.setAttribute("allowFullscreen", "false");
      pantallarecuerdos.appendChild(iframerecuerdos);
    }
  }
  
  function imgAnteriorrecuerdos() {
    if(primerarecuerdos > 1) {
      primerarecuerdos--;
    }else {
      primerarecuerdos = totalrecuerdos;
    }
    mostrarrecuerdos(primerarecuerdos);
  }
  
  function imgSiguienterecuerdos() {
    if(primerarecuerdos < totalrecuerdos) {
      primerarecuerdos++;
    }else {
      primerarecuerdos = 1;
    }
    mostrarrecuerdos(primerarecuerdos);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-mis-recuerdos").addEventListener("click", imgAnteriorrecuerdos);
  //-- Pulsar flecha derecha.
  document.getElementById("der-mis-recuerdos").addEventListener("click", imgSiguienterecuerdos);
  
  //-- Punto de inicio del programa.
  mostrarrecuerdos(primerarecuerdos);