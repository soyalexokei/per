// Efecto parallax imagen de fondo
const elem = document.querySelector("#parallax");

const parallax = (e) => {
	let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let img    = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
    let x      = `${img}`;
    elem.style.backgroundPosition = x;
};

window.addEventListener('mousemove', (e) => {
	parallax(e);
});

// Mostrar descripcion en tarjetas
function mostrarDesc(nom,ape,desc) {
	let nombre = document.getElementById(`${nom}`);
    let apellido = document.getElementById(`${ape}`);
    let descripcion = document.getElementById(`${desc}`);
	nombre.style.opacity = `0`;
    nombre.style.transition = `all .1s`;
    apellido.style.opacity = `0`;
    apellido.style.transition = `all .1s`;
    descripcion.style.transform = `scale(1)`;
    descripcion.style.opacity = `1`;
};

// Ocultar descripcion en tarjetas
function ocultarDesc(nom,ape,desc){
	let nombre = document.getElementById(`${nom}`);
    let apellido = document.getElementById(`${ape}`);
    let descripcion = document.getElementById(`${desc}`);
	nombre.style.opacity = `1`;
    nombre.style.transition = `all .1s`;
    apellido.style.opacity = `1`;
    apellido.style.transition = `all .1s`;
    descripcion.style.transform = `scale(1.5)`;
    descripcion.style.opacity = `0`;
};

// Realzar color de boton next y prev al hacer hover
function botonHoverOn(boton){
    let btn = document.getElementById(`${boton}`);
    btn.style.opacity = `1`;
    btn.style.color = `white`;
}
function botonHoverOff(boton){
    let btn = document.getElementById(`${boton}`);
    btn.style.opacity = `0.5`;
    btn.style.color = `white`;

}

// Ver si es mobile, tablet o PC
var detector = new MobileDetect(window.navigator.userAgent);

// Llamar a HTML mobile o principal segun tamaño de pantalla
const comprobarAncho = () => {
    let nombreHTML = window.location.pathname.match(/[^\/]+$/);
    if(nombreHTML==null || nombreHTML=='index.html'){
        if(window.innerWidth <= 580 || detector.tablet()!=null || detector.phone()!=null){
            window.location.href="index_m.html";
        }
    }else if(nombreHTML=="index_m.html"){
        if(window.innerWidth > 580 && detector.tablet()==null && detector.phone()==null && detector.mobile()==null){
            window.location.href="index.html";
        }
    }   
};

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});

// Div que siga el recorrido del cursor y ocupe su lugar
const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    if (detector.tablet()==null && detector.phone()==null && detector.mobile()==null){
        let x = e.clientX;
        let y = e.clientY;

        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";
        // Efectos cuando el movimiento del mouse pare
        function mouseStopped(){
            cursor.style.display = "none";
        }
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
    }
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});