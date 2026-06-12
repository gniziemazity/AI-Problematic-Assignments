// ===== Part of the original in-class JavaScript demo =====

myNumber = 25.2; // never define without const, let (or var)
console.log(myNumber);

const myString = "I study at Academy";
console.log(myString);

let myBoolean = true;
var oppositeBoolean = !myBoolean; // var was "replaced" by let and const
console.log(myBoolean, oppositeBoolean); // accepts multiple parameters
myBoolean = false;
oppositeBoolean = !myBoolean;
console.log(myBoolean, oppositeBoolean);

console.log(!42, !"ABC", ![]);
console.log(!null, !undefined, !0); // zero is "falsy"

// arrays are like Python lists
const myArray = [1, 2, 3, "Academy", true, null];
myArray.length = 0;
myArray[0] = 9;
myArray[1] = 8;
myArray[2] = 7;
// myArray = [1, 2, 3]; ERROR! Program would fail here!
try {
    myArray = [1, 2, 3];
} catch(err) {
    console.error(err);
}
myArray.push(6);
myArray.push(11);
myArray.sort(function(a, b){ return a - b; });
console.log(myArray);

// objects are like Python dictionaries
const dog = {
    name: "Max",
    age: 5,
    furr: "black",
    eyes: "brown"
};
console.log(dog);
console.table(dog);
console.log(dog.name);
dog.name = "Charlie";
console.log(dog["name"]);

const anotherDog = new Dog("Rex", 7, "brown", "black");
console.log(anotherDog);
anotherDog.talk();
const canvas = anotherDog.render();
container.appendChild(canvas); /*
    no need for document.getElementById("container")
    ids that are valid JS names are automatically global variables
    invalid names:
     * start with a number
     * contain spaces or special characters (like -)
*/

// A Cat created from the new Cat class (cat.js)
const anotherCat = new Cat("Whiskers", 7, "#9A9A9A", "#7BC043");
console.log(anotherCat);
anotherCat.talk();
const catCanvas = anotherCat.render();
container.appendChild(catCanvas);

let a = 5;
let b = 2;
// operators
console.log(a + b);
a = "5";
console.log(a + b); // concatenation
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(Math.pow(a, b));
console.log(Math.sqrt(b));
console.log(Math.pow(b, 0.5));
console.log(b ** 0.5);

a = Number(a) + 5;
console.log(a);
a += 5;
a *= 2;
a /= 3;
a %= 4;
a **= 10;
console.log(a);

const s1 = "Welcome to Academy!";
const s2 = 'Welcome to "Academy"!';
const s3 = "Welcome to \"Academy\"!"; // escaping with \
console.log(s1, s2, s3);

const age = 36;
console.log("I am " + age + " years old");
console.log(`I am ${age} years old`); // template literal

let today = new Date();
console.log(today);
let someDate = new Date("August 24, 2025");
console.log(someDate);

console.log(today.getDay());
switch (today.getDay()) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    default: console.log("Weekend"); break;
}


// ===== Assignment Part 2: reading JSON from a server-side API =====

/*
// variant 1
fetch("https://radufromfinland.com/animals/")     // start an HTTP request to the animals API
    .then(function(response) {                     // when the response arrives, run this function
        return response.json();                    // parse the response body as JSON (returns a promise)
    })                                             // .then() passes that parsed data to the next step
    .then(function(data) {                         // when the JSON is parsed, run this function
        console.log(data);                         // print the array of animals to the console
    })                                             // end of the second .then() handler
    .catch(function(err) {                         // if anything above failed, run this function
        console.error(err);                        // print the error to the console
    });                                            // end of the fetch promise chain
*/

// variant 2  <-- this is the variant I chose (async / await is easier to read)
async function fetchData() {                                              // declare an asynchronous function
    try {                                                                  // try block: code that might fail
        const response = await fetch("https://radufromfinland.com/animals/"); // wait for the HTTP request to finish
        const data = await response.json();                                // wait for the JSON body to be parsed
        console.log(data);                                                 // print the array of animals to the console
        return data;                                                       // hand the data back to whoever called fetchData()
    } catch(err) {                                                          // catch block: runs if anything above failed
        console.error(err);                                                 // print the error to the console
    }                                                                       // end of the try/catch
}                                                                           // end of the fetchData function
fetchData();                                                                // call the function so it actually runs


// ===== Assignment Part 2 & 3: generate 100 random animals, draw a 4 x 25 grid =====

// Pre-load the two sounds once so they are ready when a cell is clicked.
const meowSound = new Audio("sounds/meow.mp3"); // sound played when a Cat is clicked
const woofSound = new Audio("sounds/woof.mp3"); // sound played when a Dog is clicked

// Helper that plays a sound from the start every time (so rapid clicks still work).
function playSound(sound) {
    sound.currentTime = 0;        // rewind to the beginning
    sound.play().catch(function(err) {
        console.error(err);       // some browsers block autoplay until the user interacts
    });
}

// Builds 100 random animals and draws them into a 4-row x 25-column grid.
async function generateAnimals() {
    const animalsData = await fetchData();              // re-use variant 2 to get the list of animals from the API
    if (!animalsData || animalsData.length === 0) {     // safety check in case the request failed
        console.error("No animal data received.");
        return;
    }

    const grid = document.getElementById("grid");       // the container that will hold all 100 cells

    for (let i = 0; i < 100; i++) {                     // loop 100 times to create 100 animals
        // pick a random entry from the data returned by the API
        const template = animalsData[Math.floor(Math.random() * animalsData.length)];

        // build a real Cat or Dog object depending on the "type" field
        let animal;
        if (template.type === "CAT") {
            animal = new Cat(template.name, template.age, template.furr, template.eyes);
        } else {
            animal = new Dog(template.name, template.age, template.furr, template.eyes);
        }

        // draw the animal onto a small canvas
        const cell = animal.render(150);                // 150px canvas keeps the grid compact
        cell.className = "cell";                        // for styling from style.css
        cell.title = template.type + " - " + animal.name; // tooltip shown on hover

        // Part 3: when the cell is pressed, the animal talks and a sound plays.
        // LLM note from the assignment: use onmousedown instead of onclick.
        cell.onmousedown = function() {
            animal.talk();                              // log "Meow!" / "Woof!" to the console
            if (template.type === "CAT") {
                playSound(meowSound);                   // cats meow
            } else {
                playSound(woofSound);                   // dogs woof
            }
        };

        grid.appendChild(cell);                         // add the finished cell into the grid
    }
}

generateAnimals(); // kick everything off
