// Función para agregar videos al carrusel
function cargarCardio() {

    var videosCardio = document.getElementById("proyeccion-cardio");
    videosCardio.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/PTwpGgCSoHs";
    iframe.allowFullscreen = true;
    videosCardio.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-cardio').on('shown.bs.modal', function () {
    cargarCardio();
});