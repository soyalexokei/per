//-- Variables.
var videosIDsportTV =
[
  "https://www.youtube.com/embed/wbfqFRH3cOQ?autoplay=0&loop=1&playlist=wbfqFRH3cOQ&controls=0&rel=0",
  "https://www.youtube.com/embed/cWm0tmkpKlk?autoplay=0&loop=1&playlist=cWm0tmkpKlk&controls=0&rel=0",
  "https://www.youtube.com/embed/BlXqbzxGnN4?autoplay=0&loop=1&playlist=BlXqbzxGnN4&controls=0&rel=0",
  "https://www.youtube.com/embed/FmLeT9L7-kI?autoplay=0&loop=1&playlist=FmLeT9L7-kI&controls=0&rel=0",
  "https://www.youtube.com/embed/7wK_Xh8mc0A?autoplay=0&loop=1&playlist=7wK_Xh8mc0A&controls=0&rel=0",
  "https://www.youtube.com/embed/xQKtnr2mz2M?autoplay=0&loop=1&playlist=xQKtnr2mz2M&controls=0&rel=0",
  "https://www.youtube.com/embed/8CfoSv4F3UQ?autoplay=0&loop=1&playlist=8CfoSv4F3UQ&controls=0&rel=0",
  "https://www.youtube.com/embed/_wVg1iJNvRo?autoplay=0&loop=1&playlist=_wVg1iJNvRo&controls=0&rel=0",
  "https://www.youtube.com/embed/cFIaq5p4OLU?autoplay=0&loop=1&playlist=cFIaq5p4OLU&controls=0&rel=0",
  "https://www.youtube.com/embed/XqxNqsXgjek?autoplay=0&loop=1&playlist=XqxNqsXgjek&controls=0&rel=0",
  "https://www.youtube.com/embed/wwJRR_DJOSU?autoplay=0&loop=1&playlist=wwJRR_DJOSU&controls=0&rel=0"
];
  var primerasportTV = 1;
  var pantallasportTV = document.getElementById("ver-sportTV");
  var iframesportTV = document.createElement("iframe");
  
  //-- Ctes.
  const totalsportTV = 11;
  
  function mostrarsportTV(auxsportTV) {
    pantallasportTV.innerHTML = "";
    iframesportTV.src = videosIDsportTV[auxsportTV-1];
    iframesportTV.width = "500";
    iframesportTV.height = "389";
    iframesportTV.setAttribute("allowFullscreen", "false");
    pantallasportTV.appendChild(iframesportTV);
  }
  
  function imgAnteriorsportTV() {
    if(primerasportTV > 1) {
        primerasportTV--;
    }else {
        primerasportTV = totalsportTV;
    }
    mostrarsportTV(primerasportTV);
  }
  
  function imgSiguientesportTV() {
    if(primerasportTV < totalsportTV) {
        primerasportTV++;
    }else {
        primerasportTV = 1;
    }
    mostrarsportTV(primerasportTV);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-sportTV").addEventListener("click", imgAnteriorsportTV);
  //-- Pulsar flecha derecha.
  document.getElementById("der-sportTV").addEventListener("click", imgSiguientesportTV);
  
  //-- Punto de inicio del programa.
  mostrarsportTV(primerasportTV);