const flechaIzquierda6 = document.getElementById("flecha-izquierda6");
const flechaDerecha6 = document.getElementById("flecha-derecha6");

let presenteVideo2 = 1;
const totalPaisVideo2 = 4;
var primerVideoPaisId2 = 's1YN5d8BUlo';
var player;

function playerGo2(ident2) {
    if(player) {
        player.loadVideoById(ident2);
    }else {
        player = new YT.Player('videos-pais2', {
            videoId: ident2, // Reemplaza ID_DEL_VIDEO con el ID de tu video de YouTube
            playerVars: {
                'autoplay': 0, // Configura si el video se reproduce automáticamente (0 o 1)
                'controls': 1, // Configura si se muestran los controles del reproductor (0 o 1)
                'rel': 0, // Configura si se muestran videos relacionados al final (0 o 1)
                'showinfo': 0 // Configura si se muestra el título del video y la barra de reproducción al inicio (0 o 1)
            }
        });
    }
}

function obtenerVideoId2(indexP2) {
    switch(indexP2) {
        case 1:
            return 's1YN5d8BUlo';
        case 2:
            return 'eiqsB64eVO4';
        case 3:
            return 'tq02Cn10p9E';
        case 4:
            return '3gLSZA5vM1o';
    }
}

function reproductorVideoPais2(contP2) {

    if(contP2 < 1) {
        contP2 = totalPaisVideo2;
    }else if(contP2 > totalPaisVideo2) {
        contP2 = 1;
    }

    var videoPaisId = obtenerVideoId2(contP2);
    playerGo2(videoPaisId);
    presenteVideo2 = contP2;
}

flechaIzquierda6.addEventListener("click", () => {
    presenteVideo2--;
    reproductorVideoPais2(presenteVideo2);
});

flechaDerecha6.addEventListener("click", () => {
    presenteVideo2++;
    reproductorVideoPais2(presenteVideo2);
});

playerGo2(primerVideoPaisId2);
