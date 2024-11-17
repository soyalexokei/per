//-- Variables.
var videosIDsolidaridad =
[
    "https://www.youtube.com/embed/CpCaowWDQDw?autoplay=1&loop=1&playlist=CpCaowWDQDw&controls=0&rel=0"
];
var indicesolidaridad = 1;
var pantallasolidaridad = document.getElementById('ver-solidaridad');
var iframesolidaridad = document.createElement("iframe");

//-- Ctes.
const totalsolidaridad = 1;

function mostrarsolidaridad(auxsolidaridad) {
    
    //-- Limpiar la pantalla.
    pantallasolidaridad.innerHTML = "";

    iframesolidaridad.src = videosIDsolidaridad[auxsolidaridad-1];
    iframesolidaridad.width = "400";
    iframesolidaridad.height = "533";
    iframesolidaridad.setAttribute("allow", "autoplay");
    iframesolidaridad.setAttribute("allowFullscreen", "false");
    pantallasolidaridad.appendChild(iframesolidaridad);
}

function imgAnteriorsolidaridad() {
    if(indicesolidaridad > 1) {
        indicesolidaridad--;
    }else {
        indicesolidaridad = totalsolidaridad;
    }
    mostrarsolidaridad(indicesolidaridad);
}

function imgSiguientesolidaridad() {
    if(indicesolidaridad < totalsolidaridad) {
        indicesolidaridad++;
    }else {
        indicesolidaridad = 1;
    }
    mostrarsolidaridad(indicesolidaridad);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-solidaridad").addEventListener("click", imgAnteriorsolidaridad);
//-- Pulsar flecha derecha.
document.getElementById("der-solidaridad").addEventListener("click", imgSiguientesolidaridad);

//-- Punto de inicio del programa.
mostrarsolidaridad(indicesolidaridad);