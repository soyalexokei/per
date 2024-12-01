//-- Variables.
var videosIDcookingTV =
[
  "https://www.youtube.com/embed/gE9h_h4qizI?autoplay=0&loop=1&playlist=gE9h_h4qizI&controls=0&rel=0",
  "https://www.youtube.com/embed/eKV4rzTYp5g?autoplay=0&loop=1&playlist=eKV4rzTYp5g&controls=0&rel=0"
];
  var primeracookingTV = 1;
  var pantallacookingTV = document.getElementById("ver-cookingTV");
  var iframecookingTV = document.createElement("iframe");
  
  //-- Ctes.
  const totalcookingTV = 2;
  
  function mostrarcookingTV(auxcookingTV) {
    pantallacookingTV.innerHTML = "";
    iframecookingTV.src = videosIDcookingTV[auxcookingTV-1];
    iframecookingTV.width = "400";
    iframecookingTV.height = "533";
    iframecookingTV.setAttribute("allowFullscreen", "false");
    pantallacookingTV.appendChild(iframecookingTV);
  }
  
  function imgAnteriorcookingTV() {
    if(primeracookingTV > 1) {
        primeracookingTV--;
    }else {
        primeracookingTV = totalcookingTV;
    }
    mostrarcookingTV(primeracookingTV);
  }
  
  function imgSiguientecookingTV() {
    if(primeracookingTV < totalcookingTV) {
        primeracookingTV++;
    }else {
        primeracookingTV = 1;
    }
    mostrarcookingTV(primeracookingTV);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-cookingTV").addEventListener("click", imgAnteriorcookingTV);
  //-- Pulsar flecha derecha.
  document.getElementById("der-cookingTV").addEventListener("click", imgSiguientecookingTV);
  
  //-- Punto de inicio del programa.
  mostrarcookingTV(primeracookingTV);