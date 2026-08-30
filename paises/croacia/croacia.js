/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerCroacia = document.getElementById("mediaViewerCroacia");
const prevBtnCroacia = document.getElementById("prevBtnCroacia");
const nextBtnCroacia = document.getElementById("nextBtnCroacia");
const mediaIndexCroacia = document.getElementById("mediaIndexCroacia");
const totalMediaCroacia = document.getElementById("totalMediaCroacia");
const loaderCroacia = document.getElementById("loaderCroacia");
let currentMediaCroacia = 0;
let pendingImageCroacia = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeCroacia = {
  nombre: "Croacia",
  medios: [
    { type: "image", src: "https://i.postimg.cc/L8dSf6GL/IMG-20260829-182218-024.webp"},
    { type: "image", src: "https://i.postimg.cc/8z8GWPxL/IMG-20260829-182657-297.webp"},
    { type: "video", src: "https://streamable.com/e/nn3c0o"},
    { type: "image", src: "https://i.postimg.cc/9FsmpBwm/IMG-20260829-183951-622.jpg"},
    { type: "image", src: "https://i.postimg.cc/SR76rKDR/IMG-20260829-185044-371.jpg"},
    { type: "video", src: "https://streamable.com/e/ypi6ve"},
    { type: "image", src: "https://i.postimg.cc/2yFQw52V/IMG-20260829-193145-908.webp"},
    { type: "image", src: "https://i.postimg.cc/L5BtTsNX/IMG-20260829-193336-191.webp"},
    { type: "image", src: "https://i.postimg.cc/yYD9xvzW/IMG-20260829-193526-017.jpg"},
    { type: "image", src: "https://i.postimg.cc/TYBd9c52/IMG-20260829-193748-831.webp"},
    { type: "image", src: "https://i.postimg.cc/Xqcf8vQv/IMG-20260829-193919-542.webp"},
    { type: "image", src: "https://i.postimg.cc/t40bPC86/IMG-20260829-194322-038.jpg"},
    { type: "video", src: "https://streamable.com/e/u0y72g"},
    { type: "video", src: "https://streamable.com/e/xabadl"},
    { type: "image", src: "https://i.postimg.cc/26jdm57k/IMG-20260830-141728-463.jpg"},
    { type: "image", src: "https://i.postimg.cc/j5q6Kj4b/IMG-20260830-142002-995.jpg"},
    { type: "image", src: "https://i.postimg.cc/76P1DLnw/IMG-20260830-143239-547.webp"},
    { type: "image", src: "https://i.postimg.cc/SsQLqKfm/IMG-20260830-143425-123.webp"},
    { type: "image", src: "https://i.postimg.cc/j5q6Kj4K/IMG-20260830-143750-030.webp"},
    { type: "video", src: "https://streamable.com/e/dplpos"},
    { type: "image", src: "https://i.postimg.cc/tTL3KGD6/IMG-20260830-144513-849.jpg"},
    { type: "image", src: "https://i.postimg.cc/fL6cGQ5m/IMG-20260830-144613-197.webp"},
    { type: "image", src: "https://i.postimg.cc/1tg0730w/IMG-20260830-144929-200.jpg"},
    { type: "image", src: "https://i.postimg.cc/hjHLkRMz/IMG-20260830-145018-237.webp"},
    { type: "image", src: "https://i.postimg.cc/sXBPHgPP/IMG-20260830-145355-518.webp"},
    { type: "image", src: "https://i.postimg.cc/LXrtcFvJ/IMG-20260830-145630-010.webp"},
    { type: "image", src: "https://i.postimg.cc/B6857n5D/IMG-20260830-150308-317.jpg"},
    { type: "image", src: "https://i.postimg.cc/hjJ8Zt8V/IMG-20260830-150527-143.webp"},
    { type: "image", src: "https://i.postimg.cc/W3DmY1mM/IMG-20260830-150629-993.webp"},
    { type: "image", src: "https://i.postimg.cc/WbSDrPrS/IMG-20260830-154857-115.webp"},
    { type: "image", src: "https://i.postimg.cc/vHX19d9h/IMG-20260830-155224-658.webp"},
    { type: "image", src: "https://i.postimg.cc/GhzBY1YQ/IMG-20260830-155825-266.jpg"},
    { type: "image", src: "https://i.postimg.cc/SNVX8p8G/IMG-20260830-155958-428.jpg"},
    { type: "video", src: "https://streamable.com/e/u6a1oa"},
    { type: "video", src: "https://streamable.com/e/zka3hk"},
    { type: "image", src: "https://i.postimg.cc/B6g3yJJM/IMG-20260830-161248-786.webp"},
    { type: "image", src: "https://i.postimg.cc/k499f2Pz/IMG-20260830-161419-208.jpg"},
    { type: "image", src: "https://i.postimg.cc/26wYJCCT/IMG-20260830-161502-517.webp"},
    { type: "video", src: "https://streamable.com/e/um3uty"},
    { type: "video", src: "https://streamable.com/e/d5fby5"},
    { type: "image", src: "https://i.postimg.cc/yYCy19Cg/IMG-20260830-170146-544.webp"},
    { type: "video", src: "https://streamable.com/e/bdlwwb"},
    { type: "image", src: "https://i.postimg.cc/vTr9gqwL/IMG-20260830-170528-799.webp"},
    { type: "image", src: "https://i.postimg.cc/FzycdWXb/IMG-20260830-170717-819.webp"},
    { type: "video", src: "https://streamable.com/e/kq6ltt"},
    { type: "video", src: "https://streamable.com/e/o21rap"},
    { type: "video", src: "https://streamable.com/e/9d5wcd"},
    { type: "video", src: "https://streamable.com/e/r4c3tl"},
    { type: "image", src: "https://i.postimg.cc/fbQN5BGS/IMG-20260830-172349-524.webp"},
    { type: "image", src: "https://i.postimg.cc/q7HTQjPC/IMG-20260830-172622-903.webp"},
    { type: "image", src: "https://i.postimg.cc/VNP84DxC/IMG-20260830-172659-730.webp"},
    { type: "video", src: "https://streamable.com/e/4pgcll"},
    { type: "video", src: "https://streamable.com/e/jiffs7"},
    { type: "video", src: "https://streamable.com/e/4nwa5x"},
    { type: "image", src: "https://i.postimg.cc/FscmSMqh/IMG-20260830-173505-223.webp"},
    { type: "image", src: "https://i.postimg.cc/mgysXQB0/IMG-20260830-173704-429.webp"},
    { type: "image", src: "https://i.postimg.cc/K8D2qnxC/IMG-20260830-173738-256.webp"},
    { type: "image", src: "https://i.postimg.cc/Z5xS7r42/IMG-20260830-173811-099.webp"},
    { type: "video", src: "https://streamable.com/e/47h9og"},
    { type: "image", src: "https://i.postimg.cc/pXQ4RR4L/IMG-20260830-174339-408.webp"},
    { type: "video", src: "https://streamable.com/e/70cbpt"},
    { type: "image", src: "https://i.postimg.cc/dt9HgnZ6/IMG-20260830-174738-346.webp"},
    { type: "video", src: "https://streamable.com/e/babsrn"},
    { type: "video", src: "https://streamable.com/e/gxn1bd"},
    { type: "video", src: "https://streamable.com/e/r4w8ey"},
    { type: "image", src: "https://i.postimg.cc/VNPJM9Dc/IMG-20260830-180633-649.jpg"},
    { type: "image", src: "https://i.postimg.cc/d0RL97Sp/IMG-20260830-180829-590.webp"},
    { type: "video", src: "https://streamable.com/e/v0w0yt"},
    { type: "image", src: "https://i.postimg.cc/br4yP8BT/IMG-20260830-181206-215.jpg"},
    { type: "image", src: "https://i.postimg.cc/8cxpGD04/IMG-20260830-181704-151.webp"},
    { type: "image", src: "https://i.postimg.cc/ZnXbmZMj/IMG-20260830-181737-909.webp"},
    { type: "video", src: "https://streamable.com/e/rot57x"},
    { type: "image", src: "https://i.postimg.cc/ry4FGRR6/IMG-20260830-182507-906.jpg"},
    { type: "image", src: "https://i.postimg.cc/h4mP8QzH/IMG-20260830-182725-936.jpg"},
    { type: "image", src: "https://i.postimg.cc/9X9FPwR6/IMG-20260830-182844-114.webp"},
    { type: "image", src: "https://i.postimg.cc/G3DhPT86/IMG-20260830-182934-122.jpg"},
    { type: "video", src: "https://streamable.com/e/a8q4gd"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderCroacia() {
  loaderCroacia.style.display = "block";
  viewerCroacia.style.display = "none";
}

function ocultarLoaderCroacia() {
  loaderCroacia.style.display = "none";
}

function cargarImagenCroacia(url) {
  if (!url) {
    viewerCroacia.innerHTML = "";
    viewerCroacia.style.display = "none";
    ocultarLoaderCroacia();
    return;
  }

  mostrarLoaderCroacia();

  const img = new Image();
  pendingImageCroacia = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageCroacia !== img) return;

    viewerCroacia.innerHTML = "";
    viewerCroacia.appendChild(img);

    viewerCroacia.style.display = "block";
    ocultarLoaderCroacia();

    pendingImageCroacia = null;
  };

  img.onerror = () => {
    if (pendingImageCroacia !== img) return;

    viewerCroacia.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerCroacia.style.display = "block";
    ocultarLoaderCroacia();

    pendingImageCroacia = null;
  };

  img.src = url;
}

function renderMediaCroacia() {
  const media = viajeCroacia.medios[currentMediaCroacia];
  viewerCroacia.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenCroacia(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderCroacia();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerCroacia.style.display = "block";
    viewerCroacia.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerCroacia.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexCroacia.value=currentMediaCroacia+1;
  totalMediaCroacia.textContent = viajeCroacia.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnCroacia.addEventListener("click", () => {
  currentMediaCroacia++;
  if(currentMediaCroacia >= viajeCroacia.medios.length) {
    currentMediaCroacia=0;
  }
  renderMediaCroacia();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnCroacia.addEventListener("click",()=>{
  currentMediaCroacia--;
  if(currentMediaCroacia < 0) {
    currentMediaCroacia = viajeCroacia.medios.length-1;
  }
  renderMediaCroacia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexCroacia.addEventListener("change", () => {
  const value=Number(mediaIndexCroacia.value);
  if(value>=1 && value<=viajeCroacia.medios.length) {
    currentMediaCroacia=value-1;
    renderMediaCroacia();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnCroacia.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnCroacia.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaCroacia();