var videosIDusa =
[
    
];
var indiceUSA = 0;

// Función para agregar videos al carrusel
function cargarVideos1() {

    var videosUSA = document.getElementById("videos-pais1");
    videosUSA.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDusa[indiceUSA];
    iframe.allowFullscreen = true;
    videosUSA.appendChild(iframe);
}

document.getElementById("flecha-izquierda4").addEventListener("click", () => {
    indiceUSA = (indiceUSA - 1 + videosIDusa.length) % videosIDusa.length;
    cargarVideos1();
});

document.getElementById("flecha-derecha4").addEventListener("click", () => {
    indiceUSA = (indiceUSA + 1) % videosIDusa.length;
    cargarVideos1();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video1').on('shown.bs.modal', function () {
    cargarVideos1();
});