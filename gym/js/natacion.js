/* Variables de valor de cada zona del cuerpo */

/* Crear un contexto para el gráfico */
var marco = document.getElementById('grafico-progresion-natacion').getContext('2d');

var grafico = new Chart(marco,
    {
        type: 'line',
        data: {
            labels: ['', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', ''],
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