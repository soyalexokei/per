const pantallaPais8 = document.getElementById('imgs-pais8');

const totalPais8 = 83;
let presente10 = 1;

function cambiarImagen10(cont10) {
  if(presente10 < 1) {
    presente10 = totalPais8;
  }else if(presente10 > totalPais8) {
    presente10 = 1;
  }

  pantallaPais8.style.transform = `translateX(-${(presente10 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda17").addEventListener("click", () => {
    presente10--;
    cambiarImagen10(presente10);
});

document.getElementById("flecha-derecha17").addEventListener("click", () => {
    presente10++;
    cambiarImagen10(presente10);
});

for (let i = 1; i <= totalPais8; i++) {
  const marco10 = document.createElement("img");
  marco10.src = `./img/Montenegro/${i}.jpg`;
  pantallaPais8.appendChild(marco10);
}