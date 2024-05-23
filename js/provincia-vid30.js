var videosIDibiza = ["1HNSWf7MIWI"];
var indiceIbiza = 0;

// Función para agregar videos al carrusel
function ponerVideos30() {

    var videosIbiza = document.getElementById("pantalla-vid30");
    videosIbiza.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDibiza[indiceIbiza];
    iframe.allowFullscreen = true;
    videosIbiza.appendChild(iframe);
}

document.getElementById("go-left30").addEventListener("click", () => {
    indiceIbiza = (indiceIbiza - 1 + videosIDibiza.length) % videosIDibiza.length;
    ponerVideos30();
});

document.getElementById("go-right30").addEventListener("click", () => {
    indiceIbiza = (indiceIbiza + 1) % videosIDibiza.length;
    ponerVideos30();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid30').on('shown.bs.modal', function () {
    ponerVideos30();
});