//-- Variables.
var imagenesIDimgsIA =
[
  "https://i.postimg.cc/bJPPVVP8/1.png", "https://i.postimg.cc/j2dbtWCF/2.png",
  "https://i.postimg.cc/cHcSp713/3.png", "https://i.postimg.cc/VNn1RQ3D/4.png",
  "https://i.postimg.cc/fR3MV054/5.png", "https://i.postimg.cc/9QvCZFND/6.png",
  "https://i.postimg.cc/1579RKGc/7.png", "https://i.postimg.cc/L689MW18/8.png",
  "https://i.postimg.cc/T1RR17NQ/9.png", "https://i.postimg.cc/xjRfhQqZ/10.png",
  "https://i.postimg.cc/rsQqr1vT/11.png"
];
  var primeraImgsIA = 1;
  var pantallaImgsIA = document.getElementById("ver-imgs-IA");
  var imgImgsIA = document.createElement("img");
  
  //-- Ctes.
  const totalImgsIA = 11;
  
  function mostrarImgsIA(auxImgsIA) {
    
    //-- Limpiar la pantalla.
    pantallaImgsIA.innerHTML = "";
  
    imgImgsIA.src = imagenesIDimgsIA[auxImgsIA-1];
    pantallaImgsIA.appendChild(imgImgsIA);
  }
  
  function imgAnteriorImgsIA() {
    if(primeraImgsIA > 1) {
        primeraImgsIA--;
    }else {
        primeraImgsIA = totalImgsIA;
    }
    mostrarImgsIA(primeraImgsIA);
  }
  
  function imgSiguienteImgsIA() {
    if(primeraImgsIA < totalImgsIA) {
        primeraImgsIA++;
    }else {
        primeraImgsIA = 1;
    }
    mostrarImgsIA(primeraImgsIA);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-imgs-IA").addEventListener("click", imgAnteriorImgsIA);
  //-- Pulsar flecha derecha.
  document.getElementById("der-imgs-IA").addEventListener("click", imgSiguienteImgsIA);
  
  //-- Punto de inicio del programa.
  mostrarImgsIA(primeraImgsIA);