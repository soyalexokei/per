var videosIDsegovia = ["TF-Ah7SBNuM", "AzvB9XmxD-Y", "hDa5qfnoJWY", "foXa2MZnkjA", "1I62ZGMF9uE", "z2cYKgB62dk"];
var indiceSegovia = 0;

// Función para agregar videos al carrusel
function ponerVideos10() {

    var videosSegovia = document.getElementById("pantalla-vid10");
    videosSegovia.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDsegovia[indiceSegovia];
    iframe.allowFullscreen = true;
    videosSegovia.appendChild(iframe);
}

document.getElementById("go-left10").addEventListener("click", () => {
    indiceSegovia = (indiceSegovia - 1 + videosIDsegovia.length) % videosIDsegovia.length;
    ponerVideos10();
});

document.getElementById("go-right10").addEventListener("click", () => {
    indiceSegovia = (indiceSegovia + 1) % videosIDsegovia.length;
    ponerVideos10();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid10').on('shown.bs.modal', function () {
    ponerVideos10();
});