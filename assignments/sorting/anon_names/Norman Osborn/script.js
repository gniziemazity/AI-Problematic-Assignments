// Global variables
const count = 50;
const array = [];
let var_speed = 200;

// Generate random values
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

bubbleSort(array);

function updateBars() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

async function bubbleSort(arr) {

    for (let j = 0; j < arr.length; j++) {

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
    }

    // Motorcycle animation
    const motorcycle = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");

    motorcycle.style.display = "block";

    for (let i = 0; i < bars.length; i++) {

        const bar = bars[i];

        motorcycle.style.left = bar.offsetLeft + "px";
        motorcycle.style.top = (visualizer.clientHeight - bar.offsetHeight - 30) + "px";

        await new Promise(resolve => setTimeout(resolve, 50));
    }

    motorcycle.style.display = "none";
}