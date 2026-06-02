const count = 50;
const array = new Array(count);

let speed = 100;

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

function updateBars() {

const bars = document.getElementsByClassName("bar");

for (let i = 0; i < bars.length; i++) {
bars[i].style.height = array[i] * 100 + "%";
}
}

document.getElementById("speedSlider").oninput = function(){
speed = this.value;
}

bubbleSort(array);

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

await new Promise(resolve => setTimeout(resolve, speed));
}

}

} while (swapped);

moveBike();
}

function moveBike(){

const bike = document.getElementById("bike");
let position = 0;

const move = setInterval(function(){

bike.style.left = position + "px";

position += 5;

if(position > 600){
clearInterval(move);
}

},20);

}