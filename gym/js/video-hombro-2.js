// Función para agregar videos al carrusel
function cargarHombro2() {

    var videosHombro2 = document.getElementById("proyeccion-hombro-2");
    videosHombro2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/01kUuefI4Qo";
    iframe.allowFullscreen = true;
    videosHombro2.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-hombro-2').on('shown.bs.modal', function () {
    cargarHombro2();
});