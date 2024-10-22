const marcoCreciendo = document.getElementById('marco-yo-creciendo');

const finalFases = 6;
let ptoPartida = 1;

function pasarMiCrecimiento(varaux) {
  if (ptoPartida < 1) {
    ptoPartida = finalFases;
  } else if (ptoPartida > finalFases) {
    ptoPartida = 1;
  }
  marcoCreciendo.style.transform = `translateX(-${(ptoPartida - 1) * 100}%)`;
}

document.getElementById("fase-anterior").addEventListener("click", () => {
    ptoPartida--;
    pasarMiCrecimiento(ptoPartida);
});

document.getElementById("fase-siguiente").addEventListener("click", () => {
    ptoPartida++;
    pasarMiCrecimiento(ptoPartida);
});

for (let i = 1; i <= finalFases; i++) {
  const faseCreciendo = document.createElement("img");
  faseCreciendo.src = `./img/Creciendo/${i}.jpg`;
  marcoCreciendo.appendChild(faseCreciendo);
}