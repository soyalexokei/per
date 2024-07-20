// Función para agregar videos al carrusel
function cargarAbdominales() {

    var videosAbdominales = document.getElementById("proyeccion-abdominales");
    videosAbdominales.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/iaEeVHea3Fc";
    iframe.allowFullscreen = true;
    videosAbdominales.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-abdominales').on('shown.bs.modal', function () {
    cargarAbdominales();
});