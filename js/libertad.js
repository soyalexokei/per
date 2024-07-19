var videosIDlibertad = ["IeBdDVxoLdI"];
var indiceLibertad = 0;

// Función para agregar videos al carrusel
function cargarVideosLibertad() {

    var videosLibertad = document.getElementById("videos-libertad");
    videosLibertad.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDlibertad[indiceLibertad];
    iframe.allowFullscreen = true;
    videosLibertad.appendChild(iframe);
}

document.getElementById("flecha-libertad-izq").addEventListener("click", () => {
    indiceLibertad = (indiceLibertad - 1 + videosIDlibertad.length) % videosIDlibertad.length;
    cargarVideosLibertad();
});

document.getElementById("flecha-libertad-der").addEventListener("click", () => {
    indiceLibertad = (indiceLibertad + 1) % videosIDlibertad.length;
    cargarVideosLibertad();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#libertario').on('shown.bs.modal', function () {
    cargarVideosLibertad();
});