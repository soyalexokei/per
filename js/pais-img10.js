const pantallaPais10 = document.getElementById('imgs-pais10');

const totalPais10 = 217;
let presente12 = 1;

function cambiarImagen12(cont12) {
  if(presente12 < 1) {
    presente12 = totalPais10;
  }else if(presente12 > totalPais10) {
    presente12 = 1;
  }

  pantallaPais10.style.transform = `translateX(-${(presente12 - 1) * 100}%)`;
}

document.getElementById("flecha-izquierda21").addEventListener("click", () => {
    presente12--;
    cambiarImagen12(presente12);
});

document.getElementById("flecha-derecha21").addEventListener("click", () => {
    presente12++;
    cambiarImagen12(presente12);
});

for (let i = 1; i <= totalPais10; i++) {
  const marco12 = document.createElement("img");
  marco12.src = `./img/Austria/${i}.jpg`;
  pantallaPais10.appendChild(marco12);
}