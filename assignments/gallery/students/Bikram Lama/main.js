// --- Fetch API (Variant 1 - COMMENTED OUT)
/*
fetch("https://radufromfinland.com/animals/") // send request to server
    .then(function(response) { // when response is received
        return response.json(); // convert response to JSON
    })
    .then(function(data) { // when JSON data is ready
        console.log(data); // print data to console
    })
    .catch(function(err) { // if an error occurs
        console.error(err); // print error
    });
*/


// --- Fetch API (Variant 2 - USED)
async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); // send request to server
        const data = await response.json(); // convert response to JSON
        console.log(data); // print received data
    } catch(err) {
        console.error(err); // print error if something fails
    }
}
fetchData(); // call the function


// --- Canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const animals = [];

// Generate 100 random animals
for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) animals.push(new Dog("Dog " + i)); // randomly create dog
    else animals.push(new Cat("Cat " + i)); // randomly create cat
}


// Grid settings
const cols = 25; // 25 columns
const spacing = 50; // space between animals
const size = 20; // size of each animal


// Draw grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    animals.forEach((animal, index) => { // loop through animals
        const col = index % cols; // column index
        const row = Math.floor(index / cols); // row index

        const x = col * spacing + 30; // x position
        const y = row * spacing + 30; // y position

        animal.draw(ctx, x, y, size); // draw animal
    });
}
drawGrid(); // call drawing function


// Click interaction
canvas.onmousedown = function(event) {
    const rect = canvas.getBoundingClientRect(); // get canvas position
    const mouseX = event.clientX - rect.left; // mouse x inside canvas
    const mouseY = event.clientY - rect.top; // mouse y inside canvas

    animals.forEach((animal, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);

        const x = col * spacing + 30;
        const y = row * spacing + 30;

        const dx = mouseX - x; // distance x
        const dy = mouseY - y; // distance y

        if (Math.sqrt(dx * dx + dy * dy) < size) { // check if clicked inside animal
            animal.talk(); // trigger talk + sound
        }
    });
};