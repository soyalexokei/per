// Función para agregar videos al carrusel
function cargarHombro1() {

    var videosHombro1 = document.getElementById("proyeccion-hombro-1");
    videosHombro1.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/96xeqjYXkT4";
    iframe.allowFullscreen = true;
    videosHombro1.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-hombro-1').on('shown.bs.modal', function () {
    cargarHombro1();
});