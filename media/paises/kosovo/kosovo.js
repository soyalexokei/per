/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
    { type: "image", src: "https://i.postimg.cc/PrhbRKN8/1.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/Vug9yUIbGGw"},
    { type: "image", src: "https://i.postimg.cc/HL2jj4dF/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/ncyXWh3S/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/Dw1S33Dv/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/pXh9kFJn/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/FKm79n5j/6.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/prEXA0HiHdc"},
    { type: "image", src: "https://i.postimg.cc/htGKpWBZ/7.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/NOlUcPd2Ens"},
    { type: "image", src: "https://i.postimg.cc/GhXxZYW3/IMG-20220416-WA0007.png"},
    { type: "image", src: "https://i.postimg.cc/Hkj9Hnmw/IMG-20220416-WA0005.png"},
    { type: "image", src: "https://i.postimg.cc/ydTZ0CB6/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/W3VZDbBf/9.jpg"},
    { type: "image", src: "https://i.postimg.cc/m21rsWqc/10.jpg"},
    { type: "image", src: "https://i.postimg.cc/C5zx53xQ/11.jpg"},
    { type: "image", src: "https://i.postimg.cc/QCwxTfBx/12.jpg"},
    { type: "image", src: "https://i.postimg.cc/wxGBZjW8/13.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/qgC98tuh_fo"},
    { type: "image", src: "https://i.postimg.cc/XYM9M82b/14.jpg"},
    { type: "image", src: "https://i.postimg.cc/kMpxs9KD/15.jpg"},
    { type: "image", src: "https://i.postimg.cc/Z5rpJdgy/16.jpg"},
    { type: "image", src: "https://i.postimg.cc/kXRWhZvs/17.jpg"},
    { type: "image", src: "https://i.postimg.cc/bwz1gR3N/IMG-20220416-134607.png"},
    { type: "image", src: "https://i.postimg.cc/hGQv1zWt/18.jpg"},
    { type: "image", src: "https://i.postimg.cc/nz8zRFpY/19.jpg"},
    { type: "image", src: "https://i.postimg.cc/RZDqt1YY/20.jpg"},
    { type: "image", src: "https://i.postimg.cc/Y91ST5Sc/21.jpg"},
    { type: "image", src: "https://i.postimg.cc/xTnxzLDn/IMG-20220416-133405.png"},
    { type: "image", src: "https://i.postimg.cc/RFwd3ZgW/IMG-20220416-WA0010.png"},
    { type: "image", src: "https://i.postimg.cc/d3B9BSPv/IMG-20220416-163157.png"},
    { type: "image", src: "https://i.postimg.cc/GtrQvnfq/IMG-20220416-141757.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/_dlDVlVk_NA"},
    { type: "image", src: "https://i.postimg.cc/ZK5PmHzB/26.jpg"},
    { type: "image", src: "https://i.postimg.cc/76N78GBn/22.jpg"},
    { type: "image", src: "https://i.postimg.cc/kG1bDrPV/23.jpg"},
    { type: "image", src: "https://i.postimg.cc/8CRfMfVg/IMG-20220416-135929.png"},
    { type: "image", src: "https://i.postimg.cc/RhVtMSy5/24.jpg"},
    { type: "image", src: "https://i.postimg.cc/7Pm7KzJx/25.jpg"},
    { type: "image", src: "https://i.postimg.cc/DzkbSdHc/IMG-20220416-134312.png"},
    { type: "image", src: "https://i.postimg.cc/15XF2zDD/27.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/qPvKur-jnzI"},
    { type: "youtube", src: "https://www.youtube.com/embed/aGEblhSjLkA"},
    { type: "image", src: "https://i.postimg.cc/NMVt0bPs/28.jpg"},
    { type: "image", src: "https://i.postimg.cc/G29rr6Kg/29.jpg"},
    { type: "image", src: "https://i.postimg.cc/28SttnHT/IMG-20220417-000013.png"},
    { type: "image", src: "https://i.postimg.cc/65bPxTgK/IMG-20220417-001646.png"},
    { type: "image", src: "https://i.postimg.cc/PxfbqQvR/32.jpg"},
    { type: "image", src: "https://i.postimg.cc/cC2fXq9p/30.jpg"},
    { type: "image", src: "https://i.postimg.cc/L8Hbrwmc/IMG-20220417-093025.png"},
    { type: "image", src: "https://i.postimg.cc/ncKWSpfK/IMG-20220417-093026.png"},
    { type: "image", src: "https://i.postimg.cc/fbygbdt5/IMG-20220417-093049.png"},
    { type: "image", src: "https://i.postimg.cc/6QPb4QCK/IMG-20220417-093122.png"},
    { type: "image", src: "https://i.postimg.cc/CxLcv8NY/IMG-20220417-093129.png"},
    { type: "image", src: "https://i.postimg.cc/4N18bPpB/IMG-20220417-093138.png"},
    { type: "image", src: "https://i.postimg.cc/DyhjXH4S/IMG-20220417-093258.png"},
    { type: "image", src: "https://i.postimg.cc/MpPdgGPB/IMG-20220417-093318.png"},
    { type: "image", src: "https://i.postimg.cc/ZqXjKMhK/Sin-t-tulo-1.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/lrq6L_GXr3U"},
    { type: "youtube", src: "https://www.youtube.com/embed/KDSLhfilP_s"},
    { type: "image", src: "https://i.postimg.cc/nVSrjbPk/31.jpg"},
    { type: "image", src: "https://i.postimg.cc/qqq7bjzy/33.jpg"},
    { type: "image", src: "https://i.postimg.cc/9MJMYvFc/34.jpg"},
    { type: "image", src: "https://i.postimg.cc/sxLgt7h8/35.jpg"},
    { type: "image", src: "https://i.postimg.cc/fT3LYq4h/36.jpg"},
    { type: "image", src: "https://i.postimg.cc/3w2PRRTq/IMG-20220417-103837.png"},
    { type: "image", src: "https://i.postimg.cc/V612b8sk/IMG-20220417-105759.png"},
    { type: "image", src: "https://i.postimg.cc/Tw9FV4hq/IMG-20220417-105904.png"},
    { type: "image", src: "https://i.postimg.cc/LX1778yD/IMG-20220417-110202.png"},
    { type: "image", src: "https://i.postimg.cc/CLYtPYbC/IMG-20220417-110124.png"},
    { type: "image", src: "https://i.postimg.cc/Vv9hfHPb/IMG-20220417-110734.png"},
    { type: "image", src: "https://i.postimg.cc/G3vVx9Th/IMG-20220417-110955.png"},
    { type: "image", src: "https://i.postimg.cc/gjb5PbQW/IMG-20220417-112412.png"},
    { type: "image", src: "https://i.postimg.cc/267dVp3m/IMG-20220417-111730.png"},
    { type: "image", src: "https://i.postimg.cc/1XWprppj/IMG-20220417-111954.png"},
    { type: "image", src: "https://i.postimg.cc/8ckRvyrv/IMG-20220417-112056.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/ncY2FBFV3r0"},
    { type: "youtube", src: "https://www.youtube.com/embed/jN2nO1V23uA"},
    { type: "image", src: "https://i.postimg.cc/XY5s4zKN/Img-83298hff.png"},
    { type: "image", src: "https://i.postimg.cc/XJjLKNRX/IMG-20220417-113109.png"},
    { type: "image", src: "https://i.postimg.cc/xdygbNFW/IMG-20220417-113500.png"},
    { type: "image", src: "https://i.postimg.cc/6QNY3fzr/IMG-20220417-115203.png"},
    { type: "image", src: "https://i.postimg.cc/BQKXBXr6/IMG-20220417-120209.png"},
    { type: "image", src: "https://i.postimg.cc/JnYGPJ7y/IMG-20220417-122024.png"},
    { type: "image", src: "https://i.postimg.cc/Gpr82dSp/IMG-20220417-122017.png"},
    { type: "image", src: "https://i.postimg.cc/652GbHvB/IMG-20220417-120527.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/mAo4oiYGyzQ"},
    { type: "image", src: "https://i.postimg.cc/bw1SpsgM/IMG-20220417-125845.png"},
    { type: "image", src: "https://i.postimg.cc/65k4kdrn/IMG-20220417-125929.png"},
    { type: "image", src: "https://i.postimg.cc/6Q074gDf/IMG-20220417-125853.png"},
    { type: "image", src: "https://i.postimg.cc/tT4s3DbQ/37.jpg"},
    { type: "image", src: "https://i.postimg.cc/qqtgYRg1/38.jpg"},
    { type: "image", src: "https://i.postimg.cc/NFWLwcHB/39.jpg"},
    { type: "image", src: "https://i.postimg.cc/L8FhCmSV/40.jpg"},
    { type: "image", src: "https://i.postimg.cc/c1jv3Q52/41.jpg"},
    { type: "image", src: "https://i.postimg.cc/cL7CPP4G/42.jpg"},
    { type: "image", src: "https://i.postimg.cc/Jh108KGD/43.jpg"},
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