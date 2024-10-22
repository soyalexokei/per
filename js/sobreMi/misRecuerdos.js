const pantallaMisRecuerdos = document.getElementById('imgs-mis-recuerdos');

const finalImgs = 12;
let inicial0 = 1;

function pasarDeImg(aux) {
  if (inicial0 < 1) {
    inicial0 = finalImgs;
  } else if (inicial0 > finalImgs) {
    inicial0 = 1;
  }
  pantallaMisRecuerdos.style.transform = `translateX(-${(inicial0 - 1) * 100}%)`;
}

document.getElementById("ve-anterior").addEventListener("click", () => {
    inicial0--;
    pasarDeImg(inicial0);
});

document.getElementById("ve-siguiente").addEventListener("click", () => {
    inicial0++;
    pasarDeImg(inicial0);
});

for (let i = 1; i <= finalImgs; i++) {
  const expander = document.createElement("img");
  expander.src = `./img/Recuerdos/${i}.jpg`;
  pantallaMisRecuerdos.appendChild(expander);
}