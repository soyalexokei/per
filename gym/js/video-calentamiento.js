// Función para agregar videos al carrusel
function cargarCalentamiento() {

    var videosCalentamiento = document.getElementById("proyeccion-calentamiento");
    videosCalentamiento.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/iqBkUGKd4Eo";
    iframe.allowFullscreen = true;
    videosCalentamiento.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-calentamiento').on('shown.bs.modal', function () {
    cargarCalentamiento();
});