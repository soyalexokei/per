// Función para agregar videos al carrusel
function cargarNatacionApnea() {

    var videosNatacionApnea = document.getElementById("proyeccion-natacion-apnea");
    videosNatacionApnea.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/jlpk7g9qecw";
    iframe.allowFullscreen = true;
    videosNatacionApnea.appendChild(iframe);
}

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#video-natacion-apnea').on('shown.bs.modal', function () {
    cargarNatacionApnea();
});