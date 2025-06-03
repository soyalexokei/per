//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosID =
[
    
];
var imagenesID =
[
    
];
var indice = 1;
var pantalla = document.getElementById('ver-');
var img = document.createElement("img");
var iframe = document.createElement("iframe");

//-- Ctes.
const total = 0;

function mostrar(aux) {
    
    //-- Limpiar la pantalla.
    pantalla.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesID[aux-1]) {
        img.src = imagenesID[aux-1];
        pantalla.appendChild(img);
    }else {
        iframe.src = videosID[aux-1];
        iframe.width = "400";
        iframe.height = "533";
        iframe.setAttribute("allow", "autoplay");
        iframe.setAttribute("allowFullscreen", "false");
        pantalla.appendChild(iframe);
    }
}

function imgAnterior() {
    if(indice > 1) {
        indice--;
    }else {
        indice = total;
    }
    mostrar(indice);
}

function imgSiguiente() {
    if(indice < total) {
        indice++;
    }else {
        indice = 1;
    }
    mostrar(indice);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-").addEventListener("click", imgAnterior);
//-- Pulsar flecha derecha.
document.getElementById("der-").addEventListener("click", imgSiguiente);

//-- Punto de inicio del programa.
mostrar(indice);