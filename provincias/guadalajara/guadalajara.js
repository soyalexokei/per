/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerGuadalajara = document.getElementById("mediaViewerGuadalajara");
const prevBtnGuadalajara = document.getElementById("prevBtnGuadalajara");
const nextBtnGuadalajara = document.getElementById("nextBtnGuadalajara");
const mediaIndexGuadalajara = document.getElementById("mediaIndexGuadalajara");
const totalMediaGuadalajara = document.getElementById("totalMediaGuadalajara");
const loaderGuadalajara = document.getElementById("loaderGuadalajara");
let currentMediaGuadalajara = 0;
let pendingImageGuadalajara = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeGuadalajara = {
  nombre: "Guadalajara",
  medios: [
    /* 4 de Julio de 2025 - Boda Daniel y Roxana */
    {type: "image", src: "https://i.postimg.cc/k5HM412S/IMG-20250708-193144.png"},
    {type: "image", src: "https://i.postimg.cc/Rh5M1WQV/IMG-20250708-191612-937.webp"},
    {type: "image", src: "https://i.postimg.cc/ZRyby8NM/IMG-20250708-192941.png"},
    {type: "image", src: "https://i.postimg.cc/g2N29kdN/IMG-20250708-191909-422.webp"},
    {type: "image", src: "https://i.postimg.cc/q7qMpVv0/IMG-20250708-192212-883.webp"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderGuadalajara() {
  loaderGuadalajara.style.display = "block";
  viewerGuadalajara.style.display = "none";
}

function ocultarLoaderGuadalajara() {
  loaderGuadalajara.style.display = "none";
}

function cargarImagenGuadalajara(url) {
  if (!url) {
    viewerGuadalajara.innerHTML = "";
    viewerGuadalajara.style.display = "none";
    ocultarLoaderGuadalajara();
    return;
  }

  mostrarLoaderGuadalajara();

  const img = new Image();
  pendingImageGuadalajara = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageGuadalajara !== img) return;

    viewerGuadalajara.innerHTML = "";
    viewerGuadalajara.appendChild(img);

    viewerGuadalajara.style.display = "block";
    ocultarLoaderGuadalajara();

    pendingImageGuadalajara = null;
  };

  img.onerror = () => {
    if (pendingImageGuadalajara !== img) return;

    viewerGuadalajara.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerGuadalajara.style.display = "block";
    ocultarLoaderGuadalajara();

    pendingImageGuadalajara = null;
  };

  img.src = url;
}

function renderMediaGuadalajara() {
  const media = viajeGuadalajara.medios[currentMediaGuadalajara];
  viewerGuadalajara.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenGuadalajara(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderGuadalajara();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerGuadalajara.style.display = "block";
    viewerGuadalajara.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerGuadalajara.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexGuadalajara.value=currentMediaGuadalajara+1;
  totalMediaGuadalajara.textContent = viajeGuadalajara.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnGuadalajara.addEventListener("click", () => {
  currentMediaGuadalajara++;
  if(currentMediaGuadalajara >= viajeGuadalajara.medios.length) {
    currentMediaGuadalajara=0;
  }
  renderMediaGuadalajara();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnGuadalajara.addEventListener("click",()=>{
  currentMediaGuadalajara--;
  if(currentMediaGuadalajara < 0) {
    currentMediaGuadalajara = viajeGuadalajara.medios.length-1;
  }
  renderMediaGuadalajara();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexGuadalajara.addEventListener("change", () => {
  const value=Number(mediaIndexGuadalajara.value);
  if(value>=1 && value<=viajeGuadalajara.medios.length) {
    currentMediaGuadalajara=value-1;
    renderMediaGuadalajara();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnGuadalajara.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnGuadalajara.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaGuadalajara();