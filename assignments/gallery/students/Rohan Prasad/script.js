/* ================= FETCH ================= */
async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); 
        const data = await response.json(); 
        console.log(data); 
    } catch (err) {
        console.error(err); 
    }
}
fetchData();

/* ================= CANVAS SETUP ================= */
const canvas = document.getElementById("Canvas"); 
const ctx = canvas.getContext("2d"); 

const animals = []; 

// FIX: Changed to 2 rows and 10 cols so cells are bigger (100x100 pixels)
const rows = 4;
const cols = 25;

const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

/* ================= BACKGROUND ================= */
ctx.fillStyle = "#f5f5f5"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

/* ================= RANDOM COLOR ================= */
function randomColor() {
    const colors = ["orange", "brown", "black", "gray", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
}

/* ================= CREATE & DRAW ANIMALS ================= */
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

        const x = c * cellWidth;
        const y = r * cellHeight;

        let animal;

        if (Math.random() > 0.5) {
            animal = new Dog("Dog_" + r + "_" + c, Math.random()*5 + 1, randomColor(), "black");
        } else {
            animal = new Cat("Cat_" + r + "_" + c, Math.random()*5 + 1, randomColor(), "green");
        }

        animal.x = x;
        animal.y = y;
        animal.w = cellWidth;
        animal.h = cellHeight;

        animals.push(animal);

        /* ----- draw cell background ----- */
        ctx.fillStyle = "white";
        ctx.fillRect(x + 2, y + 2, cellWidth - 4, cellHeight - 4);

        /* ----- draw animal centered ----- */
        const size = Math.min(cellWidth, cellHeight) - 10;
        const img = animal.render(size);

        // FIX: Added "/ 2" to center the images inside their cell coordinates!
        ctx.drawImage(
            img,
            x + (cellWidth - size) / 2,
            y + (cellHeight - size) / 2,
            size,
            size
        );
    }
}

/* ================= DRAW GRID ================= */
ctx.strokeStyle = "#ddd"; 
ctx.lineWidth = 1;

for (let r = 0; r <= rows; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * cellHeight);
    ctx.lineTo(canvas.width, r * cellHeight);
    ctx.stroke();
}

for (let c = 0; c <= cols; c++) {
    ctx.beginPath();
    ctx.moveTo(c * cellWidth, 0);
    ctx.lineTo(c * cellWidth, canvas.height);
    ctx.stroke();
}

/* ================= CLICK FUNCTION ================= */
canvas.onmousedown = function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    animals.forEach(animal => {
        if (
            mouseX >= animal.x &&
            mouseX <= animal.x + animal.w &&
            mouseY >= animal.y &&
            mouseY <= animal.y + animal.h
        ) {
            animal.talk(); 
        }
    });
};

/* ================= OPTIONAL: CURSOR ================= */
canvas.onmousemove = function() {
    canvas.style.cursor = "pointer"; 
};