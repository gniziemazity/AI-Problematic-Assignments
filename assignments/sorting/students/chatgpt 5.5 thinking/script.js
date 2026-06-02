// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100;

const visualizer = document.getElementById("vis-123456");
const barsContainer = document.getElementById("bars");
const motorcycle = document.getElementById("motorcycle");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

speedSlider.onchange = function () {
    var_speed = Number(speedSlider.value);
    speedValue.textContent = var_speed + " ms";
};

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    barsContainer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

bubbleSort(array);

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

async function bubbleSort(arr) {
    do {
        var swapped = false;
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

    await animateMotorcycle();
}

async function animateMotorcycle() {
    const bars = document.getElementsByClassName("bar");
    const visualizerBox = visualizer.getBoundingClientRect();
    const firstBarBox = bars[0].getBoundingClientRect();
    const lastBarBox = bars[bars.length - 1].getBoundingClientRect();

    motorcycle.style.visibility = "visible";

    for (let i = 0; i < bars.length; i++) {
        const barBox = bars[i].getBoundingClientRect();
        const x = barBox.left - visualizerBox.left + barBox.width / 2;
        const y = barsContainer.offsetHeight * array[i] + 8;

        motorcycle.style.left = x + "px";
        motorcycle.style.bottom = y + "px";

        await sleep(Math.max(20, var_speed / 2));
    }

    // Drive a little past the final bar so the motorcycle clearly finishes the jump.
    motorcycle.style.left = (lastBarBox.right - visualizerBox.left + 35) + "px";
    motorcycle.style.bottom = (barsContainer.offsetHeight * array[array.length - 1] + 8) + "px";

    await sleep(500);
    motorcycle.style.visibility = "hidden";
}
