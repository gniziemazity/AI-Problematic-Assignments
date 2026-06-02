/*// variant 1
fetch("https://radufromfinland.com/animals/") //make a request to the specific URL and returns a promise object resolvimg to the response object
    .then(function(response) {                  // wait until the response object is received, the anonymous function is defined 
        return response.json();                 // to call the method to parse the response object as JSON. Then a .json() returns a promise object resolving to a new response object
    })
    .then(function(data) {                      //wait until the data is parsed, then the anonymous function is defined to receive the data as an argument 
        console.log(data);                      //and log it to the console
    })
    .catch(function(err) {                      // if the promise object rejects, the catch method is called with an anonymous function that receives the error as an argument 
        console.error(err);                     //and logs it to the console
    });
*/
// variant 2
async function fetchData() {              // define an asynchronous function named fetchData
    try {                                   // try/catch block to handle errors
        const response = await fetch("https://radufromfinland.com/animals/"); // wait until the fetch request is completed and the response object is received, then assign it to the variable response
        const data = await response.json();     //wait until the response is parsed as JSON and assign the resulting data to the variable data
        console.log(data);                      //log the data to the console
        return data;                           //return the data from the function
    } catch(err) {                     // if the promise object rejects
        console.error(err);             // log the error to the console
        throw err;                      // re-throw the error to be handled by the caller of the function
    }
}

async function animals() {
    try {
        const animalData = await fetchData(); //revokes the fetchData function
        const animalsDiv = document.createElement('div');
        animalsDiv.id = 'container';
        // add the container div to the body of the document
        document.body.appendChild(animalsDiv);

        // create animal array and populate it with instances of Cat and Dog classes based on the data received from the API
        for (let i = 0; i < animalData.length; i++) {
            let animalObj;
            if (animalData[i].type === 'CAT') {
                animalObj = new Cat(animalData[i].name, animalData[i].age, animalData[i].furr, animalData[i].eyes);
            } else if (animalData[i].type === 'DOG') {
                animalObj = new SmartDog(animalData[i].name, animalData[i].age, animalData[i].furr, animalData[i].eyes);
            }

            const canvas = animalObj.render();
            canvas.classList.add('item-canvas');
            const talkOut = document.createElement('div');
            talkOut.classList.add('talker');
            canvas.onclick = function() {
                if (animalData[i].type === 'CAT') {
                    const catSound = document.getElementById('cat-sound');
                    catSound.play();
                } else if (animalData[i].type === 'DOG') {
                    const dogSound = document.getElementById('dog-sound');
                    dogSound.play();
                }
                talkOut.innerText = animalObj.talk(); // talking when the canvas is clicked
                }
            // create a div element with the class 'item' and append the canvas and talkOut to it, then append the itemDiv to the container animalsDiv
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.appendChild(canvas);
            itemDiv.appendChild(talkOut);
            animalsDiv.appendChild(itemDiv);
        };

    } catch(err) {
    console.error(err);}
}

animals();