/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
    /* Enero de 2025 - Evento Binance */
    { type: "image", src: "https://i.postimg.cc/rFCMSTZY/binance01.jpg"},
    { type: "image", src: "https://i.postimg.cc/kgg3KbbB/binance02.webp"},
    { type: "image", src: "https://i.postimg.cc/7YDyPcP1/binance03.jpg"},
    { type: "image", src: "https://i.postimg.cc/xTRVXRqw/binance04.webp"},
    /* Junio de 2025 - Despedida de Soltero de Colombi */
    { type: "image", src: "https://i.postimg.cc/x8dkCWf7/IMG-20250627-154547.png"},
    { type: "image", src: "https://i.postimg.cc/t70rytys/IMG-20250627-154044.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/z2VSs76sbHA"},
    { type: "image", src: "https://i.postimg.cc/63Nt53xq/IMG-20250628-181859.png"},
    { type: "image", src: "https://i.postimg.cc/nzYZsJnk/IMG-20250628-181916.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/ttZWCvyfsWE"},
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
    /* Octubre de 2025 - Fiestas de Boadilla */
    { type: "image", src: "https://i.postimg.cc/JhjSjgLv/IMG-20251006-184303.png" },
    { type: "youtube", src: "https://www.youtube.com/embed/5mxaB-2awww" },
    { type: "youtube", src: "https://www.youtube.com/embed/l74rNrKKHgE" },
    { type: "youtube", src: "https://www.youtube.com/embed/8Wn58dD0XFg" },
    /* Octubre 2015 - Experiencias */
    { type: "image", src: "https://i.postimg.cc/5t8D8GVD/IMG-20251014-135724.png" },
];

let currentIndex = 1;
const totalMedia = media.length;

const mediaViewer = document.getElementById('mediaViewer');
const mediaInput = document.getElementById('mediaIndex');
const totalSpan = document.getElementById('totalMedia');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

totalSpan.textContent = totalMedia;

function loadMedia(index) {
  if (index < 1) index = totalMedia;
  if (index > totalMedia) index = 1;

  const item = media[index - 1];
  mediaViewer.innerHTML = "";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    mediaViewer.appendChild(img);
  } else if (item.type === "youtube") {
    mediaViewer.innerHTML = "";
    mediaViewer.style.width = "432px";
    mediaViewer.style.height = "825px";

    const iframe = document.createElement("iframe");
    iframe.src = item.src + "?autoplay=1&rel=0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = false;
    iframe.style.width = "100%";  // ocupa todo el ancho del div
    iframe.style.height = "100%"; // ocupa todo el alto del div
    mediaViewer.appendChild(iframe);
  }

  currentIndex = index;
  mediaInput.value = index;
}

prevBtn.addEventListener('click', () => {
  loadMedia(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  loadMedia(currentIndex + 1);
});

mediaInput.addEventListener('change', () => {
  loadMedia(parseInt(mediaInput.value));
});

loadMedia(currentIndex);