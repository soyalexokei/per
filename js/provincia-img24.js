const pantallaProvincia24 = document.getElementById('pantalla-img24');

const totalProvincia24 = 27;
let actual24 = 1;

function goToNextImage24(contar24) {
  if(actual24 < 1) {
    actual24 = totalProvincia24;
  }else if(actual24 > totalProvincia24) {
    actual24 = 1;
  }

  pantallaProvincia24.style.transform = `translateX(-${(actual24 - 1) * 100}%)`;
}

document.getElementById("go-izquierda24").addEventListener("click", () => {
    actual24--;
    goToNextImage24(actual24);
});

document.getElementById("go-derecha24").addEventListener("click", () => {
    actual24++;
    goToNextImage24(actual24);
});

for (let i = 1; i <= totalProvincia24; i++) {
  const lienzo24 = document.createElement("img");
  lienzo24.src = `./img/Granada/${i}.jpg`;
  pantallaProvincia24.appendChild(lienzo24);
}