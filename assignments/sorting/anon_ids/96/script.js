// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100; // Global speed variable (delay in ms)

for (let i = 0; i < count; i++) {
	array[i] = Math.random(); // numbers between 0 and 1 
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
	const bar = document.createElement("div");
	visualizer.appendChild(bar);
	bar.classList.add("bar");
	bar.style.height = array[i] * 100 + "%"; 
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
				// Connected to the global var_speed variable
				await new Promise(resolve => setTimeout(resolve, var_speed));
			}
		}
	} while (swapped);

	// Trigger the motorcycle celebration after the sorting loop ends completely
	rideMotorcycle();
}

async function rideMotorcycle() {
	const motorcycle = document.getElementById("motorcycle");
	const bars = document.getElementsByClassName("bar");
	const containerRect = document.getElementById("vis-container").getBoundingClientRect();
	
	motorcycle.style.display = "block";

	// Loop through every bar to make the motorcycle ride along the heights
	for (let i = 0; i < bars.length; i++) {
		const barRect = bars[i].getBoundingClientRect();
		
		// Calculate relative positions inside the #vis-container
		const relativeLeft = barRect.left - containerRect.left;
		const barHeight = barRect.height; 

		// Position the motorcycle precisely on top of the current bar
		motorcycle.style.left = `${relativeLeft}px`;
		motorcycle.style.bottom = `${barHeight}px`;

		// Control how fast it rides across the peaks
		await new Promise(resolve => setTimeout(resolve, 50));
	}

	// Move off-screen to the right at the end
	motorcycle.style.left = `${containerRect.width + 10}px`;
	motorcycle.style.bottom = "0px";
}