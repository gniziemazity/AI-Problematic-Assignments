async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); // send request to server
        const data = await response.json(); // convert response into JSON format
        console.log(data); // display data in console
    } catch (err) {
        console.error(err); // handle errors
    }
}
fetchData();

const canvas = document.getElementById("Canvas"); // get canvas element
const ctx = canvas.getContext("2d"); // get drawing context

const animals = []; // store all animals

const rows = 4;
const cols = 25;

const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

ctx.fillStyle = "#f5f5f5"; // light background
ctx.fillRect(0, 0, canvas.width, canvas.height);

function randomColor() {
    const colors = ["orange", "brown", "black", "gray", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
}

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

        const x = c * cellWidth;
        const y = r * cellHeight;

        let animal;

        // randomly choose Dog or Cat
        if (Math.random() > 0.5) {
            animal = new Dog("Dog_" + r + "_" + c, Math.random()*5 + 1, randomColor(), "black");
        } else {
            animal = new Cat("Cat_" + r + "_" + c, Math.random()*5 + 1, randomColor(), "green");
        }

        // store position for click detection
        animal.x = x;
        animal.y = y;
        animal.w = cellWidth;
        animal.h = cellHeight;

        animals.push(animal);

        /* ----- draw cell background (card style) ----- */
        ctx.fillStyle = "white";
        ctx.fillRect(x + 2, y + 2, cellWidth - 4, cellHeight - 4);

        /* ----- draw animal centered ----- */
        const size = Math.min(cellWidth, cellHeight) - 10;
        const img = animal.render(size);

        ctx.drawImage(
            img,
            x + (cellWidth - size) ,
            y + (cellHeight - size) ,
            size,
            size
        );
    }
}

ctx.strokeStyle = "#ddd"; // soft grid color
ctx.lineWidth = 1;

// horizontal lines
for (let r = 0; r <= rows; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * cellHeight);
    ctx.lineTo(canvas.width, r * cellHeight);
    ctx.stroke();
}

// vertical lines
for (let c = 0; c <= cols; c++) {
    ctx.beginPath();
    ctx.moveTo(c * cellWidth, 0);
    ctx.lineTo(c * cellWidth, canvas.height);
    ctx.stroke();
}

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
            animal.talk(); // trigger sound + console output
        }
    });
};

canvas.onmousemove = function() {
    canvas.style.cursor = "pointer"; // show pointer on hover
};