//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDmadrid =
[
    /* Enero de 2025 - Evento Binance */
    "",
    "",
    "",
    "",
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
    /* Junio de 2025 - BBQ con amigos del curro PSS/Accenture */
    "",
    /* Junio de 2025 - Fiesta Años 70's familiar */
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    /* Julio de 2025 - Domingo de Ruta en bici */
    "",
    "",
    "",
    "",
    "",
];
var imagenesIDmadrid =
[
    /* Enero de 2025 - Evento Binance */
    "https://i.postimg.cc/rFCMSTZY/binance01.jpg",
    "https://i.postimg.cc/kgg3KbbB/binance02.webp",
    "https://i.postimg.cc/7YDyPcP1/binance03.jpg",
    "https://i.postimg.cc/xTRVXRqw/binance04.webp",
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
    /* Junio de 2025 - BBQ con amigos del curro PSS/Accenture */
    "https://i.postimg.cc/RZnxVZG3/IMG-20250630-164918.png",
    /* Junio de 2025 - Fiesta Años 70's familiar */
    "https://i.postimg.cc/MZyDx2yW/IMG-20250630-165654.png",
    "https://i.postimg.cc/tJHNP2HQ/IMG-20250630-165923-065.webp",
    "https://i.postimg.cc/fyjjvmw3/IMG-20250630-170552.png",
    "https://i.postimg.cc/9fKpXc8f/IMG-20250630-170608.png",
    "https://i.postimg.cc/tT6zY8wN/IMG-20250630-170634.png",
    "https://i.postimg.cc/jS8c9HyP/IMG-20250630-170654.png",
    "https://i.postimg.cc/GpHK14jN/IMG-20250630-170711.png",
    /* Julio de 2025 - Domingo de Ruta en bici */
    "https://i.postimg.cc/pL6bPNFf/IMG-20250708-184746.png",
    "https://i.postimg.cc/KzLy994n/IMG-20250708-184759.png",
    "https://i.postimg.cc/wT9dVQzm/IMG-20250708-184814.png",
    "https://i.postimg.cc/wBnpQKxq/IMG-20250708-184828.png",
    "https://i.postimg.cc/L8XFd4n4/IMG-20250708-184843.png",
];
var indicemadrid = 1;
var pantallamadrid = document.getElementById('ver-madrid');
var imgmadrid = document.createElement("img");
var iframemadrid = document.createElement("iframe");

//-- Ctes.
const totalmadrid = 37;

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