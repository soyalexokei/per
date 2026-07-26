/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
  { type: "image", src: "https://i.postimg.cc/cHxQ4rKw/IMG-20251018-161332-944.webp" },
  { type: "image", src: "https://i.postimg.cc/tTqhCY1h/IMG-20251018-164751-471.webp" },
  { type: "image", src: "https://i.postimg.cc/vBYWHc1c/IMG-20251018-161818-580.webp" },
  { type: "image", src: "https://i.postimg.cc/xjHzDvpv/IMG-20251018-164829-075.webp" },
  { type: "image", src: "https://i.postimg.cc/1XpnGSNh/IMG-20251018-164955-279.webp" },
  { type: "image", src: "https://i.postimg.cc/Vvjrqw0F/IMG-20251018-165838.png" },
  { type: "image", src: "https://i.postimg.cc/4yz76GHQ/IMG-20251018-165852.png" },
  { type: "image", src: "https://i.postimg.cc/MHkffHHP/IMG-20251018-170838-860.webp" },
  { type: "image", src: "https://i.postimg.cc/L5zYtSgT/IMG-20251018-171122.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/b0ydA_6OgSI" },
  { type: "image", src: "https://i.postimg.cc/fbGYmBgD/IMG-20251018-171916.png" },
  { type: "image", src: "https://i.postimg.cc/nrHjG5K7/IMG-20251018-174454.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/Ye1qfVmkRiM" },
  { type: "image", src: "https://i.postimg.cc/4dKsk1JL/IMG-20251018-172620.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/hdLt4hzpziM" },
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