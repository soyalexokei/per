// Función para agregar videos al carrusel
function cargarPecho2() {

    var videosPecho2 = document.getElementById("proyeccion-pecho-2");
    videosPecho2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/";
    iframe.allowFullscreen = true;
    videosPecho2.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pecho-2').on('shown.bs.modal', function () {
    cargarPecho2();
});