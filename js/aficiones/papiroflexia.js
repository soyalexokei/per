const papiroMax = 8;
let papiroInicial = 1;

function cambiarPapiroflexia(auxPapiro) {
  if (papiroInicial < 1) {
    papiroInicial = papiroMax;
  } else if (papiroInicial > papiroMax) {
    papiroInicial = 1;
  }
  document.getElementById("imgs-aficion3").style.transform = `translateX(-${(papiroInicial - 1) * 100}%)`;
}

document.getElementById("izq-papiro").addEventListener("click", () => {
    papiroInicial--;
    cambiarPapiroflexia(papiroInicial);
});

document.getElementById("der-papiro").addEventListener("click", () => {
    papiroInicial++;
    cambiarPapiroflexia(papiroInicial);
});

for (let i = 1; i <= papiroMax; i++) {
  const marcoPapiro = document.createElement("img");
  marcoPapiro.src = `./img/Papiroflexia/${i}.jpg`;
  document.getElementById("imgs-aficion3").appendChild(marcoPapiro);
}