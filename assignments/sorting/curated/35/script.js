// Sorting Visualizer
// This program visualizes the Bubble Sort algorithm.
// Random values are generated and displayed as vertical bars.
// During sorting, bars swap positions and update visually.
// After sorting finishes, a motorcycle animation travels across the sorted bars.

 let var_speed = 100; //global variables 

 const count = 50; // Total number of bars in the visualizer

const array = new Array(count);

for(let i=0;i<count;i++){
array[i] = Math.random();
}

const visualizer = document.getElementById("vis-123456");

for(let i=0;i<array.length;i++){

const bar=document.createElement("div");

bar.classList.add("bar");
bar.style.height = array[i]*100 + "%";

visualizer.appendChild(bar);

}

bubbleSort(array);

function updateBars(){

const bars=document.getElementsByClassName("bar");

for(let i=0;i<bars.length;i++){
bars[i].style.height=array[i]*100 + "%";
}

}

async function bubbleSort(arr){

do{

var swapped=false;

for(let i=1;i<arr.length;i++){

if(arr[i-1] > arr[i]){

let temp = arr[i-1];
arr[i-1] = arr[i];
arr[i] = temp;

swapped=true;

updateBars();

await new Promise(resolve => setTimeout(resolve,var_speed));

}

}

}while(swapped);

runMotorcycle();

}

async function runMotorcycle(){

const bars=document.getElementsByClassName("bar");
const moto=document.getElementById("motorcycle");

// LEFT → RIGHT
for(let i=0;i<bars.length;i++){

const bar = bars[i];

moto.style.left = bar.offsetLeft + "px";
moto.style.bottom = (bar.offsetHeight + 5) + "px";

await new Promise(resolve => setTimeout(resolve,60));

}

}