//-- Variables.
var imagenesIDcreciendo =
[
  "https://i.postimg.cc/yYpGLGF7/1.jpg",
  "https://i.postimg.cc/Bn8VkCgH/2.jpg",
  "https://i.postimg.cc/zDj6gvvb/3.jpg",
  "https://i.postimg.cc/VLkTBw07/4.jpg",
  "https://i.postimg.cc/mg05sFXq/5.jpg",
  "https://i.postimg.cc/1zwY55bz/6.jpg",
];
  var primeracreciendo = 1;
  var pantallacreciendo = document.getElementById("ver-creciendo");
  var imgcreciendo = document.createElement("img");
  
  //-- Ctes.
  const totalcreciendo = 6;
  
  function mostrarcreciendo(auxcreciendo) {
    
    //-- Limpiar la pantalla.
    pantallacreciendo.innerHTML = "";
  
    imgcreciendo.src = imagenesIDcreciendo[auxcreciendo-1];
    pantallacreciendo.appendChild(imgcreciendo);
  }
  
  function imgAnteriorcreciendo() {
    if(primeracreciendo > 1) {
      primeracreciendo--;
    }else {
      primeracreciendo = totalcreciendo;
    }
    mostrarcreciendo(primeracreciendo);
  }
  
  function imgSiguientecreciendo() {
    if(primeracreciendo < totalcreciendo) {
      primeracreciendo++;
    }else {
      primeracreciendo = 1;
    }
    mostrarcreciendo(primeracreciendo);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-creciendo").addEventListener("click", imgAnteriorcreciendo);
  //-- Pulsar flecha derecha.
  document.getElementById("der-creciendo").addEventListener("click", imgSiguientecreciendo);
  
  //-- Punto de inicio del programa.
  mostrarcreciendo(primeracreciendo);