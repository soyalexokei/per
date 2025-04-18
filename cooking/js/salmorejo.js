//-- Variables.
var imagenesIDsalmorejo =
[
  "https://i.postimg.cc/Bvxp2Xsm/2.jpg"
];
  var primerasalmorejo = 1;
  var pantallasalmorejo = document.getElementById("ver-salmorejo");
  var imgsalmorejo = document.createElement("img");
  
  //-- Ctes.
  const totalsalmorejo = 1;
  
  function mostrarsalmorejo(auxsalmorejo) {
    pantallasalmorejo.innerHTML = "";

    imgsalmorejo.src = imagenesIDsalmorejo[auxsalmorejo-1];
    pantallasalmorejo.appendChild(imgsalmorejo);
  }
  
  function imgAnteriorsalmorejo() {
    if(primerasalmorejo > 1) {
        primerasalmorejo--;
    }else {
        primerasalmorejo = totalsalmorejo;
    }
    mostrarsalmorejo(primerasalmorejo);
  }
  
  function imgSiguientesalmorejo() {
    if(primerasalmorejo < totalsalmorejo) {
        primerasalmorejo++;
    }else {
        primerasalmorejo = 1;
    }
    mostrarsalmorejo(primerasalmorejo);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-salmorejo").addEventListener("click", imgAnteriorsalmorejo);
  //-- Pulsar flecha derecha.
  document.getElementById("der-salmorejo").addEventListener("click", imgSiguientesalmorejo);
  
  //-- Punto de inicio del programa.
  mostrarsalmorejo(primerasalmorejo);