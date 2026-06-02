async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/");
        const data = await response.json();


const animals = [];
const COLS = 25;       
const ROWS = 4;        
const CELL = 120;   

// Main grid Canvas
const gridCanvas = document.createElement("canvas");
gridCanvas.width = COLS * CELL;
gridCanvas.height = ROWS * CELL;
const gctx = gridCanvas.getContext("2d");

// Create cats
for (let i = 0; i < 100; i++) {
    const cat = new Cat(
        "Cat" + i,
        Math.floor(Math.random() * 10),
        ["black", "gray", "brown", "orange"][Math.floor(Math.random() * 4)],
        ["green", "yellow", "blue", "brown"][Math.floor(Math.random() * 4)]
    );
    animals.push(cat);
}

// Convert cats to images and draw on grid
for (let i = 0; i < animals.length; i++) {

    const cx = i % COLS;             // column
    const cy = Math.floor(i / COLS); // row

    const catCanvas = animals[i].render();
    gctx.drawImage(catCanvas, cx * CELL, cy * CELL, CELL, CELL);
}

// Exact click event on each cell
gridCanvas.onmousedown = function (e) {
    const rect = gridCanvas.getBoundingClientRect();

// Calculate click position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate cell
    const col = Math.floor(x / CELL);
    const row = Math.floor(y / CELL);
    const index = row * COLS + col;

    if (animals[index]) {
        animals[index].talk();
    }
};

container.appendChild(gridCanvas);
    } catch(err) {
        console.error(err);
    }
}

fetchData();