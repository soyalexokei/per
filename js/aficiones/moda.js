//-- Variables.
var imagenesIDfashionMen =
[
  "https://i.postimg.cc/66nDQ84C/001.png", "https://i.postimg.cc/NfxS1Z4M/002.png", "https://i.postimg.cc/7Y4jJqSd/003.png",
  "https://i.postimg.cc/6qJg0Xg7/004.png", "https://i.postimg.cc/9MqsZM85/005.png", "https://i.postimg.cc/R0YjWfTL/006.png",
  "https://i.postimg.cc/7h3ctRrK/007.png", "https://i.postimg.cc/13vxZbnT/008.png", "https://i.postimg.cc/6Qqk6zCQ/009.png",
  "https://i.postimg.cc/ZKFtwWTJ/010.png", "https://i.postimg.cc/T3d8FTwg/011.png", "https://i.postimg.cc/QxrZgQZ6/012.png",
  "https://i.postimg.cc/8kvVry9J/013.png", "https://i.postimg.cc/rsDCKZZX/IMG-20250419-131150.png",
  "https://i.postimg.cc/1XDhhtwc/014.png", "https://i.postimg.cc/xCwD4HJ1/015.png","https://i.postimg.cc/7PncJ2CL/nike-Platinum.png",
  "https://i.postimg.cc/GmHSfgXB/nike-AI.png", "https://i.postimg.cc/fbTfrSF6/nikejordanazules.png",
  "https://i.postimg.cc/6QjfJ5xT/nikejordanmidpatentbwg.png", "https://i.postimg.cc/sxFnqD57/chaqueta.png", "https://i.postimg.cc/5NchqyX7/IMG-20250903-095121.png"
];
  var primerafashionMen = 1;
  var pantallafashionMen = document.getElementById("ver-fashionMen");
  var imgfashionMen = document.createElement("img");
  
  //-- Ctes.
  const totalfashionMen = 22;
  
  function mostrarfashionMen(auxfashionMen) {
    
    //-- Limpiar la pantalla.
    pantallafashionMen.innerHTML = "";
    imgfashionMen.src = imagenesIDfashionMen[auxfashionMen-1];
    pantallafashionMen.appendChild(imgfashionMen);
  }
  
  function imgAnteriorfashionMen() {
    if(primerafashionMen > 1) {
        primerafashionMen--;
    }else {
        primerafashionMen = totalfashionMen;
    }
    mostrarfashionMen(primerafashionMen);
  }
  
  function imgSiguientefashionMen() {
    if(primerafashionMen < totalfashionMen) {
        primerafashionMen++;
    }else {
        primerafashionMen = 1;
    }
    mostrarfashionMen(primerafashionMen);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-fashionMen").addEventListener("click", imgAnteriorfashionMen);
  //-- Pulsar flecha derecha.
  document.getElementById("der-fashionMen").addEventListener("click", imgSiguientefashionMen);
  
  //-- Punto de inicio del programa.
  mostrarfashionMen(primerafashionMen);