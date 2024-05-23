var videosIDcastellon = ["xvvYcjbMaig", "pjz78f-y2m0", "bWsOkhGJdUY", "IHlkPRLuVlA", "vcJf-gZkGEQ",
"AGkxJ51sZ1g", "SfxoSxY306I", "ZSdVUz95zNs", "68yD_7SQEI4", "OzSZqlEpHtE"];
var indiceCastellon = 0;

// Función para agregar videos al carrusel
function ponerVideos16() {

    var videosCastellon = document.getElementById("pantalla-vid16");
    videosCastellon.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDcastellon[indiceCastellon];
    iframe.allowFullscreen = true;
    videosCastellon.appendChild(iframe);
}

document.getElementById("go-left16").addEventListener("click", () => {
    indiceCastellon = (indiceCastellon - 1 + videosIDcastellon.length) % videosIDcastellon.length;
    ponerVideos16();
});

document.getElementById("go-right16").addEventListener("click", () => {
    indiceCastellon = (indiceCastellon + 1) % videosIDcastellon.length;
    ponerVideos16();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid16').on('shown.bs.modal', function () {
    ponerVideos16();
});