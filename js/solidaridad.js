// Función para agregar videos al carrusel
function cargarVideos0() {

    var videosSolidaridad = document.getElementById("videos-solidaridad");
    videosSolidaridad.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/CpCaowWDQDw";
    iframe.allowFullscreen = true;
    videosSolidaridad.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#solidaridad').on('shown.bs.modal', function () {
    cargarVideos0();
});