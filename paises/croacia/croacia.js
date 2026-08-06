/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerCroacia = document.getElementById("mediaViewerCroacia");
const prevBtnCroacia = document.getElementById("prevBtnCroacia");
const nextBtnCroacia = document.getElementById("nextBtnCroacia");
const mediaIndexCroacia = document.getElementById("mediaIndexCroacia");
const totalMediaCroacia = document.getElementById("totalMediaCroacia");
const loaderCroacia = document.getElementById("loaderCroacia");
let currentMediaCroacia = 0;
let pendingImageCroacia = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeCroacia = {
  nombre: "Croacia",
  medios: [
    { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdepVL1nGhT-cT49VFKi9bt4CC90Auqps19wO0_mXDbnZOegjVqxkLWfc&s=10"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderCroacia() {
  loaderCroacia.style.display = "block";
  viewerCroacia.style.display = "none";
}

function ocultarLoaderCroacia() {
  loaderCroacia.style.display = "none";
}

function cargarImagenCroacia(url) {
  if (!url) {
    viewerCroacia.innerHTML = "";
    viewerCroacia.style.display = "none";
    ocultarLoaderCroacia();
    return;
  }

  mostrarLoaderCroacia();

  const img = new Image();
  pendingImageCroacia = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageCroacia !== img) return;

    viewerCroacia.innerHTML = "";
    viewerCroacia.appendChild(img);

    viewerCroacia.style.display = "block";
    ocultarLoaderCroacia();

    pendingImageCroacia = null;
  };

  img.onerror = () => {
    if (pendingImageCroacia !== img) return;

    viewerCroacia.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerCroacia.style.display = "block";
    ocultarLoaderCroacia();

    pendingImageCroacia = null;
  };

  img.src = url;
}

function renderMediaCroacia() {
  const media = viajeCroacia.medios[currentMediaCroacia];
  viewerCroacia.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenCroacia(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderCroacia();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerCroacia.style.display = "block";
    viewerCroacia.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerCroacia.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexCroacia.value=currentMediaCroacia+1;
  totalMediaCroacia.textContent = viajeCroacia.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnCroacia.addEventListener("click", () => {
  currentMediaCroacia++;
  if(currentMediaCroacia >= viajeCroacia.medios.length) {
    currentMediaCroacia=0;
  }
  renderMediaCroacia();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnCroacia.addEventListener("click",()=>{
  currentMediaCroacia--;
  if(currentMediaCroacia < 0) {
    currentMediaCroacia = viajeCroacia.medios.length-1;
  }
  renderMediaCroacia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexCroacia.addEventListener("change", () => {
  const value=Number(mediaIndexCroacia.value);
  if(value>=1 && value<=viajeCroacia.medios.length) {
    currentMediaCroacia=value-1;
    renderMediaCroacia();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnCroacia.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnCroacia.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaCroacia();