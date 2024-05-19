const pantallaProvincia29 = document.getElementById('pantalla-img29');

const totalProvincia29 = 2;
let actual29 = 1;

function goToNextImage29(contar29) {
  if(actual29 < 1) {
    actual29 = totalProvincia29;
  }else if(actual29 > totalProvincia29) {
    actual29 = 1;
  }

  pantallaProvincia29.style.transform = `translateX(-${(actual29 - 1) * 100}%)`;
}

document.getElementById("go-izquierda29").addEventListener("click", () => {
    actual29--;
    goToNextImage29(actual29);
});

document.getElementById("go-derecha29").addEventListener("click", () => {
    actual29++;
    goToNextImage29(actual29);
});

for (let i = 1; i <= totalProvincia29; i++) {
  const lienzo29 = document.createElement("img");
  lienzo29.src = `./img/ACoruna/${i}.jpg`;
  pantallaProvincia29.appendChild(lienzo29);
}