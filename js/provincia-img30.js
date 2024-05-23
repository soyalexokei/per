const pantallaProvincia30 = document.getElementById('pantalla-img30');

const totalProvincia30 = 1;
let actual30 = 1;

function goToNextImage30(contar30) {
  if(actual30 < 1) {
    actual30 = totalProvincia30;
  }else if(actual30 > totalProvincia30) {
    actual30 = 1;
  }

  pantallaProvincia30.style.transform = `translateX(-${(actual30 - 1) * 100}%)`;
}

document.getElementById("go-izquierda30").addEventListener("click", () => {
    actual30--;
    goToNextImage30(actual30);
});

document.getElementById("go-derecha30").addEventListener("click", () => {
    actual30++;
    goToNextImage30(actual30);
});

for (let i = 1; i <= totalProvincia30; i++) {
  const lienzo30 = document.createElement("img");
  lienzo30.src = `./img/Ibiza/${i}.jpg`;
  pantallaProvincia30.appendChild(lienzo30);
}