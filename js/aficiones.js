/****************************************************/
/* ELEMENTOS */
/****************************************************/

const modal = document.getElementById("hobbyModal");

const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalImage = document.querySelector(".modal-image");
const modalVideo = document.querySelector(".modal-video");

const modalCounter = document.querySelector(".modal-counter");

const btnPrev = document.querySelector(".modal-prev");
const btnNext = document.querySelector(".modal-next");
const btnClose = document.querySelector(".modal-close");

const hobbyLinks = document.querySelectorAll("[data-hobby]");
let hobbyActual = 0;

/****************************************************/
/* DATOS */
/****************************************************/

const aficiones = [
    //-- PADEL
    {
        titulo: "Pádel",
        pagina:0,
        pages:[
            {
                text:`
                    <h3>¿Qué significa para mí?</h3>
                    <p>
                        El pádel es mi deporte favorito.
                        Juego varias veces por semana y me gusta
                        competir con amigos.
                    </p>
                `
            },
            {
                img:"img/Aficiones/padel1.jpg"
            },
            {
                img:"img/Aficiones/padel2.jpg"
            },
            {
                video:"https://www.youtube.com/embed/VIDEO_ID"
            }
        ]
    },
    {
        titulo:"Viajar",
        pagina:0,
        pages:[
            {
                text:`
                    <h3>Viajar</h3>
                    <p>
                        Me encanta descubrir nuevos lugares
                        y conocer otras culturas.
                    </p>
                `
            },
            {
                img:"img/Aficiones/viajar1.jpg"
            }
        ]
    }
];

function renderModal() {
    const hobby = aficiones[hobbyActual];
    const page = hobby.pages[hobby.pagina];
    modalTitle.textContent = hobby.titulo;
    modalCounter.textContent = `${hobby.pagina+1} / ${hobby.pages.length}`;

    /************ TEXTO ************/
    if(page.text){
        modalText.innerHTML = page.text;
        modalText.style.display="block";
    }else{
        modalText.innerHTML="";
        modalText.style.display="none";
    }

    /************ IMAGEN ************/
    if(page.img){
        modalImage.src = page.img;
        modalImage.style.display="block";
    }else{
        modalImage.removeAttribute("src");
        modalImage.style.display="none";
    }

    /************ VIDEO ************/
    if(page.video){
        modalVideo.src = page.video;
        modalVideo.style.display="block";
    }else{
        modalVideo.removeAttribute("src");
        modalVideo.style.display="none";
    }
}

/* Abrir modal */
hobbyLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        hobbyActual = Number(link.dataset.hobby);
        aficiones[hobbyActual].pagina = 0;
        renderModal();
        modal.classList.add("active");
    });
});

/* Cerrar modal */
btnClose.addEventListener("click",cerrarModal);
modal.addEventListener("click",(e)=>{
    if(e.target===modal){
        cerrarModal();
    }
});
document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        cerrarModal();
    }
});
function cerrarModal(){
    modal.classList.remove("active");
    modalVideo.removeAttribute("src");
}

/* Siguiente Página */
btnNext.addEventListener("click",()=>{
    const hobby = aficiones[hobbyActual];
    hobby.pagina++;
    if(hobby.pagina>=hobby.pages.length){
        hobby.pagina=0;
    }
    renderModal();
});

/* Anterior página */
btnPrev.addEventListener("click",()=>{
    const hobby = aficiones[hobbyActual];
    hobby.pagina--;
    if(hobby.pagina<0){
        hobby.pagina=hobby.pages.length-1;
    }
    renderModal();
});