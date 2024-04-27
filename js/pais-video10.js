var videosIDaustria = ["lmi88Z4e_jM", "ylvN4v_bjzo", "fGMVDbNio4w", "sAN5jjplVKA", "QHPy_Whx1Zs", "XAGT_qfNxlQ",
"5LhDPCoeUFk", "l8x3XSBgZI8", "7fAc5ZtVHeE", "6_TcDwA7jHg", "ZkT7xsCizCM"];
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