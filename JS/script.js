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


// menu

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.experiencia-item input[type="number"]');
    const totalPriceElement = document.getElementById("totalPrice");
    const buyButton = document.getElementById("buyFood");

    function calculateTotalPrice() {
        let totalPrice = 0;

        inputs.forEach((input) => {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value) || 0;
            totalPrice += price * quantity;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2) + " €";

        if (totalPrice > 0) {
            buyButton.classList.remove("disabled");
            buyButton.disabled = false;
        } else {
            buyButton.classList.add("disabled");
            buyButton.disabled = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("input", calculateTotalPrice);
        input.addEventListener("change", calculateTotalPrice);
    });

    // Si el botón se pulsa sin seleccionar entradas, muestra aviso
    buyButton.addEventListener("click", function (event) {
        const total = parseFloat(totalPriceElement.textContent);
        if (isNaN(total) || total === 0) {
            event.preventDefault();
            alert("Por favor selecciona al menos una entrada antes de continuar.");
        } else {
            alert("¡Gracias por tu compra! Total: " + total.toFixed(2) + " €");
        }
    });

    calculateTotalPrice();
});



// Abre el menu

function openMenu() {
    console.log("Función openMenu");
    document.getElementById("menu").firstElementChild.lastElementChild.style.left = "0";
}

// Cierra el menu

function closeMenu() {
    console.log("Función openMenu");
    document.getElementById("menu").firstElementChild.lastElementChild.style.left = "-100%";
}

// Abre la ventana modal

function openModal(figura) {
    console.log("Función openModal");
    // Buscamos la ventana modal
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    console.log("Función openModal");
    // Buscamos la ventana modal
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}