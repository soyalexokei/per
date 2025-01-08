//-- Variables.
var imagenesIDfutexp =
[
  
];
  var primerafutexp = 1;
  var pantallafutexp = document.getElementById("ver-futexp");
  var imgfutexp = document.createElement("img");
  
  //-- Ctes.
  const totalfutexp = 2;
  
  function mostrarfutexp(auxfutexp) {
    
    pantallafutexp.innerHTML = "";
    imgfutexp.src = imagenesIDfutexp[auxfutexp-1];
    pantallafutexp.appendChild(imgfutexp);
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