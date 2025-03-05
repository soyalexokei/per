//-- Variables. https://www.youtube.com/embed/ ?autoplay=1&loop=1&playlist= &controls=0&rel=0
var videosIDfrance =
[
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
    "",
    "",
    "",
];
var imagenesIDfrance =
[
    "https://i.postimg.cc/Ls4jft4d/1.jpg",
    "https://i.postimg.cc/DzCLcSmS/2.jpg",
    "https://i.postimg.cc/rp570LpZ/20150912-221620.jpg",
    "https://i.postimg.cc/sxgLNQ4b/20150912-221642.jpg",
    "https://i.postimg.cc/sXc8m97p/20150912-222919.jpg",
    "https://i.postimg.cc/zB56TPbz/20150912-223320.jpg",
    "https://i.postimg.cc/kMTztsnC/20150912-223756.jpg",
    "https://i.postimg.cc/Z5dM2h6Y/20150912-223800.jpg",
    "https://i.postimg.cc/WbKy54Ff/20150912-223933.jpg",
    "https://i.postimg.cc/Gh9NPD2y/20150912-224022.jpg",
    "https://i.postimg.cc/rsySG5NR/6.jpg",
    "https://i.postimg.cc/fyWjxk4L/P1000133.jpg",
    "https://i.postimg.cc/cJqRFFqP/P1000134.jpg",
    "https://i.postimg.cc/0jtGZxxC/P1000135.jpg",
    "https://i.postimg.cc/NGbxQ8Tr/P1000136.jpg",
    "https://i.postimg.cc/4dQQ7VSq/P1000137.jpg",
    "https://i.postimg.cc/JtVXphvZ/20150911-203507.jpg",
    "https://i.postimg.cc/XvdYg83H/67.jpg",
    "https://i.postimg.cc/PJqwvTdm/3.jpg",
    "https://i.postimg.cc/50gzt6W4/4.jpg",
    "https://i.postimg.cc/0NMxQ3gb/20150912-190537.jpg",
    "https://i.postimg.cc/xCL2Gz1Q/20150912-190703.jpg",
    "https://i.postimg.cc/CK30fNYJ/20150912-190731.jpg",
    "https://i.postimg.cc/RFgjLLxj/20150912-190754.jpg",
    "https://i.postimg.cc/KjVwdczf/20150912-191752.jpg",
    "https://i.postimg.cc/WztxWq2t/20150912-191757.jpg",
    "https://i.postimg.cc/kM8H4CB0/IMG-20170201-193011-661.jpg",
    "https://i.postimg.cc/brBrWnk5/13.jpg",
    "https://i.postimg.cc/4xjZK9CJ/20150912-191625.jpg",
    "https://i.postimg.cc/MpnqKYFP/P1000065.jpg",
    "https://i.postimg.cc/rFnqkHQR/P1000067.jpg",
];
var indiceFrance = 1;
var pantallaFrance = document.getElementById('ver-france');
var imgFrance = document.createElement("img");
var iframeFrance = document.createElement("iframe");

//-- Ctes.
const totalFrance = 31;

function mostrarFrance(auxFrance) {
    
    //-- Limpiar la pantalla.
    pantallaFrance.innerHTML = "";

    //-- Verificar si es una imagen o un vídeo.
    if(imagenesIDfrance[auxFrance-1]) {
        imgFrance.src = imagenesIDfrance[auxFrance-1];
        pantallaFrance.appendChild(imgFrance);
    }else {
        iframeFrance.src = videosIDfrance[auxFrance-1];
        iframeFrance.width = "400";
        iframeFrance.height = "533";
        iframeFrance.setAttribute("allow", "autoplay");
        iframeFrance.setAttribute("allowFullscreen", "false");
        pantallaFrance.appendChild(iframeFrance);
    }
}

function imgAnteriorFrance() {
    if(indiceFrance > 1) {
        indiceFrance--;
    }else {
        indiceFrance = totalFrance;
    }
    mostrarFrance(indiceFrance);
}

function imgSiguienteFrance() {
    if(indiceFrance < totalFrance) {
        indiceFrance++;
    }else {
        indiceFrance = 1;
    }
    mostrarFrance(indiceFrance);
}

//-- Pulsar flecha izquierda.
document.getElementById("izq-france").addEventListener("click", imgAnteriorFrance);
//-- Pulsar flecha derecha.
document.getElementById("der-france").addEventListener("click", imgSiguienteFrance);

//-- Punto de inicio del programa.
mostrarFrance(indiceFrance);