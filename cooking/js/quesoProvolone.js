//-- Variables.
var imagenesIDquesoProvolone =
[
    "https://i.postimg.cc/VL8CbD5P/4.jpg"
];
  var primeraquesoProvolone = 1;
  var pantallaquesoProvolone = document.getElementById("ver-quesoProvolone");
  var imgquesoProvolone = document.createElement("img");
  
  //-- Ctes.
  const totalquesoProvolone = 1;
  
  function mostrarquesoProvolone(auxquesoProvolone) {
    pantallaquesoProvolone.innerHTML = "";

    imgquesoProvolone.src = imagenesIDquesoProvolone[auxquesoProvolone-1];
    pantallaquesoProvolone.appendChild(imgquesoProvolone);
  }
  
  function imgAnteriorquesoProvolone() {
    if(primeraquesoProvolone > 1) {
        primeraquesoProvolone--;
    }else {
        primeraquesoProvolone = totalquesoProvolone;
    }
    mostrarquesoProvolone(primeraquesoProvolone);
  }
  
  function imgSiguientequesoProvolone() {
    if(primeraquesoProvolone < totalquesoProvolone) {
        primeraquesoProvolone++;
    }else {
        primeraquesoProvolone = 1;
    }
    mostrarquesoProvolone(primeraquesoProvolone);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-quesoProvolone").addEventListener("click", imgAnteriorquesoProvolone);
  //-- Pulsar flecha derecha.
  document.getElementById("der-quesoProvolone").addEventListener("click", imgSiguientequesoProvolone);
  
  //-- Punto de inicio del programa.
  mostrarquesoProvolone(primeraquesoProvolone);