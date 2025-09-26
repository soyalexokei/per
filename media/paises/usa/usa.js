/*
{ type: "image", src: "" },
{ type: "youtube", src: "https://www.youtube.com/embed/" },
 */
const media = [
  /* Junio a Octubre de 2019 - Work & Travel experience in Wisconsin Dells */
  { type: "image", src: "https://i.postimg.cc/CLr5VHGN/001.jpg" },
  { type: "image", src: "https://i.postimg.cc/G2LCCfg0/IMG20250613194138714.png" },
  { type: "image", src: "https://i.postimg.cc/tgXqq77m/IMG20250618193921.png" },
  { type: "image", src: "https://i.postimg.cc/FKmtyq4f/IMG20250613194600699.png" },
  { type: "image", src: "https://i.postimg.cc/D0fyx03X/IMG20250613195750872.png" },
  { type: "image", src: "https://i.postimg.cc/5yP9TJfk/IMG20250618192312.png" },
  { type: "image", src: "https://i.postimg.cc/N040mmWc/IMG20250618192750096.png" },
  { type: "image", src: "https://i.postimg.cc/W3v4JS9S/IMG20250618194523377.png" },
  { type: "image", src: "https://i.postimg.cc/hvJ4kwhD/IMG20250618200356.png" },
  { type: "image", src: "https://i.postimg.cc/63fpVRgK/IMG20250618195052.png" },
  { type: "image", src: "https://i.postimg.cc/DZxKycRS/IMG20250618195734.png" },
  { type: "image", src: "https://i.postimg.cc/gJCFLd8f/IMG-20250620-175524-215.webp" },
  { type: "image", src: "https://i.postimg.cc/HnbGQKtj/IMG-20250620-182548.png" },
  { type: "image", src: "https://i.postimg.cc/L6yDxD0s/IMG-20250620-180704.png" },
  { type: "image", src: "https://i.postimg.cc/MTMJGXM7/IMG-20250620-180422-670.webp" },
  { type: "youtube", src: "https://www.youtube.com/embed/8k3Jxh4p5Vs" },
  { type: "image", src: "https://i.postimg.cc/4xjp7Snr/IMG-20250620-182537.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/tmoGFikhKes" },
  { type: "youtube", src: "https://www.youtube.com/embed/9PbdBCb-Ajo" },
  { type: "image", src: "https://i.postimg.cc/pXj0v2Wm/IMG-20250624-195053.png" },
  { type: "image", src: "https://i.postimg.cc/9F6VJFM1/IMG-20250625-001430.png" },
  { type: "image", src: "https://i.postimg.cc/xTJnvb0c/IMG-20250625-001759.png" },
  { type: "image", src: "https://i.postimg.cc/T2HT5cvz/IMG-20250625-002513.jpg" },
  { type: "image", src: "https://i.postimg.cc/fyFZ4Mvz/IMG-20250625-002815.png" },
  { type: "image", src: "https://i.postimg.cc/g2N67txM/IMG-20250625-012523.png" },
  { type: "image", src: "https://i.postimg.cc/rpHRVdCx/IMG-20250625-012538.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/QKAE5gdmbBc" },
  { type: "image", src: "https://i.postimg.cc/hPdtRyfD/IMG-20250625-234500.png" },
  { type: "image", src: "https://i.postimg.cc/25yBNdvC/IMG-20250625-012551.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/qYZeZ10mTxk" },
  { type: "image", src: "https://i.postimg.cc/3RhJZLhK/005.jpg" },
  { type: "image", src: "https://i.postimg.cc/RhsS44HF/006.jpg" },
  { type: "image", src: "https://i.postimg.cc/HWBsQ4hg/007.jpg" },
  { type: "image", src: "https://i.postimg.cc/g0NZLSy9/IMG-20250625-235825.png" },
  { type: "image", src: "https://i.postimg.cc/2jZqN5Ps/IMG-20250626-001234-343.png" },
  { type: "image", src: "https://i.postimg.cc/RhKq7P7S/IMG-20250626-121222-152.webp" },
  { type: "image", src: "https://i.postimg.cc/tgX6TQxt/IMG-20250626-001516-296.png" },
  { type: "image", src: "https://i.postimg.cc/bN5y5YPV/008.jpg" },
  { type: "image", src: "https://i.postimg.cc/yYx6ngMS/009.jpg" },
  { type: "image", src: "https://i.postimg.cc/sDG48ycx/IMG-20250627-002537-524.webp" },
  { type: "youtube", src: "https://www.youtube.com/embed/6E8OuGFDB8s" },
  { type: "youtube", src: "https://www.youtube.com/embed/jA_PeI3VieM" },
  { type: "youtube", src: "https://www.youtube.com/embed/-X-8jDfjExo" },
  { type: "youtube", src: "https://www.youtube.com/embed/zkhfF_SHNjA" },
  { type: "image", src: "https://i.postimg.cc/zvY0PvCh/IMG-20250627-005306.png"},
  { type: "image", src: "https://i.postimg.cc/Zn1QrQkH/014.jpg"},
  { type: "image", src: "https://i.postimg.cc/ZnXDmjzW/IMG-20250627-005252.png"},
  { type: "image", src: "https://i.postimg.cc/pr975HSy/015.jpg"},
  { type: "image", src: "https://i.postimg.cc/qBYWVNtK/016.jpg"},
  { type: "image", src: "https://i.postimg.cc/W3YC43XQ/017.jpg"},
  { type: "image", src: "https://i.postimg.cc/NfHSgQTz/018.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/Abq0iuBNCBU"},
  { type: "youtube", src: "https://www.youtube.com/embed/E2e1P1dsUYg"},
  { type: "youtube", src: "https://www.youtube.com/embed/snaXLC_8GgY"},
  { type: "youtube", src: "https://www.youtube.com/embed/vQ5xTWDfp_A"},
  { type: "image", src: "https://i.postimg.cc/tTbHFqsr/IMG-20250627-005608-397.webp"},
  { type: "image", src: "https://i.postimg.cc/yNyvDscX/IMG-20250701-192817.png"},
  { type: "image", src: "https://i.postimg.cc/tgjBRYZ4/IMG-20250701-193128.png"},
  { type: "image", src: "https://i.postimg.cc/pL80tDdS/IMG-20250701-193529.png"},
  { type: "image", src: "https://i.postimg.cc/sDbn8n3S/IMG-20250701-193942.png"},
  { type: "image", src: "https://i.postimg.cc/BZY75Sym/IMG-20250701-194309.png"},
  { type: "image", src: "https://i.postimg.cc/PJR6dyZg/IMG-20250701-194327.png"},
  { type: "image", src: "https://i.postimg.cc/TwrcNyYp/021.png"},
  { type: "image", src: "https://i.postimg.cc/hjgf8Nf0/IMG-20190730-221743.jpg"},
  { type: "image", src: "https://i.postimg.cc/rwJkk82L/022.jpg"},
  { type: "image", src: "https://i.postimg.cc/8CzVkqTf/023.jpg"},
  { type: "image", src: "https://i.postimg.cc/fbYV9MTL/IMG-20190804-214343.jpg"},
  { type: "image", src: "https://i.postimg.cc/BQ23mThb/024.jpg"},
  { type: "image", src: "https://i.postimg.cc/zf2Yy0ft/025.jpg"},
  { type: "image", src: "https://i.postimg.cc/JnyVZZD1/026.jpg"},
  { type: "image", src: "https://i.postimg.cc/yx9MrKyt/027.jpg"},
  { type: "image", src: "https://i.postimg.cc/85q8HcML/028.jpg"},
  { type: "image", src: "https://i.postimg.cc/7Yr8JCxk/029.jpg"},
  { type: "image", src: "https://i.postimg.cc/NGHv08vD/030.jpg"},
  { type: "image", src: "https://i.postimg.cc/7ZqFXpGt/031.jpg"},
  { type: "image", src: "https://i.postimg.cc/Jhn9CZQb/032.jpg"},
  { type: "image", src: "https://i.postimg.cc/SxVwPDcS/033.jpg"},
  { type: "image", src: "https://i.postimg.cc/K8WGYNHZ/IMG-20250703-171458-777.webp"},
  { type: "image", src: "https://i.postimg.cc/t4JRyfDS/IMG-20250703-171634-634.webp"},
  { type: "image", src: "https://i.postimg.cc/m28ZvR31/IMG-20250703-235009-752.webp"},
  { type: "image", src: "https://i.postimg.cc/mZ3gS7tw/IMG-20250703-235617-289.webp"},
  { type: "image", src: "https://i.postimg.cc/qMkMDgKd/IMG-20250704-000718.png"},
  { type: "image", src: "https://i.postimg.cc/Bb3Q0nwH/IMG-20250704-000731.png"},
  { type: "image", src: "https://i.postimg.cc/pTzX4FkP/IMG-20250704-000901-530.webp"},
  { type: "youtube", src: "https://www.youtube.com/embed/ugaE7mNA89Y"},
  { type: "image", src: "https://i.postimg.cc/9fnsm0xs/034.jpg"},
  { type: "image", src: "https://i.postimg.cc/xCNhcQh8/035.jpg"},
  { type: "image", src: "https://i.postimg.cc/KjXVTVhN/036.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/QI0npMvCv_Q"},
  { type: "image", src: "https://i.postimg.cc/gc4gG40Z/IMG-20250910-214245-314.webp"},
  { type: "image", src: "https://i.postimg.cc/d3W6nQfB/IMG-20250910-214542-296.webp"},
  { type: "image", src: "https://i.postimg.cc/qqBQ861q/IMG-20250910-214706-827.webp"},
  { type: "youtube", src: "https://www.youtube.com/embed/HqiPvBf3zLI"},
  { type: "youtube", src: "https://www.youtube.com/embed/N4dxwAgW_X4"},
  { type: "youtube", src: "https://www.youtube.com/embed/IpS--N-5JsI"},
  { type: "image", src: "https://i.postimg.cc/hPyZ1MWB/IMG-20250910-222902-515.webp"},
  { type: "image", src: "https://i.postimg.cc/76nmGnMj/IMG-20250910-215202-053.webp" },
  { type: "image", src: "https://i.postimg.cc/bYRBspmd/IMG-20250911-171719.png"},
  { type: "image", src: "https://i.postimg.cc/fR1H6LRq/IMG-20250910-222559-667.webp"},
  { type: "image", src: "https://i.postimg.cc/NMcdjzT1/IMG-20250910-220546-640.webp"},
  { type: "image", src: "https://i.postimg.cc/LsfyRpq9/IMG-20250910-221312.jpg" },
  { type: "image", src: "https://i.postimg.cc/FzGWqVY0/IMG-20250911-182102.png" },
  { type: "image", src: "https://i.postimg.cc/mgPXXMBF/IMG-20250911-182441.png" },
  { type: "image", src: "https://i.postimg.cc/YqqyFZPR/IMG-20250911-183201.png" },
  { type: "youtube", src: "https://www.youtube.com/embed/sr1pmvg9KIs"},
  { type: "image", src: "https://i.postimg.cc/c4z3cNb0/045.jpg"},
  { type: "image", src: "https://i.postimg.cc/MKHRRGt9/046.jpg"},
  { type: "image", src: "https://i.postimg.cc/T3VVJz3t/lpkodj.png"},
  { type: "youtube", src: "https://www.youtube.com/embed/tGiZoJcWats"},
  { type: "youtube", src: "https://www.youtube.com/embed/KeuddXYY8Mw"},
  { type: "youtube", src: "https://www.youtube.com/embed/HOUyB97Tp1M"},
  { type: "image", src: "https://i.postimg.cc/QdbHyG6F/048.jpg"},
  { type: "image", src: "https://i.postimg.cc/KvtKtgBr/049.jpg"},
  { type: "image", src: "https://i.postimg.cc/Y25G4xGC/050.jpg"},
  { type: "image", src: "https://i.postimg.cc/3x7k1JZM/051.jpg"},
  { type: "image", src: "https://i.postimg.cc/SK1jmLbq/052.jpg"},
  { type: "image", src: "https://i.postimg.cc/cJLrq9jX/053.jpg"},
  { type: "image", src: "https://i.postimg.cc/DZW00W7G/054.jpg"},
  { type: "image", src: "https://i.postimg.cc/TwZwDRP4/055.jpg"},
  { type: "image", src: "https://i.postimg.cc/C5kKCWBL/056.jpg"},/* 120 */
  /* 121 - Imagen mia en Pirates Mini golf */
  { type: "image", src: "https://i.postimg.cc/gcZrP6SF/057.jpg"},/* Sustitucion de esta imagen por la misma con mejor resolución */
  { type: "image", src: "https://i.postimg.cc/021j52F6/058.jpg"},
  { type: "image", src: "https://i.postimg.cc/bN0JZffm/059.jpg"},
  /* Incluir 3 fotos mas, pero en cada una hay 2 fotos. */
  { type: "image", src: "https://i.postimg.cc/nhHL7SHp/060.jpg"},
  /* Resultados de los 4 amigos al finalizar la partida de mini golf */
  { type: "image", src: "https://i.postimg.cc/fRBRv7LX/061.jpg"},
  { type: "image", src: "https://i.postimg.cc/fbPWGwYR/062.jpg"},
  { type: "image", src: "https://i.postimg.cc/T1c2YvZS/IMG-20250703-235841-504.webp"},
  { type: "image", src: "https://i.postimg.cc/TwW2GZcq/064.jpg"},
  { type: "image", src: "https://i.postimg.cc/905mfJ83/065.jpg"},
  { type: "image", src: "https://i.postimg.cc/7h3xJ0d5/066.jpg"},
  { type: "image", src: "https://i.postimg.cc/qByBFHqp/067.jpg"},
  { type: "image", src: "https://i.postimg.cc/pXvVbc5z/068.jpg"},
  { type: "image", src: "https://i.postimg.cc/GhjLcPvN/069.jpg"},
  { type: "image", src: "https://i.postimg.cc/CxLFdZNK/070.jpg"},
  { type: "image", src: "https://i.postimg.cc/Z57JNT7x/071.jpg"},
  { type: "image", src: "https://i.postimg.cc/LsJ2BrGK/072.jpg"},
  { type: "image", src: "https://i.postimg.cc/0NhxtVq6/073.jpg"},
  { type: "image", src: "https://i.postimg.cc/sXSzb5VT/074.jpg"},
  { type: "image", src: "https://i.postimg.cc/PJjHHNJT/075.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/50TjMT4zGrc"},
  { type: "image", src: "https://i.postimg.cc/hj9F2grw/077.jpg"},
  { type: "image", src: "https://i.postimg.cc/qRfVcg8y/078.jpg"},
  { type: "image", src: "https://i.postimg.cc/s2GCZ5Z3/079.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/AY6cu8ShCQA"},
  { type: "image", src: "https://i.postimg.cc/rFg0wR4h/081.jpg"},
  { type: "image", src: "https://i.postimg.cc/wxXRnGjY/082.jpg"},
  { type: "image", src: "https://i.postimg.cc/Hn9J5Vhk/083.jpg"},
  { type: "image", src: "https://i.postimg.cc/kX7RCv26/084.jpg"},
  { type: "image", src: "https://i.postimg.cc/rpRKjhPb/085.jpg"},
  { type: "image", src: "https://i.postimg.cc/mg5PQx8C/086.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/DW--iP-CleY"},
  { type: "image", src: "https://i.postimg.cc/j5VCFHVj/088.jpg"},
  { type: "image", src: "https://i.postimg.cc/HxQjDrH9/089.jpg"},
  { type: "image", src: "https://i.postimg.cc/KjxjZm8S/090.jpg"},
  { type: "image", src: "https://i.postimg.cc/3JrNVrq2/091.jpg"},
  { type: "image", src: "https://i.postimg.cc/7PnbKJKx/092.jpg"},
  { type: "image", src: "https://i.postimg.cc/TYk16M8F/093.jpg"},
  { type: "image", src: "https://i.postimg.cc/4xmd4Lsd/094.jpg"},
  { type: "image", src: "https://i.postimg.cc/9QKfDdQB/095.jpg"},
  { type: "image", src: "https://i.postimg.cc/jjfSPDWY/096.jpg"},
  { type: "image", src: "https://i.postimg.cc/tTHC59PZ/097.jpg"},
  { type: "image", src: "https://i.postimg.cc/1tcR7bcW/098.jpg"},
  { type: "image", src: "https://i.postimg.cc/qqJJPQ1p/099.jpg"},
  { type: "image", src: "https://i.postimg.cc/Wz5NTryg/100.jpg"},
  { type: "image", src: "https://i.postimg.cc/BZpQT9vb/101.jpg"},
  { type: "image", src: "https://i.postimg.cc/X7vNxHZ8/102.jpg"},
  { type: "image", src: "https://i.postimg.cc/vHSYKrfd/103.jpg"},
  { type: "image", src: "https://i.postimg.cc/0yMk1z0K/104.jpg"},
  { type: "image", src: "https://i.postimg.cc/HkqpYT6Z/105.jpg"},
  { type: "image", src: "https://i.postimg.cc/8CLTsx31/106.jpg"},
  { type: "image", src: "https://i.postimg.cc/63wtZYJC/107.jpg"},
  { type: "image", src: "https://i.postimg.cc/PJ5H3Jqx/108.jpg"},
  { type: "image", src: "https://i.postimg.cc/9MpVYZCK/109.jpg"},
  { type: "image", src: "https://i.postimg.cc/3NfTPhyZ/110.jpg"},
  { type: "image", src: "https://i.postimg.cc/nV3ps4dQ/111.jpg"},
  { type: "image", src: "https://i.postimg.cc/NfVtDgvs/112.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/VMuzCFVrCgQ"},
  { type: "image", src: "https://i.postimg.cc/7YbDS5ct/114.jpg"},
  { type: "image", src: "https://i.postimg.cc/L5wWt8YG/115.jpg"},
  { type: "image", src: "https://i.postimg.cc/cCrjtnHQ/116.jpg"},
  { type: "image", src: "https://i.postimg.cc/sXnq2cVj/117.jpg"},
  { type: "image", src: "https://i.postimg.cc/y6b24vQn/118.jpg"},
  { type: "image", src: "https://i.postimg.cc/kXRznKLC/119.jpg"},
  { type: "image", src: "https://i.postimg.cc/pLN7yytF/120.jpg"},
  { type: "image", src: "https://i.postimg.cc/W1MyZj2f/121.jpg"},
  { type: "image", src: "https://i.postimg.cc/43sSbMy4/122.jpg"},
  { type: "image", src: "https://i.postimg.cc/xd5FsRNv/123.jpg"},
  { type: "image", src: "https://i.postimg.cc/RF0p2Hwj/124.jpg"},
  { type: "image", src: "https://i.postimg.cc/B6w73ngt/125.jpg"},
  { type: "image", src: "https://i.postimg.cc/5yY72W7g/126.jpg"},
  { type: "image", src: "https://i.postimg.cc/MHCsc3gS/127.jpg"},
  { type: "image", src: "https://i.postimg.cc/y6DsZJ2Q/128.jpg"},
  { type: "image", src: "https://i.postimg.cc/ZYXZFbST/129.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/MX_iH72HrKE"},
  { type: "image", src: "https://i.postimg.cc/yxZMrRH7/131.jpg"},
  { type: "image", src: "https://i.postimg.cc/W3CRnnx9/132.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/r0sSaHApP8w"},
  { type: "image", src: "https://i.postimg.cc/G2BVHD9v/134.jpg"},
  { type: "image", src: "https://i.postimg.cc/0NXhkn58/135.jpg"},
  { type: "image", src: "https://i.postimg.cc/yN8wCtHQ/136.jpg"},
  { type: "image", src: "https://i.postimg.cc/MTh4RGjN/137.jpg"},
  { type: "image", src: "https://i.postimg.cc/fymPvhcL/138.jpg"},
  { type: "image", src: "https://i.postimg.cc/Pfw0H1gj/139.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/kBAjLuGFMw0"},
  { type: "image", src: "https://i.postimg.cc/rFTZL3G1/141.jpg"},
  { type: "image", src: "https://i.postimg.cc/Wb7Wp8SQ/142.jpg"},
  { type: "image", src: "https://i.postimg.cc/NGmCSBXG/143.jpg"},
  { type: "image", src: "https://i.postimg.cc/Xqf2CkWB/144.jpg"},
  { type: "image", src: "https://i.postimg.cc/YCndYS5R/145.jpg"},
  { type: "image", src: "https://i.postimg.cc/Qdx6F7yV/146.jpg"},
  { type: "image", src: "https://i.postimg.cc/k5LwYpXt/147.jpg"},
  { type: "image", src: "https://i.postimg.cc/XvrQ8b3b/148.jpg"},
  { type: "image", src: "https://i.postimg.cc/XqbL4B5j/149.jpg"},
  { type: "image", src: "https://i.postimg.cc/G2YKWxHg/150.jpg"},
  { type: "youtube", src: "https://www.youtube.com/embed/2ZReINrYpKQ"},
  { type: "image", src: "https://i.postimg.cc/Z5bT0fm3/152.jpg"},
  { type: "image", src: "https://i.postimg.cc/FK1NV77H/153.jpg"},
  { type: "image", src: "https://i.postimg.cc/Nf7sg33B/154.jpg"},
  { type: "image", src: "https://i.postimg.cc/FHThSjF6/155.jpg"},
  { type: "image", src: "https://i.postimg.cc/pd7xGRFY/156.jpg"},
  { type: "image", src: "https://i.postimg.cc/prMvvCkm/157.jpg"},
  { type: "image", src: "https://i.postimg.cc/wM5pjNb0/158.jpg"},
  { type: "image", src: "https://i.postimg.cc/KzMbCw7X/159.jpg"},
  { type: "image", src: "https://i.postimg.cc/sf5ymFD7/160.jpg"},
  { type: "image", src: "https://i.postimg.cc/jdKTk8L9/161.jpg"},
  { type: "image", src: "https://i.postimg.cc/sDczFpW2/162.jpg"},
  { type: "image", src: "https://i.postimg.cc/NjjcQ58k/163.jpg"},
  { type: "image", src: "https://i.postimg.cc/W1YPzTXL/164.jpg"},
  { type: "image", src: "https://i.postimg.cc/LsqFZwbq/165.jpg"},
  { type: "image", src: "https://i.postimg.cc/HLfD0zq6/166.jpg"},
  { type: "image", src: "https://i.postimg.cc/hjTF2xgc/167.jpg"},
  /* Diciembre 2019 - En la Embajada de EE.UU (Madrid) */
  { type: "image", src: "https://i.postimg.cc/L5pcwX6f/168.jpg"},
  { type: "image", src: "https://i.postimg.cc/NFk3cc5n/169.jpg"},
  { type: "image", src: "https://i.postimg.cc/xjGDHKtP/170.jpg"},
  { type: "image", src: "https://i.postimg.cc/8P18bjYg/171.jpg"},
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