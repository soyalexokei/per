/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
    { type: "image", src: "https://i.postimg.cc/TYVh5TnX/1.png"},
    { type: "image", src: "https://i.postimg.cc/xjbXYvC8/2.png"},
    { type: "image", src: "https://i.postimg.cc/Hn5n2gKX/3.png"},
    { type: "image", src: "https://i.postimg.cc/8PQjC7JH/4.png"},
    { type: "image", src: "https://i.postimg.cc/fRMyx1vS/5.png"},
    { type: "image", src: "https://i.postimg.cc/8zw5wwyK/6.png"},
    { type: "image", src: "https://i.postimg.cc/N0M0nTSg/7.png"},
    { type: "image", src: "https://i.postimg.cc/43S3RyRp/8.png"},
    { type: "image", src: "https://i.postimg.cc/XJBYjWnm/9.png"},
    { type: "image", src: "https://i.postimg.cc/WzRbty33/10.png"},
    { type: "image", src: "https://i.postimg.cc/wxJjn9fs/11.png"},
    { type: "image", src: "https://i.postimg.cc/2y4jWxbx/12.png"},
    { type: "image", src: "https://i.postimg.cc/ncJhJNgS/13.png"},
    { type: "image", src: "https://i.postimg.cc/wjWqDMvn/14.png"},
    { type: "image", src: "https://i.postimg.cc/g2ccw8Yv/15.png"},
    { type: "image", src: "https://i.postimg.cc/zXFXX01z/16.png"},
    { type: "image", src: "https://i.postimg.cc/pdp2Cv5r/17.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/gKWQjN4rqtk"},
    { type: "image", src: "https://i.postimg.cc/25MCXtnw/19.png"},
    { type: "image", src: "https://i.postimg.cc/hvqcK7yQ/20.png"},
    { type: "image", src: "https://i.postimg.cc/63ZBsh0N/21.png"},
    { type: "image", src: "https://i.postimg.cc/0jdxj2FW/22.png"},
    { type: "image", src: "https://i.postimg.cc/pVDPqqrf/23.png"},
    { type: "image", src: "https://i.postimg.cc/RV448KJj/24.png"},
    { type: "image", src: "https://i.postimg.cc/jdctr2zC/25.png"},
    { type: "image", src: "https://i.postimg.cc/Nj0YGt4D/26.png"},
    { type: "image", src: "https://i.postimg.cc/kghCBHYm/27.png"},
    { type: "image", src: "https://i.postimg.cc/xdJ2HPBb/28.png"},
    { type: "image", src: "https://i.postimg.cc/ZqGhLdhs/29.png"},
    { type: "image", src: "https://i.postimg.cc/xCLVp1ff/30.png"},
    { type: "image", src: "https://i.postimg.cc/8cDQ2gch/31.png"},
    { type: "image", src: "https://i.postimg.cc/90p5Vgws/32.png"},
    { type: "image", src: "https://i.postimg.cc/h4bq9vZM/33.png"},
    { type: "image", src: "https://i.postimg.cc/wTqYFzSz/34.png"},
    { type: "image", src: "https://i.postimg.cc/FH155Zrn/35.png"},
    { type: "image", src: "https://i.postimg.cc/6pSs9vT6/36.png"},
    { type: "image", src: "https://i.postimg.cc/c4FybjSn/37.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/h1Jbe7EYf_Q"},
    { type: "image", src: "https://i.postimg.cc/d0TbDVT2/39.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/t-3ud0v1mXA"},
    { type: "image", src: "https://i.postimg.cc/SsFw9bWw/41.png"},
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