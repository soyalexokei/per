const pantallaProvincia15 = document.getElementById('pantalla-img15');

const totalProvincia15 = 64;
let actual15 = 1;

function goToNextImage15(contar15) {
  if(actual15 < 1) {
    actual15 = totalProvincia15;
  }else if(actual15 > totalProvincia15) {
    actual15 = 1;
  }

  pantallaProvincia15.style.transform = `translateX(-${(actual15 - 1) * 100}%)`;
}

document.getElementById("go-izquierda15").addEventListener("click", () => {
    actual15--;
    goToNextImage15(actual15);
});

document.getElementById("go-derecha15").addEventListener("click", () => {
    actual15++;
    goToNextImage15(actual15);
});

for (let i = 1; i <= totalProvincia15; i++) {
  const lienzo15 = document.createElement("img");
  lienzo15.src = `./img/Barcelona/${i}.jpg`;
  pantallaProvincia15.appendChild(lienzo15);
}