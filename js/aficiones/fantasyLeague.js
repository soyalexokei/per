//-- Variables.
var imagenesIDfantasyLeague =
[
    "https://i.postimg.cc/PJv3nfBf/1.png",
    "https://i.postimg.cc/MHfPJZhp/2.png",
    "https://i.postimg.cc/hvQyR4Hj/3.png",
    "https://i.postimg.cc/sxG6Cft2/4.png",
    "https://i.postimg.cc/wMRfYxSq/5.png",
    "https://i.postimg.cc/vTxqw8pH/6.png",
    "https://i.postimg.cc/8cfKgkqc/7.png",
];

  var primerafantasyLeague = 1;
  var pantallafantasyLeague = document.getElementById("ver-fantasyLeague");
  var imgfantasyLeague = document.createElement("img");
  var totalfantasyLeague = imagenesIDfantasyLeague.length;
  
  function mostrarfantasyLeague(auxfantasyLeague) {
    //-- Limpiar la pantalla.
    pantallafantasyLeague.innerHTML = "";
    imgfantasyLeague.src = imagenesIDfantasyLeague[auxfantasyLeague-1];
    pantallafantasyLeague.appendChild(imgfantasyLeague);
  }
  
  function imgAnteriorfantasyLeague() {
    if(primerafantasyLeague > 1) {
        primerafantasyLeague--;
    }else {
        primerafantasyLeague = totalfantasyLeague;
    }
    mostrarfantasyLeague(primerafantasyLeague);
  }
  
  function imgSiguientefantasyLeague() {
    if(primerafantasyLeague < totalfantasyLeague) {
        primerafantasyLeague++;
    }else {
        primerafantasyLeague = 1;
    }
    mostrarfantasyLeague(primerafantasyLeague);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-fantasyLeague").addEventListener("click", imgAnteriorfantasyLeague);
  //-- Pulsar flecha derecha.
  document.getElementById("der-fantasyLeague").addEventListener("click", imgSiguientefantasyLeague);
  
  //-- Punto de inicio del programa.
  mostrarfantasyLeague(primerafantasyLeague);