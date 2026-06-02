// global variables
const count = 50;
const array = new Array(count);
let var_speed = 100;   // required global variable

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

bubbleSort(array);

// update bars
function updateBars() {

    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}

// slider change
function changeSpeed(value){
    var_speed = Number(value);
}

// bubble sort
async function bubbleSort(arr) {

    do {

        var swapped = false;

        for (let i = 1; i < arr.length; i++) {

            if (arr[i-1] > arr[i]) {

                const aux = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = aux;

                swapped = true;

                updateBars();

                await new Promise(resolve => setTimeout(resolve, var_speed));
            }

        }

    } while(swapped);

    moveMotorcycle(); // after sorting
}


// function that moves the motorcycle across the barsfunction moveMotorcycle(){
function moveMotorcycle(){
// create the motorcycle element

    const bike = document.createElement("div");
    bike.innerText = "🏍️";  // motorcycle emoji
    bike.classList.add("motorcycle"); // apply CSS styling

    bike.style.transform = "scaleX(-1)";  // flip the bike so it faces the correct direction

    visualizer.appendChild(bike); // add the motorcycle to the visualizer container

    const bars = document.getElementsByClassName("bar");

    let index = 0;  // start from the first bar

    // function that moves the bike step by step
    function move(){

        if(index >= bars.length) return; // stop when the bike reaches the last bar

        const bar = bars[index]; // current bar

        const x = bar.offsetLeft;  // horizontal position of the bike

        // vertical position so the bike stays just above the bar
        const y = visualizer.offsetHeight - bar.offsetHeight - 40;


        // move the bike to the calculated position
        bike.style.left = x + "px";
        bike.style.top = y + "px";

        index++; // move to next bar

        // wait before moving again (controlled by speed variable)
        setTimeout(move, var_speed*6); // slower than sorting
    }

    move();
}