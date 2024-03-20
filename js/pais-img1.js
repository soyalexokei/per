const pantallaPais1 = document.getElementById('imgs-pais1');
const flechaIzquierda3 = document.getElementById("flecha-izquierda3");
const flechaDerecha3 = document.getElementById("flecha-derecha3");

const totalPais1 = 152;
let presente3 = 1;

function reproduccionVideos1(contP1) {
  var videoPaisId = obtenerVideoId1(presente3);
  playerGo1(videoPaisId);
}

function cambiarImagen3(cont3) {
  pantallaPais1.style.transform = `translateX(-${(presente3 - 1) * 100}%)`;
}

flechaIzquierda3.addEventListener("click", () => {
    presente3--;
    if(presente3 >= 1 && presente3 <= totalPais1-10) {
      cambiarImagen3(presente3);
    }else if(presente3 >= 153 && presente3 <= totalPais1) {
      reproduccionVideos1(presente3);
    }else if(presente3 < 1) {
      presente3 = totalPais1;
      reproduccionVideos1(presente3);
    }
});

flechaDerecha3.addEventListener("click", () => {
  presente3++;
  if(presente3 >= 1 && presente3 <= totalPais1-10) {
    cambiarImagen3(presente3);
  }else if(presente3 >= 153 && presente3 <= totalPais1) {
    reproduccionVideos1(presente3);
  }else if(presente3 > totalPais1) {
    presente3 = 1;
    cambiarImagen3(presente3);
  }
});

for (let i = 1; i <= totalPais1-9; i++) {
  if(i === 153) {
    playerGo1(primerIDpais1);
  }else {
    const marco3 = document.createElement("img");
    marco3.src = `./img/USA-2019/${i}.jpg`;
    pantallaPais1.appendChild(marco3);
  }
}