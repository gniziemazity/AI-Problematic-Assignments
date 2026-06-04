// ----- global variables -----
var var_speed = 100; // delay in ms between sorting steps
const count = 50;
const array = new Array(count);

// ----- speed slider -----
const slider = document.getElementById("speed-slider");
const speedLabel = document.getElementById("speed-value");
slider.oninput = function () {
    var_speed = parseInt(slider.value);
    speedLabel.textContent = var_speed + " ms";
};

// ----- fill array with random numbers between 0 and 1 -----
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// ----- build the bars -----
const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

// ----- start sorting -----
bubbleSort(array);

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
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    // sorting is done -> drive the motorcycle over the bars
    rideMotorcycle();
}

async function rideMotorcycle() {
    // create the motorcycle element and put it inside the visualizer
    const moto = document.createElement("div");
    moto.classList.add("motorcycle");
    moto.textContent = "🏍️";
    visualizer.appendChild(moto);

    const bars = document.getElementsByClassName("bar");
    const visHeight = visualizer.clientHeight; // 200 px from CSS

    // move motorcycle bar by bar from left to right
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];

        // horizontal position: left edge of this bar inside the visualizer
        const barLeft = bar.offsetLeft;

        // vertical position: bottom is anchored to the top of the bar
        // array[i] is between 0 and 1, so multiply by container height
        const barHeight = array[i] * visHeight;

        moto.style.left = barLeft + "px";
        moto.style.bottom = barHeight + "px";

        await new Promise(resolve => setTimeout(resolve, var_speed));
    }
}
