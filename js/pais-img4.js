const pantallaPais4 = document.getElementById('imgs-pais4');
const flechaIzquierda9 = document.getElementById("flecha-izquierda9");
const flechaDerecha9 = document.getElementById("flecha-derecha9");

const totalPais4 = 43;
let presente6 = 1;

function cambiarImagen6(cont6) {
  if(presente6 < 1) {
    presente6 = totalPais4;
  }else if(presente6 > totalPais4) {
    presente6 = 1;
  }

  pantallaPais4.style.transform = `translateX(-${(presente6 - 1) * 100}%)`;
}

flechaIzquierda9.addEventListener("click", () => {
    presente6--;
    cambiarImagen6(presente6);
});

flechaDerecha9.addEventListener("click", () => {
    presente6++;
    cambiarImagen6(presente6);
});

for (let i = 1; i <= totalPais4; i++) {
  const marco6 = document.createElement("img");
  marco6.src = `./img/Kosovo/${i}.jpg`;
  pantallaPais4.appendChild(marco6);
}