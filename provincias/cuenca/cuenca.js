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
    { type: "image", src: "https://i.postimg.cc/hGT0p2Rv/4.png"},
    { type: "image", src: "https://i.postimg.cc/tJSdYfWS/5.png"},
    { type: "image", src: "https://i.postimg.cc/XJWkh9n8/6.png"},
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