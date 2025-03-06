//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDserbia =
[
    
];
var imagenesIDserbia =
[
    
];
var indiceSerbia = 1;
var pantallaSerbia = document.getElementById('ver-serbia');
var imgSerbia = document.createElement("img");
var iframeSerbia = document.createElement("iframe");

//-- Ctes.
const totalSerbia = 0;

function mostrarSerbia(auxSerbia) {
    
    //-- Limpiar la pantalla.
    pantallaSerbia.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDserbia[auxSerbia-1]) {
        imgSerbia.src = imagenesIDserbia[auxSerbia-1];
        pantallaSerbia.appendChild(imgSerbia);
    }else {
        iframeSerbia.src = videosIDserbia[auxSerbia-1];
        iframeSerbia.width = "400";
        iframeSerbia.height = "533";
        iframeSerbia.setAttribute("allow", "autoplay");
        iframeSerbia.setAttribute("allowFullscreen", "false");
        pantallaSerbia.appendChild(iframeSerbia);
    }
}

function imgAnteriorSerbia() {
    if(indiceSerbia > 1) {
        indiceSerbia--;
    }else {
        indiceSerbia = totalSerbia;
    }
    mostrarSerbia(indiceSerbia);
}

function imgSiguienteSerbia() {
    if(indiceSerbia < totalSerbia) {
        indiceSerbia++;
    }else {
        indiceSerbia = 1;
    }
    mostrarSerbia(indiceSerbia);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-serbia").addEventListener("click", imgAnteriorSerbia);
//-- Pulsar flecha derecha.
document.getElementById("der-serbia").addEventListener("click", imgSiguienteSerbia);

//-- Punto de inicio del programa.
mostrarSerbia(indiceSerbia);