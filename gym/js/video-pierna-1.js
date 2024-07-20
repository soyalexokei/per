// Función para agregar videos al carrusel
function cargarPierna1() {

    var videosPierna1 = document.getElementById("proyeccion-pierna-1");
    videosPierna1.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/dsCuiccYNGs";
    iframe.allowFullscreen = true;
    videosPierna1.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-pierna-1').on('shown.bs.modal', function () {
    cargarPierna1();
});