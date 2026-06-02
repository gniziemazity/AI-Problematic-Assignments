
// Global variables

const count = 50;
const array = new Array(count);
let var_speed = 100; 


// Create random array

for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

const visualizer = document.getElementById("vis-123456");

// Draw bars

for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
    visualizer.appendChild(bar);
}


// Update bar heights

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}


// Speed slider handler

function updateSpeed() {
    const sliderValue = document.getElementById("speedSlider").value;
    var_speed = 510 - sliderValue; 
}


// Bubble Sort

async function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swapped = true;

                updateBars();
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    // After sorting, run the motorcycle animation
    animateMoto();
}

bubbleSort(array);


// Motorcycle animation

function animateMoto() {
    const moto = document.createElement("div");
    moto.classList.add("moto");
    moto.textContent = "🏍️";
    document.body.appendChild(moto);

    let x = 0;
    const step = 10;

    const interval = setInterval(() => {
        moto.style.left = x + "px";
        moto.style.top = "150px";

        x += step;

        if (x > window.innerWidth) {
            clearInterval(interval);
            moto.remove();
        }
    }, 50);
}