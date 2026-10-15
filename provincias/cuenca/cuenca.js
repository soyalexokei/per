/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerCuenca = document.getElementById("mediaViewerCuenca");
const prevBtnCuenca = document.getElementById("prevBtnCuenca");
const nextBtnCuenca = document.getElementById("nextBtnCuenca");
const mediaIndexCuenca = document.getElementById("mediaIndexCuenca");
const totalMediaCuenca = document.getElementById("totalMediaCuenca");
const loaderCuenca = document.getElementById("loaderCuenca");
let currentMediaCuenca = 0;
let pendingImageCuenca = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeCuenca = {
  nombre: "Cuenca",
  medios: [
    { type: "image", src: "https://i.postimg.cc/nz1GtMzt/1.png"},
    { type: "image", src: "https://i.postimg.cc/Y0qf2kGL/2.png"},
    { type: "image", src: "https://i.postimg.cc/wjSVXSPn/3.png"},
    { type: "image", src: "https://i.postimg.cc/jqGc3GCr/IMG-20261015-225111-799.webp"},
    { type: "image", src: "https://i.postimg.cc/hGT0p2Rv/4.png"},
    { type: "image", src: "https://i.postimg.cc/tJSdYfWS/5.png"},
    { type: "image", src: "https://i.postimg.cc/XJWkh9n8/6.png"},
    { type: "image", src: "https://i.postimg.cc/JhnjzqtT/IMG-20261015-224417-755.jpg"},
    { type: "image", src: "https://i.postimg.cc/4d7YzSDW/IMG-20260918-000847-884.jpg"},
    { type: "image", src: "https://i.postimg.cc/ZRBWrMGs/IMG-20260918-001018-216.webp"},
    { type: "image", src: "https://i.postimg.cc/cHgvQbpD/IMG-20260918-001103-772.webp"},
    { type: "image", src: "https://i.postimg.cc/C1BRjQ36/IMG-20260918-001608-162.webp"},
    { type: "image", src: "https://i.postimg.cc/rmrpdt49/IMG-20260918-001203-709.jpg"},
    { type: "image", src: "https://i.postimg.cc/wjB1XBHv/IMG-20261015-224211-217.webp"},
    { type: "image", src: "https://i.postimg.cc/mDHrcF9j/IMG-20260918-001831-078.jpg"},
    { type: "image", src: "https://i.postimg.cc/SsMKXz9g/IMG-20260918-001944-036.webp"},
    { type: "image", src: "https://i.postimg.cc/63vQ7GZj/IMG-20260918-002024-443.webp"},
    { type: "video", src: "https://streamable.com/e/l1ivlr"},
    { type: "image", src: "https://i.postimg.cc/HLfYCsNb/IMG-20260918-003314-069.jpg"},
    { type: "image", src: "https://i.postimg.cc/5ynxywHJ/IMG-20261015-224736-536.jpg"},
    { type: "image", src: "https://i.postimg.cc/7LpHyYR0/IMG-20260918-003622-536.jpg"},
    { type: "image", src: "https://i.postimg.cc/q7JYj9gp/IMG-20261004-202235-154.jpg"},
    { type: "image", src: "https://i.postimg.cc/Dzr3mqDZ/IMG-20261015-224959-344.webp"},
    { type: "image", src: "https://i.postimg.cc/9f94gNkx/IMG-20261005-012436-636.jpg"},
    { type: "image", src: "https://i.postimg.cc/PfcVsCVX/IMG-20261015-223747-241.jpg"},
    { type: "image", src: "https://i.postimg.cc/v8j2F42b/IMG-20261015-223859-828.jpg"},
    { type: "image", src: "https://i.postimg.cc/d04nW3Zg/IMG-20261015-221205-959.jpg"},
    { type: "image", src: "https://i.postimg.cc/4x1rgJh7/IMG-20261015-221652-788.jpg"},
    { type: "image", src: "https://i.postimg.cc/DZKS9PVd/IMG-20261006-232531-247.webp"},
    { type: "image", src: "https://i.postimg.cc/QtrF2JLg/IMG-20261006-232648-047.webp"},
    { type: "image", src: "https://i.postimg.cc/3JFLytJR/IMG-20261015-221457-357.jpg"},
    { type: "image", src: "https://i.postimg.cc/9f94gNkn/IMG-20261006-233132-860.jpg"},
    { type: "image", src: "https://i.postimg.cc/HxCrq9G9/IMG-20261006-234342-852.jpg"},
    { type: "image", src: "https://i.postimg.cc/j5rDp4VZ/IMG-20261006-234758-377.jpg"},
    { type: "image", src: "https://i.postimg.cc/DZKS9PVj/IMG-20261011-161017-957.webp"},
    { type: "video", src: "https://streamable.com/e/5liow4"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderCuenca() {
  loaderCuenca.style.display = "block";
  viewerCuenca.style.display = "none";
}

function ocultarLoaderCuenca() {
  loaderCuenca.style.display = "none";
}

function cargarImagenCuenca(url) {
  if (!url) {
    viewerCuenca.innerHTML = "";
    viewerCuenca.style.display = "none";
    ocultarLoaderCuenca();
    return;
  }

  mostrarLoaderCuenca();

  const img = new Image();
  pendingImageCuenca = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageCuenca !== img) return;

    viewerCuenca.innerHTML = "";
    viewerCuenca.appendChild(img);

    viewerCuenca.style.display = "block";
    ocultarLoaderCuenca();

    pendingImageCuenca = null;
  };

  img.onerror = () => {
    if (pendingImageCuenca !== img) return;

    viewerCuenca.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerCuenca.style.display = "block";
    ocultarLoaderCuenca();

    pendingImageCuenca = null;
  };

  img.src = url;
}

function renderMediaCuenca() {
  const media = viajeCuenca.medios[currentMediaCuenca];
  viewerCuenca.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenCuenca(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderCuenca();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerCuenca.style.display = "block";
    viewerCuenca.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerCuenca.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexCuenca.value=currentMediaCuenca+1;
  totalMediaCuenca.textContent = viajeCuenca.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnCuenca.addEventListener("click", () => {
  currentMediaCuenca++;
  if(currentMediaCuenca >= viajeCuenca.medios.length) {
    currentMediaCuenca=0;
  }
  renderMediaCuenca();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnCuenca.addEventListener("click",()=>{
  currentMediaCuenca--;
  if(currentMediaCuenca < 0) {
    currentMediaCuenca = viajeCuenca.medios.length-1;
  }
  renderMediaCuenca();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexCuenca.addEventListener("change", () => {
  const value=Number(mediaIndexCuenca.value);
  if(value>=1 && value<=viajeCuenca.medios.length) {
    currentMediaCuenca=value-1;
    renderMediaCuenca();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnCuenca.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnCuenca.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaCuenca();