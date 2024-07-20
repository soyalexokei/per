// Función para agregar videos al carrusel
function cargarPierna5() {

    var videosPierna5 = document.getElementById("proyeccion-pierna-5");
    videosPierna5.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/oQpw5bODru0";
    iframe.allowFullscreen = true;
    videosPierna5.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pierna-5').on('shown.bs.modal', function () {
    cargarPierna5();
});