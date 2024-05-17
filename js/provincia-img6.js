const pantallaProvincia6 = document.getElementById('pantalla-img6');

const totalProvincia6 = 2;
let actual6 = 1;

function goToNextImage6(contar6) {
  if(actual6 < 1) {
    actual6 = totalProvincia6;
  }else if(actual6 > totalProvincia6) {
    actual6 = 1;
  }

  pantallaProvincia6.style.transform = `translateX(-${(actual6 - 1) * 100}%)`;
}

document.getElementById("go-izquierda6").addEventListener("click", () => {
    actual6--;
    goToNextImage6(actual6);
});

document.getElementById("go-derecha6").addEventListener("click", () => {
    actual6++;
    goToNextImage6(actual6);
});

for (let i = 1; i <= totalProvincia6; i++) {
  const lienzo6 = document.createElement("img");
  lienzo6.src = `./img/Burgos/${i}.jpg`;
  pantallaProvincia6.appendChild(lienzo6);
}