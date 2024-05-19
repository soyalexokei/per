const pantallaProvincia22 = document.getElementById('pantalla-img22');

const totalProvincia22 = 6;
let actual22 = 1;

function goToNextImage22(contar22) {
  if(actual22 < 1) {
    actual22 = totalProvincia22;
  }else if(actual22 > totalProvincia22) {
    actual22 = 1;
  }

  pantallaProvincia22.style.transform = `translateX(-${(actual22 - 1) * 100}%)`;
}

document.getElementById("go-izquierda22").addEventListener("click", () => {
    actual22--;
    goToNextImage22(actual22);
});

document.getElementById("go-derecha22").addEventListener("click", () => {
    actual22++;
    goToNextImage22(actual22);
});

for (let i = 1; i <= totalProvincia2; i++) {
  const lienzo22 = document.createElement("img");
  lienzo22.src = `./img/Cadiz/${i}.jpg`;
  pantallaProvincia22.appendChild(lienzo22);
}