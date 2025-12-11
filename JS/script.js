// 

function cargaGraficoBarras() {
    const datos = {
        labels: ["10:00", "12:00", "14:00", "16:00", "19:00", "21:00", "23:00"],
        datasets: [{
            label: "Afluencia de gente en los monumentos",
            backgroundColor: "#D81E5B",
            data: [70, 90, 20, 90, 70, 30, 10]
        }]
    };

    const config = {
        type: "bar",
        data: datos,
        options: {
            responsive: false, 
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { display: false },
                    border: { color: "black", width: 1 },
                    ticks: { font: { size: 10 } }
                },
                y: {
                    min: 0,
                    max: 100, // ajustar al máximo de tus datos
                    title: {
                        display: true,
                        text: "Afluencia (%)",
                        font: { size: 10 }
                    },
                    border: { color: "black", width: 1 },
                    ticks: { font: { size: 10 } }
                }
            },
            plugins: {
                legend: {
                    labels: { font: { size: 10 } }
                }
            }
        }
    };

    const ctx = document.getElementById("barras").getContext("2d");
    new Chart(ctx, config);
}

// Llamar la función cuando la página cargue
window.onload = cargaGraficoBarras;




// 

function shrinkHeader() {
    "use strict";
    var scroll = $(window).scrollTop();
    var threshold = $(window).height() / 2;
    if (scroll > threshold) {
        $("nav").css({
            "height": "3em",
            "background-color": "white"
        });
    } else {
        $("nav").css({
            "height": "7em",
            "background-color": "transparent"
        });
    }
}

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        shrinkHeader();
    });
});
