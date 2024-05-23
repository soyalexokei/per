var videosIDmalaga = ["OvbWO-W0yO8", "Ffmm6oayzEI", "TgQSHfCxgjA", "1NYmtITbECg",
"rULTtsJxY3k", "2r3IORHhtpU", "V2AGrsIczxs", "A6YB3y8C3Uw"];
var indiceMalaga = 0;

// Función para agregar videos al carrusel
function ponerVideos23() {

    var videosMalaga = document.getElementById("pantalla-vid23");
    videosMalaga.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDmalaga[indiceMalaga];
    iframe.allowFullscreen = true;
    videosMalaga.appendChild(iframe);
}

document.getElementById("go-left23").addEventListener("click", () => {
    indiceMalaga = (indiceMalaga - 1 + videosIDmalaga.length) % videosIDmalaga.length;
    ponerVideos23();
});

document.getElementById("go-right23").addEventListener("click", () => {
    indiceMalaga = (indiceMalaga + 1) % videosIDmalaga.length;
    ponerVideos23();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid23').on('shown.bs.modal', function () {
    ponerVideos23();
});