//-- Variables.
var imagenesIDaivisual =
[
  "https://i.postimg.cc/bJPPVVP8/1.png",
  "https://i.postimg.cc/j2dbtWCF/2.png",
  "https://i.postimg.cc/cHcSp713/3.png",
  "https://i.postimg.cc/VNn1RQ3D/4.png",
  "https://i.postimg.cc/fR3MV054/5.png",
  "https://i.postimg.cc/9QvCZFND/6.png",
  "https://i.postimg.cc/1579RKGc/7.png",
  "https://i.postimg.cc/L689MW18/8.png",
  "https://i.postimg.cc/T1RR17NQ/9.png",
  "https://i.postimg.cc/xjRfhQqZ/10.png",
  "https://i.postimg.cc/rsQqr1vT/11.png",
];
  var primeraaivisual = 1;
  var pantallaaivisual = document.getElementById("ver-aivisual");
  var imgaivisual = document.createElement("img");
  var totalaivisual = imagenesIDaivisual.length;
  
  function mostraraivisual(auxaivisual) {
    //-- Limpiar la pantalla.
    pantallaaivisual.innerHTML = "";
    imgaivisual.src = imagenesIDaivisual[auxaivisual-1];
    pantallaaivisual.appendChild(imgaivisual);
  }
  
  function imgAnterioraivisual() {
    if(primeraaivisual > 1) {
        primeraaivisual--;
    }else {
        primeraaivisual = totalaivisual;
    }
    mostraraivisual(primeraaivisual);
  }
  
  function imgSiguienteaivisual() {
    if(primeraaivisual < totalaivisual) {
        primeraaivisual++;
    }else {
        primeraaivisual = 1;
    }
    mostraraivisual(primeraaivisual);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-aivisual").addEventListener("click", imgAnterioraivisual);
  //-- Pulsar flecha derecha.
  document.getElementById("der-aivisual").addEventListener("click", imgSiguienteaivisual);
  
  //-- Punto de inicio del programa.
  mostraraivisual(primeraaivisual);