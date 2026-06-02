// adding global variables
const count = 50;/* the number of bar */
let speed = 100;   // vitualizer speed is in milliseconds-100milisec
const array = new Array(count);/* arrey make the value of bar randomly */
//create bars- mot // 
const visualizer = document.getElementById("vis-123456");



//make random num*//
for (let i = 0; i < count; i++) {
    array[i] = Math.random();
}

for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");/*a div for each bar*/
    visualizer.appendChild(bar);/* bar class add*/
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%";/* arrey put random for height*/
}

// connect slider to speed js
const speedSlider = document.getElementById("speedRange");/* read input range */
speedSlider.oninput = () => {
    speed = speedSlider.value;/*user moves slider,speed changes update*/
    
};
// Create MOTOR 
const motorcycle = document.createElement("div");/*a div for MOT*/
motorcycle.id = "motorcycle";
motorcycle.innerHTML = "🏍️";/*emj put on it*/
motorcycle.style.position = "absolute";/*The mot position isabsolute it can move obove bars*/
motorcycle.style.bottom = "40px";
motorcycle.style.left = "0px";/*MOT first position */
motorcycle.style.transition = "left 0.1s linear";/* hoz movment of MOtor is smooth*/
visualizer.appendChild(motorcycle);/*add MOT to cantainer visu */



//update height bars + height of bar updated based on the current value in the array//
function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}
//animate bubblesort//
async function bubbleSort(arr) {
    do {
        var swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const aux = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = aux;
                swapped = true;
                updateBars();//*compare+swap+update */
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }
    } while (swapped);

}
    // after sorting ends, start motorcycle (or use ridemotorcycle ) 

async function rideMotorcycle() {

    motorcycle.style.display = "block"; // motor is display when the fun finish // 

    const bars = document.querySelectorAll("#vis-123456 .bar");//*selects all bars in chart
    //  so motorcycle can move over them.*//

    for (let i = 0; i < bars.length; i++) {//* sets motorcycle position for each bar*//

        let bar = bars[i];

        // horizontal - Position move motor 
        motorcycle.style.left = bar.offsetLeft + "px";

        // it provides the real height of each bar  + some px above of bar 
        motorcycle.style.bottom = (bar.offsetHeight + 5) + "px";

        await new Promise(resolve => setTimeout(resolve, 100));/*each time wait to look
        s beter like animate */
    }
}

           

async function bubbleSortAndRide() {
    await bubbleSort(array); // *sort*/
    await rideMotorcycle();   //* ofter sort mot move*//
}//* if dont close it code cant work and run */
// start
bubbleSortAndRide();
