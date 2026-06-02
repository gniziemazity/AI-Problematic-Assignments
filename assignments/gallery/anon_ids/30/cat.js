/* TASK 1:
A cat class:
        - based on dog class
        -linked to index
        -modify talk
        -modify draw
        -attributes = *point ears *whiskers
        */ 

class Cat { // TASK 1: 1st step. define the name of the class
        constructor(name, age, furrColor, eyeColor, earColor, whiskerColor ) { // Constructor with shared properties of dog REMEMBER TO ADD EAR / WHISKERS 
          this.name = name;
          this.age = age;
          this.furr = furrColor;
          this.eyes = eyeColor;
          this.whiskers = whiskerColor; // ADDED FEATURE TO MAKE DIFFERENTS CATS STAND OUT 
          this.ears = earColor; // ADDED FEATURE TO MAKE DIFFERENTS CATS STAND OUT 
        } 

talk() { // TASK 1: 2nd step. create method talk 
        console.log("MEOW MEWO! I'm " + this.name + " Prrrr!") // NOTE there was a Mojibake in the file so I do not know what Radu's final word was 
}

render(size = 400) { // TASK 1: 3rd The visual representation of the cat 
const canvas = document.createElement("canvas") // using canvas 
canvas.width = size;
canvas.height = size; 

const ctx = canvas.getContext("2d"); // using 2d 
const offset = size / 2; // finding the center for scaling
const radius = (size * 0.4 * Math.sqrt(this.age)) / 5; // LOGIC using AGE for SIZE 
 /* TASK1: I re-used the code from Raudu's dog.
 * 1st edit the ears
 * 2nd add whiskers  */

// NAME BADGE 
// Background circle (badge behind face)
ctx.beginPath();  
ctx.arc(
  offset,                      // center X
  offset + radius * 0.45,      // move slightly DOWN
  radius * 0.8,                // smaller circle
  0, 
  Math.PI * 2                 // full circle
);
ctx.fillStyle = "gold";
ctx.fill();

// name tag 
ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12);

// Draw Main Head (Big circle Face)
ctx.beginPath();
ctx.arc(offset, offset, radius, 0, Math.PI * 2);
ctx.fillStyle = this.furr;                                    // ENTER VALUE OF FURR!! "this.furr;" <<<<DONE 
ctx.fill();

// Draw nose (small black circle in center lower face)  
  const smallCircleRadius = radius * 0.12;
  const verticalOffset = offset + radius * 0.3; // Use NOSE POSITION FO WHISKERS LATER vertialOffset 
  ctx.beginPath();
  ctx.arc(offset, verticalOffset, smallCircleRadius, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();

  // Draw mouth (two half-circle curves forming a smile)
  const halfCircleWidth = radius * 0.4;
  const halfCircleRadius = halfCircleWidth / 2;

  // Left side of mouth
  ctx.beginPath();
  ctx.arc(
    offset - halfCircleRadius,
    verticalOffset + smallCircleRadius,
    halfCircleRadius,
    0,
    Math.PI,
  );
  ctx.stroke();

  // Right side of mouth
  ctx.beginPath();
  ctx.arc(
    offset + halfCircleRadius,
    verticalOffset + smallCircleRadius,
    halfCircleRadius,
    0,
    Math.PI,
  );
  ctx.stroke();

// TRYING to draw whiskers:

// I create vriables for the length and spacing of the whiskers
const whiskerLength = radius * 0.6 // Length (scales with the face)

const whiskerOffsetY = radius * 0.05; // SMall spacing between

ctx.strokeStyle = this.whiskers; // ENTER VALUE OF whisker!! "this.whiskers;" // WHISKERS COLOUR

ctx.lineWidth = 2; // Thickness 

//--- Left side ---
/*  three whiskers mid top low*/
//mid
ctx.beginPath(); // starting new shape 
ctx.moveTo(offset - smallCircleRadius, verticalOffset); // Here I need the location of the Mouth (if the shape changes size I need it to be relative to the changes made so how do I find out where from?)
/* NOTES TO SELF FOR LEARNING:
offset = center of face, subtract size of nose (smallCircleRadius),
 moving down the centre (verticalOffset)*/
ctx.lineTo(offset - whiskerLength, verticalOffset);
ctx.stroke();

//TOP
ctx.beginPath();
ctx.moveTo(offset - smallCircleRadius, verticalOffset - whiskerOffsetY); //using the value to create a space
ctx.lineTo(offset - whiskerLength, verticalOffset - whiskerOffsetY); 
ctx.stroke();

//Lower
ctx.beginPath();
ctx.moveTo(offset - smallCircleRadius, verticalOffset + whiskerOffsetY); //using the value to create a space
ctx.lineTo(offset - whiskerLength, verticalOffset + whiskerOffsetY); 
ctx.stroke();


//---  Righ side ---
/*  three whiskers mid top low*/
//mid
ctx.beginPath(); // starting new shape 
ctx.moveTo(offset + smallCircleRadius, verticalOffset); // Here I need the location of the Mouth (if the shape changes size I need it to be relative to the changes made so how do I find out where from?)
/* NOTES TO SELF FOR LEARNING:
offset = center of face, subtract size of nose (smallCircleRadius),
 moving down the centre (verticalOffset)*/
ctx.lineTo(offset + whiskerLength, verticalOffset);
ctx.stroke();

//TOP
ctx.beginPath();
ctx.moveTo(offset + smallCircleRadius, verticalOffset - whiskerOffsetY); //using the value to create a space
ctx.lineTo(offset + whiskerLength, verticalOffset - whiskerOffsetY); 
ctx.stroke();

//Lower
ctx.beginPath();
ctx.moveTo(offset + smallCircleRadius, verticalOffset + whiskerOffsetY); //using the value to create a space
ctx.lineTo(offset + whiskerLength, verticalOffset + whiskerOffsetY); 
ctx.stroke();


// Draw whites of the eyes (two larger circles)
const mediumCircleRadius = radius * 0.25;
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
ctx.fillStyle = "white"; // EYE COLOR "this.eyes;" <<< THEN THE PUPILS WILL BE THE SAME COLOUR
ctx.fill();

// Draw pupils (colored inner circles inside eyes)
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
ctx.fillStyle = this.eyes; //this.eyes;
ctx.fill();

// Draw pointy cat ears
const earHeight = radius * 1;      // vertical size of ear
const earWidth = radius * 1.6;       // horizontal spread
const earBaseY = offset - radius * 0.6; // A forehead from which the ears can sit. NOTE THE colour difference will then make them visible on the forhead also 

ctx.fillStyle = this.ears;             // NOTE FOR LATER use your ear color

// LEFT EAR
ctx.beginPath();
ctx.moveTo(offset - radius * .6, earBaseY);         // bottom-left of ear at top of head
ctx.lineTo(offset - radius * 0.3, offset - radius * 1.5);   // tip of ear (higher)
ctx.lineTo(offset - radius * 0.0, offset - radius);         // bottom-right of ear
ctx.closePath();
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(offset + radius * .6, earBaseY);         // bottom-right of ear at top of head
ctx.lineTo(offset + radius * 0.3, offset - radius * 1.5);   // tip of ear
ctx.lineTo(offset + radius * 0.0, offset - radius);         // bottom-left of ear
ctx.closePath();
ctx.fill();

/* NOTE ON LOCATION:
0,0 is top-left
400,400 is bottom-right
Y increases downward
*/


return canvas;

}

}