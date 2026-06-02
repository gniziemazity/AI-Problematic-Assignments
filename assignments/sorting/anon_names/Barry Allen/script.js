// global variables
const count = 50; /* an array with 50 items*/
const array = new Array(count);
let speed = 0;
/* universal value speed, set to 0. Let allows for edits later. (important!) */

for (let i = 0; i < count; i++) {
    array[i] = Math.random(); //generates numbers bettween 0 and 1
    }

            
const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div"); /* while loop now generates 50 divs*/
    visualizer.appendChild(bar);/*now we are adding them*/
     bar.classList.add("bar")
    bar.style.height = array[i] * 100 + "%"; /* plus here is string contatenation due 
                                               to the second item "%" is a string. */
    }

bubbleSort(array);

function updateBars() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i< bars.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
    }



async function bubbleSort(arr){
    do {
        var swapped = false; /*very rare to make a do while loop these days, FYI not the modern norm*/
        for (let i = 1; i < arr.length; i++) { /*var is mainly used in old code, new stuff uses let and const.*/
            if (arr[i-1] > arr[i]) {
                const aux = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = aux; /*these three combined will handle the swapping */
                swapped = true;
                updateBars();
                await new Promise(resolve => setTimeout(resolve, speed)); /*this sets refresh speed to not be insta, now uses speed so it can be edited*/
                }
            }
        } while (swapped);
        MotoMovesIt(); /*calling the function here makes the visual appear and do it's thing */
    }


const Motorcycle = document.createElement("Motorcycle"); /*Creating a Motorcycle */
Motorcycle.innerHTML = "🏍️";    /*This should create the visual for the Motorcycle, now it just needs to move properly...*/


/* Originally I tried using one of the emote codes (&#65039; in this case) but didn't note an effect.
Then I figured out that I could just copy paste the emote from the website directly*/

const MovedBars = document.getElementsByClassName("bar"); /* This creates Element Moved bars that copy info from bar */

async function MotoMovesIt(){ /* This basically copies two things from the earlier code, the loops and wait timer */
    for (let i = 1; i < MovedBars.length; i++){
        await new Promise(resolve => setTimeout(resolve, 50)); /* This adds a 50ms delay to the movement speed. */
        MovedBars[i].appendChild(Motorcycle); /* This adds the Motorcycle emote to each (MOved)bar section as a child kinda like
        how in the visualizer we appended bars to it. Because of the for loop, it moves each bar through!*/
    }
}




var slider = document.getElementById("MySlider"); /*These variables are needed for the slider settings, going by the books of w3 with this one.*/ 
var output = document.getElementById("test"); /*It did cause some issues with speed alteration and visuals, but they got fixed with index file changes*/
output.innerHTML = slider.value;
speed = Number(slider.value); /* speed value gets altered to be the number of the slider value*/

slider.oninput = function() {
  output.innerHTML = this.value;
  speed = Number(this.value);
} /*This basicaly on a slider drag adjusts the number shown by output below the slider
 and changes speed to be the number between 1 millisecond and 100 milliseconds*/ 


 /*Below is a note about an issue I ran into and how it was fixed* /

/*on the index side of the code, output (id= test) gets called to track the current number (speed) as a visual aid with span. */
/* the section itself is a paragraph <p>, thus the normal text. I had to do this because the code threw an error due to output
not getting used in any way, causing the innerHTML to not be reached (because it had nothing to actually use). This caused the speed changes to be
ignored even though the code was functional for them. (I assume due to placement). Not wanting to risk breaking anything, I sticked to the
paragraph fix instead of throwing it out fully as it was included in the slider tutorials I studied. After that it was working, good enough for me!*/
/*reason for 1 being faster than 100 is due to it using time, higher the "latency", slower the speed because it lets more time pass. */
/*I hope that makes sense? */







