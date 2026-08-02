/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerMontenegro = document.getElementById("mediaViewerMontenegro");
const prevBtnMontenegro = document.getElementById("prevBtnMontenegro");
const nextBtnMontenegro = document.getElementById("nextBtnMontenegro");
const mediaIndexMontenegro = document.getElementById("mediaIndexMontenegro");
const totalMediaMontenegro = document.getElementById("totalMediaMontenegro");
const loaderMontenegro = document.getElementById("loaderMontenegro");
let currentMediaMontenegro = 0;
let pendingMontenegroImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeMontenegro = {
  nombre: "Montenegro",
  medios: [
      /* 1) Experiencia en Montenegro 2022 */
    { type: "image", src: "https://i.postimg.cc/4xBPdMrh/1.jpg"},
    { type: "image", src: "https://i.postimg.cc/XJyksvXw/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/R0hRndBp/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/fbPv7dWz/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/8cQB9Vrx/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/QCQkrnQC/6.jpg"},
    { type: "image", src: "https://i.postimg.cc/pVzB8ywv/7.jpg"},
    { type: "image", src: "https://i.postimg.cc/yYf3SH8B/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/fRJtcrVd/9.jpg"},
    { type: "video", src: "https://streamable.com/e/0nomwx"},
    { type: "image", src: "https://i.postimg.cc/4y7qbZRM/10.jpg"},
    { type: "video", src: "https://streamable.com/e/wiv2h8"},
    { type: "image", src: "https://i.postimg.cc/qBt4JH6W/11.jpg"},
    { type: "video", src: "https://streamable.com/e/mvkxgs"},
    { type: "image", src: "https://i.postimg.cc/NjnxwX33/12.jpg"},
    { type: "video", src: "https://streamable.com/e/ub71rx"},
    { type: "image", src: "https://i.postimg.cc/x8rfr65X/13.jpg"},
    { type: "image", src: "https://i.postimg.cc/DZ4vY9rV/14.jpg"},
    { type: "image", src: "https://i.postimg.cc/bvBYgy2H/15.jpg"},
    { type: "image", src: "https://i.postimg.cc/ZqRK6B05/16.jpg"},
    { type: "image", src: "https://i.postimg.cc/qMxkYX37/17.jpg"},
    { type: "image", src: "https://i.postimg.cc/yxFV70pv/18.jpg"},
    { type: "image", src: "https://i.postimg.cc/qBnBcdBy/19.jpg"},
    { type: "image", src: "https://i.postimg.cc/28Dk2X3J/20.jpg"},
    { type: "image", src: "https://i.postimg.cc/ydRKTFKs/21.jpg"},
    { type: "image", src: "https://i.postimg.cc/SRph1JQ8/22.jpg"},
    { type: "image", src: "https://i.postimg.cc/Z5fJYbjt/23.jpg"},
    { type: "image", src: "https://i.postimg.cc/K8cZykPD/24.jpg"},
    { type: "image", src: "https://i.postimg.cc/YShMh5y4/25.jpg"},
    { type: "image", src: "https://i.postimg.cc/9fKVTLvL/26.jpg"},
    { type: "image", src: "https://i.postimg.cc/nVvZjYT1/27.jpg"},
    { type: "image", src: "https://i.postimg.cc/Hn4CqdjN/28.jpg"},
    { type: "image", src: "https://i.postimg.cc/437RJzmV/29.jpg"},
    { type: "image", src: "https://i.postimg.cc/NfBt19zv/30.jpg"},
    { type: "image", src: "https://i.postimg.cc/3J1T98s4/31.jpg"},
    { type: "image", src: "https://i.postimg.cc/Z5qhQkmf/32.jpg"},
    { type: "image", src: "https://i.postimg.cc/bwFjc6Nq/33.jpg"},
    { type: "image", src: "https://i.postimg.cc/65ghknJD/34.jpg"},
    { type: "video", src: "https://streamable.com/e/niz5tq"},
    { type: "image", src: "https://i.postimg.cc/nhMhD9Xc/IMG-20220701-131731.png"},
    { type: "image", src: "https://i.postimg.cc/ZngDsQxQ/35.jpg"},
    { type: "image", src: "https://i.postimg.cc/mZ6qrcWS/36.jpg"},
    { type: "image", src: "https://i.postimg.cc/X7GPBVV6/37.jpg"},
    { type: "image", src: "https://i.postimg.cc/28sK4P6b/38.jpg"},
    { type: "image", src: "https://i.postimg.cc/XY9DxQG2/39.jpg"},
    { type: "image", src: "https://i.postimg.cc/zf52QKTq/40.jpg"},
    { type: "image", src: "https://i.postimg.cc/gk0xV2jj/41.jpg"},
    { type: "video", src: "https://streamable.com/e/3b1ger"},
    { type: "video", src: "https://streamable.com/e/ty3s9h"},
    { type: "image", src: "https://i.postimg.cc/pVSB54Vw/42.jpg"},
    { type: "image", src: "https://i.postimg.cc/YCT91NLq/IMG-20220701-151913.png"},
    { type: "image", src: "https://i.postimg.cc/3rZdPDVn/IMG-20220701-151936.png"},
    { type: "image", src: "https://i.postimg.cc/pLmrhcT6/IMG-20220701-152519.png"},
    { type: "image", src: "https://i.postimg.cc/fT2kbQwd/IMG-20220701-152524.png"},
    { type: "image", src: "https://i.postimg.cc/KvvRF8yF/IMG-20220701-152530.png"},
    { type: "image", src: "https://i.postimg.cc/MZtpsJfL/43.jpg"},
    { type: "video", src: "https://streamable.com/e/w1vum2"},
    { type: "video", src: "https://streamable.com/e/tyroir"},
    { type: "image", src: "https://i.postimg.cc/zGxQMpF8/44.jpg"},
    { type: "image", src: "https://i.postimg.cc/L897NGfx/45.jpg"},
    { type: "image", src: "https://i.postimg.cc/FK16QcTc/46.jpg"},
    { type: "video", src: "https://streamable.com/e/05nj2h"},
    { type: "video", src: "https://streamable.com/e/4mox37"},
    { type: "video", src: "https://streamable.com/e/6g53w3"},
    { type: "image", src: "https://i.postimg.cc/Z5v3t5rn/47.jpg"},
    { type: "image", src: "https://i.postimg.cc/pdNj2MZZ/48.jpg"},
    { type: "video", src: "https://streamable.com/e/2l1ouc"},
    { type: "video", src: "https://streamable.com/e/rxhr4z"},
    { type: "image", src: "https://i.postimg.cc/g0Snx9yQ/49.jpg"},
    { type: "image", src: "https://i.postimg.cc/g0kxcch3/50.jpg"},
    { type: "image", src: "https://i.postimg.cc/xCXqHstC/51.jpg"},
    { type: "image", src: "https://i.postimg.cc/BnC8GPjq/52.jpg"},
    { type: "image", src: "https://i.postimg.cc/LXG5VzbV/53.jpg"},
    { type: "image", src: "https://i.postimg.cc/4ytd2YCR/54.jpg"},
    { type: "video", src: "https://streamable.com/e/wcwlu4"},
    { type: "video", src: "https://streamable.com/e/x0nvt7"},
    { type: "video", src: "https://streamable.com/e/pzpcux"},
    { type: "video", src: "https://streamable.com/e/8ttxp3"},
    { type: "image", src: "https://i.postimg.cc/mDmNZ6hg/55.jpg"},
    { type: "image", src: "https://i.postimg.cc/NMskcwsn/56.jpg"},
    { type: "image", src: "https://i.postimg.cc/s294q2rS/57.jpg"},
    { type: "image", src: "https://i.postimg.cc/Wztmd6J6/58.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y0V6YG6c/59.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y2yfJVJX/60.jpg"},
    { type: "video", src: "https://streamable.com/e/cbpxrc"},
    { type: "image", src: "https://i.postimg.cc/2jF3WBxn/61.jpg"},
    { type: "image", src: "https://i.postimg.cc/bNyr9N6W/62.jpg"},
    { type: "video", src: "https://streamable.com/e/ta727o"},
    { type: "video", src: "https://streamable.com/e/tnj3uz"},
    { type: "image", src: "https://i.postimg.cc/nrvdF18R/63.jpg"},
    { type: "image", src: "https://i.postimg.cc/Gt07n5fT/64.jpg"},
    { type: "video", src: "https://streamable.com/e/zd447z"},
    { type: "video", src: "https://streamable.com/e/hdw6bf"},
    { type: "image", src: "https://i.postimg.cc/rm8yNqcQ/65.jpg"},
    { type: "image", src: "https://i.postimg.cc/Tw9wzpQz/66.jpg"},
    { type: "image", src: "https://i.postimg.cc/fyRLDDrJ/67.jpg"},
    { type: "image", src: "https://i.postimg.cc/T2t1Q5Km/68.jpg"},
    { type: "image", src: "https://i.postimg.cc/xT7CVry1/69.jpg"},
    { type: "image", src: "https://i.postimg.cc/JhCztbFw/70.jpg"},
    { type: "image", src: "https://i.postimg.cc/262kHgSm/71.jpg"},
    { type: "image", src: "https://i.postimg.cc/vHp0gBtF/72.jpg"},
    { type: "image", src: "https://i.postimg.cc/G3g7RzBp/73.jpg"},
    { type: "image", src: "https://i.postimg.cc/9F4xQTTY/74.jpg"},
    { type: "image", src: "https://i.postimg.cc/RVcgtmsW/IMG-20220703-180656.png"},
    { type: "image", src: "https://i.postimg.cc/htcpbY6p/IMG-20220703-182436.png"},
    { type: "image", src: "https://i.postimg.cc/xTRKY1p3/75.jpg"},
    { type: "image", src: "https://i.postimg.cc/L5kjJ99R/76.jpg"},
    { type: "image", src: "https://i.postimg.cc/sxCpfQRw/77.jpg"},
    { type: "image", src: "https://i.postimg.cc/rFcSvrjp/78.jpg"},
    { type: "image", src: "https://i.postimg.cc/c1fR9mQj/79.jpg"},
    { type: "image", src: "https://i.postimg.cc/Z5QvKB8p/80.jpg"},
    { type: "video", src: "https://streamable.com/e/88naux"},
    { type: "image", src: "https://i.postimg.cc/gJVxDgfH/81.jpg"},
    { type: "video", src: "https://streamable.com/e/ue0lyo"},
    { type: "image", src: "https://i.postimg.cc/h43BYLcL/82.jpg"},
    { type: "image", src: "https://i.postimg.cc/QCPZW304/83.jpg"}
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderMontenegro() {
  loaderMontenegro.style.display = "block";
  viewerMontenegro.style.display = "none";
}

function ocultarLoaderMontenegro() {
  loaderMontenegro.style.display = "none";
}

function cargarImagenMontenegro(url) {
  if (!url) {
    viewerMontenegro.innerHTML = "";
    viewerMontenegro.style.display = "none";
    ocultarLoaderMontenegro();
    return;
  }

  mostrarLoaderMontenegro();

  const img = new Image();
  pendingMontenegroImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingMontenegroImage !== img) return;

    viewerMontenegro.innerHTML = "";
    viewerMontenegro.appendChild(img);

    viewerMontenegro.style.display = "block";
    ocultarLoaderMontenegro();

    pendingMontenegroImage = null;
  };

  img.onerror = () => {
    if (pendingMontenegroImage !== img) return;

    viewerMontenegro.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerMontenegro.style.display = "block";
    ocultarLoaderMontenegro();

    pendingMontenegroImage = null;
  };

  img.src = url;
}

function renderMediaMontenegro() {
  const media = viajeMontenegro.medios[currentMediaMontenegro];
  viewerMontenegro.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenMontenegro(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderMontenegro();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerMontenegro.style.display = "block";
    viewerMontenegro.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerMontenegro.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexMontenegro.value=currentMediaMontenegro+1;
  totalMediaMontenegro.textContent = viajeMontenegro.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnMontenegro.addEventListener("click", () => {
  currentMediaMontenegro++;
  if(currentMediaMontenegro >= viajeMontenegro.medios.length) {
    currentMediaMontenegro=0;
  }
  renderMediaMontenegro();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnMontenegro.addEventListener("click",()=>{
  currentMediaMontenegro--;
  if(currentMediaMontenegro < 0) {
    currentMediaMontenegro=
    viajeMontenegro.medios.length-1;
  }
  renderMediaMontenegro();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexMontenegro.addEventListener("change",()=>{
  const value=Number(mediaIndexMontenegro.value);
  if(value>=1 && value<=viajeMontenegro.medios.length) {
    currentMediaMontenegro=value-1;
    renderMediaMontenegro();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnMontenegro.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnMontenegro.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaMontenegro();