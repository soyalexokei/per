//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDmontenegro =
[
    
];
var imagenesIDmontenegro =
[
    
];
var indiceMontenegro = 1;
var pantallaMontenegro = document.getElementById('ver-montenegro');
var imgMontenegro = document.createElement("img");
var iframeMontenegro = document.createElement("iframe");

//-- Ctes.
const totalMontenegro = 0;

function mostrarMontenegro(auxMontenegro) {
    
    //-- Limpiar la pantalla.
    pantallaMontenegro.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDmontenegro[auxMontenegro-1]) {
        imgMontenegro.src = imagenesIDmontenegro[auxMontenegro-1];
        pantallaMontenegro.appendChild(imgMontenegro);
    }else {
        iframeMontenegro.src = videosIDmontenegro[auxMontenegro-1];
        iframeMontenegro.width = "400";
        iframeMontenegro.height = "533";
        iframeMontenegro.setAttribute("allow", "autoplay");
        iframeMontenegro.setAttribute("allowFullscreen", "false");
        pantallaMontenegro.appendChild(iframeMontenegro);
    }
}

function imgAnteriorMontenegro() {
    if(indiceMontenegro > 1) {
        indiceMontenegro--;
    }else {
        indiceMontenegro = totalMontenegro;
    }
    mostrarMontenegro(indiceMontenegro);
}

function imgSiguienteMontenegro() {
    if(indiceMontenegro < totalMontenegro) {
        indiceMontenegro++;
    }else {
        indiceMontenegro = 1;
    }
    mostrarMontenegro(indiceMontenegro);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-montenegro").addEventListener("click", imgAnteriorMontenegro);
//-- Pulsar flecha derecha.
document.getElementById("der-montenegro").addEventListener("click", imgSiguienteMontenegro);

//-- Punto de inicio del programa.
mostrarMontenegro(indiceMontenegro);