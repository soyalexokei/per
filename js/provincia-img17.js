const pantallaProvincia17 = document.getElementById('pantalla-img17');

const totalProvincia17 = 12;
let actual17 = 1;

function goToNextImage17(contar17) {
  if(actual17 < 1) {
    actual17 = totalProvincia17;
  }else if(actual17 > totalProvincia17) {
    actual17 = 1;
  }

  pantallaProvincia17.style.transform = `translateX(-${(actual17 - 1) * 100}%)`;
}

document.getElementById("go-izquierda17").addEventListener("click", () => {
    actual17--;
    goToNextImage17(actual17);
});

document.getElementById("go-derecha17").addEventListener("click", () => {
    actual17++;
    goToNextImage17(actual17);
});

for (let i = 1; i <= totalProvincia17; i++) {
  const lienzo17 = document.createElement("img");
  lienzo17.src = `./img/Valencia/${i}.jpg`;
  pantallaProvincia17.appendChild(lienzo17);
}