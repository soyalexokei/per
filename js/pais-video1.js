var videosIDusa = ["nf1kb3TSD9w", "6E8OuGFDB8s", "jA_PeI3VieM", "-X-8jDfjExo", "zkhfF_SHNjA", "E2e1P1dsUYg", "Abq0iuBNCBU", "N4dxwAgW_X4", "sr1pmvg9KIs", "j-K_xTuppJQ", "50TjMT4zGrc", "DW--iP-CleY", "AY6cu8ShCQA", "VMuzCFVrCgQ", "MX_iH72HrKE", "r0sSaHApP8w", "kBAjLuGFMw0", "2ZReINrYpKQ"];
var indiceUSA = 0;

// Función para agregar videos al carrusel
function cargarVideos1() {

    var videosUSA = document.getElementById("videos-pais1");
    videosUSA.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDusa[indiceUSA];
    iframe.allowFullscreen = true;
    videosUSA.appendChild(iframe);
}

document.getElementById("flecha-izquierda4").addEventListener("click", () => {
    indiceUSA = (indiceUSA - 1 + videosIDusa.length) % videosIDusa.length;
    cargarVideos1();
});

document.getElementById("flecha-derecha4").addEventListener("click", () => {
    indiceUSA = (indiceUSA + 1) % videosIDusa.length;
    cargarVideos1();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video1').on('shown.bs.modal', function () {
    cargarVideos1();
});