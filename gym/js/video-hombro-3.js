// Función para agregar videos al carrusel
function cargarHombro3() {

    var videosHombro3 = document.getElementById("proyeccion-hombro-3");
    videosHombro3.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/ItBASjwB_Wo";
    iframe.allowFullscreen = true;
    videosHombro3.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-hombro-3').on('shown.bs.modal', function () {
    cargarHombro3();
});