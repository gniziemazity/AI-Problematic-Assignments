// Global variables
const count = 50;
const array = new Array(count);

// global variable-new 2nd question
let var_speed = 10;

// Change speed from slider
function changeSpeed(value) {
    var_speed = parseInt(value);
}

for (let i = 0; i < count; i++) {
    array[i] = Math.random();  // numbers between 0 and 1
}

const visualizer = document.getElementById("visualizer");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";/* + here is 
    string concatenation because 
    the second item "%" is a string */
    visualizer.appendChild(bar);
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

                await new Promise(resolve =>setTimeout(resolve, var_speed));
            }
        }

    } while (swapped);
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

        await new Promise(resolve => setTimeout(resolve,80)); // motorcycle speed
    }
}

// Start sorting and then motorcycle ride
bubbleSort(array).then(() => {
    motorcycleRide();
});