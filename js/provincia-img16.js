const pantallaProvincia16 = document.getElementById('pantalla-img16');

const totalProvincia16 = 70;
let actual16 = 1;

function goToNextImage16(contar16) {
  if(actual16 < 1) {
    actual16 = totalProvincia16;
  }else if(actual16 > totalProvincia16) {
    actual16 = 1;
  }

  pantallaProvincia16.style.transform = `translateX(-${(actual16 - 1) * 100}%)`;
}

document.getElementById("go-izquierda16").addEventListener("click", () => {
    actual16--;
    goToNextImage16(actual16);
});

document.getElementById("go-derecha16").addEventListener("click", () => {
    actual16++;
    goToNextImage16(actual16);
});

for (let i = 1; i <= totalProvincia16; i++) {
  const lienzo16 = document.createElement("img");
  lienzo16.src = `./img/Castellon/${i}.jpg`;
  pantallaProvincia16.appendChild(lienzo16);
}