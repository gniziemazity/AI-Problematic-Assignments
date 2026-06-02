// global speed variable
let var_speed = 200;

let array = [];

// change speed using slider
function changeSpeed(value){
var_speed = value;
}

// create random bars
function createBars(){

let container = document.getElementById("bars-container");
container.innerHTML = "";
array = [];

for(let i=0;i<20;i++){

let value = Math.floor(Math.random()*200)+20;
array.push(value);

let bar = document.createElement("div");
bar.classList.add("bar");
bar.style.height = value+"px";

container.appendChild(bar);

}

}

createBars();

// delay function
function sleep(ms){
return new Promise(resolve => setTimeout(resolve,ms));
}

// bubble sort animation
async function startSort(){

let bars = document.getElementsByClassName("bar");

for(let i=0;i<array.length;i++){

for(let j=0;j<array.length-i-1;j++){

bars[j].style.background="blue";
bars[j+1].style.background="blue";

await sleep(var_speed);

if(array[j] > array[j+1]){

let temp = array[j];
array[j] = array[j+1];
array[j+1] = temp;

bars[j].style.height = array[j]+"px";
bars[j+1].style.height = array[j+1]+"px";

}

bars[j].style.background="black";
bars[j+1].style.background="black";

}

}

// after sorting show motorcycle animation
showMotorcycle();

}

// motorcycle animation
function showMotorcycle(){

let bike = document.getElementById("motorcycle");

bike.style.display="block";

let position = 0;

let move = setInterval(function(){

if(position > window.innerWidth){

clearInterval(move);

}else{

position += 10;
bike.style.left = position+"px";

}

},20);

}

