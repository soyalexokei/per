//-- Variables.
var videosIDfunnyTime =
[
    "https://www.youtube.com/embed/koUk0QMT1s8?autoplay=0&loop=1&playlist=koUk0QMT1s8&controls=0&rel=0",
    "https://www.youtube.com/embed/ImFIZLI2_2c?autoplay=0&loop=1&playlist=ImFIZLI2_2c&controls=0&rel=0",
    "https://www.youtube.com/embed/slkVo10XC3s?autoplay=0&loop=1&playlist=slkVo10XC3s&controls=0&rel=0",
    "https://www.youtube.com/embed/kgPnBCSDr0k?autoplay=0&loop=1&playlist=kgPnBCSDr0k&controls=0&rel=0",
    "https://www.youtube.com/embed/Y-4sLHipYdA?autoplay=0&loop=1&playlist=Y-4sLHipYdA&controls=0&rel=0",
    "https://www.youtube.com/embed/qLGeCrERv0M?autoplay=0&loop=1&playlist=qLGeCrERv0M&controls=0&rel=0"
];
  var primerafunnyTime = 1;
  var pantallafunnyTime = document.getElementById("ver-funnyTime");
  var iframefunnyTime = document.createElement("iframe");
  
  //-- Ctes.
  const totalfunnyTime = 6;
  
  function mostrarfunnyTime(auxfunnyTime) {
    
    //-- Limpiar la pantalla.
    pantallafunnyTime.innerHTML = "";
    iframefunnyTime.src = videosIDfunnyTime[auxfunnyTime-1];
    iframefunnyTime.width = "400";
    iframefunnyTime.height = "533";
    iframefunnyTime.setAttribute("allowFullscreen", "false");
    pantallafunnyTime.appendChild(iframefunnyTime);
  }
  
  function imgAnteriorfunnyTime() {
    if(primerafunnyTime > 1) {
        primerafunnyTime--;
    }else {
        primerafunnyTime = totalfunnyTime;
    }
    mostrarfunnyTime(primerafunnyTime);
  }
  
  function imgSiguientefunnyTime() {
    if(primerafunnyTime < totalfunnyTime) {
        primerafunnyTime++;
    }else {
        primerafunnyTime = 1;
    }
    mostrarfunnyTime(primerafunnyTime);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-funnyTime").addEventListener("click", imgAnteriorfunnyTime);
  //-- Pulsar flecha derecha.
  document.getElementById("der-funnyTime").addEventListener("click", imgSiguientefunnyTime);
  
  //-- Punto de inicio del programa.
  mostrarfunnyTime(primerafunnyTime);