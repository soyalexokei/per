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
    { type: "video", src: "https://streamable.com/e/hplrgc"},
    { type: "video", src: "https://streamable.com/e/hd231y"},
    { type: "image", src: "https://i.postimg.cc/qvCnGSTn/IMG-20261102-214013-106.jpg"},
    { type: "image", src: "https://i.postimg.cc/XYyFgmbw/IMG-20261102-214150-955.webp"},
    { type: "image", src: "https://i.postimg.cc/FHJcx84b/IMG-20261102-214219-240.webp"},
    { type: "video", src: "https://streamable.com/e/0m9z8z"},
    { type: "video", src: "https://streamable.com/e/eowxvq"},
    { type: "image", src: "https://i.postimg.cc/s2m2P4vf/IMG-20261102-215139-451.webp"},
    { type: "image", src: "https://i.postimg.cc/6QcQVfy9/IMG-20261102-215623-613.jpg"},
    { type: "image", src: "https://i.postimg.cc/R0d01LNv/IMG-20261102-215700-450.jpg"},
    { type: "image", src: "https://i.postimg.cc/pVq0bYdQ/IMG-20261105-004629-562.jpg"},
    { type: "image", src: "https://i.postimg.cc/59nPdqt7/IMG-20261105-004728-696.webp"},
    { type: "image", src: "https://i.postimg.cc/v83PFLmP/IMG-20261105-005201-855.webp"},
    { type: "image", src: "https://i.postimg.cc/Pf26szqy/IMG-20261105-005256-193.webp"},
    { type: "image", src: "https://i.postimg.cc/WpX9L64n/IMG-20261105-010229-719.webp"},
    { type: "image", src: "https://i.postimg.cc/XNQ2Scvk/IMG-20261105-010305-545.webp"},
    { type: "image", src: "https://i.postimg.cc/Y2bXKfSf/IMG-20261105-010354-089.webp"},
    { type: "video", src: "https://streamable.com/e/kch5vl"},
    { type: "image", src: "https://i.postimg.cc/5y68MzPm/IMG-20261105-011140-362.webp"},
    { type: "image", src: "https://i.postimg.cc/wM7DdNWc/IMG-20261105-011214-328.jpg"},
    { type: "video", src: "https://streamable.com/e/uogg8a"},
    { type: "image", src: "https://i.postimg.cc/NF92ncFg/IMG-20261105-011641-869.webp"},
    { type: "image", src: "https://i.postimg.cc/8cJfYScN/IMG-20261105-011722-582.webp"},
    { type: "image", src: "https://i.postimg.cc/BbLPz0bJ/IMG-20261105-011756-555.webp"},
    { type: "image", src: "https://i.postimg.cc/prw5b6h4/IMG-20261105-011851-865.webp"},
    { type: "video", src: "https://streamable.com/e/i0e1wl"},
    { type: "image", src: "https://i.postimg.cc/G2NHG5QG/IMG-20261105-012432-852.jpg"},
    { type: "image", src: "https://i.postimg.cc/RF8NKDRc/IMG-20261105-012720-788.webp"},
    { type: "image", src: "https://i.postimg.cc/4dMmVS5p/IMG-20261105-012819-582.webp"},
    { type: "image", src: "https://i.postimg.cc/bJMskBTx/IMG-20261105-013035-486.webp"},
    { type: "image", src: "https://i.postimg.cc/63Synm0G/IMG-20261105-013922-099.jpg"},
    { type: "image", src: "https://i.postimg.cc/k4ZBKpcb/IMG-20261105-013950-196.jpg"},
    { type: "image", src: "https://i.postimg.cc/NMV5mz42/IMG-20261105-014040-155.jpg"},
    { type: "image", src: "https://i.postimg.cc/3R6dmcBp/IMG-20261105-014117-097.jpg"},
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