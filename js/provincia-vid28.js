var videosIDmallorca = ["eHqjrqVwc70", "M42WLbBofXE", "bROQv2-a-9I", "bqNcibL3CJE", "3-3b83dZCNk", "RnbMGv9okug", "6__feLQFZmU", "EfsTcvrBMGM", "NihiFd5bT1Q"];
var indiceMallorca = 0;

// Función para agregar videos al carrusel
function ponerVideos28() {

    var videosMallorca = document.getElementById("pantalla-vid28");
    videosMallorca.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDmallorca[indiceMallorca];
    iframe.allowFullscreen = true;
    videosMallorca.appendChild(iframe);
}

document.getElementById("go-left28").addEventListener("click", () => {
    indiceMallorca = (indiceMallorca - 1 + videosIDmallorca.length) % videosIDmallorca.length;
    ponerVideos28();
});

document.getElementById("go-right28").addEventListener("click", () => {
    indiceMallorca = (indiceMallorca + 1) % videosIDmallorca.length;
    ponerVideos28();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid28').on('shown.bs.modal', function () {
    ponerVideos28();
});