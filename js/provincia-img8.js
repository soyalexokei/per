const pantallaProvincia8 = document.getElementById('pantalla-img8');

const totalProvincia8 = 27;
let actual8 = 1;

function goToNextImage8(contar8) {
  if(actual8 < 1) {
    actual8 = totalProvincia8;
  }else if(actual8 > totalProvincia8) {
    actual8 = 1;
  }

  pantallaProvincia8.style.transform = `translateX(-${(actual8 - 1) * 100}%)`;
}

document.getElementById("go-izquierda8").addEventListener("click", () => {
    actual8--;
    goToNextImage8(actual8);
});

document.getElementById("go-derecha8").addEventListener("click", () => {
    actual8++;
    goToNextImage8(actual8);
});

for (let i = 1; i <= totalProvincia8; i++) {
  const lienzo8 = document.createElement("img");
  lienzo8.src = `./img/Avila/${i}.jpg`;
  pantallaProvincia8.appendChild(lienzo8);
}