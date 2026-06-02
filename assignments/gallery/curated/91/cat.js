/*  Cat class – identical interface to Dog but with a different look
    and a cat‑specific talk() method.
*/
class Cat {
    // Constructor – takes the same arguments as Dog for consistency
    constructor(name, age, fur, eyes) {
        this.name = name;     // cat's name
        this.age = age;       // age in years
        this.fur = fur;       // fur colour
        this.eyes = eyes;     // eye colour
    }

    // ---- Talk method -------------------------------------------------------
    // When called, logs a cat‑like message and plays the meow sound
    talk() {
        console.log(`${this.name} says: Meow!`);
        // The sound is played from the global <audio id="cat-meow">
        const meow = document.getElementById("cat-meow");
        if (meow) meow.currentTime = 0;   // rewind to start
        meow.play();                      // play the meow
    }

    // ---- Render method -----------------------------------------------------
    // Draws a simple cat on a canvas and returns the canvas element
    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;   // width of the cell
        canvas.height = 100;  // height of the cell
        const ctx = canvas.getContext("2d");

        // Body
        ctx.fillStyle = this.fur;           // use the cat's fur colour
        ctx.beginPath();
        ctx.ellipse(50, 60, 30, 20, 0, 0, 2 * Math.PI); // body oval
        ctx.fill();

        // Head
        ctx.beginPath();
        ctx.arc(50, 35, 20, 0, 2 * Math.PI); // head circle
        ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;          // eye colour
        ctx.beginPath();
        ctx.arc(42, 30, 3, 0, 2 * Math.PI); // left eye
        ctx.arc(58, 30, 3, 0, 2 * Math.PI); // right eye
        ctx.fill();

        // Pointy ears (two triangles)
        ctx.fillStyle = this.fur;           // same as fur
        ctx.beginPath();
        ctx.moveTo(30, 20);                 // left ear tip
        ctx.lineTo(40, 5);                  // left ear bottom
        ctx.lineTo(50, 20);                 // left ear base
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(70, 20);                 // right ear tip
        ctx.lineTo(60, 5);                  // right ear bottom
        ctx.lineTo(50, 20);                 // right ear base
        ctx.fill();

        // Whiskers – three lines on each side
        ctx.strokeStyle = "#000";           // whisker colour (black)
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(25, 35); ctx.lineTo(5, 35);   // left middle whisker
        ctx.moveTo(25, 38); ctx.lineTo(5, 38);   // left lower whisker
        ctx.moveTo(25, 32); ctx.lineTo(5, 32);   // left upper whisker
        ctx.moveTo(75, 35); ctx.lineTo(95, 35);  // right middle whisker
        ctx.moveTo(75, 38); ctx.lineTo(95, 38);  // right lower whisker
        ctx.moveTo(75, 32); ctx.lineTo(95, 32);  // right upper whisker
        ctx.stroke();

        // Tail – a simple curved line
        ctx.beginPath();
        ctx.moveTo(70, 60);
        ctx.quadraticCurveTo(90, 40, 80, 80);
        ctx.stroke();

        return canvas; // return the canvas so it can be inserted into the DOM
    }
}

// Make the class globally available (needed by the main script)
window.Cat = Cat;
