/* // Variant 1 (Commented out as per requirement)
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

// Variant 2 (Requirement: Single-line comments at the end of every line)
async function fetchData() { // Declares an asynchronous function to handle the request
    try { // Starts a block to attempt the code and catch any errors
        const response = await fetch("https://radufromfinland.com/animals/"); // Waits for the server to send the response
        const data = await response.json(); // Parses the response body into a JavaScript object
        console.log(data); // Logs the animal data to the browser console for debugging
        generate100Animals(); // Calls the function to build our visual grid
    } catch(err) { // Executes if any part of the try block fails
        console.error(err); // Prints the specific error message to the console
    } // Closes the catch block
} // Closes the fetchData function

function generate100Animals() {
    const grid = document.getElementById("animal-grid");
    const dogSound = document.getElementById("dog-sound");
    const catSound = document.getElementById("cat-sound");

    // Requirement: Generate 100 random animals
    for (let i = 0; i < 100; i++) {
        const isDog = Math.random() > 0.5;
        const animal = isDog 
            ? new Dog("Doggo", 3, "brown", "black") 
            : new Cat("Kitty", 2, "orange", "green");

        const canvas = animal.render();
        
        // Requirement: use onmousedown to trigger talk and sound
        canvas.onmousedown = function() {
            animal.talk(); // Triggers the class talk method
            const sound = isDog ? dogSound : catSound; // Selects correct audio
            sound.currentTime = 0; // Resets sound so clicks can overlap
            sound.play(); // Plays the mp3 file
        };

        grid.appendChild(canvas);
    }
}

fetchData();