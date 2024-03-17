const pantallaPais1 = document.getElementById('imgs-pais1');
const flechaIzquierda3 = document.getElementById("flecha-izquierda3");
const flechaDerecha3 = document.getElementById("flecha-derecha3");

const totalPais1 = 162;
let presente3 = 1;
var primerIDpais1 = '-X-8jDfjExo';
var player;

function playerGo1(kP1) {
  if(player) {
      player.loadVideoById(kP1);
  }else {
      player = new YT.Player('imgs-pais1', {
          videoId: kP1, // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
          playerVars: {
              'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
              'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
              'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
              'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
          }
      });
  }
}

function obtenerVideoId1(indexP1) {
  switch(indexP1) {
      case 153:
        return '-X-8jDfjExo';
      case 154:
        return 'zkhfF_SHNjA';
      case 155:
        return 'E2e1P1dsUYg';
      case 156:
        return 'Abq0iuBNCBU';
      case 157:
        return 'N4dxwAgW_X4';
      case 158:
        return 'sr1pmvg9KIs';
      case 159:
        return 'j-K_xTuppJQ';
      case 160:
        return '50TjMT4zGrc';
      case 161:
        return 'DW--iP-CleY';
      case 162:
        return 'AY6cu8ShCQA';
  }
}

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