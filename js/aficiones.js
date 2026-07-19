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
        titulo: "Pádel como afición",
        pagina: 0,
        pages: [
            {
                text: `
                    <img src="https://i.postimg.cc/MHtmDsgf/padel.png"/>
                    <p>
                        Yo me inscribo a partidos públicos de la APP de
                        <a href="https://playtomic.io/" target="_blank">Playtomic</a> para jugar
                        con gente de mi nivel por la provincia de Madrid u otras provincias y/o
                        países. Además, juego con amigos y familiares.
                        <br><br>
                        Suelo jugar en modo competitivo, pero también, puedo jugar en modo amistoso.
                        <br><br>
                        Soy un nivel 3 de Playtomic.
                    </p>
                    <p><b>Vídeo sobre mí jugando al pádel:</b></p>
                `,
                video: "https://streamable.com/e/skh8vt"
            }
        ]
    },
    //-- NUTRICION
    {
        titulo: "La nutrición mejora tu vida",
        pagina: 0,
        pages: [
            {
                text: `
                    <p><b>¿Qué es la nutrición?:</b></p>
                    <ul>
                        <p>
                            Es un conjunto de procesos biológicos, involuntarios y celulares mediante los cuales el organismo ingiere,
                            absorbe y asimila los nutrientes de los alimentos
                        </p>
                    </ul>
                    <p><b>¿Y la nutrición deportiva?:</b></p>
                    <ul>
                        <p>
                            Es la rama de la dietética especializada en las personas que practican deporte. Su objetivo principal
                            es adaptar la alimentación a las necesidades del ejercicio para optimizar el rendimiento físico, acelerar
                            la recuperación tras el esfuerzo y prevenir lesiones
                        </p>
                        <p>
                            Hay tres conceptos a tener en cuenta:
                            <ul>
                                <p>1. Aporte de energía => para adaptar la ingesta de carbohidratos (principal combustible)
                                según la intensidad y duración de la actividad</p>
                                <p>2. Reparación y desarrollo muscular => para utilizar las proteínas, reparar los tejidos
                                dañados durante el ejercicio y favorecer la hipertrofia</p>
                                <p>3. Regulación y salud => para emplear grasas saludables, vitaminas y minerales (micronutrientes),
                                mantener el sistema inmunológico fuerte y regular el metabolismo</p>
                            </ul>
                        </p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Personalización según el tipo de deporte:</b></p>
                    <p>Las necesidades nutricionales varían drásticamente dependiendo de la disciplina que practiques:</p>
                    <ul>
                        <p>1. Deportes de resistencia => requieren de una alta carga de carbohidratos para mantener los niveles
                        de glucógeno y una correcta hidratación y reposición de electrolitos</p>
                        <p>2. Deportes de fuerza y potencia => requieren un mayor hincapié en el consumo proteico
                        para favorecer el aumento de la masa muscular</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>¿Qué comprar para llevar una buena nutrición?:</b></p>
                    <iframe src="./documentos/nutricion/Listado_Compra.pdf" width="100%" height="500px"></iframe>
                `
            },
            {
                text: `
                    <p><b>¿Qué desayunar para llevar una buena nutrición?:</b></p>
                    <iframe src="./documentos/nutricion/Desayunar.pdf" width="100%" height="500px"></iframe>
                `
            },
            {
                text: `
                    <p><b>Receta 1 para llevar una buena nutrición:</b></p>
                    <iframe src="./documentos/nutricion/Receta1.pdf" width="100%" height="500px"></iframe>
                `
            },
            {
                text: `
                    <p><b>Receta 2 para llevar una buena nutrición:</b></p>
                    <iframe src="./documentos/nutricion/Receta2.pdf" width="100%" height="500px"></iframe>
                `
            }
        ]
    },
    //-- GYM
    {
        
    },
    //-- VAN LIFE
    {
        
    },
    //-- HELICOPTER EXPERIENCE
    {
        
    },
    //-- PAPIROFLEXIA
    {
        
    },
    //-- IA MUSICAL
    {
        
    },
    //-- IA VISUAL
    {
        
    },
    //-- COCHES
    {
        
    },
    //-- DIBUJO
    {
        
    },
    //-- VLOGS
    {
        
    },
    //-- LIGAS FANTASY
    {
        
    },
    //-- MODA
    {
        
    },
    //-- FOOTBALL EVENTS
    {
        
    },
    //-- RELAJACION
    {
        
    },
    //-- MIS RELIQUIAS
    {
        
    },
    //-- MIS SERIES DE TV FAVORITAS
    {
        
    },
    //-- ARTE CALLEJERO
    {
        
    },
    //-- TENIS
    {
        titulo: "Tenis como afición",
        pagina: 0,
        pages: [
            {
                text: `
                    <img src="https://i.postimg.cc/sfZcGcTL/tenis.jpg"/>
                    <p>
                        Yo me inscribo a partidos públicos de la APP de
                        <a href="https://playtomic.io/" target="_blank">Playtomic</a> para jugar
                        con gente de mi nivel por la provincia de Madrid u otras provincias y/o
                        países. Además, juego con amigos y familiares.
                        <br><br>
                        Suelo jugar en modo competitivo, pero también, puedo jugar en modo amistoso.
                        <br><br>
                        Soy un nivel 1 de Playtomic.
                    </p>
                `
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