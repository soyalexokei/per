//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDgibraltar =
[
    
];
var imagenesIDgibraltar =
[
    
];
var indiceGibraltar = 1;
var pantallaGibraltar = document.getElementById('ver-gibraltar');
var imgGibraltar = document.createElement("img");
var iframeGibraltar = document.createElement("iframe");

//-- Ctes.
const totalGibraltar = 0;

function mostrarGibraltar(auxGibraltar) {
    
    //-- Limpiar la pantalla.
    pantallaGibraltar.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDgibraltar[auxGibraltar-1]) {
        imgGibraltar.src = imagenesIDgibraltar[auxGibraltar-1];
        pantallaGibraltar.appendChild(imgGibraltar);
    }else {
        iframeGibraltar.src = videosIDgibraltar[auxGibraltar-1];
        iframeGibraltar.width = "400";
        iframeGibraltar.height = "533";
        iframeGibraltar.setAttribute("allow", "autoplay");
        iframeGibraltar.setAttribute("allowFullscreen", "false");
        pantallaGibraltar.appendChild(iframeGibraltar);
    }
}

function imgAnteriorGibraltar() {
    if(indiceGibraltar > 1) {
        indiceGibraltar--;
    }else {
        indiceGibraltar = totalGibraltar;
    }
    mostrarGibraltar(indiceGibraltar);
}

function imgSiguienteGibraltar() {
    if(indiceGibraltar < totalGibraltar) {
        indiceGibraltar++;
    }else {
        indiceGibraltar = 1;
    }
    mostrarGibraltar(indiceGibraltar);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-gibraltar").addEventListener("click", imgAnteriorGibraltar);
//-- Pulsar flecha derecha.
document.getElementById("der-gibraltar").addEventListener("click", imgSiguienteGibraltar);

//-- Punto de inicio del programa.
mostrarGibraltar(indiceGibraltar);