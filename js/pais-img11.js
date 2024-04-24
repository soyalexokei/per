const pantallaPais11 = document.getElementById('imgs-pais11');

const totalPais11 = 188;
let presente13 = 1;

function cambiarImagen13(cont13) {
  if(presente13 < 1) {
    presente13 = totalPais11;
  }else if(presente13 > totalPais11) {
    presente13 = 1;
  }

  pantallaPais11.style.transform = `translateX(-${(presente13 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda23").addEventListener("click", () => {
    presente13--;
    cambiarImagen13(presente13);
});

document.getElementById("flecha-derecha23").addEventListener("click", () => {
    presente13++;
    cambiarImagen13(presente13);
});

for (let i = 1; i <= totalPais11; i++) {
  const marco13 = document.createElement("img");
  marco13.src = `./img/Germany/${i}.jpg`;
  pantallaPais11.appendChild(marco13);
}