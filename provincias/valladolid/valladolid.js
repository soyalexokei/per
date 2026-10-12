/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerValladolid = document.getElementById("mediaViewerValladolid");
const prevBtnValladolid = document.getElementById("prevBtnValladolid");
const nextBtnValladolid = document.getElementById("nextBtnValladolid");
const mediaIndexValladolid = document.getElementById("mediaIndexValladolid");
const totalMediaValladolid = document.getElementById("totalMediaValladolid");
const loaderValladolid = document.getElementById("loaderValladolid");
let currentMediaValladolid = 0;
let pendingImageValladolid = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeValladolid = {
  nombre: "Valladolid",
  medios: [
    { type: "image", src: "https://i.postimg.cc/s2rR3hfv/IMG-20261012-172726-387.jpg"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderValladolid() {
  loaderValladolid.style.display = "block";
  viewerValladolid.style.display = "none";
}

function ocultarLoaderValladolid() {
  loaderValladolid.style.display = "none";
}

function cargarImagenValladolid(url) {
  if (!url) {
    viewerValladolid.innerHTML = "";
    viewerValladolid.style.display = "none";
    ocultarLoaderValladolid();
    return;
  }

  mostrarLoaderValladolid();

  const img = new Image();
  pendingImageValladolid = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageValladolid !== img) return;

    viewerValladolid.innerHTML = "";
    viewerValladolid.appendChild(img);

    viewerValladolid.style.display = "block";
    ocultarLoaderValladolid();

    pendingImageValladolid = null;
  };

  img.onerror = () => {
    if (pendingImageValladolid !== img) return;

    viewerValladolid.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerValladolid.style.display = "block";
    ocultarLoaderValladolid();

    pendingImageValladolid = null;
  };

  img.src = url;
}

function renderMediaValladolid() {
  const media = viajeValladolid.medios[currentMediaValladolid];
  viewerValladolid.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenValladolid(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderValladolid();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerValladolid.style.display = "block";
    viewerValladolid.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerValladolid.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexValladolid.value=currentMediaValladolid+1;
  totalMediaValladolid.textContent = viajeValladolid.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnValladolid.addEventListener("click", () => {
  currentMediaValladolid++;
  if(currentMediaValladolid >= viajeValladolid.medios.length) {
    currentMediaValladolid=0;
  }
  renderMediaValladolid();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnValladolid.addEventListener("click",()=>{
  currentMediaValladolid--;
  if(currentMediaValladolid < 0) {
    currentMediaValladolid = viajeValladolid.medios.length-1;
  }
  renderMediaValladolid();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexValladolid.addEventListener("change", () => {
  const value=Number(mediaIndexValladolid.value);
  if(value>=1 && value<=viajeValladolid.medios.length) {
    currentMediaValladolid=value-1;
    renderMediaValladolid();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnValladolid.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnValladolid.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaValladolid();