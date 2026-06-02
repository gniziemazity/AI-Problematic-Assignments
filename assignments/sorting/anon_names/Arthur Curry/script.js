//global variable
const count = 50;
const array = new Array(count);
let speed = 100;

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1 
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";  /* + here is 
               string concatenation because 
               the second item "%" is a string */;
}

bubbleSort(array).then(() => {
    motorcycleEmoji();
});

function speedChange(value){
    speed = value;
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
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }
    } while (swapped);
}

async function motorcycleEmoji() {

    const motorcycle = document.querySelector(".emoji");
    const bars = document.getElementsByClassName("bar")
    const visualizer = document.getElementById("vis-123456");

    motorcycle.style.display = "block";

    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        motorcycle.style.left = bar.offsetLeft + bar.offsetWidth / 2 - motorcycle.offsetWidth / 2 + "px";
        motorcycle.style.top = bar.offsetTop - motorcycle.offsetHeight + "px";

        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

