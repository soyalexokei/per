var videosIDmontenegro = ["", "", "", "", "", "", ""];
var indiceMontenegro = 0;

// Función para agregar videos al carrusel
function cargarVideos8() {

    var videosMontenegro = document.getElementById("videos-pais8");
    videosMontenegro.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDmontenegro[indiceMontenegro];
    iframe.allowFullscreen = true;
    videosMontenegro.appendChild(iframe);
}

document.getElementById("flecha-izquierda18").addEventListener("click", () => {
    indiceMontenegro = (indiceMontenegro - 1 + videosIDmontenegro.length) % videosIDmontenegro.length;
    cargarVideos8();
});

document.getElementById("flecha-derecha18").addEventListener("click", () => {
    indiceMontenegro = (indiceMontenegro + 1) % videosIDmontenegro.length;
    cargarVideos8();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video8').on('shown.bs.modal', function () {
    cargarVideos8();
});