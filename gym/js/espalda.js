/* Nota de las 10 últimas semanas */
var Sem1espalda = 1;
var Sem2espalda = 1;
var Sem3espalda = 1;
var Sem4espalda = 2;
var Sem5espalda = 2;
var Sem6espalda = 2;
var Sem7espalda = 2;
var Sem8espalda = 2;
var Sem9espalda = 1;
var Sem10espalda = 2;

/* Realización de la media */
var totalEspalda = Sem1espalda + Sem2espalda + Sem3espalda + Sem4espalda + Sem5espalda + Sem6espalda + Sem7espalda + Sem8espalda + Sem9espalda + Sem10espalda;
var mediaEspalda = totalEspalda / 10;

/* Crear un contexto para el gráfico */
var marco = document.getElementById('grafico-progresion-espalda').getContext('2d');

var grafico = new Chart(marco,
    {
        type: 'line',
        data: {
            labels: ['', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', ''],
            datasets: [{
                label: 'Progresión',
                data: [, Sem1espalda, Sem2espalda, Sem3espalda, Sem4espalda, Sem5espalda, Sem6espalda, Sem7espalda, Sem8espalda, Sem9espalda, Sem10espalda, ],
                borderColor: 'blue',
                borderWidth: 5,
                fill: false
            },
            {
                label: 'Media',
                data: [mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda,mediaEspalda],// Valores constantes de la media
                borderColor: 'green',
                borderWidth: 5,
                fill: false,
                pointRadius: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 0.1,
                        min: 0,
                        max: 2,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    grid: {
                        display: true,
                        color: 'rgba(200, 200, 200, 0.2)' // Color de las barras
                    },
                    ticks: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });