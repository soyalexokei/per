/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerAlemania = document.getElementById("mediaViewerAlemania");
const prevBtnAlemania = document.getElementById("prevBtnAlemania");
const nextBtnAlemania = document.getElementById("nextBtnAlemania");
const mediaIndexAlemania = document.getElementById("mediaIndexAlemania");
const totalMediaAlemania = document.getElementById("totalMediaAlemania");
const loaderAlemania = document.getElementById("loaderAlemania");
let currentMediaAlemania = 0;
let pendingImageAlemania = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeAlemania = {
  nombre: "Alemania",
  medios: [
    { type: "image", src: "https://i.postimg.cc/7Y7pwr7j/1.jpg"},
    { type: "image", src: "https://i.postimg.cc/8Ck3RF3V/2.jpg"},
    { type: "image", src: "https://i.postimg.cc/Vk82NZWv/3.jpg"},
    { type: "image", src: "https://i.postimg.cc/fRfpS78K/4.jpg"},
    { type: "image", src: "https://i.postimg.cc/76fWRFws/5.jpg"},
    { type: "image", src: "https://i.postimg.cc/yNfGv143/6.jpg"},
    { type: "image", src: "https://i.postimg.cc/XJmz6svV/7.jpg"},
    { type: "image", src: "https://i.postimg.cc/nrmwFqsq/8.jpg"},
    { type: "image", src: "https://i.postimg.cc/SQYPfbZj/9.jpg"},
    { type: "image", src: "https://i.postimg.cc/WbRH9YK8/10.jpg"},
    { type: "video", src: "https://streamable.com/e/srym5v"},
    { type: "video", src: "https://streamable.com/e/33hp9n"},
    { type: "image", src: "https://i.postimg.cc/bNQF4Hfh/11.jpg"},
    { type: "image", src: "https://i.postimg.cc/8z4XzpCX/12.jpg"},
    { type: "image", src: "https://i.postimg.cc/jStkTwRJ/13.jpg"},
    { type: "image", src: "https://i.postimg.cc/SKKTXB2S/14.jpg"},
    { type: "image", src: "https://i.postimg.cc/6Q1HCMnd/15.jpg"},
    { type: "image", src: "https://i.postimg.cc/W3F580wx/16.jpg"},
    { type: "video", src: "https://streamable.com/e/399ss1"},
    { type: "video", src: "https://streamable.com/e/7iouba"},
    { type: "video", src: "https://streamable.com/e/nhtj1p"},
    { type: "video", src: "https://streamable.com/e/8lm9xq"},
    { type: "video", src: "https://streamable.com/e/97r4c1"},
    { type: "image", src: "https://i.postimg.cc/nzy0PMdr/17.jpg"},
    { type: "image", src: "https://i.postimg.cc/6qCYJwS0/18.jpg"},
    { type: "image", src: "https://i.postimg.cc/RVzg166b/19.jpg"},
    { type: "video", src: "https://streamable.com/e/6d33fe"},
    { type: "video", src: "https://streamable.com/e/nx4s9f"},
    { type: "video", src: "https://streamable.com/e/mcgtbb"},
    { type: "image", src: "https://i.postimg.cc/ry4htCmr/20.jpg"},
    { type: "image", src: "https://i.postimg.cc/GmLzNWjF/21.jpg"},
    { type: "image", src: "https://i.postimg.cc/Qxk0f8cN/22.jpg"},
    { type: "image", src: "https://i.postimg.cc/QdfSrf6R/23.jpg"},
    { type: "image", src: "https://i.postimg.cc/8Cs4kL9s/24.jpg"},
    { type: "image", src: "https://i.postimg.cc/gc3D0zSy/25.jpg"},
    { type: "image", src: "https://i.postimg.cc/43M5YmRP/26.jpg"},
    { type: "image", src: "https://i.postimg.cc/B6KCH4q0/27.jpg"},
    { type: "image", src: "https://i.postimg.cc/8cgmb95r/28.jpg"},
    { type: "image", src: "https://i.postimg.cc/FzbgCpdC/29.jpg"},
    { type: "image", src: "https://i.postimg.cc/7YDNGFdF/30.jpg"},
    { type: "image", src: "https://i.postimg.cc/VLRWj7cd/31.jpg"},
    { type: "image", src: "https://i.postimg.cc/VkkB4jY4/32.jpg"},
    { type: "image", src: "https://i.postimg.cc/dVNRfL3F/33.jpg"},
    { type: "image", src: "https://i.postimg.cc/jjW6Ytn7/34.jpg"},
    { type: "image", src: "https://i.postimg.cc/25PQzMnX/35.jpg"},
    { type: "image", src: "https://i.postimg.cc/0QDprnf5/36.jpg"},
    { type: "image", src: "https://i.postimg.cc/1XSDFFCG/37.jpg"},
    { type: "image", src: "https://i.postimg.cc/J0QZ5hv9/38.jpg"},
    { type: "image", src: "https://i.postimg.cc/vHQWHW6M/39.jpg"},
    { type: "image", src: "https://i.postimg.cc/595BVPyn/40.jpg"},
    { type: "image", src: "https://i.postimg.cc/KvJtKRnT/41.jpg"},
    { type: "image", src: "https://i.postimg.cc/P5JY1T4R/42.jpg"},
    { type: "image", src: "https://i.postimg.cc/xdbmF5BG/43.jpg"},
    { type: "image", src: "https://i.postimg.cc/x1ZHRhpT/44.jpg"},
    { type: "image", src: "https://i.postimg.cc/ydmZ7d1k/45.jpg"},
    { type: "image", src: "https://i.postimg.cc/XJS5MF0R/46.jpg"},
    { type: "image", src: "https://i.postimg.cc/kG7tGmGw/47.jpg"},
    { type: "image", src: "https://i.postimg.cc/3N90DcDh/48.jpg"},
    { type: "image", src: "https://i.postimg.cc/G3jyNHgf/49.jpg"},
    { type: "image", src: "https://i.postimg.cc/4NN9Tsrx/50.jpg"},
    { type: "image", src: "https://i.postimg.cc/FsWJrw4g/51.jpg"},
    { type: "image", src: "https://i.postimg.cc/g21XRRrx/52.jpg"},
    { type: "image", src: "https://i.postimg.cc/y8D3kn6q/53.jpg"},
    { type: "image", src: "https://i.postimg.cc/mrMcSDF8/54.jpg"},
    { type: "image", src: "https://i.postimg.cc/RFBWpB79/55.jpg"},
    { type: "image", src: "https://i.postimg.cc/tJRYyNvM/56.jpg"},
    { type: "image", src: "https://i.postimg.cc/sX4vtNmW/57.jpg"},
    { type: "image", src: "https://i.postimg.cc/pr0yd5gX/58.jpg"},
    { type: "image", src: "https://i.postimg.cc/tRDsk8YQ/59.jpg"},
    { type: "image", src: "https://i.postimg.cc/8P5j0w6F/60.jpg"},
    { type: "image", src: "https://i.postimg.cc/WbHhLrG5/61.jpg"},
    { type: "image", src: "https://i.postimg.cc/zGH3JBp8/62.jpg"},
    { type: "image", src: "https://i.postimg.cc/Zqkn0SD3/63.jpg"},
    { type: "image", src: "https://i.postimg.cc/pdDTF6gS/64.jpg"},
    { type: "image", src: "https://i.postimg.cc/nzpLY1xh/65.jpg"},
    { type: "image", src: "https://i.postimg.cc/BbvQRQXW/66.jpg"},
    { type: "image", src: "https://i.postimg.cc/3NbJh5vk/67.jpg"},
    { type: "image", src: "https://i.postimg.cc/9XxfZTnc/68.jpg"},
    { type: "image", src: "https://i.postimg.cc/sDvgcXk7/69.jpg"},
    { type: "image", src: "https://i.postimg.cc/kXzXhCCZ/70.jpg"},
    { type: "image", src: "https://i.postimg.cc/k4JntXNV/71.jpg"},
    { type: "image", src: "https://i.postimg.cc/3xGrsqJw/72.jpg"},
    { type: "image", src: "https://i.postimg.cc/zf1D8kVF/73.jpg"},
    { type: "image", src: "https://i.postimg.cc/PqzXx8Ds/74.jpg"},
    { type: "image", src: "https://i.postimg.cc/1tvy0hMv/75.jpg"},
    { type: "image", src: "https://i.postimg.cc/rszMQnPM/76.jpg"},
    { type: "image", src: "https://i.postimg.cc/SQtyJ4ns/77.jpg"},
    { type: "image", src: "https://i.postimg.cc/1XTPTGk6/78.jpg"},
    { type: "image", src: "https://i.postimg.cc/rFBMN9C2/79.jpg"},
    { type: "image", src: "https://i.postimg.cc/5NYfzrzm/80.jpg"},
    { type: "image", src: "https://i.postimg.cc/P51h382p/81.jpg"},
    { type: "image", src: "https://i.postimg.cc/TPGxZY4k/82.jpg"},
    { type: "image", src: "https://i.postimg.cc/nzhJhSZB/83.jpg"},
    { type: "image", src: "https://i.postimg.cc/HL2mH1GT/84.jpg"},
    { type: "image", src: "https://i.postimg.cc/QtYr9gxP/85.jpg"},
    { type: "image", src: "https://i.postimg.cc/KjKhnK1Y/86.jpg"},
    { type: "image", src: "https://i.postimg.cc/x8WDg0m3/87.jpg"},
    { type: "image", src: "https://i.postimg.cc/3r6T3Zq0/88.jpg"},
    { type: "image", src: "https://i.postimg.cc/0y11wyP8/89.jpg"},
    { type: "image", src: "https://i.postimg.cc/gkZPjZ9S/90.jpg"},
    { type: "image", src: "https://i.postimg.cc/g2yFqb23/91.jpg"},
    { type: "image", src: "https://i.postimg.cc/KYZX0p1w/92.jpg"},
    { type: "image", src: "https://i.postimg.cc/8Cw29dW5/93.jpg"},
    { type: "image", src: "https://i.postimg.cc/HxxqgJ4t/94.jpg"},
    { type: "image", src: "https://i.postimg.cc/k4pkXnTP/95.jpg"},
    { type: "image", src: "https://i.postimg.cc/yx32DwGg/96.jpg"},
    { type: "image", src: "https://i.postimg.cc/XXMmdsM2/97.jpg"},
    { type: "image", src: "https://i.postimg.cc/DfWzQmks/98.jpg"},
    { type: "image", src: "https://i.postimg.cc/3rPxt7Yq/99.jpg"},
    { type: "image", src: "https://i.postimg.cc/zXKXMMfG/100.jpg"},
    { type: "image", src: "https://i.postimg.cc/K8bvyNKr/101.jpg"},
    { type: "image", src: "https://i.postimg.cc/T3c22Dg8/102.jpg"},
    { type: "image", src: "https://i.postimg.cc/8CPp7zm7/103.jpg"},
    { type: "image", src: "https://i.postimg.cc/YSnpYBdb/104.jpg"},
    { type: "image", src: "https://i.postimg.cc/xCX9Pp7Y/105.jpg"},
    { type: "image", src: "https://i.postimg.cc/7h7DFGwW/106.jpg"},
    { type: "image", src: "https://i.postimg.cc/gJ1mtqFh/107.jpg"},
    { type: "image", src: "https://i.postimg.cc/wT89hVk8/108.jpg"},
    { type: "image", src: "https://i.postimg.cc/wxs6yPLQ/109.jpg"},
    { type: "image", src: "https://i.postimg.cc/5NBbpCPH/110.jpg"},
    { type: "image", src: "https://i.postimg.cc/3x37qx6t/111.jpg"},
    { type: "image", src: "https://i.postimg.cc/NjbYvwvB/112.jpg"},
    { type: "image", src: "https://i.postimg.cc/KYzbZsmL/113.jpg"},
    { type: "image", src: "https://i.postimg.cc/TP46hqPs/114.jpg"},
    { type: "image", src: "https://i.postimg.cc/NFhvksm7/115.jpg"},
    { type: "image", src: "https://i.postimg.cc/3R0HG44x/116.jpg"},
    { type: "image", src: "https://i.postimg.cc/Rhc5PkTr/117.jpg"},
    { type: "image", src: "https://i.postimg.cc/2jvD8WNH/118.jpg"},
    { type: "image", src: "https://i.postimg.cc/HsgCJLpT/119.jpg"},
    { type: "image", src: "https://i.postimg.cc/X7k690Jd/120.jpg"},
    { type: "image", src: "https://i.postimg.cc/SxQFrt25/121.jpg"},
    { type: "image", src: "https://i.postimg.cc/9Qx3Ntyf/122.jpg"},
    { type: "image", src: "https://i.postimg.cc/GpH008jx/123.jpg"},
    { type: "image", src: "https://i.postimg.cc/BvyrJSY9/124.jpg"},
    { type: "image", src: "https://i.postimg.cc/QtTRt2wB/125.jpg" },
    { type: "image", src: "https://i.postimg.cc/qqHWCmH1/126.jpg" },
    { type: "image", src: "https://i.postimg.cc/SRL3LWyk/127.jpg" },
    { type: "image", src: "https://i.postimg.cc/v85Jdd5k/128.jpg" },
    { type: "image", src: "https://i.postimg.cc/KvFdGsNz/129.jpg" },
    { type: "image", src: "https://i.postimg.cc/L6TGnBCV/130.jpg" },
    { type: "image", src: "https://i.postimg.cc/XYYmFGt6/131.jpg" },
    { type: "image", src: "https://i.postimg.cc/TPysN8Rk/132.jpg" },
    { type: "image", src: "https://i.postimg.cc/y8p5T6zg/133.jpg" },
    { type: "image", src: "https://i.postimg.cc/CKWQWv5w/134.jpg" },
    { type: "image", src: "https://i.postimg.cc/LXLbRzgL/135.jpg" },
    { type: "image", src: "https://i.postimg.cc/gjpB0n35/136.jpg" },
    { type: "image", src: "https://i.postimg.cc/Xqg1B48v/137.jpg" },
    { type: "image", src: "https://i.postimg.cc/L4kbb3pM/138.jpg" },
    { type: "image", src: "https://i.postimg.cc/PrtRsvXv/139.jpg" },
    { type: "image", src: "https://i.postimg.cc/02cH85jW/140.jpg" },
    { type: "image", src: "https://i.postimg.cc/2StcZH4n/141.jpg" },
    { type: "image", src: "https://i.postimg.cc/XYq1XMyV/142.jpg" },
    { type: "image", src: "https://i.postimg.cc/6QGHLd0g/143.jpg" },
    { type: "image", src: "https://i.postimg.cc/qRV1mzDR/144.jpg" },
    { type: "image", src: "https://i.postimg.cc/vBr3CbCv/145.jpg" },
    { type: "image", src: "https://i.postimg.cc/RhvXB2Bx/146.jpg" },
    { type: "image", src: "https://i.postimg.cc/qqQQMQJh/147.jpg" },
    { type: "image", src: "https://i.postimg.cc/X77QDMLw/148.jpg" },
    { type: "image", src: "https://i.postimg.cc/MKPtCs3g/149.jpg" },
    { type: "image", src: "https://i.postimg.cc/CxRJSjW5/150.jpg" },
    { type: "image", src: "https://i.postimg.cc/RZ2dFWBR/151.jpg" },
    { type: "image", src: "https://i.postimg.cc/bvbT2qYj/152.jpg" },
    { type: "image", src: "https://i.postimg.cc/Tw6cVBh5/153.jpg" },
    { type: "image", src: "https://i.postimg.cc/bJ993L2C/154.jpg" },
    { type: "image", src: "https://i.postimg.cc/5y9qGvBx/155.jpg" },
    { type: "image", src: "https://i.postimg.cc/28677QjG/156.jpg" },
    { type: "image", src: "https://i.postimg.cc/tJrtHTkF/157.jpg" },
    { type: "image", src: "https://i.postimg.cc/BZNCFY3t/158.jpg" },
    { type: "image", src: "https://i.postimg.cc/28KFc1VD/159.jpg" },
    { type: "image", src: "https://i.postimg.cc/wjR5S9ms/160.jpg" },
    { type: "image", src: "https://i.postimg.cc/YScN7T6D/161.jpg" },
    { type: "image", src: "https://i.postimg.cc/0NpYyZZk/162.jpg" },
    { type: "image", src: "https://i.postimg.cc/SskW28tW/163.jpg" },
    { type: "image", src: "https://i.postimg.cc/769Sg6pj/164.jpg" },
    { type: "image", src: "https://i.postimg.cc/2y5hTYYy/165.jpg" },
    { type: "image", src: "https://i.postimg.cc/zDdnvywg/166.jpg" },
    { type: "image", src: "https://i.postimg.cc/x8FH4ZjR/167.jpg" },
    { type: "image", src: "https://i.postimg.cc/KvRtMmQs/168.jpg" },
    { type: "image", src: "https://i.postimg.cc/zX6Kw4cD/169.jpg" },
    { type: "image", src: "https://i.postimg.cc/sgWSTKkY/170.jpg" },
    { type: "image", src: "https://i.postimg.cc/BvGFkH3d/171.jpg" },
    { type: "image", src: "https://i.postimg.cc/tTqxCbYk/172.jpg" },
    { type: "image", src: "https://i.postimg.cc/W46Zvzbt/173.jpg" },
    { type: "image", src: "https://i.postimg.cc/zv3HKkwR/174.jpg" },
    { type: "image", src: "https://i.postimg.cc/PxS8C7Dj/175.jpg" },
    { type: "image", src: "https://i.postimg.cc/1XTnHNM7/176.jpg" },
    { type: "image", src: "https://i.postimg.cc/VsHC1319/177.jpg" },
    { type: "image", src: "https://i.postimg.cc/jdwJjZdp/178.jpg" },
    { type: "image", src: "https://i.postimg.cc/Kv633B1R/179.jpg" },
    { type: "image", src: "https://i.postimg.cc/NjR96FXb/180.jpg" },
    { type: "image", src: "https://i.postimg.cc/8CDFtGBG/181.jpg" },
    { type: "image", src: "https://i.postimg.cc/xdRXZZtz/182.jpg" },
    { type: "image", src: "https://i.postimg.cc/vTpT9wHp/183.jpg" },
    { type: "image", src: "https://i.postimg.cc/V6kJPFVH/184.jpg" },
    { type: "image", src: "https://i.postimg.cc/vB2cYVR8/185.jpg" },
    { type: "image", src: "https://i.postimg.cc/6q7Typwr/186.jpg" },
    { type: "image", src: "https://i.postimg.cc/c4nrWCFZ/187.jpg" },
    { type: "image", src: "https://i.postimg.cc/RC8N2KQX/188.jpg" },
    { type: "image", src: "https://i.postimg.cc/VkP5kwht/189.jpg" },
    { type: "image", src: "https://i.postimg.cc/DwQ0WDVM/190.jpg" },
    { type: "image", src: "https://i.postimg.cc/Jh1njqM4/191.jpg" },
    { type: "image", src: "https://i.postimg.cc/tTJ4M4sK/192.jpg" },
    { type: "image", src: "https://i.postimg.cc/ZqVqHd5P/193.jpg" },
    { type: "image", src: "https://i.postimg.cc/prnXPcYk/194.jpg" },
    { type: "image", src: "https://i.postimg.cc/gJ72FbRn/195.jpg" },
    { type: "image", src: "https://i.postimg.cc/WtLpzm5V/196.jpg" },
    { type: "image", src: "https://i.postimg.cc/bYK1kKMy/197.jpg" },
    { type: "image", src: "https://i.postimg.cc/y6JFJVLp/198.jpg" },
    { type: "image", src: "https://i.postimg.cc/c4wwmFyQ/199.jpg" },
    { type: "image", src: "https://i.postimg.cc/Sx48tckH/200.jpg" },
    { type: "image", src: "https://i.postimg.cc/9fF9cV4p/201.jpg" },
    { type: "image", src: "https://i.postimg.cc/7Ls26c0y/202.jpg" },
    { type: "image", src: "https://i.postimg.cc/9MDqqpYw/203.jpg" },
    { type: "image", src: "https://i.postimg.cc/hjNQ8d2y/204.jpg" },
    { type: "image", src: "https://i.postimg.cc/0jmMVy38/205.jpg" },
    { type: "image", src: "https://i.postimg.cc/L4Z19xsr/206.jpg" },
    { type: "image", src: "https://i.postimg.cc/m2Y1MhCj/207.jpg" },
    { type: "image", src: "https://i.postimg.cc/bNc2s1Dd/208.jpg" },
    { type: "image", src: "https://i.postimg.cc/YCtGxkxH/209.jpg" },
    { type: "image", src: "https://i.postimg.cc/XYxZHh2y/210.jpg" },
    { type: "image", src: "https://i.postimg.cc/PqxCB4cV/211.jpg" },
    { type: "image", src: "https://i.postimg.cc/VNVJ1tPf/212.jpg" },
    { type: "image", src: "https://i.postimg.cc/C1nzKKwj/213.jpg" },
    { type: "image", src: "https://i.postimg.cc/MHkXf8Gg/214.jpg" },
    { type: "image", src: "https://i.postimg.cc/2y4y4Xby/215.jpg" },
    { type: "image", src: "https://i.postimg.cc/ryWDXznT/216.jpg" },
    { type: "image", src: "https://i.postimg.cc/zXrVJ56g/217.jpg" },
    { type: "image", src: "https://i.postimg.cc/gkHrjQbB/218.jpg" },
    { type: "image", src: "https://i.postimg.cc/wjxMm26x/219.jpg" },
    { type: "image", src: "https://i.postimg.cc/wjWvcNvX/220.jpg" },
    { type: "image", src: "https://i.postimg.cc/Pq950k1N/221.jpg" },
    { type: "image", src: "https://i.postimg.cc/s2v2n2Qt/222.jpg" },
    { type: "image", src: "https://i.postimg.cc/tT64jmzk/223.jpg" },
    { type: "image", src: "https://i.postimg.cc/Kjyvvrq2/224.jpg" },
    { type: "image", src: "https://i.postimg.cc/pVDLc4rX/225.jpg" },
    { type: "image", src: "https://i.postimg.cc/BbcZ8Lk1/226.jpg" },
    { type: "image", src: "https://i.postimg.cc/wT2TgNDC/227.jpg" },
    { type: "image", src: "https://i.postimg.cc/TYfYz05j/228.jpg" },
    { type: "image", src: "https://i.postimg.cc/6pQ63Q0y/229.jpg" },
    { type: "image", src: "https://i.postimg.cc/rwYVtLng/230.jpg" },
    { type: "image", src: "https://i.postimg.cc/VNrYqH2w/231.jpg" },
    { type: "image", src: "https://i.postimg.cc/d0bJ4jKy/232.jpg" },
    { type: "image", src: "https://i.postimg.cc/pTKR7521/233.jpg" },
    { type: "image", src: "https://i.postimg.cc/zv581DvD/234.jpg" },
    { type: "image", src: "https://i.postimg.cc/Y03k2cL6/235.jpg" },
    { type: "image", src: "https://i.postimg.cc/L4Bm3PQJ/236.jpg" },
    { type: "image", src: "https://i.postimg.cc/Qx8h4Mv0/237.jpg" },
    { type: "image", src: "https://i.postimg.cc/52j1JR4z/238.jpg" },
    { type: "image", src: "https://i.postimg.cc/RVg9jBB9/239.jpg" },
    { type: "image", src: "https://i.postimg.cc/GmNRmxt5/240.jpg" },
    { type: "image", src: "https://i.postimg.cc/Pqwjpv8r/241.jpg" },
    { type: "image", src: "https://i.postimg.cc/NMvw1G18/242.jpg" },
    { type: "image", src: "https://i.postimg.cc/3RjQ9MBs/243.jpg" },
    { type: "image", src: "https://i.postimg.cc/D02kMCp8/244.jpg" },
    { type: "image", src: "https://i.postimg.cc/HnBDDQF3/245.jpg" },
    { type: "image", src: "https://i.postimg.cc/3rBHvTWp/246.jpg" },
    { type: "image", src: "https://i.postimg.cc/J4zC32BF/247.jpg" },
    { type: "image", src: "https://i.postimg.cc/sDHdT4Yg/248.jpg" },
    { type: "image", src: "https://i.postimg.cc/qvtfS6wX/249.jpg" },
    { type: "image", src: "https://i.postimg.cc/9Qv3hXN3/250.jpg" },
    { type: "image", src: "https://i.postimg.cc/pd8wXNgm/251.jpg" },
    { type: "image", src: "https://i.postimg.cc/xC2WXx2t/252.jpg" },
    { type: "image", src: "https://i.postimg.cc/Y9zTY62k/253.jpg" },
    { type: "image", src: "https://i.postimg.cc/5y9T3Xjz/254.jpg" },
    { type: "image", src: "https://i.postimg.cc/RhP8bvnD/255.jpg" },
    { type: "image", src: "https://i.postimg.cc/J4nSHHfV/256.jpg" },
    { type: "image", src: "https://i.postimg.cc/c1TVJB5B/257.jpg" },
    { type: "image", src: "https://i.postimg.cc/28KMQ8Yq/258.jpg" },
    { type: "image", src: "https://i.postimg.cc/2SLJ2Rj0/259.jpg" },
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderAlemania() {
  loaderAlemania.style.display = "block";
  viewerAlemania.style.display = "none";
}

function ocultarLoaderAlemania() {
  loaderAlemania.style.display = "none";
}

function cargarImagenAlemania(url) {
  if (!url) {
    viewerAlemania.innerHTML = "";
    viewerAlemania.style.display = "none";
    ocultarLoaderAlemania();
    return;
  }

  mostrarLoaderAlemania();

  const img = new Image();
  pendingImageAlemania = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageAlemania !== img) return;

    viewerAlemania.innerHTML = "";
    viewerAlemania.appendChild(img);

    viewerAlemania.style.display = "block";
    ocultarLoaderAlemania();

    pendingImageAlemania = null;
  };

  img.onerror = () => {
    if (pendingImageAlemania !== img) return;

    viewerAlemania.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerAlemania.style.display = "block";
    ocultarLoaderAlemania();

    pendingImageAlemania = null;
  };

  img.src = url;
}

function renderMediaAlemania() {
  const media = viajeAlemania.medios[currentMediaAlemania];
  viewerAlemania.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenAlemania(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderAlemania();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerAlemania.style.display = "block";
    viewerAlemania.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerAlemania.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexAlemania.value=currentMediaAlemania+1;
  totalMediaAlemania.textContent = viajeAlemania.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnAlemania.addEventListener("click", () => {
  currentMediaAlemania++;
  if(currentMediaAlemania >= viajeAlemania.medios.length) {
    currentMediaAlemania=0;
  }
  renderMediaAlemania();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnAlemania.addEventListener("click",()=>{
  currentMediaAlemania--;
  if(currentMediaAlemania < 0) {
    currentMediaAlemania = viajeAlemania.medios.length-1;
  }
  renderMediaAlemania();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexAlemania.addEventListener("change", () => {
  const value=Number(mediaIndexAlemania.value);
  if(value>=1 && value<=viajeAlemania.medios.length) {
    currentMediaAlemania=value-1;
    renderMediaAlemania();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnAlemania.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnAlemania.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaAlemania();