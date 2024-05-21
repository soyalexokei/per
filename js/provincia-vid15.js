var videosIDbarcelona = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var indiceBarcelona = 0;

// Función para agregar videos al carrusel
function ponerVideos15() {

    var videosBarcelona = document.getElementById("pantalla-vid15");
    videosBarcelona.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDbarcelona[indiceBarcelona];
    iframe.allowFullscreen = true;
    videosBarcelona.appendChild(iframe);
}

document.getElementById("go-left15").addEventListener("click", () => {
    indiceBarcelona = (indiceBarcelona - 1 + videosIDbarcelona.length) % videosIDbarcelona.length;
    ponerVideos15();
});

document.getElementById("go-right15").addEventListener("click", () => {
    indiceBarcelona = (indiceBarcelona + 1) % videosIDbarcelona.length;
    ponerVideos15();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid15').on('shown.bs.modal', function () {
    ponerVideos15();
});