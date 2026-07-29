/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewer = document.getElementById("mediaViewer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const mediaIndex = document.getElementById("mediaIndex");
const totalMedia = document.getElementById("totalMedia");

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
    { type: "youtube", src: "https://www.youtube.com/embed/tedzX0xufsM" },
    { type: "youtube", src: "https://www.youtube.com/embed/s3GpWv21uVM" },
    { type: "image", src: "https://i.postimg.cc/9QsDx6B0/5.png" },
    { type: "youtube", src: "https://www.youtube.com/embed/GiRyIoHuMxY" },
    { type: "youtube", src: "https://www.youtube.com/embed/7jihgkFH99s" },
    { type: "youtube", src: "https://www.youtube.com/embed/fxJ11BakWaA" },
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
    { type: "youtube", src: "https://www.youtube.com/embed/tLiUptwA3E4" },
    { type: "image", src: "https://i.postimg.cc/TwfYFf5d/22.png" },
    { type: "youtube", src: "https://www.youtube.com/embed/2yKlY0AHPMk" },
    { type: "youtube", src: "https://www.youtube.com/embed/vTACcj9CGSg" },
    { type: "image", src: "https://i.postimg.cc/Tw0YXFnr/25.png" },
  ]
};

let currentMedia = 0;

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function renderMedia() {
  const media = viajeUK.medios[currentMedia];
  viewer.innerHTML="";
  /******** IMAGEN ********/
  if(media.type==="image") {
    const img=document.createElement("img");
    img.src=media.src;
    img.className="viewer-image";
    viewer.appendChild(img);
  }
  /******** VIDEO ********/
  else if(media.type==="video") {
    const iframe=document.createElement("iframe");
    iframe.src= media.src;
    iframe.height = "100%";
    iframe.width = "100%";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = false;
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
  totalMedia.textContent = viajeUK.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtn.addEventListener("click", () => {
  currentMedia++;
  if(currentMedia >= viajeUK.medios.length) {
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
    currentMedia=
    viajeUK.medios.length-1;
  }
  renderMedia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndex.addEventListener("change",()=>{
  const value=
  Number(mediaIndex.value);
  if(value>=1 && value<=viajeUK.medios.length) {
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