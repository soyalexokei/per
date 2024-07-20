// Función para agregar videos al carrusel
function cargarEspalda2() {

    var videosEspalda2 = document.getElementById("proyeccion-espalda-2");
    videosEspalda2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/gkbMyzclOjc";
    iframe.allowFullscreen = true;
    videosEspalda2.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-espalda-2').on('shown.bs.modal', function () {
    cargarEspalda2();
});