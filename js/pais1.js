const pantallaPais1 = document.getElementById('imgs-pais1');
const flechaIzquierda3 = document.getElementById("flecha-izquierda3");
const flechaDerecha3 = document.getElementById("flecha-derecha3");

const cupoImagenes3 = 152;
let presente3 = 1;

function cambiarImagen3(cont3) {
  if (presente3 < 1) {
    presente3 = cupoImagenes3;
  } else if (presente3 > cupoImagenes3) {
    presente3 = 1;
  }
  pantallaPais1.style.transform = `translateX(-${(presente3 - 1) * 100}%)`;
}

flechaIzquierda3.addEventListener("click", () => {
    presente3--;
    cambiarImagen3(presente3);
});

flechaDerecha3.addEventListener("click", () => {
    presente3++;
    cambiarImagen3(presente3);
});

for (let i = 1; i <= cupoImagenes3; i++) {
  const marco3 = document.createElement("img");
  marco3.src = `./img/USA-2019/${i}.jpg`;
  pantallaPais1.appendChild(marco3);
}