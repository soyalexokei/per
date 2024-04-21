const pantallaPais9 = document.getElementById('imgs-pais9');

const totalPais9 = 215;
let presente11 = 1;

function cambiarImagen11(cont11) {
  if(presente11 < 1) {
    presente11 = totalPais9;
  }else if(presente11 > totalPais9) {
    presente11 = 1;
  }

  pantallaPais9.style.transform = `translateX(-${(presente11 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda19").addEventListener("click", () => {
    presente11--;
    cambiarImagen11(presente11);
});

document.getElementById("flecha-derecha19").addEventListener("click", () => {
    presente11++;
    cambiarImagen11(presente11);
});

for (let i = 1; i <= totalPais9; i++) {
  const marco11 = document.createElement("img");
  marco11.src = `./img/Serbia/${i}.jpg`;
  pantallaPais9.appendChild(marco11);
}