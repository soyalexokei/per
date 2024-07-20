// Función para agregar videos al carrusel
function cargarPierna3() {

    var videosPierna3 = document.getElementById("proyeccion-pierna-3");
    videosPierna3.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/Mr4W1DCj05U";
    iframe.allowFullscreen = true;
    videosPierna3.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pierna-3').on('shown.bs.modal', function () {
    cargarPierna3();
});