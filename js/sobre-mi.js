/****************************************************/
/* ELEMENTOS */
/****************************************************/
const aboutModal = document.getElementById("aboutModal");
const aboutTitle = aboutModal.querySelector(".modal-title");
const aboutText = aboutModal.querySelector(".modal-text");
const aboutImage = aboutModal.querySelector(".modal-image");
const aboutVideo = aboutModal.querySelector(".modal-video");
const aboutCounter = aboutModal.querySelector(".modal-counter");
const aboutPrev = aboutModal.querySelector(".modal-prev");
const aboutNext = aboutModal.querySelector(".modal-next");
const aboutClose = aboutModal.querySelector(".modal-close");

/****************************************************/
/* BOTONES SOBRE MI */
/****************************************************/
const aboutLinks = document.querySelectorAll(".me-content");
let aboutActual = 0;

/****************************************************/
/* DATOS */
/****************************************************/
const sobreMi = [
    //-- Descripción
    {},
    //-- Álbum
    {
        titulo: "Álbum",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/bv5N8LcP/1.jpg"},
            {img: "https://i.postimg.cc/RZXZp4gN/2.jpg"},
            {img: "https://i.postimg.cc/BvbQdkzN/3.jpg"},
            {img: "https://i.postimg.cc/L8HsVnBc/4.jpg"},
            {img: "https://i.postimg.cc/kMKX3xjr/5.jpg"},
            {img: "https://i.postimg.cc/C5GFGgZM/6.jpg"},
            {img: "https://i.postimg.cc/C1fMKDSq/7.jpg"},
            {img: "https://i.postimg.cc/NFqs2MjP/8.jpg"},
            {img: "https://i.postimg.cc/15SR9fT8/9.jpg"},
            {img: "https://i.postimg.cc/T3YRDBTG/10.jpg"},
            {img: "https://i.postimg.cc/8PbpsTQt/11.jpg"},
            {img: "https://i.postimg.cc/pdmR0896/12.jpg"},
            {img: "https://i.postimg.cc/HkZT43LM/13.jpg"},
            {img: "https://i.postimg.cc/nLNZNzBc/14.jpg"},
            {img: "https://i.postimg.cc/ZR3ZmSxP/15.jpg"},
            {img: "https://i.postimg.cc/prHvX6sw/16.jpg"},
            {img: "https://i.postimg.cc/7hnkCncf/17.jpg"},
            {img: "https://i.postimg.cc/zDC5PqB8/18.jpg"},
            {img: "https://i.postimg.cc/9MH1L1md/19.png"},
            {img: "https://i.postimg.cc/ydSCwMvr/20.png"},
            {img: "https://i.postimg.cc/0N4qXkdw/21.png"},
            {img: "https://i.postimg.cc/Dz0TcJsh/22.png"},
            {img: "https://i.postimg.cc/rw8cKYwK/23.png"},
            {img: "https://i.postimg.cc/VkDwMBJ4/24.png"},
            {img: "https://i.postimg.cc/PrbTfkhg/25.png"},
            {img: "https://i.postimg.cc/WbcsP4Rm/26.png"}, 
            {img: "https://i.postimg.cc/XNCnhCP7/27.png"}, 
            {img: "https://i.postimg.cc/qqy0CPKC/28.png"},
            {img: "https://i.postimg.cc/W3QTzNdv/29.png"}, 
            {img: "https://i.postimg.cc/50HffYNg/30.png"}, 
            {img: "https://i.postimg.cc/q7DkfX0g/31.png"},
            {img: "https://i.postimg.cc/0Ny8HXTL/32.png"}, 
            {img: "https://i.postimg.cc/L8T9DFbt/33.png"}, 
            {img: "https://i.postimg.cc/521982n9/34.png"},
            {img: "https://i.postimg.cc/9FyF47PN/35.png"},
            {img: "https://i.postimg.cc/jqpSdXf7/36.png"},
            {img: "https://i.postimg.cc/kM65mZ2C/37.png"},
            {img: "https://i.postimg.cc/t7QwQ7Ys/38.png"}, 
            {img: "https://i.postimg.cc/GtsV5vh0/39.png"}, 
            {img: "https://i.postimg.cc/nL0yjHwW/40.png"},
            {img: "https://i.postimg.cc/jjxVSWvN/41.png"}, 
            {img: "https://i.postimg.cc/x1yDQGGn/42.png"}, 
            {img: "https://i.postimg.cc/4xTkj29W/43.png"},
            {img: "https://i.postimg.cc/c43G9GrK/44.png"}, 
            {img: "https://i.postimg.cc/66gNfp5J/45.png"}, 
            {img: "https://i.postimg.cc/tJKQq2mC/46.png"},
            {img: "https://i.postimg.cc/1Xn11LBj/47.png"}, 
            {img: "https://i.postimg.cc/NMPvVg6X/48.png"}, 
            {img: "https://i.postimg.cc/QtMr0BTs/49.png"},
            {img: "https://i.postimg.cc/hGsBL8hp/50.png"}, 
            {img: "https://i.postimg.cc/wBgzR4x1/51.png"}, 
            {img: "https://i.postimg.cc/7ZgD6r4v/52.png"},
            {img: "https://i.postimg.cc/cLq004VM/53.png"}, 
            {img: "https://i.postimg.cc/sDGskZ0g/54.png"}, 
            {img: "https://i.postimg.cc/3rc3fZ1q/55.png"},
            {img: "https://i.postimg.cc/sxqyBV1z/56.png"}, 
            {img: "https://i.postimg.cc/RFCvys2k/57.png"}, 
            {img: "https://i.postimg.cc/SKfyZF1L/58.png"},
            {img: "https://i.postimg.cc/nrCpcsFT/59.png"}, 
            {img: "https://i.postimg.cc/SKhS7NdN/60.png"}, 
            {img: "https://i.postimg.cc/L8f41Zzb/61.png"},
            {img: "https://i.postimg.cc/4NYxX0nZ/62.png"}, 
            {img: "https://i.postimg.cc/vHCHTv6n/63.png"}, 
            {img: "https://i.postimg.cc/qBb7VrJj/64.png"}
        ]
    },
    //-- Creciendo
    {
        titulo: "Creciendo",
        pagina: 0,
        pages: [
            {
                img: ""
            }
        ]
    },
    //-- Recuerdos
    {
        titulo: "Recuerdos",
        pagina: 0,
        pages: [
            {
                img: ""
            }
        ]
    },
    //-- Familia
    {
        titulo: "Familia",
        pagina: 0,
        pages: [
            {
                img: ""
            }
        ]
    }
];

/****************************************************/
/* RENDER */
/****************************************************/
function renderAbout(){
    const about = sobreMi[aboutActual];
    const page = about.pages[about.pagina];
    aboutTitle.textContent = about.titulo;
    aboutCounter.textContent = `${about.pagina + 1} / ${about.pages.length}`;

    /******** TEXTO ********/
    if(page.text){
        aboutText.innerHTML = page.text;
        aboutText.style.display = "block";
    }else{
        aboutText.innerHTML = "";
        aboutText.style.display = "none";
    }

    /******** IMAGEN ********/
    if(page.img){
        aboutImage.src = page.img;
        aboutImage.style.display = "block";
    }else{
        aboutImage.removeAttribute("src");
        aboutImage.style.display = "none";
    }

    /******** VIDEO ********/
    if(page.video){
        aboutVideo.src = page.video;
        aboutVideo.style.display = "block";
    }else{
        aboutVideo.removeAttribute("src");
        aboutVideo.style.display = "none";
    }
}

/****************************************************/
/* ABRIR */
/****************************************************/
aboutLinks.forEach(item=>{
    item.addEventListener("click",()=>{
        if(item.dataset.about === undefined) return;
        aboutActual = Number(item.dataset.about);
        sobreMi[aboutActual].pagina = 0;
        renderAbout();
        aboutModal.classList.add("active");
    });
});

/****************************************************/
/* CERRAR */
/****************************************************/
function cerrarAbout(){
    aboutModal.classList.remove("active");
    aboutVideo.removeAttribute("src");
}
aboutClose.addEventListener("click",cerrarAbout);
aboutModal.addEventListener("click",(e)=>{
    if(e.target===aboutModal){
        cerrarAbout();
    }
});
document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        cerrarAbout();
    }
});

/****************************************************/
/* SIGUIENTE */
/****************************************************/
aboutNext.addEventListener("click",()=>{
    const about = sobreMi[aboutActual];
    about.pagina++;
    if(about.pagina>=about.pages.length){
        about.pagina=0;
    }
    renderAbout();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
aboutPrev.addEventListener("click",()=>{
    const about = sobreMi[aboutActual];
    about.pagina--;
    if(about.pagina<0){
        about.pagina = about.pages.length-1;
    }
    renderAbout();
});