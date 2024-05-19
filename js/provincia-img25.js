const pantallaProvincia25 = document.getElementById('pantalla-img25');

const totalProvincia25 = 36;
let actual25 = 1;

function goToNextImage25(contar25) {
  if(actual25 < 1) {
    actual25 = totalProvincia25;
  }else if(actual25 > totalProvincia25) {
    actual25 = 1;
  }

  pantallaProvincia25.style.transform = `translateX(-${(actual25 - 1) * 100}%)`;
}

document.getElementById("go-izquierda25").addEventListener("click", () => {
    actual25--;
    goToNextImage25(actual25);
});

document.getElementById("go-derecha25").addEventListener("click", () => {
    actual25++;
    goToNextImage25(actual25);
});

for (let i = 1; i <= totalProvincia25; i++) {
  const lienzo25 = document.createElement("img");
  lienzo25.src = `./img/Tenerife/${i}.jpg`;
  pantallaProvincia25.appendChild(lienzo25);
}