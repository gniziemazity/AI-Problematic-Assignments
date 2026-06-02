console.log("script.js loaded");

const count = 50;
const array = new Array(count);
var var_speed = 50;

function changeSpeed(value) {
    var_speed = 101 - Number(value);
}

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

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

async function bubbleSort(arr) {
    var swapped;
    do {
        swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const aux = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = aux;
                swapped = true;
                updateBars();
                await new Promise(resolve =>
                    setTimeout(resolve, var_speed)
                );
            }
        }
    } while (swapped);
    
    // 🏍️ MOTORCYCLE ANIMATION AFTER SORTING
    await motorcycleJumpAnimation();
}

async function motorcycleJumpAnimation() {
    const bars = document.getElementsByClassName("bar");
    const motorcycle = document.createElement("div");
    motorcycle.textContent = "🏍️";
    motorcycle.style.cssText = `
        position: absolute;
        font-size: 28px;
        z-index: 10;
        left: 0;
        top: 170px;
        transition: all 0.4s ease;
        pointer-events: none;
    `;
    
    visualizer.style.position = "relative";
    visualizer.appendChild(motorcycle);
    
    // 🏍️ Jump ON TOP of each bar from lowest to highest
    for (let i = 0; i < bars.length; i++) {
        const barLeft = (i * 8) + "px"; // 7px width + 1px margin
        const barHeight = parseFloat(bars[i].style.height) || 0;
        const motoTop = (170 - barHeight - 30) + "px"; // ON TOP of bar
        
        motorcycle.style.left = barLeft;
        motorcycle.style.top = motoTop;
        
        await new Promise(resolve => setTimeout(resolve, 400));
    }
    
    motorcycle.remove();
}

bubbleSort(array);
