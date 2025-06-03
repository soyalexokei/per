//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDacoruna =
[
    
];
var imagenesIDacoruna =
[
    
];
var indiceacoruna = 1;
var pantallaacoruna = document.getElementById('ver-acoruna');
var imgacoruna = document.createElement("img");
var iframeacoruna = document.createElement("iframe");

//-- Ctes.
const totalacoruna = 0;

function mostraracoruna(auxacoruna) {
    
    //-- Limpiar la pantalla.
    pantallaacoruna.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDacoruna[auxacoruna-1]) {
        imgacoruna.src = imagenesIDacoruna[auxacoruna-1];
        pantallaacoruna.appendChild(imgacoruna);
    }else {
        iframeacoruna.src = videosIDacoruna[auxacoruna-1];
        iframeacoruna.width = "400";
        iframeacoruna.height = "533";
        iframeacoruna.setAttribute("allow", "autoplay");
        iframeacoruna.setAttribute("allowFullscreen", "false");
        pantallaacoruna.appendChild(iframeacoruna);
    }
}

function imgAnterioracoruna() {
    if(indiceacoruna > 1) {
        indiceacoruna--;
    }else {
        indiceacoruna = totalacoruna;
    }
    mostraracoruna(indiceacoruna);
}

function imgSiguienteacoruna() {
    if(indiceacoruna < totalacoruna) {
        indiceacoruna++;
    }else {
        indiceacoruna = 1;
    }
    mostraracoruna(indiceacoruna);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-acoruna").addEventListener("click", imgAnterioracoruna);
//-- Pulsar flecha derecha.
document.getElementById("der-acoruna").addEventListener("click", imgSiguienteacoruna);

//-- Punto de inicio del programa.
mostraracoruna(indiceacoruna);