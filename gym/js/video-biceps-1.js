// Función para agregar videos al carrusel
function cargarBiceps1() {

    var videosBiceps1 = document.getElementById("proyeccion-biceps-1");
    videosBiceps1.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/0iEBJemttHk";
    iframe.allowFullscreen = true;
    videosBiceps1.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-biceps-1').on('shown.bs.modal', function () {
    cargarBiceps1();
});