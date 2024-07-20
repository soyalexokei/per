// Función para agregar videos al carrusel
function cargarEspalda3() {

    var videosEspalda3 = document.getElementById("proyeccion-espalda-3");
    videosEspalda3.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/x2Y6Mb41zjY";
    iframe.allowFullscreen = true;
    videosEspalda3.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-espalda-3').on('shown.bs.modal', function () {
    cargarEspalda3();
});