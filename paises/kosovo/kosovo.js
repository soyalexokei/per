/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerKosovo = document.getElementById("mediaViewerKosovo");
const prevBtnKosovo = document.getElementById("prevBtnKosovo");
const nextBtnKosovo = document.getElementById("nextBtnKosovo");
const mediaIndexKosovo = document.getElementById("mediaIndexKosovo");
const totalMediaKosovo = document.getElementById("totalMediaKosovo");
const loaderKosovo = document.getElementById("loaderKosovo");
let currentMediaKosovo = 0;
let pendingKosovoImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeKosovo = {
  nombre: "Kosovo",
  medios: [
    /* 1) Experiencia en Kosovo 2022 */
    { type: "image", src: "https://i.postimg.cc/PrhbRKN8/1.jpg"},
    { type: "video", src: "https://streamable.com/e/1qhp0i"},
    { type: "image", src: "https://i.postimg.cc/HL2jj4dF/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/ncyXWh3S/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/Dw1S33Dv/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/pXh9kFJn/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/FKm79n5j/6.jpg"},
    { type: "video", src: "https://streamable.com/e/e1l8gz"},
    { type: "image", src: "https://i.postimg.cc/htGKpWBZ/7.jpg"},
    { type: "video", src: "https://streamable.com/e/6bg5pj"},
    { type: "image", src: "https://i.postimg.cc/GhXxZYW3/IMG-20220416-WA0007.png"},
    { type: "image", src: "https://i.postimg.cc/Hkj9Hnmw/IMG-20220416-WA0005.png"},
    { type: "image", src: "https://i.postimg.cc/ydTZ0CB6/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/W3VZDbBf/9.jpg"},
    { type: "image", src: "https://i.postimg.cc/m21rsWqc/10.jpg"},
    { type: "image", src: "https://i.postimg.cc/C5zx53xQ/11.jpg"},
    { type: "image", src: "https://i.postimg.cc/QCwxTfBx/12.jpg"},
    { type: "image", src: "https://i.postimg.cc/wxGBZjW8/13.jpg"},
    { type: "video", src: "https://streamable.com/e/ky7ilq"},
    { type: "image", src: "https://i.postimg.cc/XYM9M82b/14.jpg"},
    { type: "image", src: "https://i.postimg.cc/kMpxs9KD/15.jpg"},
    { type: "image", src: "https://i.postimg.cc/Z5rpJdgy/16.jpg"},
    { type: "image", src: "https://i.postimg.cc/kXRWhZvs/17.jpg"},
    { type: "image", src: "https://i.postimg.cc/bwz1gR3N/IMG-20220416-134607.png"},
    { type: "image", src: "https://i.postimg.cc/hGQv1zWt/18.jpg"},
    { type: "image", src: "https://i.postimg.cc/nz8zRFpY/19.jpg"},
    { type: "image", src: "https://i.postimg.cc/RZDqt1YY/20.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y91ST5Sc/21.jpg"},
    { type: "image", src: "https://i.postimg.cc/xTnxzLDn/IMG-20220416-133405.png"},
    { type: "image", src: "https://i.postimg.cc/RFwd3ZgW/IMG-20220416-WA0010.png"},
    { type: "image", src: "https://i.postimg.cc/d3B9BSPv/IMG-20220416-163157.png"},
    { type: "image", src: "https://i.postimg.cc/GtrQvnfq/IMG-20220416-141757.png"},
    { type: "video", src: "https://streamable.com/e/u1v4ce"},
    { type: "image", src: "https://i.postimg.cc/ZK5PmHzB/26.jpg"},
    { type: "image", src: "https://i.postimg.cc/76N78GBn/22.jpg"},
    { type: "image", src: "https://i.postimg.cc/kG1bDrPV/23.jpg"},
    { type: "image", src: "https://i.postimg.cc/8CRfMfVg/IMG-20220416-135929.png"},
    { type: "image", src: "https://i.postimg.cc/RhVtMSy5/24.jpg"},
    { type: "image", src: "https://i.postimg.cc/7Pm7KzJx/25.jpg"},
    { type: "image", src: "https://i.postimg.cc/DzkbSdHc/IMG-20220416-134312.png"},
    { type: "image", src: "https://i.postimg.cc/15XF2zDD/27.jpg"},
    { type: "video", src: "https://streamable.com/e/pyi2ue"},
    { type: "video", src: "https://streamable.com/e/0kna0i"},
    { type: "image", src: "https://i.postimg.cc/NMVt0bPs/28.jpg"},
    { type: "image", src: "https://i.postimg.cc/G29rr6Kg/29.jpg"},
    { type: "image", src: "https://i.postimg.cc/28SttnHT/IMG-20220417-000013.png"},
    { type: "image", src: "https://i.postimg.cc/65bPxTgK/IMG-20220417-001646.png"},
    { type: "image", src: "https://i.postimg.cc/PxfbqQvR/32.jpg"},
    { type: "image", src: "https://i.postimg.cc/cC2fXq9p/30.jpg"},
    { type: "image", src: "https://i.postimg.cc/L8Hbrwmc/IMG-20220417-093025.png"},
    { type: "image", src: "https://i.postimg.cc/ncKWSpfK/IMG-20220417-093026.png"},
    { type: "image", src: "https://i.postimg.cc/fbygbdt5/IMG-20220417-093049.png"},
    { type: "image", src: "https://i.postimg.cc/6QPb4QCK/IMG-20220417-093122.png"},
    { type: "image", src: "https://i.postimg.cc/CxLcv8NY/IMG-20220417-093129.png"},
    { type: "image", src: "https://i.postimg.cc/4N18bPpB/IMG-20220417-093138.png"},
    { type: "image", src: "https://i.postimg.cc/DyhjXH4S/IMG-20220417-093258.png"},
    { type: "image", src: "https://i.postimg.cc/MpPdgGPB/IMG-20220417-093318.png"},
    { type: "image", src: "https://i.postimg.cc/ZqXjKMhK/Sin-t-tulo-1.png"},
    { type: "video", src: "https://streamable.com/e/ivhwd9"},
    { type: "video", src: "https://streamable.com/e/l3pqq8"},
    { type: "image", src: "https://i.postimg.cc/nVSrjbPk/31.jpg"},
    { type: "image", src: "https://i.postimg.cc/qqq7bjzy/33.jpg"},
    { type: "image", src: "https://i.postimg.cc/9MJMYvFc/34.jpg"},
    { type: "image", src: "https://i.postimg.cc/sxLgt7h8/35.jpg"},
    { type: "image", src: "https://i.postimg.cc/fT3LYq4h/36.jpg"},
    { type: "image", src: "https://i.postimg.cc/3w2PRRTq/IMG-20220417-103837.png"},
    { type: "image", src: "https://i.postimg.cc/V612b8sk/IMG-20220417-105759.png"},
    { type: "image", src: "https://i.postimg.cc/Tw9FV4hq/IMG-20220417-105904.png"},
    { type: "image", src: "https://i.postimg.cc/LX1778yD/IMG-20220417-110202.png"},
    { type: "image", src: "https://i.postimg.cc/CLYtPYbC/IMG-20220417-110124.png"},
    { type: "image", src: "https://i.postimg.cc/Vv9hfHPb/IMG-20220417-110734.png"},
    { type: "image", src: "https://i.postimg.cc/G3vVx9Th/IMG-20220417-110955.png"},
    { type: "image", src: "https://i.postimg.cc/gjb5PbQW/IMG-20220417-112412.png"},
    { type: "image", src: "https://i.postimg.cc/267dVp3m/IMG-20220417-111730.png"},
    { type: "image", src: "https://i.postimg.cc/1XWprppj/IMG-20220417-111954.png"},
    { type: "image", src: "https://i.postimg.cc/8ckRvyrv/IMG-20220417-112056.png"},
    { type: "video", src: "https://streamable.com/e/s2prle"},
    { type: "video", src: "https://streamable.com/e/ozf636"},
    { type: "image", src: "https://i.postimg.cc/XY5s4zKN/Img-83298hff.png"},
    { type: "image", src: "https://i.postimg.cc/XJjLKNRX/IMG-20220417-113109.png"},
    { type: "image", src: "https://i.postimg.cc/xdygbNFW/IMG-20220417-113500.png"},
    { type: "image", src: "https://i.postimg.cc/6QNY3fzr/IMG-20220417-115203.png"},
    { type: "image", src: "https://i.postimg.cc/BQKXBXr6/IMG-20220417-120209.png"},
    { type: "image", src: "https://i.postimg.cc/JnYGPJ7y/IMG-20220417-122024.png"},
    { type: "image", src: "https://i.postimg.cc/Gpr82dSp/IMG-20220417-122017.png"},
    { type: "image", src: "https://i.postimg.cc/652GbHvB/IMG-20220417-120527.png"},
    { type: "video", src: "https://streamable.com/e/cdsxpy"},
    { type: "image", src: "https://i.postimg.cc/bw1SpsgM/IMG-20220417-125845.png"},
    { type: "image", src: "https://i.postimg.cc/65k4kdrn/IMG-20220417-125929.png"},
    { type: "image", src: "https://i.postimg.cc/6Q074gDf/IMG-20220417-125853.png"},
    { type: "image", src: "https://i.postimg.cc/tT4s3DbQ/37.jpg"},
    { type: "image", src: "https://i.postimg.cc/qqtgYRg1/38.jpg"},
    { type: "image", src: "https://i.postimg.cc/NFWLwcHB/39.jpg"},
    { type: "image", src: "https://i.postimg.cc/L8FhCmSV/40.jpg"},
    { type: "image", src: "https://i.postimg.cc/c1jv3Q52/41.jpg"},
    { type: "image", src: "https://i.postimg.cc/cL7CPP4G/42.jpg"},
    { type: "image", src: "https://i.postimg.cc/Jh108KGD/43.jpg"},
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderKosovo() {
  loaderKosovo.style.display = "block";
  viewerKosovo.style.display = "none";
}

function ocultarLoaderKosovo() {
  loaderKosovo.style.display = "none";
}

function cargarImagenKosovo(url) {
  if (!url) {
    viewerKosovo.innerHTML = "";
    viewerKosovo.style.display = "none";
    ocultarLoaderKosovo();
    return;
  }

  mostrarLoaderKosovo();

  const img = new Image();
  pendingKosovoImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingKosovoImage !== img) return;

    viewerKosovo.innerHTML = "";
    viewerKosovo.appendChild(img);

    viewerKosovo.style.display = "block";
    ocultarLoaderKosovo();

    pendingKosovoImage = null;
  };

  img.onerror = () => {
    if (pendingKosovoImage !== img) return;

    viewerKosovo.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerKosovo.style.display = "block";
    ocultarLoaderKosovo();

    pendingKosovoImage = null;
  };

  img.src = url;
}

function renderMediaKosovo() {
  const media = viajeKosovo.medios[currentMediaKosovo];
  viewerKosovo.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenKosovo(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderKosovo();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerKosovo.style.display = "block";
    viewerKosovo.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerKosovo.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexKosovo.value=currentMediaKosovo+1;
  totalMediaKosovo.textContent = viajeKosovo.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnKosovo.addEventListener("click", () => {
  currentMediaKosovo++;
  if(currentMediaKosovo >= viajeKosovo.medios.length) {
    currentMediaKosovo=0;
  }
  renderMediaKosovo();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnKosovo.addEventListener("click",()=>{
  currentMediaKosovo--;
  if(currentMediaKosovo < 0) {
    currentMediaKosovo=
    viajeKosovo.medios.length-1;
  }
  renderMediaKosovo();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexKosovo.addEventListener("change",()=>{
  const value=Number(mediaIndexKosovo.value);
  if(value>=1 && value<=viajeKosovo.medios.length) {
    currentMediaKosovo=value-1;
    renderMediaKosovo();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnKosovo.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnKosovo.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaKosovo();