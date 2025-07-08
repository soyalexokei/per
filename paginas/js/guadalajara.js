//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDguadalajara =
[
    /* 4 de Julio de 2025 - Boda Daniel y Roxana */
    "",
    "",
    "",
    "",
    "",
];
var imagenesIDguadalajara =
[
    /* 4 de Julio de 2025 - Boda Daniel y Roxana */
    "https://i.postimg.cc/k5HM412S/IMG-20250708-193144.png",
    "https://i.postimg.cc/Rh5M1WQV/IMG-20250708-191612-937.webp",
    "https://i.postimg.cc/ZRyby8NM/IMG-20250708-192941.png",
    "https://i.postimg.cc/g2N29kdN/IMG-20250708-191909-422.webp",
    "https://i.postimg.cc/q7qMpVv0/IMG-20250708-192212-883.webp",
];
var indiceguadalajara = 1;
var pantallaguadalajara = document.getElementById('ver-guadalajara');
var imgguadalajara = document.createElement("img");
var iframeguadalajara = document.createElement("iframe");

//-- Ctes.
const totalguadalajara = 5;

function mostrarguadalajara(auxguadalajara) {
    
    //-- Limpiar la pantalla.
    pantallaguadalajara.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDguadalajara[auxguadalajara-1]) {
        imgguadalajara.src = imagenesIDguadalajara[auxguadalajara-1];
        pantallaguadalajara.appendChild(imgguadalajara);
    }else {
        iframeguadalajara.src = videosIDguadalajara[auxguadalajara-1];
        iframeguadalajara.width = "400";
        iframeguadalajara.height = "533";
        iframeguadalajara.setAttribute("allow", "autoplay");
        iframeguadalajara.setAttribute("allowFullscreen", "false");
        pantallaguadalajara.appendChild(iframeguadalajara);
    }
}

function imgAnteriorguadalajara() {
    if(indiceguadalajara > 1) {
        indiceguadalajara--;
    }else {
        indiceguadalajara = totalguadalajara;
    }
    mostrarguadalajara(indiceguadalajara);
}

function imgSiguienteguadalajara() {
    if(indiceguadalajara < totalguadalajara) {
        indiceguadalajara++;
    }else {
        indiceguadalajara = 1;
    }
    mostrarguadalajara(indiceguadalajara);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-guadalajara").addEventListener("click", imgAnteriorguadalajara);
//-- Pulsar flecha derecha.
document.getElementById("der-guadalajara").addEventListener("click", imgSiguienteguadalajara);

//-- Punto de inicio del programa.
mostrarguadalajara(indiceguadalajara);