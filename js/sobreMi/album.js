//-- Variables.
var imagenesIDalbum =
[
  "https://i.postimg.cc/bv5N8LcP/1.jpg",
  "https://i.postimg.cc/RZXZp4gN/2.jpg",
  "https://i.postimg.cc/BvbQdkzN/3.jpg",
  "https://i.postimg.cc/L8HsVnBc/4.jpg",
  "https://i.postimg.cc/kMKX3xjr/5.jpg",
  "https://i.postimg.cc/C5GFGgZM/6.jpg",
  "https://i.postimg.cc/C1fMKDSq/7.jpg",
  "https://i.postimg.cc/NFqs2MjP/8.jpg",
  "https://i.postimg.cc/15SR9fT8/9.jpg",
  "https://i.postimg.cc/T3YRDBTG/10.jpg",
  "https://i.postimg.cc/8PbpsTQt/11.jpg",
  "https://i.postimg.cc/pdmR0896/12.jpg",
  "https://i.postimg.cc/HkZT43LM/13.jpg",
  "https://i.postimg.cc/nLNZNzBc/14.jpg",
  "https://i.postimg.cc/ZR3ZmSxP/15.jpg",
  "https://i.postimg.cc/prHvX6sw/16.jpg",
  "https://i.postimg.cc/7hnkCncf/17.jpg",
  "https://i.postimg.cc/zDC5PqB8/18.jpg",
  "https://i.postimg.cc/9MH1L1md/19.png",
  "https://i.postimg.cc/ydSCwMvr/20.png", "https://i.postimg.cc/0N4qXkdw/21.png", "https://i.postimg.cc/Dz0TcJsh/22.png",
  "https://i.postimg.cc/rw8cKYwK/23.png", "https://i.postimg.cc/VkDwMBJ4/24.png", "https://i.postimg.cc/PrbTfkhg/25.png",
  "https://i.postimg.cc/WbcsP4Rm/26.png", "https://i.postimg.cc/XNCnhCP7/27.png", "https://i.postimg.cc/qqy0CPKC/28.png",
  "https://i.postimg.cc/W3QTzNdv/29.png", "https://i.postimg.cc/50HffYNg/30.png", "https://i.postimg.cc/q7DkfX0g/31.png",
  "https://i.postimg.cc/0Ny8HXTL/32.png", "https://i.postimg.cc/L8T9DFbt/33.png", "https://i.postimg.cc/521982n9/34.png",
  "https://i.postimg.cc/9FyF47PN/35.png", "https://i.postimg.cc/jqpSdXf7/36.png", "https://i.postimg.cc/kM65mZ2C/37.png",
  "https://i.postimg.cc/t7QwQ7Ys/38.png", "https://i.postimg.cc/GtsV5vh0/39.png", "https://i.postimg.cc/nL0yjHwW/40.png",
  "https://i.postimg.cc/jjxVSWvN/41.png", "https://i.postimg.cc/x1yDQGGn/42.png", "https://i.postimg.cc/4xTkj29W/43.png",
  "https://i.postimg.cc/c43G9GrK/44.png", "https://i.postimg.cc/66gNfp5J/45.png", "https://i.postimg.cc/tJKQq2mC/46.png",
  "https://i.postimg.cc/1Xn11LBj/47.png", "https://i.postimg.cc/NMPvVg6X/48.png", "https://i.postimg.cc/QtMr0BTs/49.png",
  "https://i.postimg.cc/hGsBL8hp/50.png", "https://i.postimg.cc/wBgzR4x1/51.png", "https://i.postimg.cc/7ZgD6r4v/52.png",
  "https://i.postimg.cc/cLq004VM/53.png", "https://i.postimg.cc/sDGskZ0g/54.png", "https://i.postimg.cc/3rc3fZ1q/55.png",
  "https://i.postimg.cc/sxqyBV1z/56.png", "https://i.postimg.cc/RFCvys2k/57.png", "https://i.postimg.cc/SKfyZF1L/58.png",
  "https://i.postimg.cc/nrCpcsFT/59.png", "https://i.postimg.cc/SKhS7NdN/60.png", "https://i.postimg.cc/L8f41Zzb/61.png",
  "https://i.postimg.cc/4NYxX0nZ/62.png", "https://i.postimg.cc/vHCHTv6n/63.png", "https://i.postimg.cc/qBb7VrJj/64.png"

];
  var primeraalbum = 1;
  var pantallaalbum = document.getElementById("ver-album");
  var imgalbum = document.createElement("img");
  
  //-- Ctes.
  const totalalbum = 64;
  
  function mostraralbum(auxalbum) {
    
    //-- Limpiar la pantalla.
    pantallaalbum.innerHTML = "";
  
    imgalbum.src = imagenesIDalbum[auxalbum-1];
    pantallaalbum.appendChild(imgalbum);
  }
  
  function imgAnterioralbum() {
    if(primeraalbum > 1) {
      primeraalbum--;
    }else {
      primeraalbum = totalalbum;
    }
    mostraralbum(primeraalbum);
  }
  
  function imgSiguientealbum() {
    if(primeraalbum < totalalbum) {
      primeraalbum++;
    }else {
      primeraalbum = 1;
    }
    mostraralbum(primeraalbum);
  }
  
  //-- Pulsar flecha izquierda.
  document.getElementById("izq-album").addEventListener("click", imgAnterioralbum);
  //-- Pulsar flecha derecha.
  document.getElementById("der-album").addEventListener("click", imgSiguientealbum);
  
  //-- Punto de inicio del programa.
  mostraralbum(primeraalbum);