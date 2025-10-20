// Función para agregar videos al carrusel
function cargarAbdoInf() {

    var videosAbdoInf = document.getElementById("abdom-inferiores");
    videosAbdoInf.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/6NA99YASwd8";
    iframe.allowFullscreen = true;
    videosAbdoInf.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-abdominales-inferiores').on('shown.bs.modal', function () {
    cargarAbdoInf();
});