var videosIDavila = ["OtdKvC2EYes", "SssTpNrkST8"];
var indiceAvila = 0;

// Función para agregar videos al carrusel
function ponerVideos8() {

    var videosAvila = document.getElementById("pantalla-vid8");
    videosAvila.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDavila[indiceAvila];
    iframe.allowFullscreen = true;
    videosAvila.appendChild(iframe);
}

document.getElementById("go-left8").addEventListener("click", () => {
    indiceAvila = (indiceAvila - 1 + videosIDavila.length) % videosIDavila.length;
    ponerVideos8();
});

document.getElementById("go-right8").addEventListener("click", () => {
    indiceAvila = (indiceAvila + 1) % videosIDavila.length;
    ponerVideos8();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid8').on('shown.bs.modal', function () {
    ponerVideos8();
});