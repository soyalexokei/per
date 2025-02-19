//-- Variables.
var imagenesIDfutexp =
[
  "https://i.postimg.cc/7Zd24Kcc/1.png", "https://i.postimg.cc/526CDhPL/2.png", "https://i.postimg.cc/vHPnqYvG/3.png",
  "https://i.postimg.cc/sDfS4Q7n/4.png", "https://i.postimg.cc/66fnZL22/5.png", "https://i.postimg.cc/fyCdhDnj/6.png",
  "https://i.postimg.cc/nrpm5M5h/7.png", "https://i.postimg.cc/vBW9350K/8.png", "https://i.postimg.cc/LXdLtx3f/9.png",
  "https://i.postimg.cc/jjnynpPt/10.png", "https://i.postimg.cc/ht59jDJ2/11.png", "https://i.postimg.cc/Z5R84Bq9/12.png",
  "https://i.postimg.cc/xTgvwy9D/13.png", "https://i.postimg.cc/X7nK1DSk/14.png", "https://i.postimg.cc/BbBTQ2DF/15.png",
  "https://i.postimg.cc/c1RMmGjJ/16.png", "https://i.postimg.cc/0jsGsV6x/17.png", "https://i.postimg.cc/zBWw6sG0/18.png",
  "https://i.postimg.cc/8C7mBJQ8/19.png", "https://i.postimg.cc/nLNYdFpX/20.png", "https://i.postimg.cc/L8CV1kWB/21.png",
  "https://i.postimg.cc/RZVRhpgZ/22.png", "https://i.postimg.cc/Kv5fZhrW/23.png", "https://i.postimg.cc/GhRzwmYY/24.png",
  "https://i.postimg.cc/SR6r2B0J/25.png", "https://i.postimg.cc/qByQ53t4/26.png", "https://i.postimg.cc/QCGmMXy2/27.png",
  "https://i.postimg.cc/C1fJYZmC/28.png", "https://i.postimg.cc/fRB8vQVd/29.png", "https://i.postimg.cc/KYWQd7rv/30.png",
  "https://i.postimg.cc/g2YMR22d/31.png", "https://i.postimg.cc/fbyB2qdr/32.png", "https://i.postimg.cc/50Z7F56k/33.png",
  "https://i.postimg.cc/5NWK43cX/34.png", "https://i.postimg.cc/jq7kY11V/35.png", "https://i.postimg.cc/1XwW0gFR/36.png","",
  "https://i.postimg.cc/tR5BdZ7J/38.png", "https://i.postimg.cc/90J1cSsZ/39.png", "https://i.postimg.cc/sDgwTjZc/40.png","",
  "https://i.postimg.cc/FKwR1g26/42.png", "https://i.postimg.cc/9Q8zHj1C/43.png", "https://i.postimg.cc/R0WhMbbf/44.png","",
  "https://i.postimg.cc/XvYHX9w9/46.png",""
];
var videosIDfutexp =
[
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "https://www.youtube.com/embed/F3vgZL1bfkA?autoplay=1&loop=1&playlist=F3vgZL1bfkA&controls=0&rel=0",
  "", "", "",
  "https://www.youtube.com/embed/1imIzdzcN0M?autoplay=1&loop=1&playlist=1imIzdzcN0M&controls=0&rel=0",
  "", "", "",
  "https://www.youtube.com/embed/PIqpZmWlzfc?autoplay=1&loop=1&playlist=PIqpZmWlzfc&controls=0&rel=0","",
  "https://www.youtube.com/embed/V_vkwOrO_uY?autoplay=1&loop=1&playlist=V_vkwOrO_uY&controls=0&rel=0"
];
  var primerafutexp = 1;
  var pantallafutexp = document.getElementById("ver-futexp");
  var imgfutexp = document.createElement("img");
  var iframefutexp = document.createElement("iframe");
  
  //-- Ctes.
  const totalfutexp = 47;
  
  function mostrarfutexp(auxfutexp) {
    
    pantallafutexp.innerHTML = "";
    
    if(imagenesIDfutexp[auxfutexp-1]) {
      imgfutexp.src = imagenesIDfutexp[auxfutexp-1];
      pantallafutexp.appendChild(imgfutexp);
    }else {
      iframefutexp.src = videosIDfutexp[auxfutexp-1];
      iframefutexp.width = "400";
      iframefutexp.height = "533";
      iframefutexp.setAttribute("allow", "autoplay");
      iframefutexp.setAttribute("allowFullscreen", "false");
      pantallafutexp.appendChild(iframefutexp);
    }
  }
  
  function imgAnteriorfutexp() {
    if(primerafutexp > 1) {
        primerafutexp--;
    }else {
        primerafutexp = totalfutexp;
    }
    mostrarfutexp(primerafutexp);
  }
  
  function imgSiguientefutexp() {
    if(primerafutexp < totalfutexp) {
        primerafutexp++;
    }else {
        primerafutexp = 1;
    }
    mostrarfutexp(primerafutexp);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-futexp").addEventListener("click", imgAnteriorfutexp);
  //-- Pulsar flecha derecha.
  document.getElementById("der-futexp").addEventListener("click", imgSiguientefutexp);
  
  //-- Punto de inicio del programa.
  mostrarfutexp(primerafutexp);