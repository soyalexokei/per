const pantallaProvincia0 = document.getElementById('pantalla-img0');

const totalProvincia0 = 249;
let actual0 = 1;

function goToNextImage0(contar0) {
  if(actual0 < 1) {
    actual0 = totalProvincia0;
  }else if(actual0 > totalProvincia0) {
    actual0 = 1;
  }

  pantallaProvincia0.style.transform = `translateX(-${(actual0 - 1) * 100}%)`;
}

document.getElementById("go-izquierda0").addEventListener("click", () => {
    actual0--;
    goToNextImage0(actual0);
});

document.getElementById("go-derecha0").addEventListener("click", () => {
    actual0++;
    goToNextImage0(actual0);
});

for (let i = 1; i <= totalProvincia0; i++) {
  const lienzo0 = document.createElement("img");
  lienzo0.src = `./img/Madrid/${i}.jpg`;
  pantallaProvincia0.appendChild(lienzo0);
}