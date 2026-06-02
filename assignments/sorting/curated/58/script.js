var var_speed = 100;

const count = 50;
const array = new Array(count);

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

bubbleSort(array);

async function rideMotorcycle() {

    const bike = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");

    bike.style.display = "block";

    for (let i = 0; i < bars.length; i++) {

        const rect = bars[i].getBoundingClientRect();

        bike.style.left = rect.left + "px";
        bike.style.top = (rect.top - 35) + "px";

        await new Promise(resolve => setTimeout(resolve, 80));
    }
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

                await new Promise(resolve =>
                    setTimeout(resolve, var_speed)
                );
            }
        }

    } while (swapped);

    rideMotorcycle();
}