const pantallaProvincia21 = document.getElementById('pantalla-img21');

const totalProvincia21 = 4;
let actual21 = 1;

function goToNextImage21(contar21) {
  if(actual21 < 1) {
    actual21 = totalProvincia21;
  }else if(actual21 > totalProvincia21) {
    actual21 = 1;
  }

  pantallaProvincia21.style.transform = `translateX(-${(actual21 - 1) * 100}%)`;
}

document.getElementById("go-izquierda21").addEventListener("click", () => {
    actual21--;
    goToNextImage21(actual21);
});

document.getElementById("go-derecha21").addEventListener("click", () => {
    actual21++;
    goToNextImage21(actual21);
});

for (let i = 1; i <= totalProvincia21; i++) {
  const lienzo21 = document.createElement("img");
  lienzo21.src = `./img/Cordoba/${i}.jpg`;
  pantallaProvincia21.appendChild(lienzo21);
}