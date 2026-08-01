/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerUK = document.getElementById("mediaViewerUK");
const prevBtnUK = document.getElementById("prevBtnUK");
const nextBtnUK = document.getElementById("nextBtnUK");
const mediaIndexUK = document.getElementById("mediaIndexUK");
const totalMediaUK = document.getElementById("totalMediaUK");
const loaderUK = document.getElementById("loaderUK");
let currentMediaUK = 0;
let pendingUKImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeUK = {
  nombre: "United Kingdom",
  medios: [
    /* 1) Intercambio con mi "hermano" inglés Jack en Holmfirth - 2012*/
    { type: "image", src: "https://i.postimg.cc/x1zF64bP/01.png" },
    { type: "image", src: "https://i.postimg.cc/k5NYmRs6/02.jpg" },
    { type: "image", src: "https://i.postimg.cc/DZBCWVt7/03.jpg" },
    { type: "image", src: "https://i.postimg.cc/qRkbMBDm/04.jpg" },
    { type: "image", src: "https://i.postimg.cc/fyPBKczF/05.jpg" },
    { type: "image", src: "https://i.postimg.cc/tRvSpj35/06.jpg" },
    { type: "image", src: "https://i.postimg.cc/fT68SfgS/07.jpg" },
    { type: "image", src: "https://i.postimg.cc/vH1PmNXd/08.jpg" },
    { type: "image", src: "https://i.postimg.cc/fbs5BTsw/09.jpg" },
    { type: "image", src: "https://i.postimg.cc/FRspXW18/10.jpg" },
    { type: "image", src: "https://i.postimg.cc/85fznDNC/11.jpg" },
    { type: "image", src: "https://i.postimg.cc/bJCTyxtJ/12.jpg" },
    { type: "image", src: "https://i.postimg.cc/gc7D1Kpt/13.jpg" },
    { type: "image", src: "https://i.postimg.cc/rFtJTtFV/14.jpg" },
    { type: "image", src: "https://i.postimg.cc/qvsxhV3W/15.jpg" },
    { type: "image", src: "https://i.postimg.cc/Dwkcwy8q/16.jpg" },
    { type: "image", src: "https://i.postimg.cc/Dwgk1Jmh/33.png" },
    { type: "image", src: "https://i.postimg.cc/t4yG1tqD/34.png" },
    { type: "image", src: "https://i.postimg.cc/28nf8XDV/35.png" },
    { type: "image", src: "https://i.postimg.cc/HLT4bZ0n/17.jpg" },
    { type: "image", src: "https://i.postimg.cc/43wvP6w5/18.jpg" },
    { type: "image", src: "https://i.postimg.cc/76W38qFJ/19.jpg" },
    { type: "image", src: "https://i.postimg.cc/MHfyzhwP/20.jpg" },
    { type: "image", src: "https://i.postimg.cc/bYZMGrNM/21.jpg" },
    { type: "image", src: "https://i.postimg.cc/05h47vzN/22.jpg" },
    { type: "image", src: "https://i.postimg.cc/K82ss5rS/23.jpg" },
    { type: "image", src: "https://i.postimg.cc/nhGw8Q0s/24.jpg" },
    { type: "image", src: "https://i.postimg.cc/FKPWzXtN/25.jpg" },
    { type: "image", src: "https://i.postimg.cc/P5ZNHM64/38.png" },
    { type: "image", src: "https://i.postimg.cc/B6Xh17sD/26.jpg" },
    { type: "image", src: "https://i.postimg.cc/ydtLhhYG/27.jpg" },
    { type: "image", src: "https://i.postimg.cc/7hzmKC5Z/28.jpg" },
    { type: "image", src: "https://i.postimg.cc/QN1XHMg8/36.png" },
    { type: "image", src: "https://i.postimg.cc/15Sy6ZMp/37.png" },
    { type: "image", src: "https://i.postimg.cc/qB6bJF1H/29.jpg" },
    { type: "image", src: "https://i.postimg.cc/3JMLdZq4/30.jpg" },
    { type: "image", src: "https://i.postimg.cc/dt85dyMW/31.jpg" },
    { type: "image", src: "https://i.postimg.cc/mgB8SgBT/32.jpg" },
    /* 39) Viaje por trabajo a Apsley y Luton (UK) - 2024 */
    { type: "image", src: "https://i.postimg.cc/dtHkCkk8/1.png" },
    { type: "image", src: "https://i.postimg.cc/PrrvNzxX/2.png" },
    { type: "video", src: "https://streamable.com/e/9zty5h" },
    { type: "video", src: "https://streamable.com/e/1y0fpi" },
    { type: "image", src: "https://i.postimg.cc/9QsDx6B0/5.png" },
    { type: "video", src: "https://streamable.com/e/fk8cpg" },
    { type: "video", src: "https://streamable.com/e/g6wdtm" },
    { type: "video", src: "https://streamable.com/e/k1iqe1" },
    { type: "image", src: "https://i.postimg.cc/138grmwb/9.png" },
    { type: "image", src: "https://i.postimg.cc/d3Q3kwJH/10.png" },
    { type: "image", src: "https://i.postimg.cc/pTJyLpM5/11.png" },
    { type: "image", src: "https://i.postimg.cc/k4mBCWzd/12.png" },
    { type: "image", src: "https://i.postimg.cc/5tv6DsP3/13.png" },
    { type: "image", src: "https://i.postimg.cc/tJrTFwTX/14.png" },
    { type: "image", src: "https://i.postimg.cc/dt1DJsHD/15.png" },
    { type: "image", src: "https://i.postimg.cc/hP5vjk6s/16.png" },
    { type: "image", src: "https://i.postimg.cc/Y28hcGxJ/17.png" },
    { type: "image", src: "https://i.postimg.cc/nh9zQdtJ/18.png" },
    { type: "image", src: "https://i.postimg.cc/DzVzQq2b/19.png" },
    { type: "image", src: "https://i.postimg.cc/8ChzZj5X/20.png" },
    { type: "video", src: "https://streamable.com/e/41qe3z" },
    { type: "image", src: "https://i.postimg.cc/TwfYFf5d/22.png" },
    { type: "video", src: "https://streamable.com/e/tpstki" },
    { type: "video", src: "https://streamable.com/e/wr0x6s" },
    { type: "image", src: "https://i.postimg.cc/Tw0YXFnr/25.png" },
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderUK() {
  loaderUK.style.display = "block";
  viewerUK.style.display = "none";
}

function ocultarLoaderUK() {
  loaderUK.style.display = "none";
}

function cargarImagenUK(url) {
  if (!url) {
    viewerUK.innerHTML = "";
    viewerUK.style.display = "none";
    ocultarLoaderUK();
    return;
  }

  mostrarLoaderUK();

  const img = new Image();
  pendingUKImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingUKImage !== img) return;

    viewerUK.innerHTML = "";
    viewerUK.appendChild(img);

    viewerUK.style.display = "block";
    ocultarLoaderUK();

    pendingUKImage = null;
  };

  img.onerror = () => {
    if (pendingUKImage !== img) return;

    viewerUK.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerUK.style.display = "block";
    ocultarLoaderUK();

    pendingUKImage = null;
  };

  img.src = url;
}

function renderMediaUK() {
  const media = viajeUK.medios[currentMediaUK];
  viewerUK.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenUK(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderUK();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerUK.style.display = "block";
    viewerUK.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerUK.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexUK.value=currentMediaUK+1;
  totalMediaUK.textContent = viajeUK.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnUK.addEventListener("click", () => {
  currentMediaUK++;
  if(currentMediaUK >= viajeUK.medios.length) {
    currentMediaUK=0;
  }
  renderMediaUK();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnUK.addEventListener("click",()=>{
  currentMediaUK--;
  if(currentMediaUK < 0) {
    currentMediaUK=
    viajeUK.medios.length-1;
  }
  renderMediaUK();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexUK.addEventListener("change",()=>{
  const value=
  Number(mediaIndexUK.value);
  if(value>=1 && value<=viajeUK.medios.length) {
    currentMediaUK=value-1;
    renderMediaUK();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnUK.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnUK.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaUK();