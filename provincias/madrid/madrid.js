/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerMadrid = document.getElementById("mediaViewerMadrid");
const prevBtnMadrid = document.getElementById("prevBtnMadrid");
const nextBtnMadrid = document.getElementById("nextBtnMadrid");
const mediaIndexMadrid = document.getElementById("mediaIndexMadrid");
const totalMediaMadrid = document.getElementById("totalMediaMadrid");
const loaderMadrid = document.getElementById("loaderMadrid");
let currentMediaMadrid = 0;
let pendingMadridImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeMadrid = {
  nombre: "Madrid",
  medios: [
    /* La Vuelta España de Ciclismo pasando por mi calle */
    { type: "video", src: "https://streamable.com/e/5f4ojb"},
    /* Enero de 2025 - Evento Binance */
    { type: "image", src: "https://i.postimg.cc/rFCMSTZY/binance01.jpg"},
    { type: "image", src: "https://i.postimg.cc/kgg3KbbB/binance02.webp"},
    { type: "image", src: "https://i.postimg.cc/7YDyPcP1/binance03.jpg"},
    { type: "image", src: "https://i.postimg.cc/xTRVXRqw/binance04.webp"},
    /* Junio de 2025 - Despedida de Soltero de Colombi */
    { type: "image", src: "https://i.postimg.cc/x8dkCWf7/IMG-20250627-154547.png"},
    { type: "image", src: "https://i.postimg.cc/t70rytys/IMG-20250627-154044.png"},
    { type: "video", src: "https://streamable.com/e/h8qq4m"},
    { type: "image", src: "https://i.postimg.cc/63Nt53xq/IMG-20250628-181859.png"},
    { type: "image", src: "https://i.postimg.cc/nzYZsJnk/IMG-20250628-181916.png"},
    { type: "video", src: "https://streamable.com/e/dz4co9"},
    { type: "image", src: "https://i.postimg.cc/BvFJ0FyR/IMG-20250628-182752-784.webp"},
    { type: "image", src: "https://i.postimg.cc/KvZpLsXJ/IMG-20250628-193912-274.webp"},
    { type: "image", src: "https://i.postimg.cc/vZTP2gZn/IMG-20250628-194243-902.webp"},
    { type: "image", src: "https://i.postimg.cc/C50PccRM/IMG-20250628-194446-908.webp"},
    { type: "image", src: "https://i.postimg.cc/cCcD2f3R/IMG-20250628-194611-185.webp"},
    { type: "image", src: "https://i.postimg.cc/CLmP4HSY/IMG-20250628-194936-117.webp"},
    { type: "image", src: "https://i.postimg.cc/Y2NyvBPv/IMG-20250628-195236-083.webp"},
    { type: "image", src: "https://i.postimg.cc/cHRZhJVK/IMG-20250630-003949.png"},
    { type: "image", src: "https://i.postimg.cc/g06GwssH/IMG-20250630-003934-311.webp"},
    { type: "image", src: "https://i.postimg.cc/RF54wtb5/IMG-20250630-003622-931.webp"},
    /* Junio de 2025 - International Dinner in Retiro Park */
    { type: "image", src: "https://i.postimg.cc/BbDj3sLH/IMG-20250630-011343-537.webp"},
    { type: "image", src: "https://i.postimg.cc/gkFwDwQD/IMG-20250630-011642-024.webp"},
    { type: "image", src: "https://i.postimg.cc/y6SgchQx/IMG-20250630-011911-821.webp"},
    { type: "image", src: "https://i.postimg.cc/50DXDj0f/IMG-20250630-012212-193.jpg"},
    /* Junio de 2025 - BBQ con amigos del curro PSS/Accenture */
    { type: "image", src: "https://i.postimg.cc/RZnxVZG3/IMG-20250630-164918.png"},
    /* Junio de 2025 - Fiesta Años 70's familiar */
    { type: "image", src: "https://i.postimg.cc/MZyDx2yW/IMG-20250630-165654.png"},
    { type: "image", src: "https://i.postimg.cc/tJHNP2HQ/IMG-20250630-165923-065.webp"},
    { type: "image", src: "https://i.postimg.cc/fyjjvmw3/IMG-20250630-170552.png"},
    { type: "image", src: "https://i.postimg.cc/9fKpXc8f/IMG-20250630-170608.png"},
    { type: "image", src: "https://i.postimg.cc/tT6zY8wN/IMG-20250630-170634.png"},
    { type: "image", src: "https://i.postimg.cc/jS8c9HyP/IMG-20250630-170654.png"},
    { type: "image", src: "https://i.postimg.cc/GpHK14jN/IMG-20250630-170711.png"},
    /* Julio de 2025 - Domingo de Ruta en bici */
    { type: "image", src: "https://i.postimg.cc/pL6bPNFf/IMG-20250708-184746.png"},
    { type: "image", src: "https://i.postimg.cc/KzLy994n/IMG-20250708-184759.png"},
    { type: "image", src: "https://i.postimg.cc/wT9dVQzm/IMG-20250708-184814.png"},
    { type: "image", src: "https://i.postimg.cc/wBnpQKxq/IMG-20250708-184828.png"},
    { type: "image", src: "https://i.postimg.cc/L8XFd4n4/IMG-20250708-184843.png"},
    /* Julio de 2025 - Explorando lagos */
    { type: "video", src: "https://streamable.com/e/5hluj6"},
    /* 19 de Julio de 2025 - Fiesta Rockera con amigos */
    { type: "image", src: "https://i.postimg.cc/fLSHv7Cf/IMG-20251017-180831.png"},
    { type: "video", src: "https://streamable.com/e/rndc32"},
    { type: "video", src: "https://streamable.com/e/0ou0zs"},
    /* 23 de Julio de 2025 - Among us y preparación viaje a A Coruña */
    { type: "image", src: "https://i.postimg.cc/FKBWcCyp/IMG-20251017-181217.png"},
    /* 30 de Julio de 2025 - Celebrando el cumple de mi abuela */
    { type: "image", src: "https://i.postimg.cc/wvRWk52X/IMG-20251017-181713.png"},
    { type: "image", src: "https://i.postimg.cc/YSsngD6N/IMG-20251017-181947-479.webp"},
    { type: "video", src: "https://streamable.com/e/clmwvl"},
    /* 24 de agosto de 2025 - Día de Río Alberche, Madrid */
    { type: "video", src: "https://streamable.com/e/do36hc"},
    { type: "image", src: "https://i.postimg.cc/bvBCbVx9/IMG-20251017-182458-886.webp"},
    { type: "image", src: "https://i.postimg.cc/pLtBFhmL/IMG-20251017-182650-197.webp" },
    { type: "image", src: "https://i.postimg.cc/4xT197Yy/IMG-20251017-182756-231.webp" },
    { type: "image", src: "https://i.postimg.cc/RZzTH6Wq/IMG-20251017-183113-346.webp" },
    { type: "image", src: "https://i.postimg.cc/DwKcXJSz/IMG-20251017-183203-814.webp" },
    /* 27 de agosto de 2025 - Cena cachopo post partido de padel con amigos */
    { type: "image", src: "https://i.postimg.cc/G203LCMX/IMG-20251017-183601.png" },
    /* 21 de septiembre de 2025 - Cumple familiar */
    { type: "video", src: "https://streamable.com/e/ynunle" },
    /* 27 de septiembre de 2025 - Quedada amigos de Madrid centro */
    { type: "video", src: "https://streamable.com/e/d7rr28" },
    { type: "image", src: "https://i.postimg.cc/90F6Vgjg/IMG-20251017-184622-170.webp" },
    { type: "image", src: "https://i.postimg.cc/mk2vRpGV/IMG-20251017-184801-180.webp" },
    /* Octubre de 2025 - Fiestas de Boadilla */
    { type: "image", src: "https://i.postimg.cc/JhjSjgLv/IMG-20251006-184303.png" },
    { type: "video", src: "https://streamable.com/e/zqvyx9" },
    { type: "video", src: "https://streamable.com/e/1yu5j6" },
    { type: "video", src: "https://streamable.com/e/1sbxu9" },
    { type: "image", src: "https://i.postimg.cc/5t8D8GVD/IMG-20251014-135724.png" },
    /* Enero de 2026 - Día de Reyes familiar */
    { type: "image", src: "https://i.postimg.cc/66m0kyh3/IMG-20260802-182121-649.jpg" },
    { type: "image", src: "https://i.postimg.cc/XNz8Rpgv/IMG-20260802-182334-280.jpg" },
    /* Enero de 2026 - Roof Top Picalagartos de Madrid */
    { type: "image", src: "https://i.postimg.cc/MTG74SMh/IMG-20260802-182934-312.webp" },
    /* Enero de 2026 - El Corte Inglés y Mainframe */
    { type: "image", src: "https://i.postimg.cc/v8ckj1nM/IMG-20260802-182628-062.jpg" },
    /* 9/05/2026 - Fiesta en la Sala Ginger, Ponzano, Madrid */
    { type: "video", src: "https://streamable.com/e/iw365b" },
    { type: "image", src: "https://i.postimg.cc/1t81mr9v/IMG-20260803-003348-459.webp" },
    /* 16/05/2026 - Ruta y baño por La Pedriza */
    { type: "image", src: "https://i.postimg.cc/qvwP25qQ/IMG-20260803-003704-158.webp" },
    { type: "image", src: "https://i.postimg.cc/qvwP25qj/IMG-20260803-003741-497.webp" },
    { type: "image", src: "https://i.postimg.cc/C5pP3GdK/IMG-20260803-003847-179.webp" },
    { type: "image", src: "https://i.postimg.cc/J0C6fNtn/IMG-20260803-004107-502.webp" },
    { type: "video", src: "https://streamable.com/e/a798x7" },
    { type: "image", src: "https://i.postimg.cc/5N1KpSZh/IMG-20260803-004218-071.webp" },
    { type: "image", src: "https://i.postimg.cc/d1rnjh6z/IMG-20260803-004241-729.webp" },
    { type: "image", src: "https://i.postimg.cc/JnZK5sxF/IMG-20260803-004352-536.webp" },
    { type: "image", src: "https://i.postimg.cc/LXLv3JDw/IMG-20260803-004418-977.webp" },
    { type: "image", src: "https://i.postimg.cc/SsCVfnd5/IMG-20260803-004441-717.webp" },
    { type: "video", src: "https://streamable.com/e/svlv8h" },
    { type: "video", src: "https://streamable.com/e/zxjeb4" },
    { type: "video", src: "https://streamable.com/e/pees0d" },
    { type: "image", src: "https://i.postimg.cc/JzHXk9Pc/IMG-20260803-004835-918.webp" },
    { type: "image", src: "https://i.postimg.cc/Vk0tC3D4/IMG-20260803-004901-476.webp" },
    { type: "video", src: "https://streamable.com/e/0cw20a" },
    { type: "image", src: "https://i.postimg.cc/3x0GvPnF/IMG-20260803-005003-535.webp" },
    { type: "video", src: "https://streamable.com/e/qihqr8" },
    /* Mayo 2026 - Un miércoles cualquiera */
    { type: "image", src: "https://i.postimg.cc/L6BhfmpV/IMG-20260803-001914-841.jpg" },
    { type: "image", src: "https://i.postimg.cc/NjsFkZs9/IMG-20260802-185454-738.webp" },
    { type: "image", src: "https://i.postimg.cc/g2zjH1zL/IMG-20260802-185639-304.webp" },
    /* Mayo 2026 - The Champions Burger y Cheesecake Vicálvaro */
    { type: "image", src: "https://i.postimg.cc/kgYJF4hG/IMG-20260802-184806-189.webp" },
    { type: "image", src: "https://i.postimg.cc/x1pfyCFC/IMG-20260802-184850-464.webp" },
    { type: "image", src: "https://i.postimg.cc/sgHj9X0g/IMG-20260802-184941-730.webp" },
    { type: "image", src: "https://i.postimg.cc/K8pGrzsv/IMG-20260802-185042-941.jpg" },
    /* 19/07/2026 - España Campeona del Mundo 2026 */
    { type: "image", src: "https://i.postimg.cc/NfFgjmL6/IMG-20260720-WA0014.jpg" },
    { type: "image", src: "https://i.postimg.cc/sDxVg71p/IMG-20260720-WA0015.jpg" }
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderMadrid() {
  loaderMadrid.style.display = "block";
  viewerMadrid.style.display = "none";
}

function ocultarLoaderMadrid() {
  loaderMadrid.style.display = "none";
}

function cargarImagenMadrid(url) {
  if (!url) {
    viewerMadrid.innerHTML = "";
    viewerMadrid.style.display = "none";
    ocultarLoaderMadrid();
    return;
  }

  mostrarLoaderMadrid();

  const img = new Image();
  pendingMadridImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingMadridImage !== img) return;

    viewerMadrid.innerHTML = "";
    viewerMadrid.appendChild(img);

    viewerMadrid.style.display = "block";
    ocultarLoaderMadrid();

    pendingMadridImage = null;
  };

  img.onerror = () => {
    if (pendingMadridImage !== img) return;

    viewerMadrid.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerMadrid.style.display = "block";
    ocultarLoaderMadrid();

    pendingMadridImage = null;
  };

  img.src = url;
}

function renderMediaMadrid() {
  const media = viajeMadrid.medios[currentMediaMadrid];
  viewerMadrid.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenMadrid(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderMadrid();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerMadrid.style.display = "block";
    viewerMadrid.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerMadrid.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexMadrid.value=currentMediaMadrid+1;
  totalMediaMadrid.textContent = viajeMadrid.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnMadrid.addEventListener("click", () => {
  currentMediaMadrid++;
  if(currentMediaMadrid >= viajeMadrid.medios.length) {
    currentMediaMadrid=0;
  }
  renderMediaMadrid();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnMadrid.addEventListener("click",()=>{
  currentMediaMadrid--;
  if(currentMediaMadrid < 0) {
    currentMediaMadrid=
    viajeMadrid.medios.length-1;
  }
  renderMediaMadrid();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexMadrid.addEventListener("change",()=>{
  const value=Number(mediaIndexMadrid.value);
  if(value>=1 && value<=viajeMadrid.medios.length) {
    currentMediaMadrid=value-1;
    renderMediaMadrid();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnMadrid.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnMadrid.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaMadrid();