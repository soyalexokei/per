var videosIDsolidaridad = [""];
var indiceSolidaridad = 0;

// Función para agregar videos al carrusel
function cargarVideos0() {

    var videosSolidaridad = document.getElementById("videos-solidaridad");
    videosSolidaridad.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDsolidaridad[indiceSolidaridad];
    iframe.allowFullscreen = true;
    videosSolidaridad.appendChild(iframe);
}

document.getElementById("flecha-izquierda0").addEventListener("click", () => {
    indiceSolidaridad = (indiceSolidaridad - 1 + videosIDsolidaridad.length) % videosIDsolidaridad.length;
    cargarVideos0();
});

document.getElementById("flecha-derecha0").addEventListener("click", () => {
    indiceSolidaridad = (indiceSolidaridad + 1) % videosIDsolidaridad.length;
    cargarVideos0();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#solidaridad').on('shown.bs.modal', function () {
    cargarVideos0();
});