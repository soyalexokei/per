const pantallaPais5 = document.getElementById('imgs-pais5');
const flechaIzquierda11 = document.getElementById("flecha-izquierda11");
const flechaDerecha11 = document.getElementById("flecha-derecha11");

const totalPais5 = 71;
let presente7 = 0;

function cambiarImagen7(cont7) {
  if(presente7 < 0) {
    presente7 = totalPais5;
  }else if(presente7 > totalPais5) {
    presente7 = 0;
  }

  pantallaPais5.style.transform = `translateX(-${presente7 * 100}%)`;
}

flechaIzquierda11.addEventListener("click", () => {
    presente7--;
    cambiarImagen7(presente7);
});

flechaDerecha11.addEventListener("click", () => {
    presente7++;
    cambiarImagen7(presente7);
});

for (let i = 0; i <= totalPais5; i++) {
  const marco7 = document.createElement("img");
  marco7.src = `./img/France/${i}.jpg`;
  pantallaPais5.appendChild(marco7);
}