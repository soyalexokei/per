/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
*/
const media =
[
    { type: "image", src: "https://i.postimg.cc/8CH3QGnW/1.png"},
    { type: "image", src: "https://i.postimg.cc/kgWzsKQT/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/9MQkckvk/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/Yq5TQbW4/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/tTvMJ5b4/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/DzFDM05n/6.jpg"},
    { type: "image", src: "https://i.postimg.cc/mggLZYHP/IMG-20210731-121213.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/URnfn7Q6lWI"},
    { type: "image", src: "https://i.postimg.cc/rmYTmmv5/7.jpg"},
    { type: "image", src: "https://i.postimg.cc/fWpZQV7N/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/ZnBSymS2/9.jpg"},
    { type: "image", src: "https://i.postimg.cc/906jdkXM/10.jpg"},
    { type: "image", src: "https://i.postimg.cc/sDWzj3KZ/11.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/vuIfzEm9fMs"},
    { type: "image", src: "https://i.postimg.cc/L5Mch1xY/IMG-20210731-130759.png"},
    { type: "image", src: "https://i.postimg.cc/prYgjLS0/IMG-20210731-130804.png"},
    { type: "image", src: "https://i.postimg.cc/NFYnQw0R/IMG-20210731-130832.png"},
    { type: "image", src: "https://i.postimg.cc/mD7qxrTb/IMG-20210731-130818.png"},
    { type: "image", src: "https://i.postimg.cc/L5NxRYwM/IMG-20210731-131329.png"},
    { type: "image", src: "https://i.postimg.cc/ncS3Pmq4/IMG-20210731-131358.png"},
    { type: "image", src: "https://i.postimg.cc/28SHGGLj/IMG-20210731-131401.png"},
    { type: "image", src: "https://i.postimg.cc/xjRxLhCF/IMG-20210731-131404.png"},
    { type: "image", src: "https://i.postimg.cc/Vk3DYcG5/IMG-20210731-131407.png"},
    { type: "image", src: "https://i.postimg.cc/3wXzyZcX/IMG-20210731-131412.png"},
    { type: "image", src: "https://i.postimg.cc/MpjCww0r/IMG-20210731-131418.png"},
    { type: "image", src: "https://i.postimg.cc/PqsBr72f/IMG-20210731-131455.png"},
    { type: "image", src: "https://i.postimg.cc/cHmqzc7x/IMG-20210731-131458.png"},
    { type: "image", src: "https://i.postimg.cc/RF95GYHp/IMG-20210731-131500.png"},
    { type: "image", src: "https://i.postimg.cc/SxBpYRNh/IMG-20210731-131923.png"},
    { type: "image", src: "https://i.postimg.cc/xdLVvQcb/IMG-20210731-131956.png"},
    { type: "image", src: "https://i.postimg.cc/jdR6K4HV/12.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/mBLUP55pRbE"},
    { type: "youtube", src: "https://www.youtube.com/embed/3TNSTkGmAWc"},
    { type: "image", src: "https://i.postimg.cc/yNKsrWqT/13.jpg"},
    { type: "image", src: "https://i.postimg.cc/gJkdm52X/14.jpg"},
    { type: "image", src: "https://i.postimg.cc/NMJtM4KN/15.jpg"},
    { type: "image", src: "https://i.postimg.cc/nL1p8Zpf/16.jpg"},
    { type: "image", src: "https://i.postimg.cc/j2DbJ7NR/17.jpg"},
    { type: "image", src: "https://i.postimg.cc/NFZw8j7m/18.jpg"},
    { type: "image", src: "https://i.postimg.cc/CM2YpcT5/19.jpg"},
    { type: "image", src: "https://i.postimg.cc/HkYCQRbS/20.jpg"},
    { type: "image", src: "https://i.postimg.cc/bNHhSpSD/21.jpg"},
    { type: "image", src: "https://i.postimg.cc/Nfwt05Fv/22.jpg"},
    { type: "image", src: "https://i.postimg.cc/VkKP4gRz/23.jpg"},
    { type: "youtube", src: "https://www.youtube.com/embed/jQdTfhk-VGU"},
    { type: "image", src: "https://i.postimg.cc/L6T0tX9P/IMG-20210731-132206.png"},
    { type: "image", src: "https://i.postimg.cc/L88QNp5b/IMG-20210731-132218.png"},
    { type: "image", src: "https://i.postimg.cc/1X1YHVVG/IMG-20210731-132221.png"},
    { type: "image", src: "https://i.postimg.cc/NMHzmkFG/IMG-20210731-132235.png"},
    { type: "image", src: "https://i.postimg.cc/NfqZBSMN/IMG-20210731-133223.png"},
    { type: "image", src: "https://i.postimg.cc/Vsb3ymYr/IMG-20210731-133246.png"},
    { type: "image", src: "https://i.postimg.cc/Y0gVQfXf/IMG-20210731-133248.png"},
    { type: "image", src: "https://i.postimg.cc/nzNgsw1h/IMG-20210731-140551.png"},
    { type: "image", src: "https://i.postimg.cc/RFW2ZzKY/IMG-20210731-140610.png"},
    { type: "image", src: "https://i.postimg.cc/HLZfmLc5/IMG-20210731-WA0039.png"},
    { type: "image", src: "https://i.postimg.cc/T3ZD4VQW/IMG-20210731-140605.png"},
    { type: "youtube", src: "https://www.youtube.com/embed/QaMC9KvexSw"},
    { type: "image", src: "https://i.postimg.cc/VvrwpCKd/25.png"},
    { type: "image", src: "https://i.postimg.cc/d10wRXdR/26.png"},
    { type: "image", src: "https://i.postimg.cc/8zhpTLNv/27.png"},
    { type: "image", src: "https://i.postimg.cc/QMhXCVdy/28.png"},
    { type: "image", src: "https://i.postimg.cc/JhxRkmy4/29.png"},
    { type: "image", src: "https://i.postimg.cc/jSVqVM0K/30.png"},
    { type: "image", src: "https://i.postimg.cc/G2SrXQJW/24.jpg"},
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