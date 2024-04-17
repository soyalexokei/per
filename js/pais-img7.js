const pantallaPais7 = document.getElementById('imgs-pais7');

const totalPais7 = 24;
let presente9 = 1;

function cambiarImagen9(cont9) {
  if(presente9 < 1) {
    presente9 = totalPais7;
  }else if(presente9 > totalPais7) {
    presente9 = 1;
  }

  pantallaPais7.style.transform = `translateX(-${(presente9 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda15").addEventListener("click", () => {
    presente9--;
    cambiarImagen9(presente9);
});

document.getElementById("flecha-derecha15").addEventListener("click", () => {
    presente9++;
    cambiarImagen9(presente9);
});

for (let i = 1; i <= totalPais7; i++) {
  const marco9 = document.createElement("img");
  marco9.src = `./img/Gibraltar/${i}.jpg`;
  pantallaPais7.appendChild(marco9);
}