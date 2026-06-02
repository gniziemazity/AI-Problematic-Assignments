/* -----------------------------------------------------------------------
   GLOBAL VARIABLES
----------------------------------------------------------------------- */
const COUNT      = 50;                  // number of bars
let array         = new Array(COUNT);   // array to sort
let var_speed     = 100;                // milliseconds pause between swaps
let isSorting     = false;              // guard against multiple runs

/* -----------------------------------------------------------------------
   BUILD THE INITIAL ARRAY AND RENDER IT
----------------------------------------------------------------------- */
for (let i = 0; i < COUNT; i++) {
    array[i] = Math.random();   // random values 0…1
}
renderBars();

/* -----------------------------------------------------------------------
   RENDER ALL BARS (used after each swap)
----------------------------------------------------------------------- */
function renderBars() {
    const vis = document.getElementById('vis-123456');
    vis.innerHTML = '';                     // clear previous bars
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 100}%`;
        vis.appendChild(bar);
    });
}

/* -----------------------------------------------------------------------
   UPDATE SPEED VARIABLE FROM SLIDER
----------------------------------------------------------------------- */
function updateSpeed(val) {
    var_speed = Number(val);
    document.getElementById('speed-value').textContent = var_speed;
}

/* -----------------------------------------------------------------------
   START THE SORTING PROCESS
----------------------------------------------------------------------- */
async function bubbleSort() {
    if (isSorting) return;   // avoid concurrent sorts
    isSorting = true;

    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                // swap
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                swapped = true;
                renderBars();                     // visual update
                await new Promise(r => setTimeout(r, var_speed));
            }
        }
    } while (swapped);

    // sorting finished – show the motorcycle
    animateMotorcycle();
    isSorting = false;
}

/* -----------------------------------------------------------------------
   MOVING THE MOTORCYCLE EMOJI ACROSS THE BAR CHART
----------------------------------------------------------------------- */
function animateMotorcycle() {
    const motor = document.getElementById('motorcycle');
    motor.classList.remove('hidden');           // make visible

    const vis   = document.getElementById('vis-123456');
    const width = vis.clientWidth;

    // start outside the left side
    let pos = -30;                              // starting X (px)
    const step = 2;                             // pixels per tick

    const interval = setInterval(() => {
        pos += step;
        motor.style.left = `${pos}px`;

        // stop when the emoji has moved past the right edge
        if (pos > width + 30) {
            clearInterval(interval);
            motor.classList.add('hidden');     // hide again
        }
    }, 20);   // 20 ms ≈ 50 FPS
}

/* -----------------------------------------------------------------------
   RUN THE SORTING ON PAGE LOAD
----------------------------------------------------------------------- */
bubbleSort();
