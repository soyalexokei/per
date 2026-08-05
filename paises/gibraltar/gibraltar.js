/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerGibraltar = document.getElementById("mediaViewerGibraltar");
const prevBtnGibraltar = document.getElementById("prevBtnGibraltar");
const nextBtnGibraltar = document.getElementById("nextBtnGibraltar");
const mediaIndexGibraltar = document.getElementById("mediaIndexGibraltar");
const totalMediaGibraltar = document.getElementById("totalMediaGibraltar");
const loaderGibraltar = document.getElementById("loaderGibraltar");
let currentMediaGibraltar = 0;
let pendingGibraltarImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeGibraltar = {
  nombre: "Gibraltar",
  medios: [
    /* 1) Experiencia en Gibraltar 2021 */
    { type: "image", src: "https://i.postimg.cc/8CH3QGnW/1.png"},
    { type: "image", src: "https://i.postimg.cc/kgWzsKQT/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/9MQkckvk/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/Yq5TQbW4/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/tTvMJ5b4/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/DzFDM05n/6.jpg"},
    { type: "image", src: "https://i.postimg.cc/mggLZYHP/IMG-20210731-121213.png"},
    { type: "video", src: "https://streamable.com/e/6edhiu"},
    { type: "image", src: "https://i.postimg.cc/rmYTmmv5/7.jpg"},
    { type: "image", src: "https://i.postimg.cc/fWpZQV7N/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/ZnBSymS2/9.jpg"},
    { type: "image", src: "https://i.postimg.cc/906jdkXM/10.jpg"},
    { type: "image", src: "https://i.postimg.cc/sDWzj3KZ/11.jpg"},
    { type: "video", src: "https://streamable.com/e/01kuac"},
    { type: "image", src: "https://i.postimg.cc/L5Mch1xY/IMG-20210731-130759.png"},
    { type: "image", src: "https://i.postimg.cc/prYgjLS0/IMG-20210731-130804.png"},
    { type: "image", src: "https://i.postimg.cc/NFYnQw0R/IMG-20210731-130832.png"},
    { type: "image", src: "https://i.postimg.cc/mD7qxrTb/IMG-20210731-130818.png"},
    { type: "image", src: "https://i.postimg.cc/L5NxRYwM/IMG-20210731-131329.png"},
    { type: "image", src: "https://i.postimg.cc/ncS3Pmq4/IMG-20210731-131358.png"},
    { type: "image", src: "https://i.postimg.cc/28SHGGLj/IMG-20210731-131401.png"},
    { type: "image", src: "https://i.postimg.cc/xjRxLhCF/IMG-20210731-131404.png"},
    { type: "image", src: "https://i.postimg.cc/Vk3DYcG5/IMG-20210731-131407.png"},
    { type: "image", src: "https://i.postimg.cc/3wXzyZcX/IMG-20210731-131412.png"},
    { type: "image", src: "https://i.postimg.cc/MpjCww0r/IMG-20210731-131418.png"},
    { type: "image", src: "https://i.postimg.cc/PqsBr72f/IMG-20210731-131455.png"},
    { type: "image", src: "https://i.postimg.cc/cHmqzc7x/IMG-20210731-131458.png"},
    { type: "image", src: "https://i.postimg.cc/RF95GYHp/IMG-20210731-131500.png"},
    { type: "image", src: "https://i.postimg.cc/SxBpYRNh/IMG-20210731-131923.png"},
    { type: "image", src: "https://i.postimg.cc/xdLVvQcb/IMG-20210731-131956.png"},
    { type: "image", src: "https://i.postimg.cc/jdR6K4HV/12.jpg"},
    { type: "video", src: "https://streamable.com/e/kii1b9"},
    { type: "video", src: "https://streamable.com/e/41aq15"},
    { type: "image", src: "https://i.postimg.cc/yNKsrWqT/13.jpg"},
    { type: "image", src: "https://i.postimg.cc/gJkdm52X/14.jpg"},
    { type: "image", src: "https://i.postimg.cc/NMJtM4KN/15.jpg"},
    { type: "image", src: "https://i.postimg.cc/nL1p8Zpf/16.jpg"},
    { type: "image", src: "https://i.postimg.cc/j2DbJ7NR/17.jpg"},
    { type: "image", src: "https://i.postimg.cc/NFZw8j7m/18.jpg"},
    { type: "image", src: "https://i.postimg.cc/CM2YpcT5/19.jpg"},
    { type: "image", src: "https://i.postimg.cc/HkYCQRbS/20.jpg"},
    { type: "image", src: "https://i.postimg.cc/bNHhSpSD/21.jpg"},
    { type: "image", src: "https://i.postimg.cc/Nfwt05Fv/22.jpg"},
    { type: "image", src: "https://i.postimg.cc/VkKP4gRz/23.jpg"},
    { type: "video", src: "https://streamable.com/e/lr19eo"},
    { type: "image", src: "https://i.postimg.cc/L6T0tX9P/IMG-20210731-132206.png"},
    { type: "image", src: "https://i.postimg.cc/L88QNp5b/IMG-20210731-132218.png"},
    { type: "image", src: "https://i.postimg.cc/1X1YHVVG/IMG-20210731-132221.png"},
    { type: "image", src: "https://i.postimg.cc/NMHzmkFG/IMG-20210731-132235.png"},
    { type: "image", src: "https://i.postimg.cc/NfqZBSMN/IMG-20210731-133223.png"},
    { type: "image", src: "https://i.postimg.cc/Vsb3ymYr/IMG-20210731-133246.png"},
    { type: "image", src: "https://i.postimg.cc/Y0gVQfXf/IMG-20210731-133248.png"},
    { type: "image", src: "https://i.postimg.cc/nzNgsw1h/IMG-20210731-140551.png"},
    { type: "image", src: "https://i.postimg.cc/RFW2ZzKY/IMG-20210731-140610.png"},
    { type: "image", src: "https://i.postimg.cc/HLZfmLc5/IMG-20210731-WA0039.png"},
    { type: "image", src: "https://i.postimg.cc/T3ZD4VQW/IMG-20210731-140605.png"},
    { type: "video", src: "https://streamable.com/e/jbvmmh"},
    { type: "image", src: "https://i.postimg.cc/VvrwpCKd/25.png"},
    { type: "image", src: "https://i.postimg.cc/d10wRXdR/26.png"},
    { type: "image", src: "https://i.postimg.cc/8zhpTLNv/27.png"},
    { type: "image", src: "https://i.postimg.cc/QMhXCVdy/28.png"},
    { type: "image", src: "https://i.postimg.cc/JhxRkmy4/29.png"},
    { type: "image", src: "https://i.postimg.cc/jSVqVM0K/30.png"},
    { type: "image", src: "https://i.postimg.cc/G2SrXQJW/24.jpg"},
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderGibraltar() {
  loaderGibraltar.style.display = "block";
  viewerGibraltar.style.display = "none";
}

function ocultarLoaderGibraltar() {
  loaderGibraltar.style.display = "none";
}

function cargarImagenGibraltar(url) {
  if (!url) {
    viewerGibraltar.innerHTML = "";
    viewerGibraltar.style.display = "none";
    ocultarLoaderGibraltar();
    return;
  }

  mostrarLoaderGibraltar();

  const img = new Image();
  pendingGibraltarImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingGibraltarImage !== img) return;

    viewerGibraltar.innerHTML = "";
    viewerGibraltar.appendChild(img);

    viewerGibraltar.style.display = "block";
    ocultarLoaderGibraltar();

    pendingGibraltarImage = null;
  };

  img.onerror = () => {
    if (pendingGibraltarImage !== img) return;

    viewerGibraltar.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerGibraltar.style.display = "block";
    ocultarLoaderGibraltar();

    pendingGibraltarImage = null;
  };

  img.src = url;
}

function renderMediaGibraltar() {
  const media = viajeGibraltar.medios[currentMediaGibraltar];
  viewerGibraltar.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenGibraltar(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderGibraltar();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerGibraltar.style.display = "block";
    viewerGibraltar.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerGibraltar.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexGibraltar.value=currentMediaGibraltar+1;
  totalMediaGibraltar.textContent = viajeGibraltar.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnGibraltar.addEventListener("click", () => {
  currentMediaGibraltar++;
  if(currentMediaGibraltar >= viajeGibraltar.medios.length) {
    currentMediaGibraltar=0;
  }
  renderMediaGibraltar();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnGibraltar.addEventListener("click",()=>{
  currentMediaGibraltar--;
  if(currentMediaGibraltar < 0) {
    currentMediaGibraltar = viajeGibraltar.medios.length-1;
  }
  renderMediaGibraltar();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexGibraltar.addEventListener("change",()=>{
  const value=Number(mediaIndexGibraltar.value);
  if(value>=1 && value<=viajeGibraltar.medios.length) {
    currentMediaGibraltar=value-1;
    renderMediaGibraltar();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnGibraltar.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnGibraltar.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaGibraltar();