let speed = 100;
// global variables
const count = 50;
const array = new Array(count);

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%"; /* + here is 
        string concatenation because 
        the second item "%" is a string */
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

    animateMoto();
}

function animateMoto() {
    const moto = document.getElementById("moto");
    moto.textContent = "🏍️";
    moto.style.left = "420px";
}

//The code from AI
//async function animateMoto() {
//    const moto = document.getElementById("moto");
//  moto.textContent = "🛵";
//
//  const bars = document.getElementsByClassName("bar");
//    const container = document.getElementById("vis-123456");

//  for (let i = 0; i < bars.length; i++) {
//        const bar = bars[i];
//
//        moto.style.left = bar.offsetLeft + "px";
//
//        const barHeight = bar.offsetHeight;
//        const containerHeight = container.offsetHeight;

//        moto.style.top = (containerHeight - barHeight - 30) + "px";

//        await new Promise(resolve => setTimeout(resolve, 30));
//    }
//}