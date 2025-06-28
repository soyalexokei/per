//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDmadrid =
[
    "",
    "",
    "",
    "",
    "",
];
var imagenesIDmadrid =
[
    /* Junio de 2025 - Despedida de Soltero de Colombi */
    "https://i.postimg.cc/x8dkCWf7/IMG-20250627-154547.png",
    "https://i.postimg.cc/t70rytys/IMG-20250627-154044.png",
    "https://i.postimg.cc/63Nt53xq/IMG-20250628-181859.png",
    "https://i.postimg.cc/nzYZsJnk/IMG-20250628-181916.png",
    "https://i.postimg.cc/BvFJ0FyR/IMG-20250628-182752-784.webp",
];
var indicemadrid = 1;
var pantallamadrid = document.getElementById('ver-madrid');
var imgmadrid = document.createElement("img");
var iframemadrid = document.createElement("iframe");

//-- Ctes.
const totalmadrid = 5;

function mostrarmadrid(auxmadrid) {
    
    //-- Limpiar la pantalla.
    pantallamadrid.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDmadrid[auxmadrid-1]) {
        imgmadrid.src = imagenesIDmadrid[auxmadrid-1];
        pantallamadrid.appendChild(imgmadrid);
    }else {
        iframemadrid.src = videosIDmadrid[auxmadrid-1];
        iframemadrid.width = "400";
        iframemadrid.height = "533";
        iframemadrid.setAttribute("allow", "autoplay");
        iframemadrid.setAttribute("allowFullscreen", "false");
        pantallamadrid.appendChild(iframemadrid);
    }
}

function imgAnteriormadrid() {
    if(indicemadrid > 1) {
        indicemadrid--;
    }else {
        indicemadrid = totalmadrid;
    }
    mostrarmadrid(indicemadrid);
}

function imgSiguientemadrid() {
    if(indicemadrid < totalmadrid) {
        indicemadrid++;
    }else {
        indicemadrid = 1;
    }
    mostrarmadrid(indicemadrid);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-madrid").addEventListener("click", imgAnteriormadrid);
//-- Pulsar flecha derecha.
document.getElementById("der-madrid").addEventListener("click", imgSiguientemadrid);

//-- Punto de inicio del programa.
mostrarmadrid(indicemadrid);