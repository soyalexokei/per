// Función para agregar videos al carrusel
function cargarPecho1() {

    var videosPecho1 = document.getElementById("proyeccion-pecho-1");
    videosPecho1.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/";
    iframe.allowFullscreen = true;
    videosPecho1.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pecho-1').on('shown.bs.modal', function () {
    cargarPecho1();
});