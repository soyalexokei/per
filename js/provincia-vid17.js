var videosIDvalencia = ["5RpNn2FUH6U", "g4fDwbpjTe8", "HvdqGbJ_Kps"];
var indiceValencia = 0;

// Función para agregar videos al carrusel
function ponerVideos17() {

    var videosValencia = document.getElementById("pantalla-vid17");
    videosValencia.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDvalencia[indiceValencia];
    iframe.allowFullscreen = true;
    videosValencia.appendChild(iframe);
}

document.getElementById("go-left17").addEventListener("click", () => {
    indiceValencia = (indiceValencia - 1 + videosIDvalencia.length) % videosIDvalencia.length;
    ponerVideos17();
});

document.getElementById("go-right17").addEventListener("click", () => {
    indiceValencia = (indiceValencia + 1) % videosIDvalencia.length;
    ponerVideos17();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid17').on('shown.bs.modal', function () {
    ponerVideos17();
});