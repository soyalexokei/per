/* Variables de valor de cada zona del cuerpo */
var valorCalentamiento = document.getElementById('valor-calentamiento');
var valorCardio = document.getElementById('valor-cardio');
var valorEspalda1 = document.getElementById('valor-espalda1');
var valorEspalda2 = document.getElementById('valor-espalda2');
var valorEspalda3 = document.getElementById('valor-espalda3');
var valorEspalda4 = document.getElementById('valor-espalda4');
var valorBiceps1 = document.getElementById('valor-biceps1');
var valorBiceps2 = document.getElementById('valor-biceps2');

/* Crear un contexto para el gráfico */
var marco = document.getElementById('grafico-progresion').getContext('2d');

var grafico = new Chart(marco,
    {
        type: 'line',
        data: {
            labels: ['', 'Calentamiento', 'Cardio', 'Espalda', 'Bíceps', 'Pecho', 'Tríceps', 'Pierna', 'Hombro', 'Abdominales', 'Natación', 'Apnea', ''],
            datasets: [{
                label: 'Progresión',
                data: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 5,
                fill: false
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