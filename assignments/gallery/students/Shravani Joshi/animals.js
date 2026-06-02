// variant 1 
fetch("https://radufromfinland.com/animals/")  // requests the server to get the data of the animal 
    .then(function(response) { //  runs when server responds 
        return response.json(); //converts the response into JSON
    })
    .then(function(data) { // receives the JavaScript data
        //console.log(data); shows the data in the console
       
        const container = document.getElementById("container"); 
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(4, 1fr)"; 
        container.style.gridTemplateRows = "repeat(25, auto)"; 
        container.style.border = "1px solid black";
        
        

        const animals = data.sort(() => Math.random() - 0.5).slice(0, 100);

        for (let animal of animals) { 
            let obj; 
            let audio;

          if(animal.type == "DOG") {
           obj = new Dog(animal.name, animal.age, animal.furr, animal.eyes); 
           audio = document.getElementById("dogsound");
        } else {
          obj = new Cat(animal.name, animal.age, animal.furr, animal.eyes); 
          audio = document.getElementById("catsound");
        }
            const canvas = obj.render(150); 
            canvas.onclick = () => {
            obj.talk()
            if(audio) {
             audio.currentTime = 0;
             audio.play();
             setTimeout(() => audio.pause(), 3000);
            }

            } 
          
            container.appendChild(canvas); 
        }
        
    }) .catch(function(err) { // check if there is any errors
        console.error(err); //shows the errors in the console
    }) 

/*
// variant 2
async function fetchData() { // it defines the async function
    try {
        const response = await fetch("https://radufromfinland.com/animals/"); // waits for the server to respond 
        const data = await response.json(); //waits for the response and then convert it to JSON
        console.log(data); // show the data in console 
    } catch(err) { // if any error 
        console.error(err); // shows error in console
    }
}
fetchData(); // this is the async function to fetch the data 
// 
*/