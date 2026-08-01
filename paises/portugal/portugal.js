/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerPortugal = document.getElementById("mediaViewerPortugal");
const prevBtnPortugal = document.getElementById("prevBtnPortugal");
const nextBtnPortugal = document.getElementById("nextBtnPortugal");
const mediaIndexPortugal = document.getElementById("mediaIndexPortugal");
const totalMediaPortugal = document.getElementById("totalMediaPortugal");
const loaderPortugal = document.getElementById("loaderPortugal");
let currentMediaPortugal = 0;
let pendingPortugalImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajePortugal = {
  nombre: "Portugal",
  medios: [
    /* 1) Vacaciones Navidad con mi familia - de 2010 a 2011 */
    { type: "image", src: "https://i.postimg.cc/L6QbXPWv/001.png"},
    { type: "image", src: "https://i.postimg.cc/DZDS0Bqn/002.png"},
    { type: "image", src: "https://i.postimg.cc/TwhyTZ5t/003.png"},
    { type: "image", src: "https://i.postimg.cc/YCfLRNwz/004.png"},
    { type: "image", src: "https://i.postimg.cc/7ZyTSsjL/005.png"},
    { type: "image", src: "https://i.postimg.cc/15FqnhCT/006.png"},
    { type: "image", src: "https://i.postimg.cc/Hnq8ZBxB/007.png"},
    { type: "image", src: "https://i.postimg.cc/DfHGwygL/008.png"},
    { type: "image", src: "https://i.postimg.cc/5yYFSZxX/009.png"},
    { type: "image", src: "https://i.postimg.cc/j5k7NsrV/010.png"},
    { type: "image", src: "https://i.postimg.cc/fLbdJVpj/011.png"},
    { type: "image", src: "https://i.postimg.cc/TP0mdV73/012.png"},
    { type: "image", src: "https://i.postimg.cc/tgpWGSzc/013.png"},
    { type: "image", src: "https://i.postimg.cc/2S4hJRnv/014.png"},
    { type: "image", src: "https://i.postimg.cc/T24V5cRy/015.png"},
    { type: "image", src: "https://i.postimg.cc/y8q0vY3s/016.png"},
    { type: "image", src: "https://i.postimg.cc/xTNKvbC6/017.png"},
    { type: "image", src: "https://i.postimg.cc/wM7Db1kT/018.png"},
    { type: "image", src: "https://i.postimg.cc/VvpXyz79/019.png"},
    { type: "image", src: "https://i.postimg.cc/V67jRqnV/020.png"},
    { type: "image", src: "https://i.postimg.cc/LX4tLCYP/021.png"},
    { type: "image", src: "https://i.postimg.cc/hGBbPPKp/022.png"},
    { type: "image", src: "https://i.postimg.cc/SKfLXFsq/023.png"},
    { type: "image", src: "https://i.postimg.cc/8zWmSrg7/024.png"},
    { type: "image", src: "https://i.postimg.cc/dtgjpjpM/025.png"},
    { type: "image", src: "https://i.postimg.cc/RVWTgDPQ/026.png"},
    { type: "image", src: "https://i.postimg.cc/T279q6c3/027.png"},
    { type: "image", src: "https://i.postimg.cc/fyrfwcb9/028.png"},
    { type: "image", src: "https://i.postimg.cc/3NRZ5S3h/029.png"},
    { type: "image", src: "https://i.postimg.cc/LXvVWKKv/030.png"},
    { type: "image", src: "https://i.postimg.cc/SsmrVQ5J/031.png"},
    { type: "image", src: "https://i.postimg.cc/bvxgQSm7/032.png"},
    { type: "image", src: "https://i.postimg.cc/XvSxGkkK/033.png"},
    { type: "image", src: "https://i.postimg.cc/sDLTyrBN/034.png"},
    { type: "image", src: "https://i.postimg.cc/wTMwSvBN/035.png"},
    { type: "image", src: "https://i.postimg.cc/MG9M2WHc/036.jpg"},
    { type: "image", src: "https://i.postimg.cc/XqCpCd8F/037.jpg"},
    { type: "image", src: "https://i.postimg.cc/bYsVsT7M/038.jpg"},
    { type: "image", src: "https://i.postimg.cc/xqVqy8xZ/039.jpg"},
    { type: "image", src: "https://i.postimg.cc/44qLtcZ3/040.jpg"},
    { type: "image", src: "https://i.postimg.cc/7YzBNLYn/041.jpg"},
    { type: "image", src: "https://i.postimg.cc/RZzgpzW5/042.jpg"},
    { type: "image", src: "https://i.postimg.cc/XYcQTD5Z/043.jpg"},
    { type: "image", src: "https://i.postimg.cc/XvjQ3cKs/044.jpg"},
    { type: "image", src: "https://i.postimg.cc/HL63LcBd/045.jpg"},
    { type: "image", src: "https://i.postimg.cc/B6tpPSVD/046.jpg"},
    { type: "image", src: "https://i.postimg.cc/cHjmQppz/047.jpg"},
    { type: "image", src: "https://i.postimg.cc/cCncTDZL/048.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y2G8pSgB/049.jpg"},
    { type: "image", src: "https://i.postimg.cc/ZYGH0hFB/050.jpg"},
    { type: "image", src: "https://i.postimg.cc/zXTjgP0d/051.jpg"},
    { type: "image", src: "https://i.postimg.cc/jSKhQQ1R/052.jpg"},
    { type: "image", src: "https://i.postimg.cc/v83Pq9GM/053.png"},
    { type: "image", src: "https://i.postimg.cc/KY8rCcFV/054.jpg"},
    { type: "image", src: "https://i.postimg.cc/RF31VPWL/055.jpg"},
    { type: "image", src: "https://i.postimg.cc/XJTfZwFS/056.jpg"},
    { type: "image", src: "https://i.postimg.cc/qqy82zXt/057.jpg"},
    { type: "image", src: "https://i.postimg.cc/tRxdKMQX/058.jpg"},
    { type: "image", src: "https://i.postimg.cc/90mWYkyG/059.jpg"},
    { type: "image", src: "https://i.postimg.cc/mZjZgbGV/060.jpg"},
    { type: "image", src: "https://i.postimg.cc/L6s9qr9S/061.jpg"},
    { type: "image", src: "https://i.postimg.cc/2yc21p03/062.png"},
    { type: "image", src: "https://i.postimg.cc/8cPZkkBq/063.png"},
    { type: "image", src: "https://i.postimg.cc/sXJnRGSY/064.png"},
    { type: "image", src: "https://i.postimg.cc/gJpM5Hwc/065.png"},
    { type: "image", src: "https://i.postimg.cc/MGVPdFpr/066.png"},
    { type: "image", src: "https://i.postimg.cc/2Sw7HLph/067.jpg"},
    { type: "image", src: "https://i.postimg.cc/DzpdhVwz/068.jpg"},
    { type: "image", src: "https://i.postimg.cc/htJ37jWn/069.png"},
    { type: "image", src: "https://i.postimg.cc/28Ndr7rn/070.jpg"},
    { type: "image", src: "https://i.postimg.cc/X7KfJBYm/071.jpg"},
    { type: "image", src: "https://i.postimg.cc/qvk8CBtR/072.jpg"},
    { type: "image", src: "https://i.postimg.cc/dV4GRMd9/073.jpg"},
    { type: "image", src: "https://i.postimg.cc/MGHVdsmJ/074.jpg"},
    { type: "image", src: "https://i.postimg.cc/vmK9jW0g/075.jpg"},
    { type: "image", src: "https://i.postimg.cc/3RDpHdqL/076.jpg"},
    { type: "image", src: "https://i.postimg.cc/d3PCQJPJ/077.jpg"},
    { type: "image", src: "https://i.postimg.cc/6qrvyFtn/078.jpg"},
    { type: "image", src: "https://i.postimg.cc/pVz8G5zr/079.jpg"},
    { type: "image", src: "https://i.postimg.cc/DyhGtfPg/080.jpg"},
    { type: "image", src: "https://i.postimg.cc/RVTt9rPz/081.jpg"},
    { type: "image", src: "https://i.postimg.cc/kgXbgjZR/082.jpg"},
    { type: "image", src: "https://i.postimg.cc/4xLh76kL/083.jpg"},
    { type: "image", src: "https://i.postimg.cc/FKYkjYh9/084.jpg"},
    { type: "image", src: "https://i.postimg.cc/HLFc3TLb/085.jpg"},
    { type: "image", src: "https://i.postimg.cc/bJbGB4GW/086.jpg"},
    { type: "image", src: "https://i.postimg.cc/Kj2KSQBz/087.jpg"},
    { type: "image", src: "https://i.postimg.cc/65z8gr3W/088.jpg"},
    { type: "image", src: "https://i.postimg.cc/0yLXGsPw/089.png"},
    { type: "image", src: "https://i.postimg.cc/zGByrybn/090.jpg"},
    { type: "image", src: "https://i.postimg.cc/Njz5fQmZ/091.jpg"},
    { type: "image", src: "https://i.postimg.cc/wBR31nkM/092.jpg"},
    { type: "image", src: "https://i.postimg.cc/cHqCwTDm/093.jpg"},
    { type: "image", src: "https://i.postimg.cc/1zmnjgmh/094.jpg"},
    { type: "image", src: "https://i.postimg.cc/k4x4c8zd/095.jpg"},
    { type: "image", src: "https://i.postimg.cc/prRd1rM5/096.jpg"},
    { type: "image", src: "https://i.postimg.cc/yxjNqK7Q/097.jpg"},
    { type: "image", src: "https://i.postimg.cc/pVJr5fKf/098.jpg"},
    { type: "image", src: "https://i.postimg.cc/xTjCvXPW/099.jpg"},
    { type: "image", src: "https://i.postimg.cc/VL7NDzG5/100.jpg"},
    { type: "image", src: "https://i.postimg.cc/jSLS1Bmc/101.jpg"},
    { type: "image", src: "https://i.postimg.cc/NjSjvpwc/102.jpg"},
    { type: "image", src: "https://i.postimg.cc/pdjXWz2n/103.jpg"},
    { type: "image", src: "https://i.postimg.cc/sX9jSzGj/104.jpg"},
    { type: "image", src: "https://i.postimg.cc/2y0Ccxxg/105.jpg"},
    /* 106) Viaje de fin de curso 4º ESO - Abril 2013 */
    { type: "image", src: "https://i.postimg.cc/WbcyCZyH/106.jpg"},
    { type: "image", src: "https://i.postimg.cc/TYyP7ZZ9/107.png"},
    { type: "video", src: "https://streamable.com/e/jfpdo8"},
    { type: "image", src: "https://i.postimg.cc/VL3k3Kwc/109.png"},
    { type: "image", src: "https://i.postimg.cc/2y1CtZX6/110.jpg"},
    { type: "image", src: "https://i.postimg.cc/5tm9Q1Cx/111.jpg"},
    { type: "image", src: "https://i.postimg.cc/d0Ft0DDH/112.jpg"},
    { type: "image", src: "https://i.postimg.cc/fRmRZYWS/113.png"},
    { type: "image", src: "https://i.postimg.cc/DfpZc2Y0/114.png"},
    { type: "image", src: "https://i.postimg.cc/d1ts8X2G/115.png"},
    { type: "image", src: "https://i.postimg.cc/zBtJpj76/116.png"},
    { type: "video", src: "https://streamable.com/e/it1umx"},
    { type: "video", src: "https://streamable.com/e/uo178n"},
    { type: "video", src: "https://streamable.com/e/h96uec"},
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderPortugal() {
  loaderPortugal.style.display = "block";
  viewerPortugal.style.display = "none";
}

function ocultarLoaderPortugal() {
  loaderPortugal.style.display = "none";
}

function cargarImagenPortugal(url) {
  if (!url) {
    viewerPortugal.innerHTML = "";
    viewerPortugal.style.display = "none";
    ocultarLoaderPortugal();
    return;
  }

  mostrarLoaderPortugal();

  const img = new Image();
  pendingPortugalImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingPortugalImage !== img) return;

    viewerPortugal.innerHTML = "";
    viewerPortugal.appendChild(img);

    viewerPortugal.style.display = "block";
    ocultarLoaderPortugal();

    pendingPortugalImage = null;
  };

  img.onerror = () => {
    if (pendingPortugalImage !== img) return;

    viewerPortugal.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerPortugal.style.display = "block";
    ocultarLoaderPortugal();

    pendingPortugalImage = null;
  };

  img.src = url;
}

function renderMediaPortugal() {
  const media = viajePortugal.medios[currentMediaPortugal];
  viewerPortugal.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenPortugal(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderPortugal();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerPortugal.style.display = "block";
    viewerPortugal.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerPortugal.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexPortugal.value=currentMediaPortugal+1;
  totalMediaPortugal.textContent = viajePortugal.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnPortugal.addEventListener("click", () => {
  currentMediaPortugal++;
  if(currentMediaPortugal >= viajePortugal.medios.length) {
    currentMediaPortugal=0;
  }
  renderMediaPortugal();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnPortugal.addEventListener("click",()=>{
  currentMediaPortugal--;
  if(currentMediaPortugal < 0) {
    currentMediaPortugal=
    viajePortugal.medios.length-1;
  }
  renderMediaPortugal();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexPortugal.addEventListener("change",()=>{
  const value=Number(mediaIndexPortugal.value);
  if(value>=1 && value<=viajePortugal.medios.length) {
    currentMediaPortugal=value-1;
    renderMediaPortugal();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnPortugal.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnPortugal.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaPortugal();