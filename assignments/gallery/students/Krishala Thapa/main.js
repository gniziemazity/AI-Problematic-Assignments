/*
fetch("https://radufromfinland.com/animals/")
    .then(function(response) { return response.json(); })
    .then(function(data) { console.log(data); })
    .catch(function(err) { console.error(err); });
*/

async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/");
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
fetchData();

function randomAnimal() {
    return Math.random() < 0.5 ? new Dog() : new Cat();
}

const grid = document.getElementById("grid");

for (let i = 0; i < 100; i++) {
    const cell = document.createElement("canvas");
    cell.width = 80;
    cell.height = 80;
    cell.className = "cell";

    const animal = randomAnimal();
    const ctx = cell.getContext("2d");
    animal.draw(ctx);

    cell.onmousedown = function() {
        animal.talk();

        if (animal.type === "dog") {
            document.getElementById("dogSound").play();
        } else {
            document.getElementById("catSound").play();
        }
    };

    grid.appendChild(cell);
}