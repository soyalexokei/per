// Función para agregar videos al carrusel
function cargarTriceps1() {

    var videosTriceps1 = document.getElementById("proyeccion-triceps-1");
    videosTriceps1.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/EmhtA32fmcU";
    iframe.allowFullscreen = true;
    videosTriceps1.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-triceps-1').on('shown.bs.modal', function () {
    cargarTriceps1();
});