// Global variables
const count = 50;
const array = new Array(count);
var var_speed = 50; // ms delay between animation steps (controlled by slider)

// Initialize array with random values
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// Build bars
const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

// Speed slider wiring (using onchange per assignment instructions for LLMs)
const slider = document.getElementById("speed-slider");
const speedDisplay = document.getElementById("speed-display");

slider.onchange = function () {
    // Slider value: 1 (fast) to 100 (slow) → var_speed = slider value in ms
    var_speed = parseInt(this.value);
    speedDisplay.textContent = this.value;
};

function updateBars(highlightIndices = []) {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
        if (highlightIndices.includes(i)) {
            bars[i].classList.add("comparing");
        } else {
            bars[i].classList.remove("comparing");
        }
    }
}

async function bubbleSort(arr) {
    document.getElementById("status").textContent = "Sorting...";
    do {
        var swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const aux = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = aux;
                swapped = true;
                updateBars([i - 1, i]);
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    updateBars(); // clear highlights
    document.getElementById("status").textContent = "Sorted! 🏍️ Motorcycle incoming...";
    await runMotorcycle();
    document.getElementById("status").textContent = "Done!";
}

async function runMotorcycle() {
    const moto = document.getElementById("motorcycle");
    const container = document.getElementById("vis-container");
    const visEl = document.getElementById("vis-123456");
    const bars = document.getElementsByClassName("bar");

    moto.style.display = "block";

    const containerWidth = container.offsetWidth;
    const barCount = bars.length;

    // Animate left to right, passing over each bar
    for (let i = 0; i < barCount; i++) {
        const bar = bars[i];
        const barLeft = bar.offsetLeft + visEl.offsetLeft;
        const barHeight = bar.offsetHeight;

        // Position motorcycle just above the top of each bar
        // visEl top within container + visEl height - barHeight = bar top relative to container
        const visTop = visEl.offsetTop;
        const visHeight = visEl.offsetHeight;
        const barTopInContainer = visTop + (visHeight - barHeight);
        const motoTop = barTopInContainer - 36; // 36px = approx moto height

        moto.style.left = (barLeft - 10) + "px";
        moto.style.top = motoTop + "px";

        await new Promise(resolve => setTimeout(resolve, Math.max(10, var_speed * 0.5)));
    }

    // Ride off screen
    moto.style.left = (containerWidth + 50) + "px";
    await new Promise(resolve => setTimeout(resolve, 300));
    moto.style.display = "none";
    moto.style.left = "-40px";
    moto.style.top = "0px";
}

// Start sorting
bubbleSort(array);
