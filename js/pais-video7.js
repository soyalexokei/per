var videosIDgibraltar = ["YfLn5mFXeD4", "URnfn7Q6lWI", "vuIfzEm9fMs", "mBLUP55pRbE", "3TNSTkGmAWc", "jQdTfhk-VGU", "QaMC9KvexSw"];
var indiceGibraltar = 0;

// Función para agregar videos al carrusel
function cargarVideos7() {

    var videosGibraltar = document.getElementById("videos-pais7");
    videosGibraltar.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDgibraltar[indiceGibraltar];
    iframe.allowFullscreen = true;
    videosGibraltar.appendChild(iframe);
}

document.getElementById("flecha-izquierda16").addEventListener("click", () => {
    indiceGibraltar = (indiceGibraltar - 1 + videosIDgibraltar.length) % videosIDgibraltar.length;
    cargarVideos7();
});

document.getElementById("flecha-derecha16").addEventListener("click", () => {
    indiceGibraltar = (indiceGibraltar + 1) % videosIDgibraltar.length;
    cargarVideos7();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video7').on('shown.bs.modal', function () {
    cargarVideos7();
});