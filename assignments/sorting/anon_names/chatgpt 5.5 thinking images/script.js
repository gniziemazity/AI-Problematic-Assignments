// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100;

const visualizer = document.getElementById("vis-123456");
const speedValue = document.getElementById("speed-value");

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

const motorcycle = document.createElement("div");
motorcycle.id = "motorcycle";
motorcycle.textContent = "🏍️";
motorcycle.style.display = "none";
visualizer.appendChild(motorcycle);

bubbleSort(array);

function changeSpeed(value) {
    var_speed = Number(value);
    speedValue.textContent = var_speed;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

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
                await sleep(var_speed);
            }
        }
    } while (swapped);

    await rideMotorcycle();
}

async function rideMotorcycle() {
    const bars = document.getElementsByClassName("bar");
    motorcycle.style.display = "block";

    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        const x = bar.offsetLeft + bar.offsetWidth / 2;
        const y = bar.offsetTop - 30;

        motorcycle.style.left = x + "px";
        motorcycle.style.top = y + "px";

        // The motorcycle uses the same speed slider, but a little faster
        // so it looks like it is riding smoothly over the finished bars.
        await sleep(Math.max(20, var_speed / 2));
    }

    motorcycle.style.left = visualizer.offsetWidth + 30 + "px";
    motorcycle.style.top = "-30px";
    await sleep(500);
    motorcycle.style.display = "none";
}
