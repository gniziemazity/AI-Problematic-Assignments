// Global variables
const count = 50;
const array = new Array(count);
let var_speed = 100; // Global variable to control animation speed (ms delay)

// Initialize array with random numbers between 0 and 1
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// Populate the DOM with bars
const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

// Start the sorting process
bubbleSort(array);

// Function tied to the slider's onchange event
function updateSpeed(val) {
    // Invert the value so sliding right makes it FASTER (lower delay)
    // Max slider value is 500, min is 10.
    var_speed = 510 - parseInt(val);
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
                // Connected to global speed variable
                await new Promise(resolve => setTimeout(resolve, var_speed));
            }
        }
    } while (swapped);

    // Sorting is complete; trigger the motorcycle celebration sequence!
    await rideMotorcycle();
}

async function rideMotorcycle() {
    const motorcycle = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");
    
    motorcycle.style.display = "block";

    // Track over each bar sequentially
    for (let i = 0; i < bars.length; i++) {
        // Calculate the exact left offset of the current bar
        const barOffsetLeft = bars[i].offsetLeft;
        const barHeight = bars[i].offsetHeight;
        
        // Position the motorcycle over the current bar
        motorcycle.style.left = barOffsetLeft + "px";
        
        // Dynamically adjust the height of the motorcycle track so it "rides" the top contour
        const track = document.getElementById("motorcycle-track");
        track.style.bottom = barHeight + "px";

        // Pace the motorcycle sequence relative to the user's selected speed setting
        await new Promise(resolve => setTimeout(resolve, Math.max(20, var_speed / 2)));
    }

    // Drive completely off the right edge of the visualizer container, then hide
    motorcycle.style.left = visualizer.offsetWidth + "px";
    await new Promise(resolve => setTimeout(resolve, 300));
    motorcycle.style.display = "none";
}