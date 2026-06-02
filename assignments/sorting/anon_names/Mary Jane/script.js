const count = 50;
const array = Array.from({ length: count }, () => Math.random());
const visualizer = document.getElementById("vis-123456");

// Create bars
array.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = (value * 100) + "%";
    visualizer.appendChild(bar);
});

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
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; // swap
                swapped = true;
                updateBars();
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }
    } while (swapped);
}

// Start sorting after bars have been rendered
window.onload = () => {
    bubbleSort(array);
};