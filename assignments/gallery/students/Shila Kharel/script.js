/* ---------------------------------------------------
   FETCH VARIANT 1 (PROMISES) — COMMENTED OUT
---------------------------------------------------

fetch("https://radufromfinland.com/animals/") // send request to server
    .then(function(response) { // wait for server reply
        return response.json(); // convert JSON text → JS object
    })
    .then(function(data) { // wait for JSON conversion
        console.log(data); // print the array of animals
    })
    .catch(function(err) { // if something goes wrong
        console.error(err); // print the error
    });

--------------------------------------------------- */


/* ---------------------------------------------------
   FETCH VARIANT 2 (ACTIVE VERSION)
--------------------------------------------------- */

async function fetchData() { // declare async function
    try { // start error-catching block
        const response = await fetch("https://radufromfinland.com/animals/"); // wait for server
        const animals = await response.json(); // convert JSON → JS array
        console.log(animals); // show all animals from server

        const randomAnimals = []; // store 100 random animals

        for (let i = 0; i < 100; i++) { // repeat 100 times
            const index = Math.floor(Math.random() * animals.length); // pick random index
            randomAnimals.push(animals[index]); // add random animal to list
        }

        drawGrid(randomAnimals); // draw all 100 animals
    } catch(err) { // if something fails
        console.error(err); // print error
    }
}

fetchData(); 

function drawGrid(list) { 
    let row = 0; 
    let col = 0; 

    list.forEach(function(animal) { 
        let obj; 

        if (animal.type === "dog") { 
            obj = new Dog(animal.name, animal.age, animal.fur, animal.eyes); 
        } else { 
            obj = new Cat(animal.name, animal.age, animal.fur, animal.eyes); 
        }

        const canvas = obj.render(); 
        canvas.style.position = "absolute"; 
        canvas.style.left = (col * 220) + "px"; 
        canvas.style.top = (row * 220) + "px"; 

        canvas.onmousedown = () => { 
            obj.talk(); 
            if (animal.type === "dog") {
                const snd = document.getElementById("dogSound");
                snd.currentTime = 0;
                snd.play();
            } else {
                const snd = document.getElementById("catSound");
                snd.currentTime = 0;
                snd.play();
            }
        };

        document.getElementById("container").appendChild(canvas); 

        col++; 

        if (col === 4) { 
            col = 0; 
            row++; 
        }
    });
}