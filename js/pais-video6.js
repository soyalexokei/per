var videosIDhungary = ["JYXSdmnZIUU", "tLhtvQ54AvE", "h1Jbe7EYf_Q"];
var indiceHungary = 0;

// Función para agregar videos al carrusel
function cargarVideos6() {

    var videosHungary = document.getElementById("videos-pais6");
    videosHungary.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDhungary[indiceHungary];
    iframe.allowFullscreen = true;
    videosHungary.appendChild(iframe);
}

document.getElementById("flecha-izquierda14").addEventListener("click", () => {
    indiceHungary = (indiceHungary - 1 + videosIDhungary.length) % videosIDhungary.length;
    cargarVideos6();
});

document.getElementById("flecha-derecha14").addEventListener("click", () => {
    indiceHungary = (indiceHungary + 1) % videosIDhungary.length;
    cargarVideos6();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video6').on('shown.bs.modal', function () {
    cargarVideos6();
});