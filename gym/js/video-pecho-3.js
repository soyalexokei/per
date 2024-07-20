// Función para agregar videos al carrusel
function cargarPecho3() {

    var videosPecho3 = document.getElementById("proyeccion-pecho-3");
    videosPecho3.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/IVXNmo1N0cw";
    iframe.allowFullscreen = true;
    videosPecho3.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pecho-3').on('shown.bs.modal', function () {
    cargarPecho3();
});