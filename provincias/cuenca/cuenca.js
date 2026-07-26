//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDcuenca =
[
    "", /* 1 */
    "",
    "",
    "",
    "",
    "",
];
var imagenesIDcuenca =
[
    "https://i.postimg.cc/nz1GtMzt/1.png", /* 1 */
    "https://i.postimg.cc/Y0qf2kGL/2.png",
    "https://i.postimg.cc/wjSVXSPn/3.png",
    "https://i.postimg.cc/hGT0p2Rv/4.png",
    "https://i.postimg.cc/tJSdYfWS/5.png",
    "https://i.postimg.cc/XJWkh9n8/6.png",
];
var indiceCuenca = 1;
var pantallaCuenca = document.getElementById('ver-cuenca');
var imgCuenca = document.createElement("img");
var iframeCuenca = document.createElement("iframe");

//-- Ctes.
const totalCuenca = 6;

function mostrarCuenca(auxCuenca) {
    
    //-- Limpiar la pantalla.
    pantallaCuenca.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDcuenca[auxCuenca-1]) {
        imgCuenca.src = imagenesIDcuenca[auxCuenca-1];
        pantallaCuenca.appendChild(imgCuenca);
    }else {
        iframeCuenca.src = videosIDcuenca[auxCuenca-1];
        iframeCuenca.width = "400";
        iframeCuenca.height = "533";
        iframeCuenca.setAttribute("allow", "autoplay");
        iframeCuenca.setAttribute("allowFullscreen", "false");
        pantallaCuenca.appendChild(iframeCuenca);
    }
}

function imgAnteriorCuenca() {
    if(indiceCuenca > 1) {
        indiceCuenca--;
    }else {
        indiceCuenca = totalCuenca;
    }
    mostrarCuenca(indiceCuenca);
}

function imgSiguienteCuenca() {
    if(indiceCuenca < totalCuenca) {
        indiceCuenca++;
    }else {
        indiceCuenca = 1;
    }
    mostrarCuenca(indiceCuenca);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-cuenca").addEventListener("click", imgAnteriorCuenca);
//-- Pulsar flecha derecha.
document.getElementById("der-cuenca").addEventListener("click", imgSiguienteCuenca);

//-- Punto de inicio del programa.
mostrarCuenca(indiceCuenca);