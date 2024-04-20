var videosIDmontenegro = ["qKxMs3R-4UA", "iSQOpOChzYs", "kVJi0DUagIM", "EoioMgzx-ug", "Hllh6hyxrs4",
"XVOFNUxsoLg", "U9Bx2euDKtA", "H1ATXgPLjYY", "KZkp8sBK1F0", "Hv_XcfjiPnw",
"C2GpNDUg7OY", "IjIZrfX0Pug", "P2h7P7YN8K8", "8B11Kq0iuzg", "nHdq7DIXZxk",
"l8m91nOZd6A", "LtLtIsLoV-U", "YJMyqmoDOvE", "6FGl60n7gZg", "lcO9LhNS1u4",
"EekbRChkwpY"];
var indiceMontenegro = 0;

// Función para agregar videos al carrusel
function cargarVideos8() {

    var videosMontenegro = document.getElementById("videos-pais8");
    videosMontenegro.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDmontenegro[indiceMontenegro];
    iframe.allowFullscreen = true;
    videosMontenegro.appendChild(iframe);
}

document.getElementById("flecha-izquierda18").addEventListener("click", () => {
    indiceMontenegro = (indiceMontenegro - 1 + videosIDmontenegro.length) % videosIDmontenegro.length;
    cargarVideos8();
});

document.getElementById("flecha-derecha18").addEventListener("click", () => {
    indiceMontenegro = (indiceMontenegro + 1) % videosIDmontenegro.length;
    cargarVideos8();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video8').on('shown.bs.modal', function () {
    cargarVideos8();
});