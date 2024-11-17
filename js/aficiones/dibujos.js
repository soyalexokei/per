//-- Variables.
var imagenesIDdraw =
[
  "https://i.postimg.cc/6qjWQhFt/1.jpg",
  "https://i.postimg.cc/0j25x4WV/2.jpg",
];
  var primeradraw = 1;
  var pantalladraw = document.getElementById("ver-draw");
  var imgdraw = document.createElement("img");
  
  //-- Ctes.
  const totaldraw = 2;
  
  function mostrardraw(auxdraw) {
    
    //-- Limpiar la pantalla.
    pantalladraw.innerHTML = "";
  
    imgdraw.src = imagenesIDdraw[auxdraw-1];
    pantalladraw.appendChild(imgdraw);
  }
  
  function imgAnteriordraw() {
    if(primeradraw > 1) {
      primeradraw--;
    }else {
      primeradraw = totaldraw;
    }
    mostrardraw(primeradraw);
  }
  
  function imgSiguientedraw() {
    if(primeradraw < totaldraw) {
      primeradraw++;
    }else {
      primeradraw = 1;
    }
    mostrardraw(primeradraw);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-draw").addEventListener("click", imgAnteriordraw);
  //-- Pulsar flecha derecha.
  document.getElementById("der-draw").addEventListener("click", imgSiguientedraw);
  
  //-- Punto de inicio del programa.
  mostrardraw(primeradraw);