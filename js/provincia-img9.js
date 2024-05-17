const pantallaProvincia9 = document.getElementById('pantalla-img9');

const totalProvincia9 = 35;
let actual9 = 1;

function goToNextImage9(contar9) {
  if(actual9 < 1) {
    actual9 = totalProvincia9;
  }else if(actual9 > totalProvincia9) {
    actual9 = 1;
  }

  pantallaProvincia9.style.transform = `translateX(-${(actual9 - 1) * 100}%)`;
}

document.getElementById("go-izquierda9").addEventListener("click", () => {
    actual9--;
    goToNextImage9(actual9);
});

document.getElementById("go-derecha9").addEventListener("click", () => {
    actual9++;
    goToNextImage9(actual9);
});

for (let i = 1; i <= totalProvincia9; i++) {
  const lienzo9 = document.createElement("img");
  lienzo9.src = `./img/Salamanca/${i}.jpg`;
  pantallaProvincia9.appendChild(lienzo9);
}