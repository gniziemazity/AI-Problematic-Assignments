// Global variables
let var_speed = 100; // speed in milliseconds
const count = 50;
const array = new Array(count);

// Connect slider to var_speed
const speedSlider = document.getElementById("speedSlider");
speedSlider.onchange = () => {
    var_speed = Number(speedSlider.value);
};

// Fill array with random numbers
for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");

// Create bars
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

bubbleSort(array);

// Function to update bar heights
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

// Bubble sort with animation
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
                await new Promise(resolve => setTimeout(resolve, var_speed)); // use speed variable
            }
        }
    } while (swapped);
}

