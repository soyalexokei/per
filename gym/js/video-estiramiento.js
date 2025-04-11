// Función para agregar videos al carrusel
function cargarEstiramiento() {

    var videosEstiramiento = document.getElementById("proyeccion-estiramiento");
    videosEstiramiento.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/gC53ODoNF5M";
    iframe.allowFullscreen = true;
    videosEstiramiento.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-estiramiento').on('shown.bs.modal', function () {
    cargarEstiramiento();
});