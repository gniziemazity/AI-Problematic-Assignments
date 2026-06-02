/*-------------
// variant 1
-------------*/

/* TASK 2: sources used:
   -  https://www.w3schools.com/js/js_promise.asp
   - https://www.w3schools.com/js/js_async_fetch.asp?utm_source=chatgpt.com
   - https://www.youtube.com/watch?v=37vxWr0WgQk&t=40s

   I asked chat gpt to find me sources that explain the principals featured in each variant
   -------------------------------------------------------------------------------------------------------
*/


/* fetch("https://radufromfinland.com/animals/") // a function that makes http requests to a server and returns a promis. This simplyfies asynchronous (single ) handling 
    .then(function(response) { //promised based meaning it will accept or reject. Runs when thr fetch promise resolves a response  object
        return response.json(); Note-- converts to json format -> returns a 'Promise' Containing the data NOT the data itself!
    })
    .then(function(data) {
        console.log(data); // enables data to be used from json as a JavaScript object
    })
    .catch(function(err) {
        console.error(err); // will log an error to the console if there is an issue with fetch or repsonse.json
    });
    /*

    ---------------------------------------------------------------------------------------------------------


----------------
// variant 2
----------------

/* TASK 2: 
sources used:
   -  https://www.w3schools.com/js/js_async.asp
   - https://developer.mozilla.org/en-US/docs/Web/API/Response/json
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
   
*/

//TASK 2: A small function that lets me keep my extra attributes //
//!! This was NOT in the task - thus the cats will NOT be exactly the same as those in the file!!//
//!! ALSO each time the page is refreshed the cats will change !!//
function getRandomCatColor() {
    const colors = ["black", "brown", "yellow", "grey",  "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
async function fetchData() { //  the function here is declared and pauses until asynchronous operatin finish
    console.log("FETCH FUNCTION STARTED"); // DEBUG LINE XXX 
    try { // starts a test block of code for run time errors. i,e code has to be able to run for it to be checked
        
        //HAVING ISSUES WITH SERVER ??
        const response = await fetch("https://radufromfinland.com/animals/"); // sends a http request to the server. then await is like a pause button pausing until the fetch is complets . Howver still not json yet 
        console.log("RESPONSE:", response); // DEBUG LINE XXX 
        const data = await response.json(); // parse to json -> returns a promise -> get a Java script objet 
        


        /* Temp - Test - XXX DEBUG LINE --
        ------------------------------------

        const data = [
    { type: "DOG", name: "Rex", age: 10, furr: "#ccc", eyes: "black" },
    { type: "CAT", name: "Milo", age: 10, furr: "#f8f8f8", eyes: "blue" }
];*/

        /* ---------LOOP FUNCTION----------------
        a function to get all the dogs or cats 
        -----------------------------------------
        */

    data.forEach(item => {
    let animal;

    if(item.type === "DOG") {
        animal = new Dog(item.name, item.age, item.furr, item.eyes);
    } else if(item.type === "CAT") {
        const earColor = getRandomCatColor(); // assign two variable with the selected random colour for each //
        const whiskerColor = getRandomCatColor(); // I could have just taken the furr for the ears or black for the whiskers but this was more interesting// 
        animal = new Cat(
            item.name,
            item.age,
            item.furr,
            item.eyes,
            earColor,
            whiskerColor
            
            /* "#FFD700",   // default ear color
            "#000000"    // default whisker color */
        );
    }


    const canvas = animal.render(100);

    /* TASK 3: Onclick event*/
    canvas.onclick = function() { //
        animal.talk();
    /* TASK 3: Creating sound variable ( so do not need to create new every single instance)*/
    let sound; // prepare audio 
    const catSound = new Audio("cat.mp3"); // SOURCE : https://freesound.org/people/sovy/sounds/232343/
    const dogSound = new Audio("dog.mp3"); // SOURCE : https://freesound.org/people/se2001/sounds/519283/

    if (item.type === "CAT") {
        sound = catSound;}

      
    if (item.type === "DOG") {
        sound = dogSound}

        sound.currentTime = 0; // start of audio
        sound.play();           // Plays audio 


       /* setTimeout(() => {               //  Stop sound after 1 seconds This DID NOT work 
        sound.pause();
        }, 1000);*/                 
};
    canvas.style.width = "50px";
    canvas.style.height = "50px";
    document.getElementById("grid").appendChild(canvas);
    console.log("JS FILE LOADED");// DEBUG LINE XXX 
});
        
        
        
        
        
        
        console.log(data); // projects the response to console so that it can be used ( mainpulated / read)
    
    
    
        // Now the data has been inspected (all) --create a test 
        /*
    //-------------------------------//
    //-----TEST_ FOR XXX REMEMBER TO REMOVE AFTER--//
    //-------------------------------//
    
        const first = data[0]; // get first item from array
        console.log("FIRST ITEM:", first);

        const dog = new Dog(first.name, first.age, "brown", "black");
        console.log("TEST DOG:", dog);

        const canvas = dog.render(150);
        document.getElementById("grid").appendChild(canvas);
        */

    } catch(err) { // let's you handle an error 
        console.error(err); // Java script creates an object containing the details of the error . name + message 
    }
}
fetchData(); // calls the function 

