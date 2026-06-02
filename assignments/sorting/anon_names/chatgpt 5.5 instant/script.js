const visualizer = document.getElementById("visualizer");
const statusText = document.getElementById("status");
const speedValue = document.getElementById("speedValue");
const sortBtn = document.getElementById("sortBtn");
const generateBtn = document.getElementById("generateBtn");

// Required global animation-speed variable.
let var_speed = 120;
let values = [];
let isSorting = false;

function updateSpeed(newValue) {
    var_speed = Number(newValue);
    speedValue.textContent = var_speed;
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function randomHeight() {
    return Math.floor(Math.random() * 280) + 45;
}

function generateBars(amount = 22) {
    if (isSorting) return;

    values = [];
    visualizer.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        const height = randomHeight();
        values.push(height);

        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${height}px`;
        visualizer.appendChild(bar);
    }

    statusText.textContent = "Click “Start Bubble Sort” to sort the bars.";
}

function getBars() {
    return Array.from(document.querySelectorAll(".bar"));
}

function markBarsAsSorted() {
    getBars().forEach(bar => bar.classList.add("sorted"));
}

async function bubbleSort() {
    if (isSorting) return;

    isSorting = true;
    sortBtn.disabled = true;
    generateBtn.disabled = true;
    statusText.textContent = "Sorting...";

    const bars = getBars();

    for (let i = 0; i < values.length - 1; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {
            bars[j].classList.add("comparing");
            bars[j + 1].classList.add("comparing");
            await sleep(var_speed);

            if (values[j] > values[j + 1]) {
                bars[j].classList.add("swapping");
                bars[j + 1].classList.add("swapping");

                [values[j], values[j + 1]] = [values[j + 1], values[j]];
                bars[j].style.height = `${values[j]}px`;
                bars[j + 1].style.height = `${values[j + 1]}px`;

                await sleep(var_speed);
            }

            bars[j].classList.remove("comparing", "swapping");
            bars[j + 1].classList.remove("comparing", "swapping");
        }
        bars[values.length - i - 1].classList.add("sorted");
    }

    bars[0].classList.add("sorted");
    statusText.textContent = "Sorted! Here comes the motorcycle.";

    markBarsAsSorted();
    await animateMotorcycle();

    statusText.textContent = "Finished! Generate new bars or sort again.";
    sortBtn.disabled = false;
    generateBtn.disabled = false;
    isSorting = false;
}

async function animateMotorcycle() {
    const oldMotorcycle = document.querySelector(".motorcycle");
    if (oldMotorcycle) oldMotorcycle.remove();

    const motorcycle = document.createElement("div");
    motorcycle.className = "motorcycle";
    motorcycle.textContent = "🏍️";
    visualizer.appendChild(motorcycle);

    const bars = getBars();
    const visualizerBox = visualizer.getBoundingClientRect();

    for (let i = 0; i < bars.length; i++) {
        const barBox = bars[i].getBoundingClientRect();
        const barHeight = values[i];

        const x = barBox.left - visualizerBox.left + barBox.width / 2 - 18;
        const y = visualizerBox.height - barHeight - 72;

        // The negative Y value moves the emoji upward because transform starts near the bottom.
        motorcycle.style.transform = `translate(${x}px, ${-y}px) rotate(-8deg)`;
        await sleep(Math.max(45, var_speed));

        motorcycle.style.transform = `translate(${x + 13}px, ${-(y + 28)}px) rotate(8deg)`;
        await sleep(Math.max(45, var_speed / 2));
    }

    motorcycle.style.transform = `translate(${visualizerBox.width - 42}px, -30px) rotate(0deg)`;
    await sleep(600);
}

generateBars();
