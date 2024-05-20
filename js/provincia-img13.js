const pantallaProvincia13 = document.getElementById('pantalla-img13');

const totalProvincia13 = 32;
let actual13 = 1;

function goToNextImage13(contar13) {
  if(actual13 < 1) {
    actual13 = totalProvincia13;
  }else if(actual13 > totalProvincia13) {
    actual13 = 1;
  }

  pantallaProvincia13.style.transform = `translateX(-${(actual13 - 1) * 100}%)`;
}

document.getElementById("go-izquierda13").addEventListener("click", () => {
    actual13--;
    goToNextImage13(actual13);
});

document.getElementById("go-derecha13").addEventListener("click", () => {
    actual13++;
    goToNextImage13(actual13);
});

for (let i = 1; i <= totalProvincia13; i++) {
  const lienzo13 = document.createElement("img");
  lienzo13.src = `./img/Zaragoza/${i}.jpg`;
  pantallaProvincia13.appendChild(lienzo13);
}