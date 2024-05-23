const pantallaProvincia28 = document.getElementById('pantalla-img28');

const totalProvincia28 = 19;
let actual28 = 1;

function goToNextImage28(contar28) {
  if(actual28 < 1) {
    actual28 = totalProvincia28;
  }else if(actual28 > totalProvincia28) {
    actual28 = 1;
  }

  pantallaProvincia28.style.transform = `translateX(-${(actual28 - 1) * 100}%)`;
}

document.getElementById("go-izquierda28").addEventListener("click", () => {
    actual28--;
    goToNextImage28(actual28);
});

document.getElementById("go-derecha28").addEventListener("click", () => {
    actual28++;
    goToNextImage28(actual28);
});

for (let i = 1; i <= totalProvincia28; i++) {
  const lienzo28 = document.createElement("img");
  lienzo28.src = `./img/Mallorca/${i}.jpg`;
  pantallaProvincia28.appendChild(lienzo28);
}