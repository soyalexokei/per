/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerHungria = document.getElementById("mediaViewerHungria");
const prevBtnHungria = document.getElementById("prevBtnHungria");
const nextBtnHungria = document.getElementById("nextBtnHungria");
const mediaIndexHungria = document.getElementById("mediaIndexHungria");
const totalMediaHungria = document.getElementById("totalMediaHungria");
const loaderHungria = document.getElementById("loaderHungria");
let currentMediaHungria = 0;
let pendingImageHungria = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeHungria = {
  nombre: "Hungria",
  medios: [
    /* 1) Experiencia en Hungría 2022 */
    { type: "image", src: "https://i.postimg.cc/TYVh5TnX/1.png"},
    { type: "image", src: "https://i.postimg.cc/xjbXYvC8/2.png"},
    { type: "image", src: "https://i.postimg.cc/Hn5n2gKX/3.png"},
    { type: "image", src: "https://i.postimg.cc/8PQjC7JH/4.png"},
    { type: "image", src: "https://i.postimg.cc/fRMyx1vS/5.png"},
    { type: "image", src: "https://i.postimg.cc/8zw5wwyK/6.png"},
    { type: "image", src: "https://i.postimg.cc/N0M0nTSg/7.png"},
    { type: "image", src: "https://i.postimg.cc/43S3RyRp/8.png"},
    { type: "image", src: "https://i.postimg.cc/XJBYjWnm/9.png"},
    { type: "image", src: "https://i.postimg.cc/WzRbty33/10.png"},
    { type: "image", src: "https://i.postimg.cc/wxJjn9fs/11.png"},
    { type: "image", src: "https://i.postimg.cc/2y4jWxbx/12.png"},
    { type: "image", src: "https://i.postimg.cc/ncJhJNgS/13.png"},
    { type: "image", src: "https://i.postimg.cc/wjWqDMvn/14.png"},
    { type: "image", src: "https://i.postimg.cc/g2ccw8Yv/15.png"},
    { type: "image", src: "https://i.postimg.cc/zXFXX01z/16.png"},
    { type: "image", src: "https://i.postimg.cc/pdp2Cv5r/17.png"},
    { type: "video", src: "https://streamable.com/e/nxgcq1"},
    { type: "image", src: "https://i.postimg.cc/25MCXtnw/19.png"},
    { type: "image", src: "https://i.postimg.cc/hvqcK7yQ/20.png"},
    { type: "image", src: "https://i.postimg.cc/63ZBsh0N/21.png"},
    { type: "image", src: "https://i.postimg.cc/0jdxj2FW/22.png"},
    { type: "image", src: "https://i.postimg.cc/pVDPqqrf/23.png"},
    { type: "image", src: "https://i.postimg.cc/RV448KJj/24.png"},
    { type: "image", src: "https://i.postimg.cc/jdctr2zC/25.png"},
    { type: "image", src: "https://i.postimg.cc/Nj0YGt4D/26.png"},
    { type: "image", src: "https://i.postimg.cc/kghCBHYm/27.png"},
    { type: "image", src: "https://i.postimg.cc/xdJ2HPBb/28.png"},
    { type: "image", src: "https://i.postimg.cc/ZqGhLdhs/29.png"},
    { type: "image", src: "https://i.postimg.cc/xCLVp1ff/30.png"},
    { type: "image", src: "https://i.postimg.cc/8cDQ2gch/31.png"},
    { type: "image", src: "https://i.postimg.cc/90p5Vgws/32.png"},
    { type: "image", src: "https://i.postimg.cc/h4bq9vZM/33.png"},
    { type: "image", src: "https://i.postimg.cc/wTqYFzSz/34.png"},
    { type: "image", src: "https://i.postimg.cc/FH155Zrn/35.png"},
    { type: "image", src: "https://i.postimg.cc/6pSs9vT6/36.png"},
    { type: "image", src: "https://i.postimg.cc/c4FybjSn/37.png"},
    { type: "video", src: "https://streamable.com/e/4dav55"},
    { type: "image", src: "https://i.postimg.cc/d0TbDVT2/39.png"},
    { type: "video", src: "https://streamable.com/e/pyrvg0"},
    { type: "image", src: "https://i.postimg.cc/SsFw9bWw/41.png"},
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderHungria() {
  loaderHungria.style.display = "block";
  viewerHungria.style.display = "none";
}

function ocultarLoaderHungria() {
  loaderHungria.style.display = "none";
}

function cargarImagenHungria(url) {
  if (!url) {
    viewerHungria.innerHTML = "";
    viewerHungria.style.display = "none";
    ocultarLoaderHungria();
    return;
  }

  mostrarLoaderHungria();

  const img = new Image();
  pendingImageHungria = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageHungria !== img) return;

    viewerHungria.innerHTML = "";
    viewerHungria.appendChild(img);

    viewerHungria.style.display = "block";
    ocultarLoaderHungria();

    pendingImageHungria = null;
  };

  img.onerror = () => {
    if (pendingImageHungria !== img) return;

    viewerHungria.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerHungria.style.display = "block";
    ocultarLoaderHungria();

    pendingImageHungria = null;
  };

  img.src = url;
}

function renderMediaHungria() {
  const media = viajeHungria.medios[currentMediaHungria];
  viewerHungria.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenHungria(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderHungria();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerHungria.style.display = "block";
    viewerHungria.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerHungria.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexHungria.value=currentMediaHungria+1;
  totalMediaHungria.textContent = viajeHungria.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnHungria.addEventListener("click", () => {
  currentMediaHungria++;
  if(currentMediaHungria >= viajeHungria.medios.length) {
    currentMediaHungria=0;
  }
  renderMediaHungria();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnHungria.addEventListener("click",()=>{
  currentMediaHungria--;
  if(currentMediaHungria < 0) {
    currentMediaHungria = viajeHungria.medios.length-1;
  }
  renderMediaHungria();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexHungria.addEventListener("change", () => {
  const value=Number(mediaIndexHungria.value);
  if(value>=1 && value<=viajeHungria.medios.length) {
    currentMediaHungria=value-1;
    renderMediaHungria();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnHungria.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnHungria.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaHungria();