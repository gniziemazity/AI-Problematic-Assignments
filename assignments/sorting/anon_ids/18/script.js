// Global variables
const count = 50;
const array = new Array(count);

// Speed variable
let var_speed = 20;

// Change speed from slider
function changeSpeed(value) {
    var_speed = parseInt(value);
}


for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// Create bars
const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
    
}
bubbleSort(array);

// Update bars
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

// Motorcycle ride animation on top of bars
async function motorcycleRide() {
    const motor = document.getElementById("motorcycle");
    motor.style.display = "block";

    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length; i++) { 
        const bar = bars[i];

        // Horizontal position on current bar
        motor.style.left = bar.offsetLeft + "px";

        // Vertical position on top of the bar
        motor.style.top = (bar.offsetTop - motor.offsetHeight) + "px";

        await new Promise(resolve => setTimeout(resolve, 80));
    }
}

// Bubble Sort
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

                await new Promise(resolve =>
                    setTimeout(resolve, var_speed)
                );
            }
        }

    } while (swapped);

// Motorcycle ride animation on top of bars
    await motorcycleRide();

}

// Start sorting
