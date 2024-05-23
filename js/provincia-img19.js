const pantallaProvincia19 = document.getElementById('pantalla-img19');

const totalProvincia19 = 1;
let actual19 = 1;

function goToNextImage19(contar19) {
  if(actual19 < 1) {
    actual19 = totalProvincia19;
  }else if(actual19 > totalProvincia19) {
    actual19 = 1;
  }

  pantallaProvincia19.style.transform = `translateX(-${(actual19 - 1) * 100}%)`;
}

document.getElementById("go-izquierda19").addEventListener("click", () => {
    actual19--;
    goToNextImage19(actual19);
});

document.getElementById("go-derecha19").addEventListener("click", () => {
    actual19++;
    goToNextImage19(actual19);
});

for (let i = 1; i <= totalProvincia19; i++) {
  const lienzo19 = document.createElement("img");
  lienzo19.src = `./img/Badajoz/${i}.jpg`;
  pantallaProvincia19.appendChild(lienzo19);
}