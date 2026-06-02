//Section 1: Establishing the cat
// This is literally the altered dog code from the link.
//there is a lower section here that is altered, that would be the ears segment. 
// Also speak, just skip past most of this until reaching bottom of the class
class Cat {
    constructor(name, age, furrColor, eyeColor) {
        this.name = name;
        this.age = age;
        this.furr = furrColor;
        this.eyes = eyeColor;
    }

  talk() {
    console.log("Meow! I'm " + this.name);
    //note, the emote for dogs works just fine. However when I try to swap it to cat variant (or if I directly rip the talk of dog here)
    //it just blatantly breaks. When the source is from dog, it works. Source is cat.js? Doesn't work evenn with multiple different UTF-8
    //variants for the same thing. It likely has something to do with how different computers read the emotes, as my OS is a linux.
    //The dog emote when raw copied with no alters from the source shows up as mojibake, ðŸ¶. I can assure you, that is not intended xd
    //If I have to guess, my system has latin-1 or some other version that just doesn't handle UTF properly. 
    //For now, I have removed the cat emote. (funny how this happened in two works in a row innit)
  }

  render(size = 400) { //the render size here is 400. I did not edit it here but I did edit it below, will get to that in a bit.
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12);

    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.furr;
    ctx.fill();

    const smallCircleRadius = radius * 0.12;
    const verticalOffset = offset + radius * 0.3;
    ctx.beginPath();
    ctx.arc(offset, verticalOffset, smallCircleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    const halfCircleWidth = radius * 0.4;
    const halfCircleRadius = halfCircleWidth / 2;
    ctx.beginPath();
    ctx.arc(
      offset - halfCircleRadius,
      verticalOffset + smallCircleRadius,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(
      offset + halfCircleRadius,
      verticalOffset + smallCircleRadius,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();

    const mediumCircleRadius = radius * 0.35;
    const horizontalOffset = radius * 0.4;
    const verticalAdjustment = radius * 0.4;
    ctx.beginPath();
    ctx.arc(
      offset - horizontalOffset,
      verticalOffset - verticalAdjustment,
      mediumCircleRadius,
      0,
      Math.PI * 2,
    );
    ctx.arc(
      offset + horizontalOffset,
      verticalOffset - verticalAdjustment,
      mediumCircleRadius,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      offset - horizontalOffset + smallCircleRadius,
      verticalOffset - verticalAdjustment + smallCircleRadius,
      smallCircleRadius,
      0,
      Math.PI * 2,
    );
    ctx.arc(
      offset + horizontalOffset - smallCircleRadius,
      verticalOffset - verticalAdjustment + smallCircleRadius,
      smallCircleRadius,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = this.eyes;
    ctx.fill();

    const ellipseWidth = radius * 0.5;
    const ellipseHeight = radius * 1.1;
    const ellipseOffsetAdjustment = horizontalOffset * 3;
    const ellipseRotation = 0.3;
    ctx.fillStyle = this.furr;
    ctx.beginPath();
    /*ctx.ellipse(
      offset - ellipseOffsetAdjustment,
      offset,
      ellipseWidth,
      ellipseHeight,
      +ellipseRotation,
      0,
      Math.PI * 2, 
    ); 

    //the default ears should be here ( above and below). edited them to make this work. Can just be ripped out at this point tbh

    /*ctx.ellipse(
      offset + ellipseOffsetAdjustment,
      offset,
      ellipseWidth,
      ellipseHeight,
      -ellipseRotation,
      0,
      Math.PI * 2,
    ); */


    //below are the cat ears and whiskers

    //edited ears below

    const earHeight = radius * -0.3;
    const earWidth = radius * -0.3;
    ctx.fillStyle = this.furr; //this is needed with the multiple fills below and rgb alter so one of the ears wont be ignored
    //or become transparent. 

    // Left 
    ctx.beginPath(); //begin and close path is like holding a pen on paper and moving it. you need to always close the path!
    ctx.moveTo(offset - radius * 0.8, offset - radius * 1); // bottom point near head
    ctx.lineTo(offset - radius * 0.6 - earWidth / 2, offset - radius * 0.8 - earHeight); // top left
    ctx.lineTo(offset - radius * 0.8 + earWidth / 2, offset - radius * 0.8 - earHeight); // top right
    ctx.closePath();
    ctx.fill(); //fills the drawn area. Imagine it like a mold getting stuffed with paint
    ctx.fillStyle = "rgb(0,0,0,0.5)"; //red green blue values that affect colours. the last bit is alpha that affects transparency.
    ctx.fill(); //as you may not, alpha is 0.5 to fix certain visibility issues here.
    //right
    ctx.beginPath();
    ctx.moveTo(offset + radius * 0.8, offset - radius * 1); // bottom point near head
    ctx.lineTo(offset + radius * 0.8 - earWidth / 2, offset - radius * 0.8 - earHeight); // top left
    ctx.lineTo(offset + radius * 0.6 + earWidth / 2, offset - radius * 0.8 - earHeight); // top right
    ctx.closePath(); //a lot of these values here are from the source website, so altering them is trial and error
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fill();


    //whiskers below
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset - this.age * 4, verticalOffset - 5);
    ctx.moveTo(offset, verticalOffset); //you might notice but the cats age affects the whiskers size. a bit silly with small ones
    ctx.lineTo(offset - this.age * 4, verticalOffset + 5); //but it does work decent enough.

    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset + this.age * 4, verticalOffset - 5);
    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset + this.age * 4, verticalOffset + 5);
    ctx.stroke();




    return canvas;
  }
}

//below the calss, we now have stuff that forms the grid and fetch commands. More or less, how all of that stuff is called

const SegmentCount = 100; //these two are for the array of animals in segment 2
const array = new Array(SegmentCount); //array of 100
const segments = document.getElementById("segments"); 
let TheEntireZoo = []; //this is needed as an empty global for a later use (you will spot it soon)
// these lines are to create divs until the limit is reached

for(i = 0; i < SegmentCount; i++){
    const box = document.createElement("div");
    segments.appendChild(box);
    box.classList.add("box");
} //that is the grid generating done

// Section 2 below (pick one and explain)

// variant 1
/* fetch("https://radufromfinland.com/animals/") //fetch is a command that starts the process of retrieving resources from target
    .then(function(response) { //then is used like let x = await fetch(information that you requested).
        return response.json(); //Then is used because we have fetch first. It is here trying to return a response
    })
    .then(function(data) { //and here it is trying to show the data in consoles log window (in other words, kinda print it to be readable)
        console.log(data);
    })
    .catch(function(err) { //and catch here is to get any errors if they happen and ignore the code if things go wrong
        console.error(err); //this way a full on crash is prevented in the worst case scenario
    }); */

// variant 2
async function fetchData() { //async and await do the same things here because variant 1s fetch is based off them
    try { //in other words, what I explained there happens here too, it just is more easy to read
        const response = await fetch("https://radufromfinland.com/animals/"); //try and get data from here
        const data = await response.json(); //data = the response from the website
        console.log(data); //print out the data in the console log
        return data; //this return was actually "missing." Without it the wished output wouldn't happen later as data was not returned
    } catch(err) {
        console.error(err); //catch errors so the program can proceed if things go wrong
    }
} fetchData(); 

async function getData(){
  TheEntireZoo = await fetchData();
  addAnimals();
  //the empty global from earlier now gets filled with the data. This will be called as the last line to print out stuff properly
}

//I will go with variant 2 because the method just feels way more pleasant to read compared to fetch.
//It genuinely is just that putting things into more clear segments in async makes it more friendly for noobs.

function addAnimals(){
    const enclosures = document.getElementsByClassName("box"); //this creates the areas where the animals get rendered in
    console.log(TheEntireZoo); //writes the contents of EntireZoo into console log (animal names, ages etc.)
    for (let i = 0; i < enclosures.length; i++){
        console.log(TheEntireZoo[i]); //individual cases gone through and put into the boxes
        if (TheEntireZoo[i].type == 'CAT'){ //note, cat has to be in caps because of the json having it in caps
            let cat = new Cat(TheEntireZoo[i].name, TheEntireZoo[i].age, TheEntireZoo[i].furr, TheEntireZoo[i].eyes); //cat(s) and their data
            enclosures[i].appendChild(cat.render(240)); /*These lines should render a cat  and append its information into a div */
            enclosures[i].onclick = function(){meowing(cat)}; //this is a function for the noises and talk when you click an enclosure
            //depending on the image, it gives a cat meow or a dog bark!
        }
        if (TheEntireZoo[i].type == 'DOG'){ //dog variant
            let dog = new Dog(TheEntireZoo[i].name, TheEntireZoo[i].age, TheEntireZoo[i].furr, TheEntireZoo[i].eyes);
            enclosures[i].appendChild(dog.render(240)); //renders here are 240 in both because the default is 400 which messes with 
            //the size of everything. putting a smaller value in both renders makes it so that cats and dogs are both rendered equally
            // (this is why I did not edit the size in cats class earlier.)
            enclosures[i].onclick = function(){barking(dog)};  //the dogs get their bark back, no bite however.
        }
    }
}

var catSounds = new Audio('dragon-studio-cute-cat-meow-472372.mp3'); //the audio files have their sources in the file source txt file
var dogSounds = new Audio('dragon-studio-free-dog-bark-419014.mp3'); 

function meowing(cat){
  catSounds.play();
  console.log(cat.talk());
}
 //these two are functions to react to an on click inside addAnimals, making the implementation smoother for section 3.
function barking(dog){
  dogSounds.play();
  console.log(dog.talk());
}



getData(); //pull the lever Grok (in other words, make the program do its thing.)