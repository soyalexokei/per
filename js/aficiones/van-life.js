//-- Variables.
var imagenesIDvanlife =
[
  "https://i.postimg.cc/GmtGL78g/001.png",
  "https://i.postimg.cc/BQq2yQq0/002.png",
];
  var primeraVanLife = 1;
  var pantallaVanLife = document.getElementById("ver-van-life");
  var imgVanLife = document.createElement("img");
  
  //-- Ctes.
  const totalVanLife = 2;
  
  function mostrarVanLife(auxVanLife) {
    
    //-- Limpiar la pantalla.
    pantallaVanLife.innerHTML = "";
  
    imgVanLife.src = imagenesIDvanlife[auxVanLife-1];
    pantallaVanLife.appendChild(imgVanLife);
  }
  
  function imgAnteriorVanLife() {
    if(primeraVanLife > 1) {
      primeraVanLife--;
    }else {
      primeraVanLife = totalVanLife;
    }
    mostrarVanLife(primeraVanLife);
  }
  
  function imgSiguienteVanLife() {
    if(primeraVanLife < totalVanLife) {
      primeraVanLife++;
    }else {
      primeraVanLife = 1;
    }
    mostrarVanLife(primeraVanLife);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-van-life").addEventListener("click", imgAnteriorVanLife);
  //-- Pulsar flecha derecha.
  document.getElementById("der-van-life").addEventListener("click", imgSiguienteVanLife);
  
  //-- Punto de inicio del programa.
  mostrarVanLife(primeraVanLife);