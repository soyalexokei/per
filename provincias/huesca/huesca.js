/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerHuesca = document.getElementById("mediaViewerHuesca");
const prevBtnHuesca = document.getElementById("prevBtnHuesca");
const nextBtnHuesca = document.getElementById("nextBtnHuesca");
const mediaIndexHuesca = document.getElementById("mediaIndexHuesca");
const totalMediaHuesca = document.getElementById("totalMediaHuesca");
const loaderHuesca = document.getElementById("loaderHuesca");
let currentMediaHuesca = 0;
let pendingImageHuesca = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeHuesca = {
  nombre: "Huesca",
  medios: [
    { type: "image", src: "https://i.postimg.cc/hjD6hXLT/1.jpg"},
    { type: "image", src: "https://i.postimg.cc/JzBGdnBv/2.png"},
    { type: "image", src: "https://i.postimg.cc/gJzQrxVv/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/SxzJtszZ/4.png"},
    { type: "image", src: "https://i.postimg.cc/mgFt6DFj/5.png"},
    { type: "image", src: "https://i.postimg.cc/SxzJtszT/6.png"},
    { type: "image", src: "https://i.postimg.cc/nhQCwzQ3/7.png"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderHuesca() {
  loaderHuesca.style.display = "block";
  viewerHuesca.style.display = "none";
}

function ocultarLoaderHuesca() {
  loaderHuesca.style.display = "none";
}

function cargarImagenHuesca(url) {
  if (!url) {
    viewerHuesca.innerHTML = "";
    viewerHuesca.style.display = "none";
    ocultarLoaderHuesca();
    return;
  }

  mostrarLoaderHuesca();

  const img = new Image();
  pendingImageHuesca = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageHuesca !== img) return;

    viewerHuesca.innerHTML = "";
    viewerHuesca.appendChild(img);

    viewerHuesca.style.display = "block";
    ocultarLoaderHuesca();

    pendingImageHuesca = null;
  };

  img.onerror = () => {
    if (pendingImageHuesca !== img) return;

    viewerHuesca.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerHuesca.style.display = "block";
    ocultarLoaderHuesca();

    pendingImageHuesca = null;
  };

  img.src = url;
}

function renderMediaHuesca() {
  const media = viajeHuesca.medios[currentMediaHuesca];
  viewerHuesca.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenHuesca(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderHuesca();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerHuesca.style.display = "block";
    viewerHuesca.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerHuesca.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexHuesca.value=currentMediaHuesca+1;
  totalMediaHuesca.textContent = viajeHuesca.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnHuesca.addEventListener("click", () => {
  currentMediaHuesca++;
  if(currentMediaHuesca >= viajeHuesca.medios.length) {
    currentMediaHuesca=0;
  }
  renderMediaHuesca();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnHuesca.addEventListener("click",()=>{
  currentMediaHuesca--;
  if(currentMediaHuesca < 0) {
    currentMediaHuesca = viajeHuesca.medios.length-1;
  }
  renderMediaHuesca();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexHuesca.addEventListener("change", () => {
  const value=Number(mediaIndexHuesca.value);
  if(value>=1 && value<=viajeHuesca.medios.length) {
    currentMediaHuesca=value-1;
    renderMediaHuesca();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnHuesca.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnHuesca.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaHuesca();