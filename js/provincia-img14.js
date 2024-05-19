const pantallaProvincia14 = document.getElementById('pantalla-img14');

const totalProvincia14 = 11;
let actual14 = 1;

function goToNextImage14(contar14) {
  if(actual14 < 1) {
    actual14 = totalProvincia14;
  }else if(actual14 > totalProvincia14) {
    actual14 = 1;
  }

  pantallaProvincia14.style.transform = `translateX(-${(actual14 - 1) * 100}%)`;
}

document.getElementById("go-izquierda14").addEventListener("click", () => {
    actual14--;
    goToNextImage14(actual14);
});

document.getElementById("go-derecha14").addEventListener("click", () => {
    actual14++;
    goToNextImage14(actual14);
});

for (let i = 1; i <= totalProvincia14; i++) {
  const lienzo14 = document.createElement("img");
  lienzo14.src = `./img/Huesca/${i}.jpg`;
  pantallaProvincia14.appendChild(lienzo14);
}