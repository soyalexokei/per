var videosIDalemania = ["J-_pxu-SOlU"];
var indiceAlemania = 0;

// Función para agregar videos al carrusel
function cargarVideos11() {

    var videosAlemania = document.getElementById("videos-pais11");
    videosAlemania.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDalemania[indiceAlemania];
    iframe.allowFullscreen = true;
    videosAlemania.appendChild(iframe);
}

document.getElementById("flecha-izquierda24").addEventListener("click", () => {
    indiceAlemania = (indiceAlemania - 1 + videosIDalemania.length) % videosIDalemania.length;
    cargarVideos11();
});

document.getElementById("flecha-derecha24").addEventListener("click", () => {
    indiceAlemania = (indiceAlemania + 1) % videosIDalemania.length;
    cargarVideos11();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video11').on('shown.bs.modal', function () {
    cargarVideos11();
});