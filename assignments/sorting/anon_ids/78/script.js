// global variables
const count = 50;
const array = new Array(count);
let speed = 100; // default speed of the animations

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); // creates numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar); // appends bars to the visualizer
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%" /*
        + here is string concatenation because
        the second item "%" is a string*/
}

bubbleSort(array);

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i< bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%"
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
                await new Promise(resolve => setTimeout(resolve, speed)); // adds delay in ms
            }
        }
    } while (swapped);
    motorcycleride(array); // motorcycle is summoned
}

const slider = document.getElementById("myRange"); // gets the slider with the id
function speedslider() {
  speed = 100/slider.value; // sets the actual speed that is used depending on the value of the slider 
//   console.log(speed);
}

async function motorcycleride(arr) {
    const motorcycle = document.getElementById("motorcycle"); // gets the motorcycle with the id
    motorcycle.style.display = "flex"; // makes the motorcycle visible
    for (let i = 1; i < arr.length; i++) {
        motorcycle.style.translate = 9*i + "px" + " " + -200*((arr[i - 1]+arr[i])/2) + "px"; // moves the motorcycle
        // console.log(motorcycle.style.translate);
        motorcycle.style.rotate = -Math.atan(200*(arr[i]-arr[i-1])/9) + "rad"; // rotates the motorcycle
        // console.log(motorcycle.style.rotate);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
    motorcycle.style.rotate = 0 + "rad";
    // console.log(motorcycle.style.rotate);
}
