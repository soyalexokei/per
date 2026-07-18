const botones = document.querySelectorAll(".me-tabs button");
const contenidos = document.querySelectorAll(".me-content");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        contenidos.forEach(c => c.classList.remove("active"));
        botones.forEach(b => b.classList.remove("active"));

        document
            .getElementById(boton.dataset.target)
            .classList.add("active");

        boton.classList.add("active");

    });

});