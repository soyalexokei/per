const pantallaAlbum = document.getElementById('imgs-album');
const flechaIzquierda2 = document.getElementById("flecha-izquierda2");
const flechaDerecha2 = document.getElementById("flecha-derecha2");

const totalImagenes2 = 6;
let imagenActual2 = 1;

function cambiarImagen2(cont2) {
  if (cont2 < 1) {
    cont2 = totalImagenes2;
  } else if (cont2 > totalImagenes2) {
    cont2 = 1;
  }
  pantallaAlbum.style.transform = `translateX(-${(cont2 - 1) * 100}%)`;
}

flechaIzquierda2.addEventListener("click", () => {
  imagenActual2--;
  cambiarImagen2(imagenActual2);
});

flechaDerecha2.addEventListener("click", () => {
  imagenActual2++;
  cambiarImagen2(imagenActual2);
});

for (let i = 1; i <= totalImagenes2; i++) {
  const imagen2 = document.createElement("img");
  imagen2.src = `./img/Portada/${i}.png`;
  pantallaAlbum.appendChild(imagen2);
}