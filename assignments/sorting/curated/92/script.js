// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100;

const visualizer = document.getElementById("vis-123456");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

// The assignment note asked LLMs to use onchange instead of oninput.
speedSlider.onchange = function () {
    var_speed = Number(speedSlider.value);
    speedValue.textContent = var_speed + " ms";
};

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

bubbleSort(array);

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const aux = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = aux;
                swapped = true;

                updateBars();
                await sleep(var_speed);
            }
        }
    } while (swapped);

    await rideMotorcycle();
}

async function rideMotorcycle() {
    const motorcycle = document.createElement("div");
    motorcycle.classList.add("motorcycle");
    motorcycle.textContent = "🏍️";
    visualizer.appendChild(motorcycle);

    const bars = document.getElementsByClassName("bar");
    const visualizerWidth = visualizer.offsetWidth;
    const visualizerHeight = visualizer.offsetHeight;
    const totalSteps = bars.length - 1;

    for (let i = 0; i < bars.length; i++) {
        const x = (i / totalSteps) * visualizerWidth;
        const barHeight = parseFloat(bars[i].style.height) / 100 * visualizerHeight;

        motorcycle.style.left = x + "px";
        motorcycle.style.bottom = (barHeight + 12) + "px";

        await sleep(Math.max(20, var_speed));
    }
}
