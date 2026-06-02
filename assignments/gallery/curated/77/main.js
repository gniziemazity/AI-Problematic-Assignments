const container = document.getElementById("container");

// variant 1 (active)
fetch("https://radufromfinland.com/animals/")   // request data from the server API
    .then(function(response) {                  // runs when server sends response
        return response.json();                 // convert response to JSON format
    })
    .then(function(data) {                      // runs after JSON is ready
        console.log(data);                      // print the data in console
    })
    .catch(function(err) {                       // runs if error happens
        console.error(err);                     // print error message
    });

/*
// variant 2 (commented)
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
*/

// generate 100 random animals
for(let i = 0; i < 100; i++){

    let animal;

    if(Math.random() < 0.5){
        animal = new Dog("Dog"+i,5,"brown","black");
    } else{
        animal = new Cat("Cat"+i,3,"gray","green");
    }

    const canvas = animal.render();

    canvas.onclick = function(){

    animal.talk();

    if (animal instanceof Dog){

        const dogSound = document.getElementById("dogSound");
        dogSound.currentTime = 0;
        dogSound.play();

    } else{

        const catSound = document.getElementById("catSound");
        catSound.currentTime = 0;
        catSound.play();

    }

};

    container.appendChild(canvas);
}