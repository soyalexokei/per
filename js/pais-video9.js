var videosIDserbia = ["OVWkzsmvPBw", "WwLNX99kb6A", "Z25Z1l-sFmI", "W1Obgu2YlcQ", "NNAAGDnMwMY",
"E7d913JBHFg", "rd4ynoeNLjc", "13b_Riw1aQw", "Lj8e5AtT1sM", "8R5jpNnIkaM", "GFfUwzTK5yM",
"_4a_hRU9wG4", "XYy2-g1fnRg", "2Pa1qCsUI1Q", "XKNAKGtnbzs"];
var indiceSerbia = 0;

// Función para agregar videos al carrusel
function cargarVideos9() {

    var videosSerbia = document.getElementById("videos-pais9");
    videosSerbia.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDserbia[indiceSerbia];
    iframe.allowFullscreen = true;
    videosSerbia.appendChild(iframe);
}

document.getElementById("flecha-izquierda20").addEventListener("click", () => {
    indiceSerbia = (indiceSerbia - 1 + videosIDserbia.length) % videosIDserbia.length;
    cargarVideos9();
});

document.getElementById("flecha-derecha20").addEventListener("click", () => {
    indiceSerbia = (indiceSerbia + 1) % videosIDserbia.length;
    cargarVideos9();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video9').on('shown.bs.modal', function () {
    cargarVideos9();
});