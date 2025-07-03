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
  "https://i.postimg.cc/tgVT9z8F/16.png","https://i.postimg.cc/k4mb5qfB/IMG20250331210553.png",
  "https://i.postimg.cc/4y64vHHB/17.png", "https://i.postimg.cc/MH2KjmHn/18.png", "https://i.postimg.cc/26BS6Kkp/19.png",
  "https://i.postimg.cc/fbPbMNhj/20.png", "https://i.postimg.cc/Cxm168P2/21.png", "https://i.postimg.cc/CxF5N7ND/22.png",
  "https://i.postimg.cc/L6khLwz2/23.png", "https://i.postimg.cc/BQfX84Pm/24.png", "https://i.postimg.cc/pVFmXpr9/25.png",
  "https://i.postimg.cc/GtGtMSVP/26.png", "https://i.postimg.cc/CKxZF7nY/27.png", "https://i.postimg.cc/HLvrjMbM/28.png",
  "https://i.postimg.cc/76CfzLNW/29.png", "https://i.postimg.cc/RFjqLzsV/30.png", "",
  "https://i.postimg.cc/2S4k32kf/Orange.png","https://i.postimg.cc/CKSF8k5n/Movistar.png","https://i.postimg.cc/VNgzWv0G/Vodafone.png",
  "https://i.postimg.cc/HkGWpfC2/MTS.png",
];
var videosIDrecuerdos =
[
  "","","","","","","","","","","","","","","",
  "https://www.youtube.com/embed/jIHHz4n3J7U?autoplay=1&loop=1&playlist=jIHHz4n3J7U&controls=0&rel=0",
  "","","","","","","","","","","","","","","","",
  "https://www.youtube.com/embed/xt2H7tSxnR8?autoplay=1&loop=1&playlist=xt2H7tSxnR8&controls=0&rel=0",
  "","","","",
];
  var primerarecuerdos = 1;
  var pantallarecuerdos = document.getElementById("ver-mis-recuerdos");
  var imgrecuerdos = document.createElement("img");
  var iframerecuerdos = document.createElement("iframe");
  
  //-- Ctes.
  const totalrecuerdos = 37;
  
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