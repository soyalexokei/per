// Función para agregar videos al carrusel
function cargarBiceps2() {

    var videosBiceps2 = document.getElementById("proyeccion-biceps-2");
    videosBiceps2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/j99intoPKGE";
    iframe.allowFullscreen = true;
    videosBiceps2.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-biceps-2').on('shown.bs.modal', function () {
    cargarBiceps2();
});