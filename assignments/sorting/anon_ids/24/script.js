let var_speed = 100; //sorting speed

const count = 50;
const array = new Array(count);

// generate random numbers
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

const visualizer = document.getElementById("vis-123456");

// create bars
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";
}

// update bars
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

// bubble sort
function changeSpeed(value) {
    var_speed = Number(value);
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
                await new Promise(resolve => setTimeout(resolve, var_speed)); /*This part calls sorting speed*/
            }
        }
    } while (swapped);
        moveMoto();

}

bubbleSort(array);

//motorcycle move
async function moveMoto() {
    const moto = document.getElementById("moto");
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length; i++) {

        const rect = bars[i].getBoundingClientRect();

        const motoX = rect.left + window.scrollX;
        const motoY = rect.top + window.scrollY - 40; 

        moto.style.left = motoX + "px";
        moto.style.top = motoY + "px";

        await new Promise(r => setTimeout(r, 100));
    }
}
