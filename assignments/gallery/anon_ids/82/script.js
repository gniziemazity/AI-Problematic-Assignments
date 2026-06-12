let myNumber = 25.2; 
console.log(myNumber);

const myString = "I study at Academy";
console.log(myString);

let myBoolean = true;
var oppositeBoolean = !myBoolean; //var was "replaced" by let and const //
console.log(myBoolean, oppositeBoolean); // accepts multiple parameters //
myBoolean = false;
oppositeBoolean = !myBoolean;
console.log(myBoolean, oppositeBoolean);

console.log(!42, !"ABC", ![]);
console.log(!null, !undefined, !0); // zero is "falsy" //

// arrays are like python lists //
const myArray = [1, 2, 3, "Academy", true, null];
myArray.length = 0;
myArray[0] = 9;
myArray[1] = 8;
myArray[2] = 7;
// myArray = [1, 2, 3]; ERROR! Program would fail here! //
try {
    myArray = [1, 2, 3];
} catch(err) {
    console.log(err);
}
myArray.push(6);
myArray.push(11);
myArray.sort(function(a, b){ return a - b; });
console.log(myArray)

// objects are like python dictionaries //
const dog = {
    name : "Max",
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
container.appendChild(canvas); /* no need for document.getElementById("container")
ids that are valid JS names are automatically global variables
invalid names:
    * start with a number
    * contain spaces or special characters (like -)
*/
const myCat = new Cat("Milo", 3, "gray", "green");
console.log(myCat);
myCat.talk();

const catCanvas = myCat.render();
container.appendChild(catCanvas);

let a = 5;
let b = 2;
// operators //
console.log(a + b);
a = "5";
console.log(a + b); // concatenation //
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
const s3 = "Welcome to \"Academy\"!"; // escaping with //
console.log(s1, s2, s3);

const age = 36;
console.log("I am " + age + " years old");
console.log(`I am ${age} years old`); // template literal //

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

// variant 1 //
/*
fetch("https://radufromfinland.com/animals/") // send a request to the server to get animal data //
    .then(function(response) { // once we get a response from the server //
        return response.json(); // convert the response into JSON format so we can use it //
    })
    .then(function(data) { // when the JSON data is ready //
        console.log(data); // print the data to see what we received //
    })
    .catch(function(err) { // if something goes wrong during the process //
        console.error(err); // print the error in the console for debugging  //
});
*/

// variant 2 //
async function fetchData() { // create an async function so we can use await //
    try { // try block to handle possible errors //
        const response = await fetch("https://radufromfinland.com/animals/"); // request data from the API //
        const data = await response.json(); // convert the response into JSON so we can work with it //
        console.log(data); // print the data to check what we got //

        // create a container that will hold all animals in a grid layout //
        const grid = document.createElement("div"); // create a new div element //
        grid.style.display = "grid"; // set display to grid so items align nicely //
        grid.style.gridTemplateColumns = "repeat(4, 1fr)"; // create 4 columns (so 25 rows for 100 items) //

        // loop 100 times to generate 100 random animals //
        for (let i = 0; i < 100; i++) { // repeat this block 100 times //
            const animal = data[Math.floor(Math.random() * data.length)]; // pick a random animal from the data //

            let obj; // variable to store either a Dog or Cat object //
            if (animal.type === "dog") { // check if the animal type is dog //
                obj = new Dog(animal.name, animal.age, animal.furr, animal.eyes); // create a Dog object //
            } else { // if it's not a dog, assume it's a cat //
                obj = new Cat(animal.name, animal.age, animal.furr, animal.eyes); // create a Cat object //
            }

            const canvas = obj.render(); // draw the animal using its render method //

            // ADD onmousedown functionality to play sound and talk //
            canvas.onmousedown = function() { // trigger when mouse is pressed on this animal //
                obj.talk(); // call the talk method //

                // play sound based on type //
                if (animal.type === "dog") {
                    document.getElementById("dogSound").play(); // play dog bark //
                } else {
                    document.getElementById("catSound").play(); // play cat meow //
                }
            };

            grid.appendChild(canvas); // add the canvas to the grid container //
        }

        container.appendChild(grid); // finally, add the whole grid to the page //

    } catch(err) { // if any error happens during fetch or processing //
        console.error(err); // print the error so we know what went wrong //
    }
}

fetchData(); // call the function to actually run it //