let var_speed = 100;

function updateSpeed(value) {
    var_speed = Number(value);
}

const count = 50;
const array = new Array(count);

for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
    visualizer.appendChild(bar);
}

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
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
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    animateBike();
}

async function animateBike() {
    const bars = document.getElementsByClassName("bar");
    const bike = document.getElementById("bike");

    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];

        const x = bar.offsetLeft;
        const h = bar.offsetHeight;

        bike.style.left = x + "px";
        bike.style.bottom = h + "px";

        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

bubbleSort(array);