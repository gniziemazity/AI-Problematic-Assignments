//global variables
const count = 50;
const array = new Array(count);
var slider = document.getElementById("myRange");
var speed = document.getElementById("speed");
speed.innerHTML = slider.value;
for (let i = 0; i < count; i++){
    array[i] = Math.random();  // numbers between 0 and 1
}
const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++){
    const bar = document.createElement("div");
    visualizer.appendChild(bar);
    bar.classList.add("bar");
    bar.style.height = array[i] * 100 + "%"; /*+ here is string concatination becouse the second item % is a string*/
}
bubbleSort(array);

function updateBars(){
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++){
        bars[i].style.height = array[i] * 100 + "%";
    }
}
async function bubbleSort(arr){
    do {
        var swapped = false;
        for (let i = 1; i< arr.length; i++){
            if (arr[i - 1] > arr[i]){
                const aux = arr[i -1];
                arr[i - 1] = arr[i];
                arr[i] = aux;
                swapped = true;
                updateBars();
                slider.oninput = function() {
                    speed.innerHTML = this.value;
                }
                let invertSpeed = invert(speed.innerHTML);
                await new Promise(resolve => setTimeout(resolve, invertSpeed));
            }
        }
    }while(swapped);
    
    const bars = document.getElementsByClassName("bar");
    if (bars.length > 0){
        const bike = document.createElement("div");
        bike.classList.add("bike");
        bike.innerHTML = "🏍️";
        bike.style.margin.bottom = bars[0].height;
        moveBike(bars, bike);
        
    }
    
}

function invert(value){
    return 1 + 100 - value;
}
async function moveBike(bars, bike){
    for (let i = 0; i <= bars.length; i++){
        await new Promise(resolve => setTimeout(resolve, 100));  /*wait 100 milliseconds*/
        if (i != bars.length - 1){ /*prevents crash at the second to last bar*/ 
            if (bars[i].style.height < bars[i + 1].style.height){ /*compares bar heights */ 
                bike.style.transform = "scaleX(-1) rotate(20deg)"; /*reverses the bike and rotates it 20 degrees*/
                await new Promise(resolve => setTimeout(resolve, 100)); /*wait 100 milliseconds */
            }
        }
        bars[i].appendChild(bike); /*moves the bike to the next bar */
        bike.style.transform = "scaleX(-1)"; /*canseles the rotation */
    }   
}