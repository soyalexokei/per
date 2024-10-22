const pantallaAficion1 = document.getElementById("imgs-aficion1");
const flechaIzquierda1 = document.getElementById("flecha-izquierda1");
const flechaDerecha1 = document.getElementById("flecha-derecha1");

const cupoImagenes1 = 49;
let presente1 = 1;

function cambiarImagen1(cont1) {
  if (presente1 < 1) {
    presente1 = cupoImagenes1;
  } else if (presente1 > cupoImagenes1) {
    presente1 = 1;
  }
  pantallaAficion1.style.transform = `translateX(-${(presente1 - 1) * 100}%)`;
}

flechaIzquierda1.addEventListener("click", () => {
  presente1--;
  cambiarImagen1(presente1);
});

flechaDerecha1.addEventListener("click", () => {
  presente1++;
  cambiarImagen1(presente1);
});

for (let i = 1; i <= cupoImagenes1; i++) {
  const marco1 = document.createElement("img");
  marco1.src = `./img/Coches/${i}.jpg`;
  pantallaAficion1.appendChild(marco1);
}