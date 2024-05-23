var videosIDbadajoz = ["xu5MlwGWBnE"];
var indiceBadajoz = 0;

// Función para agregar videos al carrusel
function ponerVideos19() {

    var videosBadajoz = document.getElementById("pantalla-vid19");
    videosBadajoz.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDbadajoz[indiceBadajoz];
    iframe.allowFullscreen = true;
    videosBadajoz.appendChild(iframe);
}

document.getElementById("go-left19").addEventListener("click", () => {
    indiceBadajoz = (indiceBadajoz - 1 + videosIDbadajoz.length) % videosIDbadajoz.length;
    ponerVideos19();
});

document.getElementById("go-right19").addEventListener("click", () => {
    indiceBadajoz = (indiceBadajoz + 1) % videosIDbadajoz.length;
    ponerVideos19();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid19').on('shown.bs.modal', function () {
    ponerVideos19();
});