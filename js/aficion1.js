const pantallaAficion1 = document.getElementById("imgs-aficion1");
const flechaIzquierda1 = document.getElementById("flecha-izquierda1");
const flechaDerecha1 = document.getElementById("flecha-derecha1");

const totalImagenes1 = 49;
let imagenActual1 = 1;

function cambiarImagen1(cont1) {
  if (cont1 < 1) {
    cont1 = totalImagenes1;
  } else if (cont1 > totalImagenes1) {
    cont1 = 1;
  }
  pantallaAficion1.style.transform = `translateX(-${(cont1 - 1) * 100}%)`;
}

flechaIzquierda1.addEventListener("click", () => {
  imagenActual1--;
  cambiarImagen1(imagenActual1);
});

flechaDerecha1.addEventListener("click", () => {
  imagenActual1++;
  cambiarImagen1(imagenActual1);
});

for (let i = 1; i <= totalImagenes1; i++) {
  const imagen1 = document.createElement("img");
  imagen1.src = `./img/Coches/${i}.jpg`;
  pantallaAficion1.appendChild(imagen1);
}