/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
    { type: "image", src: "https://i.postimg.cc/nrCfCJPC/1.png" },
    { type: "image", src: "https://i.postimg.cc/VNmyXMhy/2.png" },
    { type: "image", src: "https://i.postimg.cc/B6hGS6Nr/3.jpg" },
    { type: "image", src: "https://i.postimg.cc/XYM67tcY/4.png" },
    { type: "image", src: "https://i.postimg.cc/J0vVX2fK/5.jpg" },
    { type: "image", src: "https://i.postimg.cc/1RjZb886/6.jpg" },
    { type: "image", src: "https://i.postimg.cc/Bnx98NMc/7.jpg" },
    { type: "image", src: "https://i.postimg.cc/WbqPVsZy/8.jpg" },
    { type: "image", src: "https://i.postimg.cc/Pq4gyJGC/9.jpg" },
    { type: "image", src: "https://i.postimg.cc/wvjSGzH0/10.jpg" },
    { type: "image", src: "https://i.postimg.cc/j53GV1SK/11.jpg" },
    { type: "image", src: "https://i.postimg.cc/wMtn9k1N/12.jpg" },
    { type: "image", src: "https://i.postimg.cc/90vK0q9n/13.jpg" },
    { type: "image", src: "https://i.postimg.cc/G3NZq6fx/14.jpg" },
    { type: "image", src: "https://i.postimg.cc/bwf4jkpG/15.jpg" },
    { type: "image", src: "https://i.postimg.cc/vHVCj3FF/16.jpg" },
    { type: "image", src: "https://i.postimg.cc/mg3JZkgm/17.jpg" },
    { type: "image", src: "https://i.postimg.cc/7Lxc54Cw/18.jpg" },
    { type: "image", src: "https://i.postimg.cc/8CtYWYWW/19.jpg" },
    { type: "image", src: "https://i.postimg.cc/23R9rNRp/20.png" },
    { type: "image", src: "https://i.postimg.cc/vT62JHKL/21.png" },
    { type: "image", src: "https://i.postimg.cc/9M0nBBtk/22.jpg" },
    { type: "image", src: "https://i.postimg.cc/mDn6pFmg/23.jpg" },
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