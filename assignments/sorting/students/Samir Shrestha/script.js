
// ite really hard to  show the motorcycle emoji (🏍️) going over the bars,
// so i got a little help from ai to understand the code and make the motorcycle emoji move over the bars.

// // Global variables
const count = 50;
const array = new Array(count);
let var_speed = 100;

const visualizer = document.getElementById("vis-2504670");
const motorcycle = document.getElementById("motorcycle");

// Generate random values
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// Create bars
function createBars() {
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = (array[i] * 100) + "%";
        visualizer.appendChild(bar);
    }
}

createBars();

// Update speed from slider
function updateSpeed(value) {
    var_speed = parseInt(value);
}

// Update bars
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = (array[i] * 100) + "%";
    }
}

async function bubbleSort(arr) {

    do {
        var swapped = false;

        for (let i = 1; i < arr.length; i++) {

            if (arr[i - 1] > arr[i]) {

                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;

                swapped = true;
                updateBars();

                await new Promise(resolve =>
                    setTimeout(resolve, var_speed)
                );
            }
        }

    } while (swapped);

    rideMotorcycle();
}

// Motorcycle animation
async function rideMotorcycle() {

    const bars = document.getElementsByClassName("bar");

    motorcycle.style.display = "block";

    for (let i = 0; i < bars.length; i++) {

        const barHeight = bars[i].offsetHeight;

        motorcycle.style.left = bars[i].offsetLeft + "px";
        motorcycle.style.bottom = barHeight + "px";

        await new Promise(resolve =>
            setTimeout(resolve, 40)
        );
    }
}

// Start sorting
bubbleSort(array);