var videosIDkosovo = ["cr1RAipLYd0", "Vug9yUIbGGw", "prEXA0HiHdc", "NOlUcPd2Ens", "qgC98tuh_fo", "_dlDVlVk_NA", "qPvKur-jnzI", "aGEblhSjLkA", "lrq6L_GXr3U", "KDSLhfilP_s", "hwpeS32xCis"];
var indiceKosovo = 0;

// Función para agregar videos al carrusel
function cargarVideos3() {

    var videosKosovo = document.getElementById("videos-pais4");
    videosKosovo.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDkosovo[indiceKosovo];
    iframe.allowFullscreen = true;
    videosKosovo.appendChild(iframe);
}

document.getElementById("flecha-izquierda10").addEventListener("click", () => {
    indiceKosovo = (indiceKosovo - 1 + videosIDkosovo.length) % videosIDkosovo.length;
    cargarVideos3();
});

document.getElementById("flecha-derecha10").addEventListener("click", () => {
    indiceKosovo = (indiceKosovo + 1) % videosIDkosovo.length;
    cargarVideos3();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video4').on('shown.bs.modal', function () {
    cargarVideos3();
});