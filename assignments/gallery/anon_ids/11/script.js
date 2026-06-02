// ---------- VARIANT 1 (COMMENTED) ----------
/*
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

// ---------- VARIANT 2 (USED) ----------
async function fetchData() { 
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); // fetch data
        const data = await response.json(); 
        console.log(data); 

        generateAnimals(); 
    } catch (err) {
        console.error(err); 
    }
}

fetchData(); // run function



function generateAnimals() {
    const grid = document.getElementById("grid");

    for (let i = 0; i < 100; i++) { 

        let animal;

        if (Math.random() > 0.5) {
            animal = new Dog("Dog" + i, 5, "brown", "white");
        } else {
            animal = new Cat("Cat" + i, 5, "gray", "green");
        }

        const canvas = animal.render(60); 

        canvas.onmousedown = function () {
            console.log("CLICK WORKING");
            animal.talk();
        };

        grid.appendChild(canvas);
    }
}

canvas.onmousedown = function () {
    console.log("CLICK WORKING");
    animal.talk();
};