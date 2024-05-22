var videosIDmadrid = ["pyTGEC9qEro", "BVl09J2nux4", "2A7ICCWIsUo", "uxVRRGmkTwA", "125z6e_nVns", "7TsBW0X_seQ", "wV05Z2CYhfs", "AVWWd7Q5cPY", "taM6oTve3OI", "Sd-Bm5_Qk9w", "FRHwam30ggk", "OYDg--KufrY",
"ndeK0DDIpH0", "0H6773vrLC8", "ZeqU6ZkxusA", "84vp9pImamg", "7QnE29YSYrk", "NDCpSP79g-o", "7CrhFzJeNIw", "wtLmC61HnOA", "ASOimU9__iQ"];
var indiceMadrid = 0;

// Función para agregar videos al carrusel
function ponerVideos0() {

    var videosMadrid = document.getElementById("pantalla-vid0");
    videosMadrid.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videosIDmadrid[indiceMadrid];
    iframe.allowFullscreen = true;
    videosMadrid.appendChild(iframe);
}

document.getElementById("go-left0").addEventListener("click", () => {
    indiceMadrid = (indiceMadrid - 1 + videosIDmadrid.length) % videosIDmadrid.length;
    ponerVideos0();
});

document.getElementById("go-right0").addEventListener("click", () => {
    indiceMadrid = (indiceMadrid + 1) % videosIDmadrid.length;
    ponerVideos0();
});

// Llamar a la función para cargar los videos cuando se muestre el modal
$('#provincia-vid0').on('shown.bs.modal', function () {
    ponerVideos0();
});