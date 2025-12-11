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
            responsive: false, // respetar el tamaño del canvas
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { display: false },
                    border: { color: "black", width: 2 }
                },
                y: {
                    min: 0,
                    max: 50,
                    title: {
                        display: true,
                        text: "Porcentaje de hogares (%)"
                    },
                    border: { color: "black", width: 2 }
                }
            }
        }
    };

    const ctx = document.getElementById("barras").getContext("2d");
    new Chart(ctx, config);
}
