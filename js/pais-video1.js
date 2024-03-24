const flechaIzquierda4 = document.getElementById("flecha-izquierda4");
const flechaDerecha4 = document.getElementById("flecha-derecha4");

var primerIDpais1 = '6E8OuGFDB8s';
var player;
const totalPaisVideo1 = 17;
let presenteVideo3 = 1;

function playerVideoOnDemand(kP1) {
    if(player) {
        player.loadVideoById(kP1);
    }else {
        player = new YT.Player('videos-pais1', {
            videoId: kP1, // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
            playerVars: {
                'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                'showinfo': 1 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
            }
        });
    }
}

function obtenerVideoId1(indexP1) {
    switch(indexP1) {
        case 1:
            return '6E8OuGFDB8s';
        case 2:
            return 'jA_PeI3VieM';
        case 3:
            return '-X-8jDfjExo';
        case 4:
            return 'zkhfF_SHNjA';
        case 5:
            return 'E2e1P1dsUYg';
        case 6:
            return 'Abq0iuBNCBU';
        case 7:
            return 'N4dxwAgW_X4';
        case 8:
            return 'sr1pmvg9KIs';
        case 9:
            return 'j-K_xTuppJQ';
        case 10:
            return '50TjMT4zGrc';
        case 11:
            return 'DW--iP-CleY';
        case 12:
            return 'AY6cu8ShCQA';
        case 13:
            return 'VMuzCFVrCgQ';
        case 14:
            return 'MX_iH72HrKE';
        case 15:
            return 'r0sSaHApP8w';
        case 16:
            return 'kBAjLuGFMw0';
        case 17:
            return '2ZReINrYpKQ';
    }
}

function reproduccionVideos1(contP1) {
    if(contP1 < 1) {
        contP1 = totalPaisVideo1;
    }else if(contP1 > totalPaisVideo1) {
        contP1 = 1;
    }

    var videoPaisId = obtenerVideoId1(contP1);
    playerVideoOnDemand(videoPaisId);
    presenteVideo3 = contP1;
}

flechaIzquierda4.addEventListener("click", () => {
    presenteVideo3--;
    reproduccionVideos1(presenteVideo3);
});

flechaDerecha4.addEventListener("click", () => {
    presenteVideo3++;
    reproduccionVideos1(presenteVideo3);
});

playerVideoOnDemand(primerIDpais1);