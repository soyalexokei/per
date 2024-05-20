var videosIDzaragoza = ["gCPeTvJ61Ws", "RXNhJc0HoMA"];
var indiceZaragoza = 0;

// Función para agregar videos al carrusel
function ponerVideos13() {

    var videosZaragoza = document.getElementById("pantalla-vid13");
    videosZaragoza.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDzaragoza[indiceZaragoza];
    iframe.allowFullscreen = true;
    videosZaragoza.appendChild(iframe);
}

document.getElementById("go-left13").addEventListener("click", () => {
    indiceZaragoza = (indiceZaragoza - 1 + videosIDzaragoza.length) % videosIDzaragoza.length;
    ponerVideos13();
});

document.getElementById("go-right13").addEventListener("click", () => {
    indiceZaragoza = (indiceZaragoza + 1) % videosIDzaragoza.length;
    ponerVideos13();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid13').on('shown.bs.modal', function () {
    ponerVideos13();
});