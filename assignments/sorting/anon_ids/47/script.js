// global variables
const count = 50;
const array = new Array(count);

let speed = 100; 

const slider = document.getElementById("speedSlider");

slider.oninput = function() {
    speed = this.value;
};

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

start();

async function start() {
    await bubbleSort(array);

    const moto = document.getElementById("motorcycle");
    moto.style.display = "block";   
    await moveMotorcycle();
}


function updateBars() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}


async function bubbleSort(arr) {

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
                    setTimeout(resolve, speed)
                );
            }
        }

    } while (swapped);

}

    async function moveMotorcycle(){

    const moto = document.getElementById("motorcycle");
    const bars = document.getElementsByClassName("bar");

    for(let i = 0; i < bars.length; i++){

        let height = bars[i].offsetHeight;

        moto.style.transform =
            "translate(" + (i * 10) + "px," + (-height) + "px)";

        await new Promise(resolve =>
            setTimeout(resolve, speed)
        );
    }
}