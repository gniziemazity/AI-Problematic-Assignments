// Global variables
const count = 50;
const array = new Array(count);
let speed = 100; // Animation speed control (milliseconds)

const speedSlider = document.getElementById("speedSlider");
// Higher slider value → smaller delay → faster sorting
// Lower slider value → bigger delay → slower sorting
// (+10 prevents delay from becoming 0 and breaking animation)
speedSlider.oninput = function () {
  speed = this.max - this.value + 10;
};

for (let i = 0; i < count; i++) {
  array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
  const bar = document.createElement("div");
  visualizer.appendChild(bar);
  bar.classList.add("bar");
  bar.style.height = array[i] * 100 + "%"; /* + here is a string 
    concatenation */
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

        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  } while (swapped);

  // Sorting finished → start bike animation
  showMotorcycleRide();
}

// Helper function to control speed of the animation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Move the motorcycle across the bars
async function showMotorcycleRide() {
  // Get the container with the bars
  const visualizer = document.getElementById("vis-123456");

  // Create the motorcycle element
  const bike = document.createElement("div");
  bike.textContent = "🏍️";
  bike.classList.add("motorcycle");

  // Add the bike to the visualizer
  visualizer.appendChild(bike);

  // Get all bars
  const bars = document.getElementsByClassName("bar");

  // Move the bike from one bar to the next
  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];

    // Get the center position of the bar.
    // Motorcycle placed in the middle of the bar.
    const x = bar.offsetLeft + bar.offsetWidth / 2;

    // Get the height of the bar
    const y = bar.offsetHeight;

    // Position the bike on top of the bar
    bike.style.left = x + "px";
    bike.style.bottom = y - 4 + "px";

    // Small delay to make the movement visible
    await sleep(120);
  }
}
