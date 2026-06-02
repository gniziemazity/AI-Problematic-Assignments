let var_speed = 10;
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
}
const speedSlider = document.getElementById("speedRange");

speedSlider.onchange = function(){
    var_speed = speedSlider.value;
};
let bike= document.getElementById("motorcycle");
let position=0;

setInterval(function(){
    position= +15;
    bike.style.left = position + "px";
}, 200);
 