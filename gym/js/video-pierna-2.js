// Función para agregar videos al carrusel
function cargarPierna2() {

    var videosPierna2 = document.getElementById("proyeccion-pierna-2");
    videosPierna2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/3T7EFxh8kq4";
    iframe.allowFullscreen = true;
    videosPierna2.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pierna-2').on('shown.bs.modal', function () {
    cargarPierna2();
});