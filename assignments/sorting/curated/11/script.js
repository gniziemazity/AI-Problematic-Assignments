// Global variables
const count = 50;
const array = [];
let var_speed = 100; 


for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}


const visualizer = document.getElementById("vis-123456");






for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        visualizer.appendChild(bar);
        bar.classList.add("bar");
        bar.style.height = array[i] * 100 + "%";
    }

bubbleSort(array);
function changeSpeed(value){
    var_speed = value;
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
                await new Promise(resolve => setTimeout(resolve,510 - var_speed));
            }
        }
    } while (swapped);
    runMotorcycle();
}

async function runMotorcycle(){

    const bike = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");

    bike.style.display = "block";

    for(let i = 0; i < bars.length; i++){

        const barHeight = bars[i].offsetHeight;

        bike.style.left = (i * 9) + "px";
        bike.style.top = (200 - barHeight - 40) + "px";

        await new Promise(r => setTimeout(r, 80));
    }
}

if (direction === 'left') {
    bike.style.transform = 'scaleX(-1)'; // faces left
} else {
    bike.style.transform = 'scaleX(1)';  // faces right
}