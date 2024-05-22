var videosIDbarcelona = ["11cAiCpb1pw", "lcRxbNxHbVU", "ObJBKtKD66o", "SdWfMZ7Wv0Y", "cWCB7n3YIac", "bEBU-o7_zoA", "T0lEgDiyv3c", "GklhTfphwHs", "ETLANaon-ho", "njJKC2rMyWw", "cnUcrzuuy30", "j68j5hHCUeU", "qnplBUlfELc", "r7IR8AslERI"];
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