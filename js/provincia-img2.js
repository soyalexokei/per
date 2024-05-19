const pantallaProvincia2 = document.getElementById('pantalla-img2');

const totalProvincia2 = 15;
let actual2 = 1;

function goToNextImage2(contar2) {
  if(actual2 < 1) {
    actual2 = totalProvincia2;
  }else if(actual2 > totalProvincia2) {
    actual2 = 1;
  }

  pantallaProvincia2.style.transform = `translateX(-${(actual2 - 1) * 100}%)`;
}

document.getElementById("go-izquierda2").addEventListener("click", () => {
    actual2--;
    goToNextImage2(actual2);
});

document.getElementById("go-derecha2").addEventListener("click", () => {
    actual2++;
    goToNextImage2(actual2);
});

for (let i = 1; i <= totalProvincia2; i++) {
  const lienzo2 = document.createElement("img");
  lienzo2.src = `./img/Pontevedra/${i}.jpg`;
  pantallaProvincia2.appendChild(lienzo2);
}