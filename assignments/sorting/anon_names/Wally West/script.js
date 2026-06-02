// global variables
const count = 50;
const array = new Array(count);
let speed = 0

for (let i = 0; i < count; i++) {
    array[i] = Math.random();   // numbers between 0-1, such as 0.2, 0,75 etc.
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%"; /* + is string concatenation because the 2nd item is a string */
}

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
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        } 
    } while (swapped);

const bars = document.getElementsByClassName("bar");

const mcycle = document.createElement("div");
mcycle.classList.add("mcycle");
mcycle.innerHTML = "🏍️";

bars[0].appendChild(mcycle);

async function moveMotorcycle() {
    for (let i = 1; i < bars.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100)); // The delay between moving from 1 bar to another "How fast the motorcycle moves on the screen"
        bars[i].appendChild(mcycle);

        mcycle.style.transform = "scaleX(-1) rotate(10deg)";

        await new Promise(resolve => setTimeout(resolve, 25));

        mcycle.style.transform = "scaleX(-1) rotate(0deg)";

    }
}
moveMotorcycle();
} 

let slider = document.getElementById("rangeSlider");
let output = document.getElementById("ms");

output.innerHTML = slider.value;
speed = Number(slider.value);

function chooseSpeed () {
    output.innerHTML = this.value;
    speed = Number(this.value);
}

slider.oninput = chooseSpeed;
