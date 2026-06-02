// Global variable for animation speed (required by assignment)
let var_speed = 100;

let array = [];

// Change speed from slider
function changeSpeed(value){
    var_speed = value;
}

// Generate random bars
function generateArray(){

    const container = document.getElementById("bars-container");
    container.innerHTML = "";

    array = [];

    for(let i = 0; i < 30; i++){

        let value = Math.floor(Math.random() * 300) + 20;

        array.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = value + "px";

        container.appendChild(bar);
    }
}

// Bubble Sort Visualization
async function bubbleSort(){

    const bars = document.querySelectorAll(".bar");

    for(let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length - i - 1; j++){

            if(array[j] > array[j+1]){

                // swap values
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                // update bar heights
                bars[j].style.height = array[j] + "px";
                bars[j+1].style.height = array[j+1] + "px";

                // wait depending on speed
                await new Promise(resolve =>
                    setTimeout(resolve, var_speed)
                );
            }
        }
    }

    // After sorting finished
    rideMotorcycle();
}


// Motorcycle / rider animation
function rideMotorcycle(){

    const bike = document.getElementById("motorcycle");
    const bars = document.querySelectorAll(".bar");

    let i = 0;

    const bikeHeight = bike.offsetHeight;

    let interval = setInterval(() => {

        if(i >= bars.length){
            clearInterval(interval);
            return;
        }

        const barRect = bars[i].getBoundingClientRect();

        // Center of the bar
        const x = barRect.left + barRect.width/2;

        // Top of the bar
        const y = barRect.top - bikeHeight;

        bike.style.left = x + "px";
        bike.style.top = y + "px";

        i++;

    },120);
}


// Generate bars when page loads
window.onload = function(){
    generateArray();
};