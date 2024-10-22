const pantallaAficion19 = document.getElementById("imgs-aficion19");

const loteImagenes19 = 10;
let estado19 = 1;

function intercalarImagen19(enum19) {
  if (estado19 < 1) {
    estado19 = loteImagenes19;
  } else if (estado19 > loteImagenes19) {
    estado19 = 1;
  }
  pantallaAficion19.style.transform = `translateX(-${(estado19 - 1) * 100}%)`;
}

document.getElementById("move-izquierda19").addEventListener("click", () => {
    estado19--;
    intercalarImagen19(estado19);
});

document.getElementById("move-derecha19").addEventListener("click", () => {
    estado19++;
    intercalarImagen19(estado19);
});

for (let i = 1; i <= loteImagenes19; i++) {
  const pergamino19 = document.createElement("img");
  pergamino19.src = `./img/StreetArt/${i}.jpg`;
  pantallaAficion19.appendChild(pergamino19);
}