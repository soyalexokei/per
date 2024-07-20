// Función para agregar videos al carrusel
function cargarEspalda1() {

    var videosEspalda1 = document.getElementById("proyeccion-espalda-1");
    videosEspalda1.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/v_Dy-LDFqC4";
    iframe.allowFullscreen = true;
    videosEspalda1.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-espalda-1').on('shown.bs.modal', function () {
    cargarEspalda1();
});