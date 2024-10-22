const pantallaAlbum = document.getElementById('imgs-album');
const flechaIzquierda2 = document.getElementById("flecha-izquierda2");
const flechaDerecha2 = document.getElementById("flecha-derecha2");

const cupoImagenes2 = 18;
let presente2 = 1;

function cambiarImagen2(cont2) {
  if (presente2 < 1) {
    presente2 = cupoImagenes2;
  } else if (presente2 > cupoImagenes2) {
    presente2 = 1;
  }
  pantallaAlbum.style.transform = `translateX(-${(presente2 - 1) * 100}%)`;
}

flechaIzquierda2.addEventListener("click", () => {
  presente2--;
  cambiarImagen2(presente2);
});

flechaDerecha2.addEventListener("click", () => {
  presente2++;
  cambiarImagen2(presente2);
});

for (let i = 1; i <= cupoImagenes2; i++) {
  const marco2 = document.createElement("img");
  marco2.src = `./img/Portada/${i}.jpg`;
  pantallaAlbum.appendChild(marco2);
}