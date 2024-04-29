var videosIDalemania = ["J-_pxu-SOlU", "PmSe815iPmo", "ewkwAVRY6Ks", "5RptBMUfhyM", "nrwwn3p55KI",
"viFpOsd7Dug", "xmebiFcO_4U", "0F4zmzF6nyg", "O8XNB15hZ6o", "OB1hMSRHt3s",
"4fLlLlGyNjE", "-Le9KJSsYKU", "BK6H2oxTNrg", "6w6yTnBimAc", "U5Hc6Sr2wAc",
"K8hW1A2rbsE", "mDsXUul_ZS0", "BGFpeR8qN4Q", "0tIrhYpvqgE", "xY8MVDiKifI",
"JJlMhq_HgkA", "q_uYnaAOaqg", "NTAdqPGMAUI", "g51-Loy63QU", "xD-iPgwGoVs",
"2fS5QkkTB80", "pS56xDCcp1A", "qkEQY5FwTkE", "98dpGg9Z46I", "e88AlDZ8Sn0",
"8n3sdNC-o34", "Alnpciaqubk", "V0XdgHFVgjw", "kvQ6evUGYNk", "z2dZI1lmVXM",
"y9GGVLOteew", "dOGIoXcAAPw", "CQ3Rs2nyfiU", "nG3gZ4KGrWg", "nLHrsxVVIYE", "fby2q1UXWj0", "7OUTKe477e0"];
var indiceAlemania = 0;

// Función para agregar videos al carrusel
function cargarVideos11() {

    var videosAlemania = document.getElementById("videos-pais11");
    videosAlemania.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDalemania[indiceAlemania];
    iframe.allowFullscreen = true;
    videosAlemania.appendChild(iframe);
}

document.getElementById("flecha-izquierda24").addEventListener("click", () => {
    indiceAlemania = (indiceAlemania - 1 + videosIDalemania.length) % videosIDalemania.length;
    cargarVideos11();
});

document.getElementById("flecha-derecha24").addEventListener("click", () => {
    indiceAlemania = (indiceAlemania + 1) % videosIDalemania.length;
    cargarVideos11();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#pais-video11').on('shown.bs.modal', function () {
    cargarVideos11();
});