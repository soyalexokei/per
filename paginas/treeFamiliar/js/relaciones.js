// Abrir/cerrar modal
const modal = document.getElementById('relaciones');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

//-- Variables.
var imagenesIDrelaciones =
[
  "https://i.postimg.cc/90txvw84/relacion0.png",
  "https://i.postimg.cc/Bn2J64YJ/relacion1.png",
  "https://i.postimg.cc/SNBykJGZ/relacion2.png",
  "https://i.postimg.cc/NGPsCN2v/relacion3.png",
  "https://i.postimg.cc/xC6f25sH/relacion4.png",
  "https://i.postimg.cc/wM36TNPr/relacion5.png",
  "https://i.postimg.cc/J0gRynCz/relacion6.png",
  "https://i.postimg.cc/C52cy7WN/relacion7.png",
  "https://i.postimg.cc/vH0bNchm/relacion8.png",
];
  var primerarelaciones = 1;
  var pantallarelaciones = document.getElementById("ver-relaciones");
  var imgrelaciones = document.createElement("img");
  
  //-- Ctes.
  const totalrelaciones = 9;
  
  function mostrarrelaciones(auxrelaciones) {
    
    //-- Limpiar la pantalla.
    pantallarelaciones.innerHTML = "";
  
    imgrelaciones.src = imagenesIDrelaciones[auxrelaciones-1];
    pantallarelaciones.appendChild(imgrelaciones);
  }
  
  function imgAnteriorrelaciones() {
    if(primerarelaciones > 1) {
        primerarelaciones--;
    }else {
        primerarelaciones = totalrelaciones;
    }
    mostrarrelaciones(primerarelaciones);
  }
  
  function imgSiguienterelaciones() {
    if(primerarelaciones < totalrelaciones) {
        primerarelaciones++;
    }else {
        primerarelaciones = 1;
    }
    mostrarrelaciones(primerarelaciones);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-relaciones").addEventListener("click", imgAnteriorrelaciones);
  //-- Pulsar flecha derecha.
  document.getElementById("der-relaciones").addEventListener("click", imgSiguienterelaciones);
  
  //-- Punto de inicio del programa.
  mostrarrelaciones(primerarelaciones);