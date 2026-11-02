/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerNoruega = document.getElementById("mediaViewerNoruega");
const prevBtnNoruega = document.getElementById("prevBtnNoruega");
const nextBtnNoruega = document.getElementById("nextBtnNoruega");
const mediaIndexNoruega = document.getElementById("mediaIndexNoruega");
const totalMediaNoruega = document.getElementById("totalMediaNoruega");
const loaderNoruega = document.getElementById("loaderNoruega");
let currentMediaNoruega = 0;
let pendingImageNoruega = null;

/****************************************************/
/* DATOS DEL VIAJE { type: "image", src: ""}, { type: "video", src: ""}, */
/****************************************************/
const viajeNoruega = {
  nombre: "Noruega",
  medios: [
    { type: "image", src: "https://i.postimg.cc/vTQjMG37/IMG-20261101-230600-928.webp"},
    { type: "image", src: "https://i.postimg.cc/Dwbx9Wn9/IMG-20261102-170136-482.jpg"},
    { type: "video", src: "https://streamable.com/e/z6aipo"},
    { type: "image", src: "https://i.postimg.cc/1zrrSw23/IMG-20261102-190654-626.webp"},
    { type: "video", src: "https://streamable.com/e/jp6uzw"},
    { type: "image", src: "https://i.postimg.cc/rF4ZDhPP/IMG-20261102-191120-332.webp"},
    { type: "image", src: "https://i.postimg.cc/L6PQJybC/IMG-20261102-191604-059.webp"},
    { type: "image", src: "https://i.postimg.cc/dtCNhWx4/IMG-20261102-192109-886.jpg"},
    { type: "image", src: "https://i.postimg.cc/tCGtM9BJ/IMG-20261102-194047-462.webp"},
    { type: "image", src: "https://i.postimg.cc/QCQ53Wft/IMG-20261102-192350-344.jpg"},
    { type: "image", src: "https://i.postimg.cc/Jz4Xf0Z3/IMG-20261102-192427-929.webp"},
    { type: "image", src: "https://i.postimg.cc/bJbSxtc4/IMG-20261102-192540-423.webp"},
    { type: "image", src: "https://i.postimg.cc/767J328p/IMG-20261102-192709-102.webp"},
    { type: "image", src: "https://i.postimg.cc/Qt5KQTG2/IMG-20261102-193053-047.webp"},
    { type: "video", src: "https://streamable.com/e/qhhkt4"},
    { type: "video", src: "https://streamable.com/e/80vwji"},
    { type: "image", src: "https://i.postimg.cc/Pr6J84vw/IMG-20261102-194413-447.webp"},
    { type: "image", src: "https://i.postimg.cc/pX0rnZ5n/IMG-20261102-194614-095.jpg"},
    { type: "video", src: "https://streamable.com/e/sbq47g"},
    { type: "image", src: "https://i.postimg.cc/d1Wp9L2g/IMG-20261102-195321-099.jpg"},
    { type: "image", src: "https://i.postimg.cc/JnTvQGN9/IMG-20261102-195359-111.jpg"},
    { type: "image", src: "https://i.postimg.cc/43PSJmSg/IMG-20261102-195436-043.jpg"},
    { type: "image", src: "https://i.postimg.cc/QMmyXHyr/IMG-20261102-195623-111.jpg"},
    { type: "image", src: "https://i.postimg.cc/PqyRtPRT/IMG-20261102-195658-921.webp"},
    { type: "image", src: "https://i.postimg.cc/Jhx21G2w/IMG-20261102-195728-804.jpg"},
    { type: "image", src: "https://i.postimg.cc/wB2G67GY/IMG-20261102-195907-927.webp"},
    { type: "image", src: "https://i.postimg.cc/hGs5Sf3k/IMG-20261102-195947-793.jpg"},
    { type: "image", src: "https://i.postimg.cc/QMmyXHyG/IMG-20261102-200022-810.jpg"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderNoruega() {
  loaderNoruega.style.display = "block";
  viewerNoruega.style.display = "none";
}

function ocultarLoaderNoruega() {
  loaderNoruega.style.display = "none";
}

function cargarImagenNoruega(url) {
  if (!url) {
    viewerNoruega.innerHTML = "";
    viewerNoruega.style.display = "none";
    ocultarLoaderNoruega();
    return;
  }

  mostrarLoaderNoruega();

  const img = new Image();
  pendingImageNoruega = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageNoruega !== img) return;

    viewerNoruega.innerHTML = "";
    viewerNoruega.appendChild(img);

    viewerNoruega.style.display = "block";
    ocultarLoaderNoruega();

    pendingImageNoruega = null;
  };

  img.onerror = () => {
    if (pendingImageNoruega !== img) return;

    viewerNoruega.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerNoruega.style.display = "block";
    ocultarLoaderNoruega();

    pendingImageNoruega = null;
  };

  img.src = url;
}

function renderMediaNoruega() {
  const media = viajeNoruega.medios[currentMediaNoruega];
  viewerNoruega.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenNoruega(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderNoruega();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerNoruega.style.display = "block";
    viewerNoruega.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerNoruega.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexNoruega.value=currentMediaNoruega+1;
  totalMediaNoruega.textContent = viajeNoruega.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnNoruega.addEventListener("click", () => {
  currentMediaNoruega++;
  if(currentMediaNoruega >= viajeNoruega.medios.length) {
    currentMediaNoruega=0;
  }
  renderMediaNoruega();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnNoruega.addEventListener("click",()=>{
  currentMediaNoruega--;
  if(currentMediaNoruega < 0) {
    currentMediaNoruega = viajeNoruega.medios.length-1;
  }
  renderMediaNoruega();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexNoruega.addEventListener("change", () => {
  const value=Number(mediaIndexNoruega.value);
  if(value>=1 && value<=viajeNoruega.medios.length) {
    currentMediaNoruega=value-1;
    renderMediaNoruega();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnNoruega.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnNoruega.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaNoruega();