/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerACoruna = document.getElementById("mediaViewerACoruna");
const prevBtnACoruna = document.getElementById("prevBtnACoruna");
const nextBtnACoruna = document.getElementById("nextBtnACoruna");
const mediaIndexACoruna = document.getElementById("mediaIndexACoruna");
const totalMediaACoruna = document.getElementById("totalMediaACoruna");
const loaderACoruna = document.getElementById("loaderACoruna");
let currentMediaACoruna = 0;
let pendingImageACoruna = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeACoruna = {
  nombre: "A Coruña",
  medios: [
    { type: "image", src: ""},
    { type: "video", src: ""},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderACoruna() {
  loaderACoruna.style.display = "block";
  viewerACoruna.style.display = "none";
}

function ocultarLoaderACoruna() {
  loaderACoruna.style.display = "none";
}

function cargarImagenACoruna(url) {
  if (!url) {
    viewerACoruna.innerHTML = "";
    viewerACoruna.style.display = "none";
    ocultarLoaderACoruna();
    return;
  }

  mostrarLoaderACoruna();

  const img = new Image();
  pendingImageACoruna = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageACoruna !== img) return;

    viewerACoruna.innerHTML = "";
    viewerACoruna.appendChild(img);

    viewerACoruna.style.display = "block";
    ocultarLoaderACoruna();

    pendingImageACoruna = null;
  };

  img.onerror = () => {
    if (pendingImageACoruna !== img) return;

    viewerACoruna.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerACoruna.style.display = "block";
    ocultarLoaderACoruna();

    pendingImageACoruna = null;
  };

  img.src = url;
}

function renderMediaACoruna() {
  const media = viajeACoruna.medios[currentMediaACoruna];
  viewerACoruna.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenACoruna(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderACoruna();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerACoruna.style.display = "block";
    viewerACoruna.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerACoruna.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexACoruna.value=currentMediaACoruna+1;
  totalMediaACoruna.textContent = viajeACoruna.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnACoruna.addEventListener("click", () => {
  currentMediaACoruna++;
  if(currentMediaACoruna >= viajeACoruna.medios.length) {
    currentMediaACoruna=0;
  }
  renderMediaACoruna();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnACoruna.addEventListener("click",()=>{
  currentMediaACoruna--;
  if(currentMediaACoruna < 0) {
    currentMediaACoruna = viajeACoruna.medios.length-1;
  }
  renderMediaACoruna();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexACoruna.addEventListener("change", () => {
  const value=Number(mediaIndexACoruna.value);
  if(value>=1 && value<=viajeACoruna.medios.length) {
    currentMediaACoruna=value-1;
    renderMediaACoruna();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnACoruna.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnACoruna.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaACoruna();