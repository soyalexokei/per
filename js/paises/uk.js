//-- Variables.
var videosIDuk =
[
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "", "", "https://www.youtube.com/embed/tedzX0xufsM?autoplay=1&loop=1&playlist=tedzX0xufsM&controls=0&rel=0",
    "https://www.youtube.com/embed/s3GpWv21uVM?autoplay=1&loop=1&playlist=s3GpWv21uVM&controls=0&rel=0",
    "","https://www.youtube.com/embed/GiRyIoHuMxY?autoplay=1&loop=1&playlist=GiRyIoHuMxY&controls=0&rel=0",
    "https://www.youtube.com/embed/7jihgkFH99s?autoplay=1&loop=1&playlist=7jihgkFH99s&controls=0&rel=0",
    "https://www.youtube.com/embed/fxJ11BakWaA?autoplay=1&loop=1&playlist=fxJ11BakWaA&controls=0&rel=0",
    "", "", "", "", "", "", "", "", "", "", "", "",
    "https://www.youtube.com/embed/tLiUptwA3E4?autoplay=1&loop=1&playlist=tLiUptwA3E4&controls=0&rel=0",
    "","https://www.youtube.com/embed/2yKlY0AHPMk?autoplay=1&loop=1&playlist=2yKlY0AHPMk&controls=0&rel=0",
    "https://www.youtube.com/embed/vTACcj9CGSg?autoplay=1&loop=1&playlist=vTACcj9CGSg&controls=0&rel=0",""
];
var imagenesIDuk =
[
    "https://i.postimg.cc/x1zF64bP/01.png", "https://i.postimg.cc/k5NYmRs6/02.jpg", "https://i.postimg.cc/DZBCWVt7/03.jpg",
    "https://i.postimg.cc/qRkbMBDm/04.jpg", "https://i.postimg.cc/fyPBKczF/05.jpg", "https://i.postimg.cc/tRvSpj35/06.jpg",
    "https://i.postimg.cc/fT68SfgS/07.jpg", "https://i.postimg.cc/vH1PmNXd/08.jpg", "https://i.postimg.cc/fbs5BTsw/09.jpg",
    "https://i.postimg.cc/FRspXW18/10.jpg", "https://i.postimg.cc/85fznDNC/11.jpg", "https://i.postimg.cc/bJCTyxtJ/12.jpg",
    "https://i.postimg.cc/gc7D1Kpt/13.jpg", "https://i.postimg.cc/rFtJTtFV/14.jpg", "https://i.postimg.cc/qvsxhV3W/15.jpg",
    "https://i.postimg.cc/Dwkcwy8q/16.jpg", "https://i.postimg.cc/HLT4bZ0n/17.jpg", "https://i.postimg.cc/43wvP6w5/18.jpg",
    "https://i.postimg.cc/76W38qFJ/19.jpg", "https://i.postimg.cc/MHfyzhwP/20.jpg", "https://i.postimg.cc/bYZMGrNM/21.jpg",
    "https://i.postimg.cc/05h47vzN/22.jpg", "https://i.postimg.cc/K82ss5rS/23.jpg", "https://i.postimg.cc/nhGw8Q0s/24.jpg",
    "https://i.postimg.cc/FKPWzXtN/25.jpg", "https://i.postimg.cc/B6Xh17sD/26.jpg", "https://i.postimg.cc/ydtLhhYG/27.jpg",
    "https://i.postimg.cc/7hzmKC5Z/28.jpg", "https://i.postimg.cc/qB6bJF1H/29.jpg", "https://i.postimg.cc/3JMLdZq4/30.jpg",
    "https://i.postimg.cc/dt85dyMW/31.jpg", "https://i.postimg.cc/mgB8SgBT/32.jpg", "https://i.postimg.cc/dtHkCkk8/1.png",
    "https://i.postimg.cc/PrrvNzxX/2.png", "","","https://i.postimg.cc/9QsDx6B0/5.png", "","","","https://i.postimg.cc/138grmwb/9.png",
    "https://i.postimg.cc/d3Q3kwJH/10.png", "https://i.postimg.cc/pTJyLpM5/11.png", "https://i.postimg.cc/k4mBCWzd/12.png",
    "https://i.postimg.cc/5tv6DsP3/13.png", "https://i.postimg.cc/tJrTFwTX/14.png", "https://i.postimg.cc/dt1DJsHD/15.png",
    "https://i.postimg.cc/hP5vjk6s/16.png", "https://i.postimg.cc/Y28hcGxJ/17.png", "https://i.postimg.cc/nh9zQdtJ/18.png",
    "https://i.postimg.cc/DzVzQq2b/19.png", "https://i.postimg.cc/8ChzZj5X/20.png", "","https://i.postimg.cc/TwfYFf5d/22.png",
    "","","https://i.postimg.cc/Tw0YXFnr/25.png"
];
var indiceUK = 1;
var pantallaUK = document.getElementById('ver-uk');
var imgUK = document.createElement("img");
var iframeUK = document.createElement("iframe");

//-- Ctes.
const totalUK = 57;

function mostrarUK(auxUK) {
    
    //-- Limpiar la pantalla.
    pantallaUK.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDuk[auxUK-1]) {
        imgUK.src = imagenesIDuk[auxUK-1];
        pantallaUK.appendChild(imgUK);
    }else {
        iframeUK.src =  videosIDuk[auxUK-1];
        iframeUK.width = "400";
        iframeUK.height = "533";
        iframeUK.setAttribute("allow", "autoplay");
        iframeUK.setAttribute("allowFullscreen", "false");
        pantallaUK.appendChild(iframeUK);
    }
}

function imgAnteriorUK() {
    if(indiceUK > 1) {
        indiceUK--;
    }else {
        indiceUK = totalUK;
    }
    mostrarUK(indiceUK);
}

function imgSiguienteUK() {
    if(indiceUK < totalUK) {
        indiceUK++;
    }else {
        indiceUK = 1;
    }
    mostrarUK(indiceUK);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-uk").addEventListener("click", imgAnteriorUK);
//-- Pulsar flecha derecha.
document.getElementById("der-uk").addEventListener("click", imgSiguienteUK);

//-- Punto de inicio del programa.
mostrarUK(indiceUK);