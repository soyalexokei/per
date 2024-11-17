//-- Variables.
var imagenesIDcoches =
[
  "https://i.postimg.cc/d3Rp0QXF/1.jpg",
  "https://i.postimg.cc/Pf1ByKq7/2.jpg",
  "https://i.postimg.cc/28mgKvbS/3.jpg",
  "https://i.postimg.cc/GhQ6w2GJ/4.jpg",
  "https://i.postimg.cc/GmmVcCj0/5.jpg",
  "https://i.postimg.cc/mgpqk5dP/6.jpg",
  "https://i.postimg.cc/g0w7ZH5N/7.jpg",
  "https://i.postimg.cc/VN3VBbP1/8.jpg",
  "https://i.postimg.cc/3RmbLJ3G/9.jpg",
  "https://i.postimg.cc/FzvCw5KB/10.jpg",
  "https://i.postimg.cc/T1cN67LY/11.jpg",
  "https://i.postimg.cc/9XPnZM85/12.jpg",
  "https://i.postimg.cc/BQqwg0k8/13.jpg",
  "https://i.postimg.cc/hPpZZYR2/14.jpg",
  "https://i.postimg.cc/W1zWB72T/15.jpg",
  "https://i.postimg.cc/kgH1qt48/16.jpg",
  "https://i.postimg.cc/fb0HLTtP/17.jpg",
  "https://i.postimg.cc/mDfmFf7g/18.jpg",
  "https://i.postimg.cc/QtQ0Q4qk/19.jpg",
  "https://i.postimg.cc/XqnxQfHM/20.jpg",
  "https://i.postimg.cc/sxKm8MqM/21.jpg",
  "https://i.postimg.cc/mZSmhnkT/22.jpg",
  "https://i.postimg.cc/dtt4C9Zr/23.jpg",
  "https://i.postimg.cc/WbWSwJ0K/24.jpg",
  "https://i.postimg.cc/RZWdsVR0/25.jpg",
  "https://i.postimg.cc/vZCzpFqt/26.jpg",
  "https://i.postimg.cc/hGxrnyNW/27.jpg",
  "https://i.postimg.cc/Kz2587yK/28.jpg",
  "https://i.postimg.cc/XJkkGZVs/29.jpg",
  "https://i.postimg.cc/2yjF4zyr/30.jpg",
  "https://i.postimg.cc/pr0QCg58/31.jpg",
  "https://i.postimg.cc/2jTxCB96/32.jpg",
  "https://i.postimg.cc/c4HBC4Pc/33.jpg",
  "https://i.postimg.cc/zXcSgYrY/34.jpg",
  "https://i.postimg.cc/W1qmmYNF/35.jpg",
  "https://i.postimg.cc/FKtyTbzP/36.jpg",
  "https://i.postimg.cc/G2dkCckG/37.jpg",
  "https://i.postimg.cc/fbxxp30M/38.jpg",
  "https://i.postimg.cc/HxzbWf2K/39.jpg",
  "https://i.postimg.cc/j2jPDZ3j/40.jpg",
  "https://i.postimg.cc/MZs1CJXf/41.jpg",
  "https://i.postimg.cc/qqZnyyWx/42.jpg",
  "https://i.postimg.cc/CLzbYrfP/43.jpg",
  "https://i.postimg.cc/NfSm086g/44.jpg",
  "https://i.postimg.cc/qvKn6tw2/45.jpg",
  "https://i.postimg.cc/fbhdcwqp/46.jpg",
  "https://i.postimg.cc/g0qZ4ffJ/47.jpg",
  "https://i.postimg.cc/B6S1zm0C/48.jpg",
  "https://i.postimg.cc/gJg6b3cb/49.jpg",
];
  var primeracoches = 1;
  var pantallacoches = document.getElementById("ver-coches");
  var imgcoches = document.createElement("img");
  
  //-- Ctes.
  const totalcoches = 49;
  
  function mostrarcoches(auxcoches) {
    
    //-- Limpiar la pantalla.
    pantallacoches.innerHTML = "";
  
    imgcoches.src = imagenesIDcoches[auxcoches-1];
    pantallacoches.appendChild(imgcoches);
  }
  
  function imgAnteriorcoches() {
    if(primeracoches > 1) {
      primeracoches--;
    }else {
      primeracoches = totalcoches;
    }
    mostrarcoches(primeracoches);
  }
  
  function imgSiguientecoches() {
    if(primeracoches < totalcoches) {
      primeracoches++;
    }else {
      primeracoches = 1;
    }
    mostrarcoches(primeracoches);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-coches").addEventListener("click", imgAnteriorcoches);
  //-- Pulsar flecha derecha.
  document.getElementById("der-coches").addEventListener("click", imgSiguientecoches);
  
  //-- Punto de inicio del programa.
  mostrarcoches(primeracoches);