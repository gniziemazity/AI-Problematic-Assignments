const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const animals = [];
const rows = 4;
const cols = 25;

// Sounds
const dogSound = new Audio("dog.mp3");
const catSound = new Audio("cat.mp3");

// Generate 100 animals in 4x25 grid
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const x = j * 40 + 20;
        const y = i * 150 + 50;

        if (Math.random() < 0.5) {
            animals.push(new Dog(x, y));
        } else {
            animals.push(new Cat(x, y));
        }
    }
}

// Draw all animals
animals.forEach(animal => animal.draw(ctx));

// Click detection
canvas.onmousedown = function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    animals.forEach(animal => {
        const dx = mouseX - animal.x;
        const dy = mouseY - animal.y;

        if (Math.sqrt(dx * dx + dy * dy) < 20) { // click radius
            alert(animal.talk());
            if (animal instanceof Dog) dogSound.play();
            else catSound.play();
        }
    });
};

// Fetch API example with comments
async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); // get JSON
        const data = await response.json(); // parse JSON
        console.log(data); // print
    } catch(err) {
        console.error(err); // errors
    }
}
fetchData();