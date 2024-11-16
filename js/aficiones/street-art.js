//-- Variables.
var imagenesIDstreetart =
[
  "FKdzSqjY/1.jpg","KjF8d8CT/2.jpg","C1bKPqrY/3.jpg","k504vccf/4.jpg","C5NxYVVQ/5.jpg",
  "gkz0srVF/6.jpg","y6Xd00Sy/7.jpg","9FLQnVb4/8.jpg","Mp4KzDhq/9.jpg","bwdwXMVm/10.jpg"
];
  var primeraStreetArt = 1;
  var pantallaStreetArt = document.getElementById("ver-street-art");
  var imgStreetArt = document.createElement("img");
  
  //-- Ctes.
  const totalStreetArt = 10;
  
  function mostrarStreetArt(auxStreetArt) {
    
    //-- Limpiar la pantalla.
    pantallaStreetArt.innerHTML = "";
  
    imgStreetArt.src = "https://i.postimg.cc/" + imagenesIDstreetart[auxStreetArt-1];
    pantallaStreetArt.appendChild(imgStreetArt);
  }
  
  function imgAnteriorStreetArt() {
    if(primeraStreetArt > 1) {
      primeraStreetArt--;
    }else {
      primeraStreetArt = totalStreetArt;
    }
    mostrarStreetArt(primeraStreetArt);
  }
  
  function imgSiguienteStreetArt() {
    if(primeraStreetArt < totalStreetArt) {
      primeraStreetArt++;
    }else {
      primeraStreetArt = 1;
    }
    mostrarStreetArt(primeraStreetArt);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-street-art").addEventListener("click", imgAnteriorStreetArt);
  //-- Pulsar flecha derecha.
  document.getElementById("der-street-art").addEventListener("click", imgSiguienteStreetArt);
  
  //-- Punto de inicio del programa.
  mostrarStreetArt(primeraStreetArt);