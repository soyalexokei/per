//-- Variables.
var imagenesHelicopterExp =
[
  /* Helicopter experience - September 2019 */
  "https://i.postimg.cc/fTHJc7Gq/IMG-20251012-165659.png",
  "https://i.postimg.cc/fTxb1RsW/IMG-20251012-142831-086.webp",
  "https://i.postimg.cc/wThBnjzT/IMG-20251012-143003-822.webp",
  "https://i.postimg.cc/FzX4x073/IMG-20251012-140146-353.webp",
  "https://i.postimg.cc/RhxBTwNf/IMG-20251012-141236.png",
  "https://i.postimg.cc/Kj7yp4Mk/IMG-20251012-141304.png",
  "",
  "https://i.postimg.cc/Pxtz95NY/IMG-20251012-143521.png",
  "https://i.postimg.cc/g0yHgZcy/IMG-20251012-143543.png",
  "https://i.postimg.cc/LXHBw8hZ/IMG-20251012-143557.png",
  "https://i.postimg.cc/g0yHgZcX/IMG-20251012-143806-748.webp",
  "",
  /* End of the helicopter experience - September 2019 */
];
var videosHelicopterExp =
[
  /* Helicopter experience - September 2019 */
  "",
  "",
  "",
  "",
  "",
  "",
  "https://www.youtube.com/embed/OnzkPD5O-0w",
  "",
  "",
  "",
  "",
  "https://www.youtube.com/embed/TL8E0-VKKCU",
  /* End of the helicopter experience - September 2019 */
];

  var primerahelicopterExp = 1;
  var pantallahelicopterExp = document.getElementById("ver-helicopter-exp");
  var imgHelicopterExp = document.createElement("img");
  var iframeHelicopterExp = document.createElement("iframe")
  
  //-- Ctes.
  const totalHelicopterExp = imagenesHelicopterExp.length;
  
  function mostrarhelicopterExp(auxHelicopterExp) {
    
    pantallahelicopterExp.innerHTML = "";

    if(imagenesHelicopterExp[auxHelicopterExp-1]) {
      imgHelicopterExp.src = imagenesHelicopterExp[auxHelicopterExp-1];
      pantallahelicopterExp.appendChild(imgHelicopterExp);
    }else {
      iframeHelicopterExp.src = videosHelicopterExp[auxHelicopterExp-1];
      iframeHelicopterExp.width = "400";
      iframeHelicopterExp.height = "533";
      iframeHelicopterExp.setAttribute("allow", "autoplay");
      iframeHelicopterExp.allowFullscreen = false;
      pantallahelicopterExp.appendChild(iframeHelicopterExp);
    }
  }
  
  function imgAnteriorHelicopterExp() {
    if(primerahelicopterExp > 1) {
      primerahelicopterExp--;
    }else {
      primerahelicopterExp = totalHelicopterExp;
    }
    mostrarhelicopterExp(primerahelicopterExp);
  }
  
  function imgSiguienteHelicopterExp() {
    if(primerahelicopterExp < totalHelicopterExp) {
      primerahelicopterExp++;
    }else {
      primerahelicopterExp = 1;
    }
    mostrarhelicopterExp(primerahelicopterExp);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-helicopter-exp").addEventListener("click", imgAnteriorHelicopterExp);
  //-- Pulsar flecha derecha.
  document.getElementById("der-helicopter-exp").addEventListener("click", imgSiguienteHelicopterExp);
  
  //-- Punto de inicio del programa.
  mostrarhelicopterExp(primerahelicopterExp);