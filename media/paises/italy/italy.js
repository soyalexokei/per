//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDitaly =
[
    
];
var imagenesIDitaly =
[
    
];
var indiceItaly = 1;
var pantallaItaly = document.getElementById('ver-italy');
var imgItaly = document.createElement("img");
var iframeItaly = document.createElement("iframe");

//-- Ctes.
const totalItaly = 0;

function mostrarItaly(auxItaly) {
    
    //-- Limpiar la pantalla.
    pantallaItaly.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDitaly[auxItaly-1]) {
        imgItaly.src = imagenesIDitaly[auxItaly-1];
        pantallaItaly.appendChild(imgItaly);
    }else {
        iframeItaly.src = videosIDitaly[auxItaly-1];
        iframeItaly.width = "400";
        iframeItaly.height = "533";
        iframeItaly.setAttribute("allow", "autoplay");
        iframeItaly.setAttribute("allowFullscreen", "false");
        pantallaItaly.appendChild(iframeItaly);
    }
}

function imgAnteriorItaly() {
    if(indiceItaly > 1) {
        indiceItaly--;
    }else {
        indiceItaly = totalItaly;
    }
    mostrarItaly(indiceItaly);
}

function imgSiguienteItaly() {
    if(indiceItaly < totalItaly) {
        indiceItaly++;
    }else {
        indiceItaly = 1;
    }
    mostrarItaly(indiceItaly);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-italy").addEventListener("click", imgAnteriorItaly);
//-- Pulsar flecha derecha.
document.getElementById("der-italy").addEventListener("click", imgSiguienteItaly);

//-- Punto de inicio del programa.
mostrarItaly(indiceItaly);