// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100; // animation speed (dynamic)

// generate random values
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// get visualizer container
const visualizer = document.getElementById("vis-2504638");

// slider and display
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

// update speed dynamically and invert: right = faster
speedSlider.oninput = function() {
    var_speed = 510 - Number(this.value);
    speedValue.textContent = this.value;
};

// create bars
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

// start bubble sort
bubbleSort(array);

// update bars
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

// bubble sort with animation
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

    // After sorting, run motorcycle animation
    animateMotorcycleClimb();
}

// Motorcycle climbs bars smoothly
function animateMotorcycleClimb() {
    const bars = document.getElementsByClassName("bar");
    if (bars.length === 0) return;

    const moto = document.createElement("div");
    moto.id = "motorcycle";
    moto.textContent = "🏍️";
    visualizer.appendChild(moto);

    let x = bars[0].offsetLeft;
    const end = bars[bars.length - 1].offsetLeft;
    const step = 2; // pixels per frame

    function move() {
        if (x >= end) {
            visualizer.removeChild(moto);
            return;
        }

        // Find the bar under current x
        let nearestIndex = 0;
        for (let i = 0; i < bars.length; i++) {
            if (bars[i].offsetLeft <= x) nearestIndex = i;
        }

        const bar = bars[nearestIndex];
        const barHeight = bar.offsetHeight;

        // Position motorcycle above the top of the bar
        moto.style.left = x + "px";
        moto.style.top = (visualizer.offsetHeight - barHeight - 30) + "px";

        x += step;
        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);
}
