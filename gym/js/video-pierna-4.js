// Función para agregar videos al carrusel
function cargarPierna4() {

    var videosPierna4 = document.getElementById("proyeccion-pierna-4");
    videosPierna4.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/Ax6aigFZWSw";
    iframe.allowFullscreen = true;
    videosPierna4.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pierna-4').on('shown.bs.modal', function () {
    cargarPierna4();
});