//-- Variables.
var videosIDhungary =
[
    "","","","","","","","","","","","","","","","","",
    "https://www.youtube.com/embed/gKWQjN4rqtk?autoplay=1&loop=1&playlist=gKWQjN4rqtk&controls=0&rel=0",
    "","","","","","","","","","","","","","","","","","","",
    "https://www.youtube.com/embed/h1Jbe7EYf_Q?autoplay=1&loop=1&playlist=h1Jbe7EYf_Q&controls=0&rel=0",
    "",
    "https://www.youtube.com/embed/t-3ud0v1mXA?autoplay=1&loop=1&playlist=t-3ud0v1mXA&controls=0&rel=0",
    ""
];
var imagenesIDhungary =
[
    "https://i.postimg.cc/TYVh5TnX/1.png",
    "https://i.postimg.cc/xjbXYvC8/2.png",
    "https://i.postimg.cc/Hn5n2gKX/3.png",
    "https://i.postimg.cc/8PQjC7JH/4.png",
    "https://i.postimg.cc/fRMyx1vS/5.png",
    "https://i.postimg.cc/8zw5wwyK/6.png",
    "https://i.postimg.cc/N0M0nTSg/7.png",
    "https://i.postimg.cc/43S3RyRp/8.png",
    "https://i.postimg.cc/XJBYjWnm/9.png",
    "https://i.postimg.cc/WzRbty33/10.png",
    "https://i.postimg.cc/wxJjn9fs/11.png",
    "https://i.postimg.cc/2y4jWxbx/12.png",
    "https://i.postimg.cc/ncJhJNgS/13.png",
    "https://i.postimg.cc/wjWqDMvn/14.png",
    "https://i.postimg.cc/g2ccw8Yv/15.png",
    "https://i.postimg.cc/zXFXX01z/16.png",
    "https://i.postimg.cc/pdp2Cv5r/17.png","",
    "https://i.postimg.cc/25MCXtnw/19.png",
    "https://i.postimg.cc/hvqcK7yQ/20.png",
    "https://i.postimg.cc/63ZBsh0N/21.png",
    "https://i.postimg.cc/0jdxj2FW/22.png",
    "https://i.postimg.cc/pVDPqqrf/23.png",
    "https://i.postimg.cc/RV448KJj/24.png",
    "https://i.postimg.cc/jdctr2zC/25.png",
    "https://i.postimg.cc/Nj0YGt4D/26.png",
    "https://i.postimg.cc/kghCBHYm/27.png",
    "https://i.postimg.cc/xdJ2HPBb/28.png",
    "https://i.postimg.cc/ZqGhLdhs/29.png",
    "https://i.postimg.cc/xCLVp1ff/30.png",
    "https://i.postimg.cc/8cDQ2gch/31.png",
    "https://i.postimg.cc/90p5Vgws/32.png",
    "https://i.postimg.cc/h4bq9vZM/33.png",
    "https://i.postimg.cc/wTqYFzSz/34.png",
    "https://i.postimg.cc/FH155Zrn/35.png",
    "https://i.postimg.cc/6pSs9vT6/36.png",
    "https://i.postimg.cc/c4FybjSn/37.png","",
    "https://i.postimg.cc/d0TbDVT2/39.png","",
    "https://i.postimg.cc/SsFw9bWw/41.png"
    
];
var indiceHungary = 1;
var pantallaHungary = document.getElementById('ver-hungary');
var imgHungary = document.createElement("img");
var iframeHungary = document.createElement("iframe");

//-- Ctes.
const totalHungary = 41;

function mostrarHungary(auxHungary) {
    
    //-- Limpiar la pantalla.
    pantallaHungary.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDhungary[auxHungary-1]) {
        imgHungary.src = imagenesIDhungary[auxHungary-1];
        pantallaHungary.appendChild(imgHungary);
    }else {
        iframeHungary.src = videosIDhungary[auxHungary-1];
        iframeHungary.width = "400";
        iframeHungary.height = "533";
        iframeHungary.setAttribute("allow", "autoplay");
        iframeHungary.setAttribute("allowFullscreen", "false");
        pantallaHungary.appendChild(iframeHungary);
    }
}

function imgAnteriorHungary() {
    if(indiceHungary > 1) {
        indiceHungary--;
    }else {
        indiceHungary = totalHungary;
    }
    mostrarHungary(indiceHungary);
}

function imgSiguienteHungary() {
    if(indiceHungary < totalHungary) {
        indiceHungary++;
    }else {
        indiceHungary = 1;
    }
    mostrarHungary(indiceHungary);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-hungary").addEventListener("click", imgAnteriorHungary);
//-- Pulsar flecha derecha.
document.getElementById("der-hungary").addEventListener("click", imgSiguienteHungary);

//-- Punto de inicio del programa.
mostrarHungary(indiceHungary);