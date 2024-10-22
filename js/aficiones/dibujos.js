const alzadaMax = 2;
let alzadaInicial = 1;

function cambiarArteAlzado(auxAlzada) {
  if (alzadaInicial < 1) {
    alzadaInicial = alzadaMax;
  } else if (alzadaInicial > alzadaMax) {
    alzadaInicial = 1;
  }
  document.getElementById("imgs-aficion2").style.transform = `translateX(-${(alzadaInicial - 1) * 100}%)`;
}

document.getElementById("izq-alzada").addEventListener("click", () => {
    alzadaInicial--;
    cambiarArteAlzado(alzadaInicial);
});

document.getElementById("der-alzada").addEventListener("click", () => {
    alzadaInicial++;
    cambiarArteAlzado(alzadaInicial);
});

for (let i = 1; i <= alzadaMax; i++) {
  const marcoAlzado = document.createElement("img");
  marcoAlzado.src = `./img/Arte/${i}.jpg`;
  document.getElementById("imgs-aficion2").appendChild(marcoAlzado);
}