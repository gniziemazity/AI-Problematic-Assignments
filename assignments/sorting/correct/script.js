// created it here and not adding it to the DOM before the end
const moto = document.createElement("div");
moto.textContent = "🏍️";

const count = 50;
const array = new Array(count);

const slider = document.getElementById("slider-id");
slider.oninput = function () {
  speed = this.max - this.value;
};
let speed = slider.max - slider.value;

for (let i = 0; i < count; i++) {
  array[i] = Math.random(); // numbers between 0 and 1
}

const visualizer = document.getElementById("vis-123456");
for (let i = 0; i < array.length; i++) {
  const bar = document.createElement("div");
  visualizer.appendChild(bar);
  bar.classList.add("bar");
  bar.style.height = array[i] * 100 + "%";
}

runEverything();

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
      if (arr[i - 1] > arr[i]) {
        const aux = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = aux;
        swapped = true;
        updateBars();
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  } while (swapped);
}

async function runEverything() {
  await bubbleSort(array);

  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < bars.length; i++) {
    if (i != bars.length - 1) {
      const rotation =
        Math.atan2(
          bars[i + 1].offsetHeight - bars[i].offsetHeight,
          bars[i + 1].offsetLeft - bars[i].offsetLeft,
        ) *
        (180 / Math.PI);

      moto.style.transform = `translateY(-100%) scaleX(-1) rotate(${rotation}deg)`;
    }
    bars[i].appendChild(moto);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}
