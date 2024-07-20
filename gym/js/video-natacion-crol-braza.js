// Función para agregar videos al carrusel
function cargarNatacionCrolBraza() {

    var videosNatacionCrolBraza = document.getElementById("proyeccion-natacion-crol-braza");
    videosNatacionCrolBraza.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/3QyiHNUbxrA";
    iframe.allowFullscreen = true;
    videosNatacionCrolBraza.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-natacion-crol-braza').on('shown.bs.modal', function () {
    cargarNatacionCrolBraza();
});