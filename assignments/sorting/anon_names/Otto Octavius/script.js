// global variables
const count = 50;
const array = new Array(count);
const slider = document.getElementById("slider-id");
// const 11m_speed = 200;
// slider.value = slider.max - 11m_speed;
const bike = document.createElement("span");
bike.textContent = "🏍️";
bike.classList.add("racing-bike");

function speedSetter(){
    return slider.max - slider.value;
}

/* updating slide's value from localStarage object if exists, 
otherwise create localStorage obj with the current slider value */
if (!localStorage.getItem("slider_value")) {
    localStorage.setItem("slider_value", slider.value);
} else {
    slider.setAttribute("value", localStorage.getItem("slider_value"));
}

//updating localStorage obj, once the slider value changes
slider.addEventListener("change", function() {
    localStorage.setItem("slider_value", slider.value);
    console.log("Updated slider value:", localStorage.getItem("slider_value"));
});


for (let i = 0; i < count; i++) {
    array[i] = Math.random(); //numbers between 0 and 1
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
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = array[i] * 100 + "%";
    }
}
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
                await new Promise(resolve => setTimeout(resolve, speedSetter())); // wait for xxx,ms
            } 
        }
    } while (swapped);
}

async function runVisualizer() {
      
    // Wait for the sorting animation to finish completely
    await bubbleSort(array);
    
    const bars = document.getElementsByClassName('bar');
    while (true) {
        for (let i=0; i <bars.length; i++) {
            if (i != bars.length-1) {
                if (parseFloat(bars[i+1].style.height)/parseFloat(bars[i].style.height) > 1.07) {
                    bike.style.transform = 'translate(-50%,-100%) scaleX(-1) rotate(45deg)';
                }
            }
            bars[i].append(bike);
            await new Promise(resolve => setTimeout(resolve, speedSetter()));
            bike.style.transform = 'translate(-50%,-100%) scaleX(-1)';
        }
    }
}

runVisualizer();
