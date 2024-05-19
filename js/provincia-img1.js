const pantallaProvincia1 = document.getElementById('pantalla-img1');

const totalProvincia1 = 13;
let actual1 = 1;

function goToNextImage1(contar1) {
  if(actual1 < 1) {
    actual1 = totalProvincia1;
  }else if(actual1 > totalProvincia1) {
    actual1 = 1;
  }

  pantallaProvincia1.style.transform = `translateX(-${(actual1 - 1) * 100}%)`;
}

document.getElementById("go-izquierda1").addEventListener("click", () => {
    actual1--;
    goToNextImage1(actual1);
});

document.getElementById("go-derecha1").addEventListener("click", () => {
    actual1++;
    goToNextImage1(actual1);
});

for (let i = 1; i <= totalProvincia1; i++) {
  const lienzo1 = document.createElement("img");
  lienzo1.src = `./img/Lugo/${i}.jpg`;
  pantallaProvincia1.appendChild(lienzo1);
}