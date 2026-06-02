window.onload = function () {

    // REQUIRED global variable name
    let speed = 100;

    function updateSpeed() {
        speed = Number(document.getElementById("speedSlider").value);
    }
    window.updateSpeed = updateSpeed;

    const count = 50;
    const array = new Array(count);

    for (let i = 0; i < count; i++) {
        array[i] = Math.random();
    }

    const visualizer = document.getElementById("vis-123456");

    // Create bars
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 100 + "%";
        visualizer.appendChild(bar);
    }

    bubbleSort(array);

    function updateBars() {
        const bars = document.getElementsByClassName("bar");
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.height = array[i] * 100 + "%";
        }
    }

    async function rideMotorcycle() {
        const moto = document.getElementById("moto");
        const bars = document.getElementsByClassName("bar");

        for (let i = 0; i < bars.length; i++) {
            const bar = bars[i];

            // Correct relative position
            const barRect = bar.getBoundingClientRect();
            const visRect = visualizer.getBoundingClientRect();

            const leftPos = barRect.left - visRect.left;
            const barHeight = bar.offsetHeight;

            moto.style.left = leftPos + "px";
            moto.style.bottom = (barHeight + 5) + "px";

            await new Promise(resolve => setTimeout(resolve, 40));
        }
    }

    async function bubbleSort(arr) {
        let swapped;
        do {
            swapped = false;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    const temp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = temp;
                    swapped = true;
                    updateBars();
                    await new Promise(resolve => setTimeout(resolve, speed));
                }
            }
        } while (swapped);

        await rideMotorcycle();
    }

};