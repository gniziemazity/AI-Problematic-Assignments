// Global variables
const count = 50;
const array = new Array(count);
var var_speed = 100; // ms delay between animation frames

for (let i = 0; i < count; i++) {
	array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");

// Create bars
for (let i = 0; i < array.length; i++) {
	const bar = document.createElement("div");
	visualizer.appendChild(bar);
	bar.classList.add("bar");
	bar.style.height = array[i] * 100 + "%";
}

// Create motorcycle emoji element
const moto = document.createElement("div");
moto.id = "motorcycle";
moto.textContent = "🏍️";
visualizer.appendChild(moto);

// Connect speed slider
const speedSlider = document.getElementById("speed-slider");
const speedLabel = document.getElementById("speed-label");

speedSlider.onchange = function () {
	// Slider goes 1–200; we invert so right = faster (lower delay)
	var_speed = 201 - parseInt(this.value);
	speedLabel.textContent = this.value + " / 200";
};

// Start sorting
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
				await new Promise(resolve => setTimeout(resolve, var_speed));
			}
		}
	} while (swapped);

	// Sorting done — run the motorcycle animation
	runMotorcycle();
}

async function runMotorcycle() {
	const bars = document.getElementsByClassName("bar");
	const barWidth = 8; // 7px bar + 1px margin

	moto.style.display = "block";

	for (let i = 0; i < bars.length; i++) {
		const barHeightPx = bars[i].offsetHeight;
		const leftPos = i * barWidth - 4; // center roughly on bar
		moto.style.left = leftPos + "px";
		moto.style.bottom = barHeightPx + "px";
		await new Promise(resolve => setTimeout(resolve, 60));
	}

	// Ride off the right edge
	moto.style.left = bars.length * barWidth + 20 + "px";
	await new Promise(resolve => setTimeout(resolve, 400));
	moto.style.display = "none";
}
