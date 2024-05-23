const pantallaProvincia23 = document.getElementById('pantalla-img23');

const totalProvincia23 = 89;
let actual23 = 1;

function goToNextImage23(contar23) {
  if(actual23 < 1) {
    actual23 = totalProvincia23;
  }else if(actual23 > totalProvincia23) {
    actual23 = 1;
  }

  pantallaProvincia23.style.transform = `translateX(-${(actual23 - 1) * 100}%)`;
}

document.getElementById("go-izquierda23").addEventListener("click", () => {
    actual23--;
    goToNextImage23(actual23);
});

document.getElementById("go-derecha23").addEventListener("click", () => {
    actual23++;
    goToNextImage23(actual23);
});

for (let i = 1; i <= totalProvincia23; i++) {
  const lienzo23 = document.createElement("img");
  lienzo23.src = `./img/Malaga/${i}.jpg`;
  pantallaProvincia23.appendChild(lienzo23);
}