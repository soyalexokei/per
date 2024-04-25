var videosIDaustria = ["lmi88Z4e_jM"];
var indiceAustria = 0;

// Función para agregar videos al carrusel
function cargarVideos10() {

    var videosAustria = document.getElementById("videos-pais10");
    videosAustria.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDaustria[indiceAustria];
    iframe.allowFullscreen = true;
    videosAustria.appendChild(iframe);
}

document.getElementById("flecha-izquierda22").addEventListener("click", () => {
    indiceAustria = (indiceAustria - 1 + videosIDaustria.length) % videosIDaustria.length;
    cargarVideos10();
});

document.getElementById("flecha-derecha22").addEventListener("click", () => {
    indiceAustria = (indiceAustria + 1) % videosIDaustria.length;
    cargarVideos10();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video10').on('shown.bs.modal', function () {
    cargarVideos10();
});