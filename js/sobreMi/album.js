//-- Variables.
var imagenesIDalbum =
[
  "https://i.postimg.cc/bv5N8LcP/1.jpg",
  "https://i.postimg.cc/RZXZp4gN/2.jpg",
  "https://i.postimg.cc/BvbQdkzN/3.jpg",
  "https://i.postimg.cc/L8HsVnBc/4.jpg",
  "https://i.postimg.cc/kMKX3xjr/5.jpg",
  "https://i.postimg.cc/C5GFGgZM/6.jpg",
  "https://i.postimg.cc/C1fMKDSq/7.jpg",
  "https://i.postimg.cc/NFqs2MjP/8.jpg",
  "https://i.postimg.cc/15SR9fT8/9.jpg",
  "https://i.postimg.cc/T3YRDBTG/10.jpg",
  "https://i.postimg.cc/8PbpsTQt/11.jpg",
  "https://i.postimg.cc/pdmR0896/12.jpg",
  "https://i.postimg.cc/HkZT43LM/13.jpg",
  "https://i.postimg.cc/nLNZNzBc/14.jpg",
  "https://i.postimg.cc/ZR3ZmSxP/15.jpg",
  "https://i.postimg.cc/prHvX6sw/16.jpg",
  "https://i.postimg.cc/7hnkCncf/17.jpg",
  "https://i.postimg.cc/zDC5PqB8/18.jpg",
];
  var primeraalbum = 1;
  var pantallaalbum = document.getElementById("ver-album");
  var imgalbum = document.createElement("img");
  
  //-- Ctes.
  const totalalbum = 18;
  
  function mostraralbum(auxalbum) {
    
    //-- Limpiar la pantalla.
    pantallaalbum.innerHTML = "";
  
    imgalbum.src = imagenesIDalbum[auxalbum-1];
    pantallaalbum.appendChild(imgalbum);
  }
  
  function imgAnterioralbum() {
    if(primeraalbum > 1) {
      primeraalbum--;
    }else {
      primeraalbum = totalalbum;
    }
    mostraralbum(primeraalbum);
  }
  
  function imgSiguientealbum() {
    if(primeraalbum < totalalbum) {
      primeraalbum++;
    }else {
      primeraalbum = 1;
    }
    mostraralbum(primeraalbum);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-album").addEventListener("click", imgAnterioralbum);
  //-- Pulsar flecha derecha.
  document.getElementById("der-album").addEventListener("click", imgSiguientealbum);
  
  //-- Punto de inicio del programa.
  mostraralbum(primeraalbum);