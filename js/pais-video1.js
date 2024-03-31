const flechaIzquierda4 = document.getElementById("flecha-izquierda4");
const flechaDerecha4 = document.getElementById("flecha-derecha4");

let presenteVideo1 = 1;
const totalPaisVideo1 = 18;
var primerVideoPaisId = 'nf1kb3TSD9w';
var player;

function playerGo(ident) {
    if(player) {
        player.loadVideoById(ident);
    }else {
        player = new YT.Player('videos-pais1', {
            videoId: ident, // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
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
        case 1:
            return 'nf1kb3TSD9w';
        case 2:
            return '6E8OuGFDB8s';
        case 3:
            return 'jA_PeI3VieM';
        case 4:
            return '-X-8jDfjExo';
        case 5:
            return 'zkhfF_SHNjA';
        case 6:
            return 'E2e1P1dsUYg';
        case 7:
            return 'Abq0iuBNCBU';
        case 8:
            return 'N4dxwAgW_X4';
        case 9:
            return 'sr1pmvg9KIs';
        case 10:
            return 'j-K_xTuppJQ';
        case 11:
            return '50TjMT4zGrc';
        case 12:
            return 'DW--iP-CleY';
        case 13:
            return 'AY6cu8ShCQA';
        case 14:
            return 'VMuzCFVrCgQ';
        case 15:
            return 'MX_iH72HrKE';
        case 16:
            return 'r0sSaHApP8w';
        case 17:
            return 'kBAjLuGFMw0';
        case 18:
            return '2ZReINrYpKQ';
    }
}

function reproductorVideoPais1(contP1) {

    if(contP1 < 1) {
        contP1 = totalPaisVideo1;
    }else if(contP1 > totalPaisVideo1) {
        contP1 = 1;
    }

    var videoPaisId = obtenerVideoId1(contP1);
    playerGo(videoPaisId);
    presenteVideo1 = contP1;
}

flechaIzquierda4.addEventListener("click", () => {
    presenteVideo1--;
    reproductorVideoPais1(presenteVideo1);
});

flechaDerecha4.addEventListener("click", () => {
    presenteVideo1++;
    reproductorVideoPais1(presenteVideo1);
});

playerGo(primerVideoPaisId);