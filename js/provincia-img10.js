const pantallaProvincia10 = document.getElementById('pantalla-img10');

const totalProvincia10 = 21;
let actual10 = 1;

function goToNextImage10(contar10) {
  if(actual10 < 1) {
    actual10 = totalProvincia10;
  }else if(actual10 > totalProvincia10) {
    actual10 = 1;
  }

  pantallaProvincia10.style.transform = `translateX(-${(actual10 - 1) * 100}%)`;
}

document.getElementById("go-izquierda10").addEventListener("click", () => {
    actual10--;
    goToNextImage10(actual10);
});

document.getElementById("go-derecha10").addEventListener("click", () => {
    actual10++;
    goToNextImage10(actual10);
});

for (let i = 1; i <= totalProvincia10; i++) {
  const lienzo10 = document.createElement("img");
  lienzo10.src = `./img/Segovia/${i}.jpg`;
  pantallaProvincia10.appendChild(lienzo10);
}