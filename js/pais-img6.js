const pantallaPais6 = document.getElementById('imgs-pais6');

const totalPais6 = 30;
let presente8 = 1;

function cambiarImagen8(cont8) {
  if(presente8 < 1) {
    presente8 = totalPais6;
  }else if(presente8 > totalPais6) {
    presente8 = 1;
  }

  pantallaPais6.style.transform = `translateX(-${(presente8 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda13").addEventListener("click", () => {
    presente8--;
    cambiarImagen8(presente8);
});

document.getElementById("flecha-derecha13").addEventListener("click", () => {
    presente8++;
    cambiarImagen8(presente8);
});

for (let i = 1; i <= totalPais6; i++) {
  const marco8 = document.createElement("img");
  marco8.src = `./img/Hungary/${i}.jpg`;
  pantallaPais6.appendChild(marco8);
}