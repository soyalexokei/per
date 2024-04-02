var videosIDportugal = ["s1YN5d8BUlo", "eiqsB64eVO4", "tq02Cn10p9E", "3gLSZA5vM1o"];
var indicePortugal = 0;

// Función para agregar videos al carrusel
function cargarVideos() {

    var videosPortugal = document.getElementById("videos-pais2");
    videosPortugal.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDportugal[indicePortugal];
    iframe.allowFullscreen = true;
    videosPortugal.appendChild(iframe);
}

document.getElementById("flecha-izquierda6").addEventListener("click", () => {
    indicePortugal = (indicePortugal - 1 + videosIDportugal.length) % videosIDportugal.length;
    cargarVideos();
});

document.getElementById("flecha-derecha6").addEventListener("click", () => {
    indicePortugal = (indicePortugal + 1) % videosIDportugal.length;
    cargarVideos();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video2').on('shown.bs.modal', function () {
    cargarVideos();
});