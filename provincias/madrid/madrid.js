/****************************************************/
/* ELEMENTOS */
/****************************************************/
const viewerMadrid = document.getElementById("mediaViewerMadrid");
const prevBtnMadrid = document.getElementById("prevBtnMadrid");
const nextBtnMadrid = document.getElementById("nextBtnMadrid");
const mediaIndexMadrid = document.getElementById("mediaIndexMadrid");
const totalMediaMadrid = document.getElementById("totalMediaMadrid");
const loaderMadrid = document.getElementById("loaderMadrid");
let currentMediaMadrid = 0;
let pendingMadridImage = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeMadrid = {
  nombre: "Madrid",
  medios: [
    /* 2015 */
    { type: "image", src: "https://i.postimg.cc/PqWyBnPr/gfdsg.png"},
    { type: "image", src: "https://i.postimg.cc/W4G8Qch0/gfdghtht.png"},
    { type: "image", src: "https://i.postimg.cc/6QrcDxyV/grgerh.png"},
    { type: "image", src: "https://i.postimg.cc/d026zcLJ/iuykiyk.png"},
    { type: "image", src: "https://i.postimg.cc/cJtYPmmy/dsgsgsg.png"},
    { type: "image", src: "https://i.postimg.cc/1zGBL1fS/fdshfhs.png"},
    { type: "image", src: "https://i.postimg.cc/JhHJSqQN/sfgdghs.png"},
    { type: "image", src: "https://i.postimg.cc/MpFVs41Y/htrhhtr.png"},
    { type: "image", src: "https://i.postimg.cc/N02TZ4xr/dfgdfhfhf.png"},
    { type: "image", src: "https://i.postimg.cc/pd583ZBz/dsfhgjejty.png"},
    /* 2016 */
    { type: "image", src: "https://i.postimg.cc/VkVn7TXM/w3yuwrhr.png"},
    { type: "image", src: "https://i.postimg.cc/hGLsHRfB/dfhhd.png"},
    /* 2017 */
    { type: "video", src: "https://streamable.com/e/5f4ojb"},
    /* Enero de 2025 - Evento Binance */
    { type: "image", src: "https://i.postimg.cc/rFCMSTZY/binance01.jpg"},
    { type: "image", src: "https://i.postimg.cc/kgg3KbbB/binance02.webp"},
    { type: "image", src: "https://i.postimg.cc/7YDyPcP1/binance03.jpg"},
    { type: "image", src: "https://i.postimg.cc/xTRVXRqw/binance04.webp"},
    /* Junio de 2025 - Despedida de Soltero de Colombi */
    { type: "image", src: "https://i.postimg.cc/x8dkCWf7/IMG-20250627-154547.png"},
    { type: "image", src: "https://i.postimg.cc/t70rytys/IMG-20250627-154044.png"},
    { type: "video", src: "https://streamable.com/e/h8qq4m"},
    { type: "image", src: "https://i.postimg.cc/63Nt53xq/IMG-20250628-181859.png"},
    { type: "image", src: "https://i.postimg.cc/nzYZsJnk/IMG-20250628-181916.png"},
    { type: "video", src: "https://streamable.com/e/dz4co9"},
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
    /* Julio de 2025 - Explorando lagos */
    { type: "video", src: "https://streamable.com/e/5hluj6"},
    /* 19 de Julio de 2025 - Fiesta Rockera con amigos */
    { type: "image", src: "https://i.postimg.cc/fLSHv7Cf/IMG-20251017-180831.png"},
    { type: "video", src: "https://streamable.com/e/rndc32"},
    { type: "video", src: "https://streamable.com/e/0ou0zs"},
    /* 23 de Julio de 2025 - Among us y preparación viaje a A Coruña */
    { type: "image", src: "https://i.postimg.cc/FKBWcCyp/IMG-20251017-181217.png"},
    /* 30 de Julio de 2025 - Celebrando el cumple de mi abuela */
    { type: "image", src: "https://i.postimg.cc/wvRWk52X/IMG-20251017-181713.png"},
    { type: "image", src: "https://i.postimg.cc/YSsngD6N/IMG-20251017-181947-479.webp"},
    { type: "video", src: "https://streamable.com/e/clmwvl"},
    /* 24 de agosto de 2025 - Día de Río Alberche, Madrid */
    { type: "video", src: "https://streamable.com/e/do36hc"},
    { type: "image", src: "https://i.postimg.cc/bvBCbVx9/IMG-20251017-182458-886.webp"},
    { type: "image", src: "https://i.postimg.cc/pLtBFhmL/IMG-20251017-182650-197.webp" },
    { type: "image", src: "https://i.postimg.cc/4xT197Yy/IMG-20251017-182756-231.webp" },
    { type: "image", src: "https://i.postimg.cc/RZzTH6Wq/IMG-20251017-183113-346.webp" },
    { type: "image", src: "https://i.postimg.cc/DwKcXJSz/IMG-20251017-183203-814.webp" },
    /* 27 de agosto de 2025 - Cena cachopo post partido de padel con amigos */
    { type: "image", src: "https://i.postimg.cc/G203LCMX/IMG-20251017-183601.png" },
    /* 21 de septiembre de 2025 - Cumple familiar */
    { type: "video", src: "https://streamable.com/e/ynunle" },
    /* 27 de septiembre de 2025 - Quedada amigos de Madrid centro */
    { type: "video", src: "https://streamable.com/e/d7rr28" },
    { type: "image", src: "https://i.postimg.cc/90F6Vgjg/IMG-20251017-184622-170.webp" },
    { type: "image", src: "https://i.postimg.cc/mk2vRpGV/IMG-20251017-184801-180.webp" },
    /* Octubre de 2025 - Fiestas de Boadilla */
    { type: "image", src: "https://i.postimg.cc/JhjSjgLv/IMG-20251006-184303.png" },
    { type: "video", src: "https://streamable.com/e/zqvyx9" },
    { type: "video", src: "https://streamable.com/e/1yu5j6" },
    { type: "video", src: "https://streamable.com/e/1sbxu9" },
    { type: "image", src: "https://i.postimg.cc/5t8D8GVD/IMG-20251014-135724.png" },
    /* Enero de 2026 - Día de Reyes familiar */
    { type: "image", src: "https://i.postimg.cc/66m0kyh3/IMG-20260802-182121-649.jpg" },
    { type: "image", src: "https://i.postimg.cc/XNz8Rpgv/IMG-20260802-182334-280.jpg" },
    /* Enero de 2026 - Roof Top Picalagartos de Madrid */
    { type: "image", src: "https://i.postimg.cc/MTG74SMh/IMG-20260802-182934-312.webp" },
    /* Enero de 2026 - El Corte Inglés y Mainframe */
    { type: "image", src: "https://i.postimg.cc/v8ckj1nM/IMG-20260802-182628-062.jpg" },
    /* 9/05/2026 - Fiesta en la Sala Ginger, Ponzano, Madrid */
    { type: "video", src: "https://streamable.com/e/iw365b" },
    { type: "image", src: "https://i.postimg.cc/1t81mr9v/IMG-20260803-003348-459.webp" },
    /* 16/05/2026 - Ruta y baño por La Pedriza */
    { type: "image", src: "https://i.postimg.cc/qvwP25qQ/IMG-20260803-003704-158.webp" },
    { type: "image", src: "https://i.postimg.cc/qvwP25qj/IMG-20260803-003741-497.webp" },
    { type: "image", src: "https://i.postimg.cc/C5pP3GdK/IMG-20260803-003847-179.webp" },
    { type: "image", src: "https://i.postimg.cc/J0C6fNtn/IMG-20260803-004107-502.webp" },
    { type: "video", src: "https://streamable.com/e/a798x7" },
    { type: "image", src: "https://i.postimg.cc/5N1KpSZh/IMG-20260803-004218-071.webp" },
    { type: "image", src: "https://i.postimg.cc/d1rnjh6z/IMG-20260803-004241-729.webp" },
    { type: "image", src: "https://i.postimg.cc/JnZK5sxF/IMG-20260803-004352-536.webp" },
    { type: "image", src: "https://i.postimg.cc/LXLv3JDw/IMG-20260803-004418-977.webp" },
    { type: "image", src: "https://i.postimg.cc/SsCVfnd5/IMG-20260803-004441-717.webp" },
    { type: "video", src: "https://streamable.com/e/svlv8h" },
    { type: "video", src: "https://streamable.com/e/zxjeb4" },
    { type: "video", src: "https://streamable.com/e/pees0d" },
    { type: "image", src: "https://i.postimg.cc/JzHXk9Pc/IMG-20260803-004835-918.webp" },
    { type: "image", src: "https://i.postimg.cc/Vk0tC3D4/IMG-20260803-004901-476.webp" },
    { type: "video", src: "https://streamable.com/e/0cw20a" },
    { type: "image", src: "https://i.postimg.cc/3x0GvPnF/IMG-20260803-005003-535.webp" },
    { type: "video", src: "https://streamable.com/e/qihqr8" },
    /* Mayo 2026 - Un miércoles cualquiera */
    { type: "image", src: "https://i.postimg.cc/L6BhfmpV/IMG-20260803-001914-841.jpg" },
    { type: "image", src: "https://i.postimg.cc/NjsFkZs9/IMG-20260802-185454-738.webp" },
    { type: "image", src: "https://i.postimg.cc/g2zjH1zL/IMG-20260802-185639-304.webp" },
    /* Mayo 2026 - The Champions Burger y Cheesecake Vicálvaro */
    { type: "image", src: "https://i.postimg.cc/kgYJF4hG/IMG-20260802-184806-189.webp" },
    { type: "image", src: "https://i.postimg.cc/x1pfyCFC/IMG-20260802-184850-464.webp" },
    { type: "image", src: "https://i.postimg.cc/sgHj9X0g/IMG-20260802-184941-730.webp" },
    { type: "image", src: "https://i.postimg.cc/K8pGrzsv/IMG-20260802-185042-941.jpg" },
    /* Junio 2026 - Río Alberche */
    { type: "video", src: "https://streamable.com/e/u7gsb4" },
    /* Junio 2026 - Majadahonda */
    { type: "video", src: "https://streamable.com/e/jsj81t" },
    /* 20 Junio 2026 - Premiere House Ana y Juan Boadilla */
    { type: "image", src: "https://i.postimg.cc/G3j6dTCD/IMG-20260803-173213-427.webp" },
    { type: "image", src: "https://i.postimg.cc/MTm36Nhm/IMG-20260803-174103-778.webp" },
    { type: "image", src: "https://i.postimg.cc/XJk1jmTc/IMG-20260803-174424-296.webp" },
    { type: "image", src: "https://i.postimg.cc/zBF2z69w/IMG-20260803-174552-357.webp" },
    { type: "image", src: "https://i.postimg.cc/MT1HvbD9/IMG-20260803-174631-938.jpg" },
    { type: "image", src: "https://i.postimg.cc/ZnZR3B73/IMG-20260803-174705-237.jpg" },
    { type: "image", src: "https://i.postimg.cc/mD7ktNw8/IMG-20260803-174737-106.jpg" },
    { type: "image", src: "https://i.postimg.cc/Xq3JFGHw/IMG-20260803-174807-327.jpg" },
    { type: "image", src: "https://i.postimg.cc/1zLmB4B1/IMG-20260804-080111-772.webp"},
    { type: "image", src: "https://i.postimg.cc/zf9z737m/IMG-20260804-080147-387.jpg"},
    { type: "image", src: "https://i.postimg.cc/W4QN8tnW/IMG-20260804-080227-544.jpg"},
    { type: "image", src: "https://i.postimg.cc/VN3fg5RZ/IMG-20260804-080310-908.jpg"},
    { type: "image", src: "https://i.postimg.cc/d0zs6DBp/IMG-20260804-080504-803.webp"},
    { type: "image", src: "https://i.postimg.cc/8Cqp4sHy/IMG-20260804-080537-004.jpg"},
    { type: "image", src: "https://i.postimg.cc/gJTPmHNB/IMG-20260804-115821-387.jpg"},
    { type: "image", src: "https://i.postimg.cc/GtTn2T5F/IMG-20260804-115850-646.webp"},
    { type: "image", src: "https://i.postimg.cc/LXbM23NQ/IMG-20260804-115924-225.jpg"},
    { type: "image", src: "https://i.postimg.cc/XJz04kQH/IMG-20260804-120036-946.jpg"},
    { type: "image", src: "https://i.postimg.cc/76WywnmB/IMG-20260804-120120-569.jpg"},
    { type: "image", src: "https://i.postimg.cc/vBNdbt30/IMG-20260804-120153-005.jpg"},
    { type: "image", src: "https://i.postimg.cc/hj5qc1pp/IMG-20260804-120225-831.jpg"},
    { type: "image", src: "https://i.postimg.cc/FRBQNVDG/IMG-20260804-120303-213.jpg"},
    { type: "image", src: "https://i.postimg.cc/850VNmtb/IMG-20260804-120333-947.jpg"},
    { type: "image", src: "https://i.postimg.cc/C1QVSsms/IMG-20260804-120406-491.jpg"},
    { type: "image", src: "https://i.postimg.cc/63mNtfYL/IMG-20260804-120444-793.jpg"},
    { type: "image", src: "https://i.postimg.cc/gJTPmHNy/IMG-20260804-120530-042.jpg"},
    { type: "image", src: "https://i.postimg.cc/Tw4XfJCg/IMG-20260804-120622-209.jpg"},
    { type: "image", src: "https://i.postimg.cc/PxRkTQ2p/IMG-20260804-120702-950.jpg"},
    { type: "image", src: "https://i.postimg.cc/ydbzsyv3/IMG-20260804-120732-577.jpg"},
    { type: "image", src: "https://i.postimg.cc/tTMHpN2V/IMG-20260804-120822-018.jpg"},
    { type: "image", src: "https://i.postimg.cc/pT6tRJqj/IMG-20260804-121603-189.jpg"},
    { type: "video", src: "https://streamable.com/e/o6tvzk" },
    { type: "video", src: "https://streamable.com/e/e5pxe0" },
    /* 21/06/2026 - Día de río Alberche */
    { type: "video", src: "https://streamable.com/e/3rn4iv" },
    { type: "video", src: "https://streamable.com/e/zkdht3" },
    /* 05/Julio/2026 - Picnic romántico */
    { type: "image", src: "https://i.postimg.cc/QM1QLcrG/IMG-20260804-140451-653.jpg" },
    { type: "image", src: "https://i.postimg.cc/h45frhkB/IMG-20260804-140538-879.jpg" },
    { type: "image", src: "https://i.postimg.cc/mgQkBjtL/IMG-20260804-140513-512.jpg" },
    /* A cuartos de final del Mundial 2026 */
    { type: "image", src: "https://i.postimg.cc/1z7fjt8P/IMG-20260804-141028-289.jpg" },
    { type: "image", src: "https://i.postimg.cc/SK1Jvsnk/IMG-20260804-141122-616.jpg" },
    /* Fiesta por Moncloa */
    { type: "image", src: "https://i.postimg.cc/MpWHZRRj/IMG-20260804-141313-390.webp" },
    /* 19/07/2026 - España Campeona del Mundo 2026 */
    { type: "image", src: "https://i.postimg.cc/vBRdTFj6/IMG-20260804-143255-392.webp" },
    { type: "image", src: "https://i.postimg.cc/V6FH8xcX/IMG-20260804-143555-044.jpg" },
    { type: "image", src: "https://i.postimg.cc/1tKYQkZw/IMG-20260804-143710-460.jpg" },
    { type: "image", src: "https://i.postimg.cc/sXJ0rkRS/IMG-20260804-143807-144.jpg" },
    { type: "image", src: "https://i.postimg.cc/HnhzWHv5/IMG-20260804-144055-411.webp"},
    /* Incendios forestales */
    { type: "image", src: "https://i.postimg.cc/265n1MZZ/IMG-20260804-144709-956.webp"},
    { type: "video", src: "https://streamable.com/e/3lpa0i"},
    { type: "video", src: "https://streamable.com/e/god3jo"},
    { type: "video", src: "https://streamable.com/e/iro1tn"},
    /* Cine: Spiderman Brand New Day - 29 Julio 2026 */
    { type: "video", src: "https://streamable.com/e/ui74pv"},
    { type: "image", src: "https://i.postimg.cc/9MTJpzpJ/IMG-20260804-175735-633.jpg"},
    { type: "image", src: "https://i.postimg.cc/bJb3TdT6/IMG-20260804-175934-246.jpg"},
    { type: "image", src: "https://i.postimg.cc/xCHtRqR5/IMG-20260804-180007-552.jpg"},
    { type: "image", src: "https://i.postimg.cc/vmC0f5Wj/IMG-20260804-180058-434.jpg"},
    { type: "image", src: "https://i.postimg.cc/sXSwc1cc/IMG-20260804-180140-964.jpg"},
    { type: "image", src: "https://i.postimg.cc/yN2Lc0FG/IMG-20260804-180224-905.jpg"},
    { type: "image", src: "https://i.postimg.cc/d0g5rG8g/IMG-20260804-180338-129.jpg"},
    /* 31 julio 2026 - Fiesta por Madrid centro */
    { type: "image", src: "https://i.postimg.cc/m28kDj4s/IMG-20260804-184804-458.jpg" },
    { type: "image", src: "https://i.postimg.cc/tC2JTkbG/IMG-20260804-185032-357.jpg" },
    { type: "image", src: "https://i.postimg.cc/DyB0Z6hV/IMG-20260804-185110-026.jpg" },
    { type: "image", src: "https://i.postimg.cc/bN3rJgPc/IMG-20260804-185145-855.jpg" },
    { type: "image", src: "https://i.postimg.cc/vH3TBhsS/IMG-20260804-185237-900.jpg" },
    { type: "image", src: "https://i.postimg.cc/9FJ0Mbhg/IMG-20260804-185324-631.jpg" },
    /* 1 agosto 2026 - Jowke */
    { type: "image", src: "https://i.postimg.cc/tC2JTkjw/IMG-20260804-190125-287.jpg" },
    { type: "image", src: "https://i.postimg.cc/FsDzRp46/IMG-20260804-190331-950.jpg" },
    /* Post incendios forestales sierra oeste Madrid */
    { type: "video", src: "https://streamable.com/e/bm0nmv" },
    /* Fiesta Madriz Madrid Bajos Argüelles */
    { type: "image", src: "https://i.postimg.cc/x1gb21Qy/Madriz-Madrid-Rock-Bar.png"},
    /* Por el monte de El Pardo (Madrid) - 11/08/2026 */
    { type: "video", src: "https://streamable.com/e/jybx0m"},
    /* Eclipse solar 2026 */
    { type: "image", src: "https://i.postimg.cc/kMjYy9rr/hgfjgvj.png"},
    { type: "image", src: "https://i.postimg.cc/pXpGG7vs/IMG-20260812-203135489-HDR.jpg"},
    { type: "image", src: "https://i.postimg.cc/GhH77NRM/etgerher.png"},
    { type: "image", src: "https://i.postimg.cc/NGNCxt33/IMG-20260812-203157015-HDR.jpg"},
    { type: "image", src: "https://i.postimg.cc/fTJ22Fs2/IMG-20260812-202852535-HDR.jpg"},
    { type: "image", src: "https://i.postimg.cc/nVdS1xyW/IMG-20260812-WA0008-2.jpg"},
  ]
};

/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderMadrid() {
  loaderMadrid.style.display = "block";
  viewerMadrid.style.display = "none";
}

function ocultarLoaderMadrid() {
  loaderMadrid.style.display = "none";
}

function cargarImagenMadrid(url) {
  if (!url) {
    viewerMadrid.innerHTML = "";
    viewerMadrid.style.display = "none";
    ocultarLoaderMadrid();
    return;
  }

  mostrarLoaderMadrid();

  const img = new Image();
  pendingMadridImage = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingMadridImage !== img) return;

    viewerMadrid.innerHTML = "";
    viewerMadrid.appendChild(img);

    viewerMadrid.style.display = "block";
    ocultarLoaderMadrid();

    pendingMadridImage = null;
  };

  img.onerror = () => {
    if (pendingMadridImage !== img) return;

    viewerMadrid.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerMadrid.style.display = "block";
    ocultarLoaderMadrid();

    pendingMadridImage = null;
  };

  img.src = url;
}

function renderMediaMadrid() {
  const media = viajeMadrid.medios[currentMediaMadrid];
  viewerMadrid.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenMadrid(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderMadrid();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerMadrid.style.display = "block";
    viewerMadrid.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerMadrid.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexMadrid.value=currentMediaMadrid+1;
  totalMediaMadrid.textContent = viajeMadrid.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnMadrid.addEventListener("click", () => {
  currentMediaMadrid++;
  if(currentMediaMadrid >= viajeMadrid.medios.length) {
    currentMediaMadrid=0;
  }
  renderMediaMadrid();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnMadrid.addEventListener("click",()=>{
  currentMediaMadrid--;
  if(currentMediaMadrid < 0) {
    currentMediaMadrid=
    viajeMadrid.medios.length-1;
  }
  renderMediaMadrid();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexMadrid.addEventListener("change",()=>{
  const value=Number(mediaIndexMadrid.value);
  if(value>=1 && value<=viajeMadrid.medios.length) {
    currentMediaMadrid=value-1;
    renderMediaMadrid();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnMadrid.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnMadrid.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaMadrid();