//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDserbia =
[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "https://www.youtube.com/embed/WwLNX99kb6A?autoplay=1&loop=1&playlist=WwLNX99kb6A&controls=0&rel=0",
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
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "https://www.youtube.com/embed/Z25Z1l-sFmI?autoplay=1&loop=1&playlist=Z25Z1l-sFmI&controls=0&rel=0",
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
    "",
    "",
    "",
    "",
];
var imagenesIDserbia =
[
    "https://i.postimg.cc/6p1p8vD9/1.jpg",
    "https://i.postimg.cc/CKBLkKgb/2.jpg",
    "https://i.postimg.cc/9QffXpg8/3.jpg",
    "https://i.postimg.cc/j5YKfQvr/6.jpg",
    "https://i.postimg.cc/nLJRvt0R/7.jpg",
    "https://i.postimg.cc/hv6MhFX0/4.jpg",
    "https://i.postimg.cc/bNS3Wv5V/5.jpg",
    "https://i.postimg.cc/mgbVDSDJ/8.jpg",
    "",
    "https://i.postimg.cc/L6VBrZTT/9.jpg",
    "https://i.postimg.cc/mr2J3PjZ/10.jpg",
    "https://i.postimg.cc/857Y3xxq/11.jpg",
    "https://i.postimg.cc/FKWqThCy/12.jpg",
    "https://i.postimg.cc/VkzV1J39/DSC-0315.jpg",
    "https://i.postimg.cc/Fs56WWpB/DSC-0344.jpg",
    "https://i.postimg.cc/VvMVsnfg/DSC-0345.jpg",
    "https://i.postimg.cc/SN6vw6tN/DSC-0348.jpg",
    "https://i.postimg.cc/G3sNjwFD/DSC-0350.jpg",
    "https://i.postimg.cc/rySqVYhS/13.jpg",
    "https://i.postimg.cc/NfBB57VZ/14.jpg",
    "https://i.postimg.cc/52rhqw74/IMG-9124.jpg",
    "https://i.postimg.cc/Fznp5xJ1/15.jpg",
    "https://i.postimg.cc/hjsMMnDL/16.jpg",
    "https://i.postimg.cc/7PBm2qQD/17.jpg",
    "https://i.postimg.cc/sx2mNLxt/18.jpg",
    "https://i.postimg.cc/DzKgT0mQ/19.jpg",
    "https://i.postimg.cc/Yqh8NTJF/20.jpg",
    "https://i.postimg.cc/L6wDxNpb/21.jpg",
    "https://i.postimg.cc/GmDQVG3h/22.jpg",
    "https://i.postimg.cc/xdyPTQbw/23.jpg",
    "https://i.postimg.cc/C1hsR2Gz/24.jpg",
    "https://i.postimg.cc/50sqLmgp/25.jpg",
    "https://i.postimg.cc/5yj53FkJ/26.jpg",
    "https://i.postimg.cc/vTjrSHpV/27.jpg",
    "https://i.postimg.cc/59kStn62/28.jpg",
    "https://i.postimg.cc/9F7ZQ26L/29.jpg",
    "https://i.postimg.cc/9QP9ypFT/30.jpg",
    "",
    "https://i.postimg.cc/YCBg4VkM/31.jpg",
    "https://i.postimg.cc/HxZQQ5F4/32.jpg",
    "https://i.postimg.cc/Vv2nhwfJ/33.jpg",
    "https://i.postimg.cc/6q8CzqXs/34.jpg",
    "https://i.postimg.cc/RFV76GpZ/35.jpg",
    "https://i.postimg.cc/Ghsky4KG/36.jpg",
    "https://i.postimg.cc/jq1H2HHR/37.jpg",
    "https://i.postimg.cc/g2F3qGt5/38.jpg",
    "https://i.postimg.cc/nzzmcrMs/39.jpg",
    "https://i.postimg.cc/wMRsLrXg/40.jpg",
    "https://i.postimg.cc/NLh24xDT/41.jpg",
    "https://i.postimg.cc/QtyTBDWf/42.jpg",
    "https://i.postimg.cc/SQHg3FtL/43.jpg",
    "https://i.postimg.cc/2j1H08T8/44.jpg",
];
var indiceSerbia = 1;
var pantallaSerbia = document.getElementById('ver-serbia');
var imgSerbia = document.createElement("img");
var iframeSerbia = document.createElement("iframe");

//-- Ctes.
const totalSerbia = 52;

function mostrarSerbia(auxSerbia) {
    
    //-- Limpiar la pantalla.
    pantallaSerbia.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDserbia[auxSerbia-1]) {
        imgSerbia.src = imagenesIDserbia[auxSerbia-1];
        pantallaSerbia.appendChild(imgSerbia);
    }else {
        iframeSerbia.src = videosIDserbia[auxSerbia-1];
        iframeSerbia.width = "400";
        iframeSerbia.height = "533";
        iframeSerbia.setAttribute("allow", "autoplay");
        iframeSerbia.setAttribute("allowFullscreen", "false");
        pantallaSerbia.appendChild(iframeSerbia);
    }
}

function imgAnteriorSerbia() {
    if(indiceSerbia > 1) {
        indiceSerbia--;
    }else {
        indiceSerbia = totalSerbia;
    }
    mostrarSerbia(indiceSerbia);
}

function imgSiguienteSerbia() {
    if(indiceSerbia < totalSerbia) {
        indiceSerbia++;
    }else {
        indiceSerbia = 1;
    }
    mostrarSerbia(indiceSerbia);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-serbia").addEventListener("click", imgAnteriorSerbia);
//-- Pulsar flecha derecha.
document.getElementById("der-serbia").addEventListener("click", imgSiguienteSerbia);

//-- Punto de inicio del programa.
mostrarSerbia(indiceSerbia);