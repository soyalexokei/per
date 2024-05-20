const pantallaProvincia4 = document.getElementById('pantalla-img4');

const totalProvincia4 = 27;
let actual4 = 1;

function goToNextImage4(contar4) {
  if(actual4 < 1) {
    actual4 = totalProvincia4;
  }else if(actual4 > totalProvincia4) {
    actual4 = 1;
  }

  pantallaProvincia4.style.transform = `translateX(-${(actual4 - 1) * 100}%)`;
}

document.getElementById("go-izquierda4").addEventListener("click", () => {
    actual4--;
    goToNextImage4(actual4);
});

document.getElementById("go-derecha4").addEventListener("click", () => {
    actual4++;
    goToNextImage4(actual4);
});

for (let i = 1; i <= totalProvincia4; i++) {
  const lienzo4 = document.createElement("img");
  lienzo4.src = `./img/Cantabria/${i}.jpg`;
  pantallaProvincia4.appendChild(lienzo4);
}