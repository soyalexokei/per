// Función para agregar videos al carrusel
function cargarEspalda4() {

    var videosEspalda4 = document.getElementById("proyeccion-espalda-4");
    videosEspalda4.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/OoG6XtJeygk";
    iframe.allowFullscreen = true;
    videosEspalda4.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-espalda-4').on('shown.bs.modal', function () {
    cargarEspalda4();
});