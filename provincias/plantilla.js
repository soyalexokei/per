/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewer = document.getElementById("mediaViewer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const mediaIndex = document.getElementById("mediaIndex");
const totalMedia = document.getElementById("totalMedia");
const loader = document.getElementById("loader");
let currentMedia = 0;
let pendingImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viaje = {
  nombre: "Hungria",
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
function mostrarLoader() {
  loader.style.display = "block";
  viewer.style.display = "none";
}

function ocultarLoader() {
  loader.style.display = "none";
}

function cargarImagen(url) {
  if (!url) {
    viewer.innerHTML = "";
    viewer.style.display = "none";
    ocultarLoader();
    return;
  }

  mostrarLoader();

  const img = new Image();
  pendingImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImage !== img) return;

    viewer.innerHTML = "";
    viewer.appendChild(img);

    viewer.style.display = "block";
    ocultarLoader();

    pendingImage = null;
  };

  img.onerror = () => {
    if (pendingImage !== img) return;

    viewer.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewer.style.display = "block";
    ocultarLoader();

    pendingImage = null;
  };

  img.src = url;
}

function renderMedia() {
  const media = viaje.medios[currentMedia];
  viewer.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagen(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoader();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewer.style.display = "block";
    viewer.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewer.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndex.value=currentMedia+1;
  totalMedia.textContent = viaje.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtn.addEventListener("click", () => {
  currentMedia++;
  if(currentMedia >= viaje.medios.length) {
    currentMedia=0;
  }
  renderMedia();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtn.addEventListener("click",()=>{
  currentMedia--;
  if(currentMedia < 0) {
    currentMedia = viaje.medios.length-1;
  }
  renderMedia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndex.addEventListener("change", () => {
  const value=Number(mediaIndex.value);
  if(value>=1 && value<=viaje.medios.length) {
    currentMedia=value-1;
    renderMedia();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtn.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtn.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMedia();