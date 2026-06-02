// GLOBAL SPEED VARIABLE
let var_speed = 100;

function changeSpeed(value) {
    var_speed = Number(value);
}

const count = 50;
const array = new Array(count);

for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

const visualizer = document.getElementById("vis-123456");

// Create bars
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
    visualizer.appendChild(bar);
}

bubbleSort(array);

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

                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;

                swapped = true;

                updateBars();
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    rideMotorcycle();
}

async function rideMotorcycle() {
    const bike = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");

    bike.style.display = "block";

    for (let i = 0; i < bars.length; i++) {

        const bar = bars[i];

        // Move horizontally
        bike.style.left = bar.offsetLeft + "px";

        // Move vertically (go over bar height)
        const barHeight = bar.offsetHeight;
        bike.style.bottom = barHeight + "px";

        await new Promise(resolve => setTimeout(resolve, 40));
    }
}