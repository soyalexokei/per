const pantallaPais2 = document.getElementById('imgs-pais2');
const flechaIzquierda5 = document.getElementById("flecha-izquierda5");
const flechaDerecha5 = document.getElementById("flecha-derecha5");

const totalPais2 = 45;
let presente4 = 1;

function cambiarImagen4(cont4) {
  if(presente4 < 1) {
    presente4 = totalPais2;
  }else if(presente4 > totalPais2) {
    presente4 = 1;
  }

  pantallaPais2.style.transform = `translateX(-${(presente4 - 1) * 100}%)`;
}

flechaIzquierda5.addEventListener("click", () => {
    presente4--;
    cambiarImagen4(presente4);
});

flechaDerecha5.addEventListener("click", () => {
  presente4++;
  cambiarImagen4(presente4);
});

for (let i = 1; i <= totalPais2; i++) {
  const marco4 = document.createElement("img");
  marco4.src = `./img/Portugal/${i}.jpg`;
  pantallaPais2.appendChild(marco4);
}