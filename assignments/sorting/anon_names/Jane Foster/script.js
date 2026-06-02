// Requirement: Global variable named var_speed
var var_speed = 100;
const count = 50;
let array = new Array(count);

const visualizer = document.getElementById("vis-123456");

function init() {
    visualizer.innerHTML = '';
    for (let i = 0; i < count; i++) {
        array[i] = (i / count) + (Math.random() * 0.03); 
        const bar = document.createElement("div");
        bar.classList.add("bar");
        visualizer.appendChild(bar);
    }
    updateBars();
}

init();

// Update var_speed via slider onchange event 
function updateSpeed(val) {
    var_speed = 201 - val; 
}

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = (array[i] * 100) + "%";
    }
}

async function startVisualizer() {
    document.getElementById("motorcycle").style.display = "none";
    
    // Shuffle initially
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    updateBars();

    await bubbleSort(array);
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
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    runMotorcycle();
}

async function runMotorcycle() {
    const bike = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");
    bike.style.display = "block";

    for (let i = 0; i < bars.length; i++) {
        let currentBar = bars[i];
        bike.style.left = currentBar.offsetLeft + "px";
        // Adjust bottom so motorcycle sits on top of each bar
        bike.style.bottom = (currentBar.offsetHeight -2) + "px"; 

        await new Promise(r => setTimeout(r, 55));
    }
}
