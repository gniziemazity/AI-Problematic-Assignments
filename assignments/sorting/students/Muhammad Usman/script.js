// global variables
const count = 100;
const array = new Array(count);
var var_speed = 100; // controls animation speed in milliseconds

// Connect slider
const speedSlider = document.getElementById("speedRange");
speedSlider.oninput = function() {
    var_speed = parseInt(this.value); // update global speed
};

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");
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
        bars[i].style.height = array[i] * 120 + "%";
    }
}
// create motorcycle element
const motoContainer = document.getElementById("motorcycle-container");
const motorcycle = document.createElement("div");
motorcycle.id = "motorcycle";
motorcycle.textContent = "🏍️";
motoContainer.appendChild(motorcycle);

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
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    // Sorting finished → animate motorcycle
    await animateMotorcycle();
}


async function animateMotorcycle() {
    const bars = document.getElementsByClassName("bar");
    const containerHeight = visualizer.clientHeight;

    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        const barHeight = bar.offsetHeight;

        // Set horizontal position (left)
        motorcycle.style.left = bar.offsetLeft + "px";

        // Set vertical position (top) so bike rides on bar top, adjust 5px above for better visual
        motorcycle.style.top = (containerHeight - barHeight - motorcycle.offsetHeight - (-15)) + "px";

        // Wait for the transition to complete before moving to next bar
        await new Promise(resolve => setTimeout(resolve, 70));  // match CSS transition duration
    }
}
