// GLOBAL SPEED VARIABLE
var var_speed = 100;

// Update speed from slider
function updateSpeed(value) {
    var_speed = Number(value);
}

// Generate random bars
let values = [];
const barsContainer = document.getElementById("bars");
const moto = document.getElementById("motorcycle");

function generateBars() {
    values = [];
    barsContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        let height = Math.floor(Math.random() * 250) + 20;
        values.push(height);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = height + "px";
        barsContainer.appendChild(bar);
    }
}

generateBars();

// Bubble Sort with animation
async function startSort() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {

            if (values[j] > values[j + 1]) {
                // Swap values
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;

                // Swap heights visually
                bars[j].style.height = values[j] + "px";
                bars[j + 1].style.height = values[j + 1] + "px";
            }

            await new Promise(resolve => setTimeout(resolve, var_speed));
        }
    }

    animateMotorcycleOnBars();
}

// Motorcycle moves ON TOP of bars
async function animateMotorcycleOnBars() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length; i++) {
        let rect = bars[i].getBoundingClientRect();

        // Horizontal position (center of bar)
        let x = rect.left + rect.width / 2 - 20;

        // Vertical position (top of bar)
        let y = rect.top - 40;

        moto.style.left = x + "px";
        moto.style.top = y + "px";

        await new Promise(resolve => setTimeout(resolve, 150));
    }
}
