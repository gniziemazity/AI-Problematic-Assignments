/*I worked with YYY and ZZZ while making this so there are similarities in the code. We didnt just copy from each other */
const count = 100;
const array = new Array(count);
let animal_data = [];   /*data from json */
const container = document.getElementById("container");
for(i = 0; i < count; i++){ /*prints 25x4 grid */
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
}
async function fetchData() {
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); /*starts getting(fetching) a resource from given address. 
        The await keyword makes it so it waits until the fetch is complete to continue
        */
        const data = await response.json(); /*gets the promise object that is converted 'resolved' to a javascript object */
        return data;
        
    } catch(err) {
        console.error(err);
    }
}

/*fetch("https://radufromfinland.com/animals/")
    .then(function(response) {          after fetch is resolved return responce.json
        return response.json();
    })
    .then(function(data) {              after fetch os resolved print 'data' in console
        console.log(data);
    })
    .catch(function(err) {              print if error
        console.error(err);
    });
*/
/*function to wait until the data is processed -> get array and not promise */
async function getData(){
    animal_data = await fetchData();
    addAnimal();
}

/*gets animal array goes through it and appends animal render and onclick to squares */
function addAnimal(){
    const squares = document.getElementsByClassName("square"); /*creates array of all squares */
    for (let i = 0; i < squares.length; i++){
        if (animal_data[i].type == 'DOG'){  /*get all dog type items in json */
            let dog = new Dog(animal_data[i].name, animal_data[i].age, animal_data[i].furr, animal_data[i].eyes); /*create new dog */
            squares[i].appendChild(dog.render(100)); /*render the current dog to the square */
            squares[i].onclick =  function(){dogNoise(dog)};  /*adds onclick to the squares if the animal in square is dog dogNoise if cat catNoise */
        }
        if (animal_data[i].type == 'CAT'){  /*get all cat type items in json */
            let cat = new Cat(animal_data[i].name, animal_data[i].age, animal_data[i].furr, animal_data[i].eyes); /*create new cat */
            squares[i].appendChild(cat.render(100)); /*render the current cat to the square */
            squares[i].onclick =  function(){catNoise(cat)};
        }
    }
}
/*cat noise
https://pixabay.com/sound-effects/search/cat/ */

const catAudio = new Audio('catNoise.mp3');
/* dog noise
https://pixabay.com/sound-effects/search/dog/ */
const dogAudio = new Audio('dogNoise.mp3');


function dogNoise(dog){
    console.log(dog.talk());
    dogAudio.play();
}
function catNoise(cat){
    console.log(cat.talk());
    catAudio.play();
}

getData();