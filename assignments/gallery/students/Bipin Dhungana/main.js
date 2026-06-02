const container = document.getElementById("container"); // container div

// async fetch variant
async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); // fetch API
        const data = await response.json(); // parse JSON
        generateAnimals(data); // call function to render 100 animals
    } catch(err) { console.error(err); } // log errors
}
fetchData(); // call fetch function

function generateAnimals(data) {
    for(let i=0;i<100;i++){ // loop 100 times
        const animalData = data[Math.floor(Math.random()*data.length)]; // pick random animal
        let animal;

        // randomly decide Dog or Cat
        if(Math.random()>0.5) animal = new Dog(animalData.name,animalData.age,animalData.furr,animalData.eyes);
        else animal = new Cat(animalData.name,animalData.age,animalData.furr,animalData.eyes);

        const canvas = animal.render(); // draw animal
        canvas.style.width="80px"; canvas.style.height="80px"; // size for grid

        // play sound on click
        canvas.onmousedown = function(){
            animal.talk(); // console log
            const sound = (animal instanceof Dog)? new Audio("bark.mp3"): new Audio("meow.mp3"); // new Audio object
            sound.play().catch(err=>console.error(err)); // play sound
        };

        container.appendChild(canvas); // add to container
    }
}

