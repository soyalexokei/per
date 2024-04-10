const pantallaPais3 = document.getElementById('imgs-pais3');
const flechaIzquierda7 = document.getElementById("flecha-izquierda7");
const flechaDerecha7 = document.getElementById("flecha-derecha7");

const totalPais3 = 32;
let presente5 = 1;

function cambiarImagen5(cont5) {
  if(presente5 < 1) {
    presente5 = totalPais3;
  }else if(presente5 > totalPais3) {
    presente5 = 1;
  }

  pantallaPais3.style.transform = `translateX(-${(presente5 - 1) * 100}%)`;
}

flechaIzquierda7.addEventListener("click", () => {
    presente5--;
    cambiarImagen5(presente5);
});

flechaDerecha7.addEventListener("click", () => {
  presente5++;
  cambiarImagen5(presente5);
});

for (let i = 1; i <= totalPais3; i++) {
  const marco5 = document.createElement("img");
  marco5.src = `./img/England/${i}.jpg`;
  pantallaPais3.appendChild(marco5);
}