const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const animals = [];
const rows = 4;
const cols = 25;

// sounds
const dogSound = new Audio("dog.mp3");
const catSound = new Audio("cat.mp3");
dogSound.preload = "auto";
catSound.preload = "auto";

// create grid
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

        let x = j * cellWidth + cellWidth / 2;
        let y = i * cellHeight + cellHeight / 2;

        if (Math.random() < 0.5) {
            let dog = new Dog(x, y);
            dog.type = "dog";
            animals.push(dog);
        } else {
            let cat = new Cat(x, y);
            cat.type = "cat";
            animals.push(cat);
        }
    }
}

// draw all animals
function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animals.forEach(animal => animal.draw(ctx));
}
drawAll();

// click event (no popup)
canvas.addEventListener("click", function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    animals.forEach(animal => {
        let dx = mouseX - animal.x;
        let dy = mouseY - animal.y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 20) { // click detection
            // play correct sound
            if (animal.type === "dog") {
                dogSound.currentTime = 0;
                dogSound.play().catch(err => console.log(err));
            } else {
                catSound.currentTime = 0;
                catSound.play().catch(err => console.log(err));
            }
        }
    });
});