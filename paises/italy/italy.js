/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerItalia = document.getElementById("mediaViewerItalia");
const prevBtnItalia = document.getElementById("prevBtnItalia");
const nextBtnItalia = document.getElementById("nextBtnItalia");
const mediaIndexItalia = document.getElementById("mediaIndexItalia");
const totalMediaItalia = document.getElementById("totalMediaItalia");
const loaderItalia = document.getElementById("loaderItalia");
let currentMediaItalia = 0;
let pendingImageItalia = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeItalia = {
  nombre: "Italia",
  medios: [
    { type: "image", src: "https://i.postimg.cc/cHxQ4rKw/IMG-20251018-161332-944.webp" },
    { type: "image", src: "https://i.postimg.cc/tTqhCY1h/IMG-20251018-164751-471.webp" },
    { type: "image", src: "https://i.postimg.cc/vBYWHc1c/IMG-20251018-161818-580.webp" },
    { type: "image", src: "https://i.postimg.cc/xjHzDvpv/IMG-20251018-164829-075.webp" },
    { type: "image", src: "https://i.postimg.cc/1XpnGSNh/IMG-20251018-164955-279.webp" },
    { type: "image", src: "https://i.postimg.cc/Vvjrqw0F/IMG-20251018-165838.png" },
    { type: "image", src: "https://i.postimg.cc/4yz76GHQ/IMG-20251018-165852.png" },
    { type: "image", src: "https://i.postimg.cc/MHkffHHP/IMG-20251018-170838-860.webp" },
    { type: "image", src: "https://i.postimg.cc/L5zYtSgT/IMG-20251018-171122.png" },
    { type: "video", src: "https://streamable.com/e/qn04hd" },
    { type: "image", src: "https://i.postimg.cc/fbGYmBgD/IMG-20251018-171916.png" },
    { type: "image", src: "https://i.postimg.cc/nrHjG5K7/IMG-20251018-174454.png" },
    { type: "video", src: "https://streamable.com/e/n8k530" },
    { type: "image", src: "https://i.postimg.cc/4dKsk1JL/IMG-20251018-172620.png" },
    { type: "video", src: "https://streamable.com/e/nnd8ue" },
    { type: "image", src: "https://i.postimg.cc/SsLVKBN4/IMG-20251018-171335.png" },
    { type: "image", src: "https://i.postimg.cc/nzKTLycJ/IMG-20251018-171655.png" },
    { type: "image", src: "https://i.postimg.cc/DZ3Bnvhp/IMG-20251018-174349.png" },
    { type: "image", src: "https://i.postimg.cc/QtZ0h8DQ/IMG-20251018-174416.png" },
    { type: "image", src: "https://i.postimg.cc/wBm0CtC3/IMG-20251018-174728-584.webp" },
    { type: "image", src: "https://i.postimg.cc/g0ZNCwCc/IMG-20251018-175916.png" },
    { type: "image", src: "https://i.postimg.cc/g0ZNCwCJ/IMG-20251018-175837.png" },
    { type: "image", src: "https://i.postimg.cc/zfg0sLsz/IMG-20251018-175857.png" },
    { type: "image", src: "https://i.postimg.cc/GpyqWBWz/IMG-20251018-174439.png" },
    { type: "image", src: "https://i.postimg.cc/Mp4930FT/IMG-20251018-180055-063.webp" },
    { type: "image", src: "https://i.postimg.cc/DZQ5z9ft/IMG-20251018-173902-439.webp" },
    { type: "image", src: "https://i.postimg.cc/vBw3bYyX/IMG-20251018-174403.png" },
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderItalia() {
  loaderItalia.style.display = "block";
  viewerItalia.style.display = "none";
}

function ocultarLoaderItalia() {
  loaderItalia.style.display = "none";
}

function cargarImagenItalia(url) {
  if (!url) {
    viewerItalia.innerHTML = "";
    viewerItalia.style.display = "none";
    ocultarLoaderItalia();
    return;
  }

  mostrarLoaderItalia();

  const img = new Image();
  pendingImageItalia = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageItalia !== img) return;

    viewerItalia.innerHTML = "";
    viewerItalia.appendChild(img);

    viewerItalia.style.display = "block";
    ocultarLoaderItalia();

    pendingImageItalia = null;
  };

  img.onerror = () => {
    if (pendingImageItalia !== img) return;

    viewerItalia.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerItalia.style.display = "block";
    ocultarLoaderItalia();

    pendingImageItalia = null;
  };

  img.src = url;
}

function renderMediaItalia() {
  const media = viajeItalia.medios[currentMediaItalia];
  viewerItalia.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenItalia(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderItalia();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerItalia.style.display = "block";
    viewerItalia.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerItalia.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexItalia.value=currentMediaItalia+1;
  totalMediaItalia.textContent = viajeItalia.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnItalia.addEventListener("click", () => {
  currentMediaItalia++;
  if(currentMediaItalia >= viajeItalia.medios.length) {
    currentMediaItalia=0;
  }
  renderMediaItalia();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnItalia.addEventListener("click",()=>{
  currentMediaItalia--;
  if(currentMediaItalia < 0) {
    currentMediaItalia = viajeItalia.medios.length-1;
  }
  renderMediaItalia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexItalia.addEventListener("change", () => {
  const value=Number(mediaIndexItalia.value);
  if(value>=1 && value<=viajeItalia.medios.length) {
    currentMediaItalia=value-1;
    renderMediaItalia();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnItalia.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnItalia.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaItalia();