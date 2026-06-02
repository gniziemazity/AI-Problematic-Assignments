const canvas = document.getElementById("animalCanvas");
const ctx = canvas.getContext("2d");

const rows = 4;
const cols = 25;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

let dogs = [];
let cats = [];

function randomAnimal(x, y) {
    if (Math.random() < 0.5) {
        const dog = new Dog(x, y, cellWidth, cellHeight);
        dogs.push(dog);
        return dog;
    } else {
        const cat = new Cat(x, y, cellWidth, cellHeight);
        cats.push(cat);
        return cat;
    }
}

// grid animal row-colu  
let animals = [];
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const x = j * cellWidth;
        const y = i * cellHeight;
        const animal = randomAnimal(x, y);
        animals.push(animal);
        animal.draw(ctx);
    }
}

// oneClick function 
function oneClick(event) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    // dog
    for (let dog of dogs) {
        if (dog.isClicked(mouseX, mouseY)) {
            dog.talk();
            return;
        }
    }

    // cat
    for (let cat of cats) {
        if (cat.isClicked(mouseX, mouseY)) {
            cat.talk();
            return;
        }
    }
}

// add fun to evrywhere mousd is 
canvas.addEventListener("mousedown", oneClick);

// variant2 Feth -
async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/");
        const data = await response.json();
        console.log("Data from server:", data);
    } catch(err) {
        console.error("Error fetching data:", err);
    }
}

// call Fet
fetchData();



// variant 1
//fetch("https://radufromfinland.com/animals/")
//    .then(function(response) {
//        return response.json();
//    })
//    .then(function(data) {
//        console.log(data);
//    })
//    .catch(function(err) {
//        console.error(err);
//   API is a service on internet that gaves some data to program with Json format , like text or list. 
// var 2 is clear because it not include then .. then .. . . it can wait for respons of Json and then go to next line