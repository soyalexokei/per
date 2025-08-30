/* { type: "image", src: "" }, y { type: "youtube", src: "https://www.youtube.com/embed/" }, */
const media = [
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
  /* { type: "image", src: "" },
  { type: "youtube", src: "https://www.youtube.com/embed/" }, */
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