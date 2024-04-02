var videosIDportugal = ["s1YN5d8BUlo", "eiqsB64eVO4", "tq02Cn10p9E", "3gLSZA5vM1o"];
var indicePortugal = 0;
const totalPaisVideo2 = 4;

// Función para agregar videos al carrusel
function cargarVideos() {

    var videosPortugal = document.getElementById("videos-pais2");
    videosPortugal.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDportugal[indicePortugal];
    iframe.allowFullscreen = true;
    videosPortugal.appendChild(iframe);
}

function reproductorVideoPais2(contP2) {

    if(contP2 < 1) {
        contP2 = totalPaisVideo2;
    }else if(contP2 > totalPaisVideo2) {
        contP2 = 1;
    }

    var videoPaisId = obtenerVideoId2(contP2);
    playerGo2(videoPaisId);
    presenteVideo2 = contP2;
}

document.getElementById("flecha-izquierda6").addEventListener("click", () => {
    indicePortugal = (indicePortugal - 1 + videosIDportugal.length) % videosIDportugal.length;
    cargarVideos();
});

document.getElementById("flecha-derecha6").addEventListener("click", () => {
    indicePortugal = (indicePortugal + 1) % videosIDportugal.length;
    cargarVideos();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video2').on('shown.bs.modal', function () {
    cargarVideos();
});