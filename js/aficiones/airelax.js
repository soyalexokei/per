//-- Variables.
var videosIDairelax =
[
    "https://www.youtube.com/embed/fJ3UXAGpwy0?autoplay=0&loop=1&playlist=fJ3UXAGpwy0&controls=0&rel=0",
];
  var primeraairelax = 1;
  var pantallaairelax = document.getElementById("ver-airelax");
  var iframeairelax = document.createElement("iframe");
  
  //-- Ctes.
  const totalairelax = 1;
  
  function mostrarairelax(auxairelax) {
    
    //-- Limpiar la pantalla.
    pantallaairelax.innerHTML = "";
    iframeairelax.src = videosIDairelax[auxairelax-1];
    iframeairelax.width = "400";
    iframeairelax.height = "533";
    iframeairelax.setAttribute("allowFullscreen", "false");
    pantallaairelax.appendChild(iframeairelax);
  }
  
  function imgAnteriorairelax() {
    if(primeraairelax > 1) {
        primeraairelax--;
    }else {
        primeraairelax = totalairelax;
    }
    mostrarairelax(primeraairelax);
  }
  
  function imgSiguienteairelax() {
    if(primeraairelax < totalairelax) {
        primeraairelax++;
    }else {
        primeraairelax = 1;
    }
    mostrarairelax(primeraairelax);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-airelax").addEventListener("click", imgAnteriorairelax);
  //-- Pulsar flecha derecha.
  document.getElementById("der-airelax").addEventListener("click", imgSiguienteairelax);
  
  //-- Punto de inicio del programa.
  mostrarairelax(primeraairelax);