//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDmadrid =
[
    /* Junio de 2025 - Despedida de Soltero de Colombi */
    "",
    "",
    "https://www.youtube.com/embed/z2VSs76sbHA?autoplay=1&loop=1&playlist=z2VSs76sbHA&controls=0&rel=0",
    "",
    "",
    "https://www.youtube.com/embed/ttZWCvyfsWE?autoplay=1&loop=1&playlist=ttZWCvyfsWE&controls=0&rel=0",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    /* Junio de 2025 - International Dinner in Retiro Park */
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
    "",
    "https://i.postimg.cc/63Nt53xq/IMG-20250628-181859.png",
    "https://i.postimg.cc/nzYZsJnk/IMG-20250628-181916.png",
    "",
    "https://i.postimg.cc/BvFJ0FyR/IMG-20250628-182752-784.webp",
    "https://i.postimg.cc/KvZpLsXJ/IMG-20250628-193912-274.webp",
    "https://i.postimg.cc/vZTP2gZn/IMG-20250628-194243-902.webp",
    "https://i.postimg.cc/C50PccRM/IMG-20250628-194446-908.webp",
    "https://i.postimg.cc/cCcD2f3R/IMG-20250628-194611-185.webp",
    "https://i.postimg.cc/CLmP4HSY/IMG-20250628-194936-117.webp",
    "https://i.postimg.cc/Y2NyvBPv/IMG-20250628-195236-083.webp",
    "https://i.postimg.cc/cHRZhJVK/IMG-20250630-003949.png",
    "https://i.postimg.cc/g06GwssH/IMG-20250630-003934-311.webp",
    "https://i.postimg.cc/RF54wtb5/IMG-20250630-003622-931.webp",
    /* Junio de 2025 - International Dinner in Retiro Park */
    "https://i.postimg.cc/BbDj3sLH/IMG-20250630-011343-537.webp",
    "https://i.postimg.cc/gkFwDwQD/IMG-20250630-011642-024.webp",
    "https://i.postimg.cc/y6SgchQx/IMG-20250630-011911-821.webp",
    "https://i.postimg.cc/50DXDj0f/IMG-20250630-012212-193.jpg",
];
var indicemadrid = 1;
var pantallamadrid = document.getElementById('ver-madrid');
var imgmadrid = document.createElement("img");
var iframemadrid = document.createElement("iframe");

//-- Ctes.
const totalmadrid = 20;

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