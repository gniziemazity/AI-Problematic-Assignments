// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100;

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");
const motorcycle = document.getElementById("motorcycle");
const speedValue = document.getElementById("speedValue");

for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

bubbleSort(array);

function changeSpeed(value) {
    var_speed = Number(value);
    speedValue.textContent = var_speed + " ms";
}

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

    await motorcycleJump();
}

async function motorcycleJump() {
    const bars = document.getElementsByClassName("bar");
    const visualizerHeight = visualizer.clientHeight;

    motorcycle.style.opacity = "1";

    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        const x = bar.offsetLeft + bar.offsetWidth / 2 - 14;
        const barHeight = bar.offsetHeight;
        const y = visualizerHeight - barHeight + 4;

        motorcycle.style.transform = `translate(${x}px, ${y - 45}px)`;
        await sleep(Math.max(20, var_speed / 2));
    }

    motorcycle.style.transform = `translate(${visualizer.clientWidth + 20}px, -20px)`;
    await sleep(300);
    motorcycle.style.opacity = "0";
}
