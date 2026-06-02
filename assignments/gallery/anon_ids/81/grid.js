// We worked together with YYY and ZZZ on getting some things that appear in this file to work as intended, hence some things might look alike between our grid.js code files. 

const count = 100;
const array = new Array(count);

/*

// Variant 1

fetch("https://radufromfinland.com/animals/")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.error(err);
    });

*/

// Variant 2(The one i chose to use)

async function fetchData() { // Creates function "fetchData()"
    try { // attempt to do what is said below

        const response = await fetch("https://radufromfinland.com/animals/");
        // go to website & get /animals

        const data = await response.json();
        // wait for response from website, then stores it in variable called response

        console.log(data);
        // type data in console

        return data;
        // return data available for use

    } catch(err) { // else catch error & throw an error in console
        console.error(err);
    }
}

async function getData() {
    animal_data = await fetchData()
    addAnimal()
}

function addAnimal() {
    const box = document.getElementsByClassName("box");

    for (let i = 0; i < box.length; i++) {
        if (animal_data[i].type == "DOG") {
            let dog = new Dog(animal_data[i].name, animal_data[i].age, animal_data[i].furr, animal_data[i].eyes);
            let dogElement = dog.render(200);

            dogElement.onclick = () => {
                playAudio() // plays audio that we declare in function
                dog.talk() // console logs a greeting specific per clicked animal type
            };

            const dogsound = document.getElementById("woof");
            // I don't plan to change the sound for dog, therefore "const" instead of "let"

            function playAudio() { 
                dogsound.play(); 
            } // creates function that we can call, playing the assigned sound

            box[i].appendChild(dogElement);
        }

        if (animal_data[i].type == "CAT") {
            let cat = new Cat(animal_data[i].name, animal_data[i].age, animal_data[i].furr, animal_data[i].eyes);
            let catElement = cat.render(200);

            catElement.onclick = () => {
                playAudio() // plays audio that we declare in function
                cat.talk() // console logs a greeting specific per clicked animal type
            };

            const catsound = document.getElementById("meow");
            // I don't plan to change the sound for cat, therefore "const" instead of "let"

            function playAudio() { 
                catsound.play(); 
            } // creates function that we can call, playing the assigned sound

            box[i].appendChild(catElement);
        }
    }
}

const grid = document.getElementById("container");

for (let i = 0; i < count; i++) {
    const box = document.createElement("div");
    grid.appendChild(box);
    box.classList.add("box");
}

getData()
