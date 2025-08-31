/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
    { type: "image", src: "https://i.postimg.cc/4xBPdMrh/1.jpg"},
    { type: "image", src: "https://i.postimg.cc/XJyksvXw/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/R0hRndBp/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/fbPv7dWz/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/8cQB9Vrx/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/QCQkrnQC/6.jpg"},
    { type: "image", src: "https://i.postimg.cc/pVzB8ywv/7.jpg"},
    { type: "image", src: "https://i.postimg.cc/yYf3SH8B/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/fRJtcrVd/9.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/iSQOpOChzYs"},
    { type: "image", src: "https://i.postimg.cc/4y7qbZRM/10.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/kVJi0DUagIM"},
    { type: "image", src: "https://i.postimg.cc/qBt4JH6W/11.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/EoioMgzx-ug"},
    { type: "image", src: "https://i.postimg.cc/NjnxwX33/12.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/Hllh6hyxrs4"},
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
    { type: "youtube", src: "https://www.youtube.com/embed/XVOFNUxsoLg"},
    { type: "image", src: "https://i.postimg.cc/nhMhD9Xc/IMG-20220701-131731.png"},
    { type: "image", src: "https://i.postimg.cc/ZngDsQxQ/35.jpg"},
    { type: "image", src: "https://i.postimg.cc/mZ6qrcWS/36.jpg"},
    { type: "image", src: "https://i.postimg.cc/X7GPBVV6/37.jpg"},
    { type: "image", src: "https://i.postimg.cc/28sK4P6b/38.jpg"},
    { type: "image", src: "https://i.postimg.cc/XY9DxQG2/39.jpg"},
    { type: "image", src: "https://i.postimg.cc/zf52QKTq/40.jpg"},
    { type: "image", src: "https://i.postimg.cc/gk0xV2jj/41.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/U9Bx2euDKtA"},
    { type: "youtube", src: "https://www.youtube.com/embed/H1ATXgPLjYY"},
    { type: "image", src: "https://i.postimg.cc/pVSB54Vw/42.jpg"},
    { type: "image", src: "https://i.postimg.cc/YCT91NLq/IMG-20220701-151913.png"},
    { type: "image", src: "https://i.postimg.cc/3rZdPDVn/IMG-20220701-151936.png"},
    { type: "image", src: "https://i.postimg.cc/pLmrhcT6/IMG-20220701-152519.png"},
    { type: "image", src: "https://i.postimg.cc/fT2kbQwd/IMG-20220701-152524.png"},
    { type: "image", src: "https://i.postimg.cc/KvvRF8yF/IMG-20220701-152530.png"},
    { type: "image", src: "https://i.postimg.cc/MZtpsJfL/43.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/KZkp8sBK1F0"},
    { type: "youtube", src: "https://www.youtube.com/embed/Hv_XcfjiPnw"},
    { type: "image", src: "https://i.postimg.cc/zGxQMpF8/44.jpg"},
    { type: "image", src: "https://i.postimg.cc/L897NGfx/45.jpg"},
    { type: "image", src: "https://i.postimg.cc/FK16QcTc/46.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/C2GpNDUg7OY"},
    { type: "youtube", src: "https://www.youtube.com/embed/IjIZrfX0Pug"},
    { type: "youtube", src: "https://www.youtube.com/embed/P2h7P7YN8K8"},
    { type: "image", src: "https://i.postimg.cc/Z5v3t5rn/47.jpg"},
    { type: "image", src: "https://i.postimg.cc/pdNj2MZZ/48.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/8B11Kq0iuzg"},
    { type: "youtube", src: "https://www.youtube.com/embed/nHdq7DIXZxk"},
    { type: "image", src: "https://i.postimg.cc/g0Snx9yQ/49.jpg"},
    { type: "image", src: "https://i.postimg.cc/g0kxcch3/50.jpg"},
    { type: "image", src: "https://i.postimg.cc/xCXqHstC/51.jpg"},
    { type: "image", src: "https://i.postimg.cc/BnC8GPjq/52.jpg"},
    { type: "image", src: "https://i.postimg.cc/LXG5VzbV/53.jpg"},
    { type: "image", src: "https://i.postimg.cc/4ytd2YCR/54.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/l8m91nOZd6A"},
    { type: "youtube", src: "https://www.youtube.com/embed/LtLtIsLoV-U"},
    { type: "youtube", src: "https://www.youtube.com/embed/YJMyqmoDOvE"},
    { type: "youtube", src: "https://www.youtube.com/embed/6FGl60n7gZg"},
    { type: "image", src: "https://i.postimg.cc/mDmNZ6hg/55.jpg"},
    { type: "image", src: "https://i.postimg.cc/NMskcwsn/56.jpg"},
    { type: "image", src: "https://i.postimg.cc/s294q2rS/57.jpg"},
    { type: "image", src: "https://i.postimg.cc/Wztmd6J6/58.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y0V6YG6c/59.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y2yfJVJX/60.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/lcO9LhNS1u4"},
    { type: "image", src: "https://i.postimg.cc/2jF3WBxn/61.jpg"},
    { type: "image", src: "https://i.postimg.cc/bNyr9N6W/62.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/EekbRChkwpY"},
    { type: "youtube", src: "https://www.youtube.com/embed/8QfIX939GqE"},
    { type: "image", src: "https://i.postimg.cc/nrvdF18R/63.jpg"},
    { type: "image", src: "https://i.postimg.cc/Gt07n5fT/64.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/-qgYGuVMNxw"},
    { type: "youtube", src: "https://www.youtube.com/embed/ne4GePBEL5Q"},
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
    { type: "youtube", src: "https://www.youtube.com/embed/_erWHUQuBXw"},
    { type: "image", src: "https://i.postimg.cc/gJVxDgfH/81.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/M0AbksEMjcA"},
    { type: "image", src: "https://i.postimg.cc/h43BYLcL/82.jpg"},
    { type: "image", src: "https://i.postimg.cc/QCPZW304/83.jpg"},
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