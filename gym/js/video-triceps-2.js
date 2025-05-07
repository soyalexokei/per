// Función para agregar videos al carrusel
function cargarTriceps2() {

    var videosTriceps2 = document.getElementById("proyeccion-triceps-2");
    videosTriceps2.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/Zj1h0ObPsp8";
    iframe.allowFullscreen = true;
    videosTriceps2.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-triceps-2').on('shown.bs.modal', function () {
    cargarTriceps2();
});