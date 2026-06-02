// global variables
const count = 50;
const array = new Array(count);

// animation speed variable
let var_speed = 100;

// generate random numbers
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

// get visualizer container
const visualizer = document.getElementById("vis-123456");

// create bars
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
    visualizer.appendChild(bar);
}

// Link the speed slider to var_speed
const speedSlider = document.getElementById("speedRange");
speedSlider.oninput = function() {
    var_speed = parseInt(this.value); // update animation speed dynamically
};

// update bars function
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

// bubble sort function
async function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                // swap values
                const aux = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = aux;

                swapped = true;
                updateBars();

                // delay using var_speed
                await new Promise(resolve =>
                    setTimeout(resolve, var_speed)
                );
            }
        }
    } while (swapped);

    // call motorcycle animation after sorting finishes
    showMotorcycle();
}

// function to show motorcycle after sorting
function showMotorcycle() {
    const moto = document.createElement("div");
    moto.textContent = "🏍️";
    moto.style.position = "absolute";
    moto.style.top = visualizer.offsetTop - 30 + "px"; // slightly above the bars
    moto.style.left = visualizer.offsetLeft + "px"; // start at left of visualizer
    moto.style.fontSize = "24px";
    document.body.appendChild(moto);

    const bars = document.getElementsByClassName("bar");
    let i = 0;

    const interval = setInterval(() => {
        if (i >= bars.length) {
            clearInterval(interval); // stop at the end
            return;
        }
        const bar = bars[i];
        moto.style.left = bar.getBoundingClientRect().left + "px"; // move above current bar
        i++;
    }, 50); // adjust this number to make motorcycle faster/slower
}

// start sorting
bubbleSort(array);