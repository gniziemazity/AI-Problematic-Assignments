class Cat {
    constructor(name, age, furrColor, eyeColor) {
        this.name = name;       // store the cat's name
        this.age = age;         // store the cat's age
        this.furr = furrColor;  // store the fur colour
        this.eyes = eyeColor;   // store the eye colour
    }

    talk() {
        console.log("Meow! I'm " + this.name + " 🐱"); // print a cat greeting to the console
    }

    render(size = 400) {
        const canvas = document.createElement("canvas"); // create a new canvas element
        canvas.width = size;  // set canvas width
        canvas.height = size; // set canvas height

        const ctx = canvas.getContext("2d");             // get the 2D drawing context
        const offset = size / 2;                         // centre point of the canvas
        const radius = (size * 0.4 * Math.sqrt(this.age)) / 5; // head radius scales with age

        // --- Body (lower oval) ---
        ctx.beginPath();
        ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2); // draw body circle
        ctx.fillStyle = this.furr; // use the cat's fur colour
        ctx.fill();

        // --- Name label ---
        ctx.fillStyle = "black";
        ctx.font = `bold ${radius * 0.14}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12); // draw name below body

        // --- Head ---
        ctx.beginPath();
        ctx.arc(offset, offset, radius, 0, Math.PI * 2); // draw the main head circle
        ctx.fillStyle = this.furr;
        ctx.fill();

        // --- Pointy ears (triangles) ---
        const earWidth = radius * 0.4;   // how wide each ear is
        const earHeight = radius * 0.55; // how tall each ear is
        const earOffsetX = radius * 0.45; // horizontal distance from centre
        const earTopY = offset - radius;  // y position of the head top

        // Left ear
        ctx.beginPath();
        ctx.moveTo(offset - earOffsetX, earTopY + earHeight * 0.2);  // bottom-left corner
        ctx.lineTo(offset - earOffsetX + earWidth * 0.1, earTopY - earHeight); // tip
        ctx.lineTo(offset - earOffsetX + earWidth, earTopY + earHeight * 0.1); // bottom-right corner
        ctx.closePath();
        ctx.fillStyle = this.furr; // fill ear with fur colour
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Left ear inner pink triangle
        ctx.beginPath();
        ctx.moveTo(offset - earOffsetX + earWidth * 0.15, earTopY + earHeight * 0.1);
        ctx.lineTo(offset - earOffsetX + earWidth * 0.2, earTopY - earHeight * 0.7);
        ctx.lineTo(offset - earOffsetX + earWidth * 0.8, earTopY + earHeight * 0.05);
        ctx.closePath();
        ctx.fillStyle = "pink"; // inner ear is pink
        ctx.fill();

        // Right ear
        ctx.beginPath();
        ctx.moveTo(offset + earOffsetX, earTopY + earHeight * 0.2);
        ctx.lineTo(offset + earOffsetX - earWidth * 0.1, earTopY - earHeight);
        ctx.lineTo(offset + earOffsetX - earWidth, earTopY + earHeight * 0.1);
        ctx.closePath();
        ctx.fillStyle = this.furr;
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.25)";
        ctx.stroke();

        // Right ear inner pink triangle
        ctx.beginPath();
        ctx.moveTo(offset + earOffsetX - earWidth * 0.15, earTopY + earHeight * 0.1);
        ctx.lineTo(offset + earOffsetX - earWidth * 0.2, earTopY - earHeight * 0.7);
        ctx.lineTo(offset + earOffsetX - earWidth * 0.8, earTopY + earHeight * 0.05);
        ctx.closePath();
        ctx.fillStyle = "pink";
        ctx.fill();

        // --- Face feature positions ---
        const faceY = offset + radius * 0.3;          // vertical centre of the face features
        const eyeOffsetX = radius * 0.38;              // how far each eye is from centre
        const eyeY = offset - radius * 0.02;           // eye vertical position
        const smallR = radius * 0.12;                  // nose/pupil radius

        // --- Eyes (white parts) ---
        ctx.beginPath();
        ctx.arc(offset - eyeOffsetX, eyeY, radius * 0.3, 0, Math.PI * 2);
        ctx.arc(offset + eyeOffsetX, eyeY, radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        // --- Pupils ---
        ctx.beginPath();
        ctx.arc(offset - eyeOffsetX + smallR, eyeY + smallR, smallR, 0, Math.PI * 2);
        ctx.arc(offset + eyeOffsetX - smallR, eyeY + smallR, smallR, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes; // pupils use the eye colour
        ctx.fill();

        // --- Nose (small triangle) ---
        const noseY = faceY;
        ctx.beginPath();
        ctx.moveTo(offset, noseY - smallR * 0.5);            // top of nose
        ctx.lineTo(offset - smallR * 0.6, noseY + smallR * 0.4); // bottom left
        ctx.lineTo(offset + smallR * 0.6, noseY + smallR * 0.4); // bottom right
        ctx.closePath();
        ctx.fillStyle = "pink"; // pink nose
        ctx.fill();

        // --- Mouth (small arcs below nose) ---
        ctx.beginPath();
        ctx.arc(offset - smallR * 0.4, noseY + smallR * 0.6, smallR * 0.5, 0, Math.PI); // left half
        ctx.strokeStyle = "black";
        ctx.lineWidth = radius * 0.03;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(offset + smallR * 0.4, noseY + smallR * 0.6, smallR * 0.5, 0, Math.PI); // right half
        ctx.stroke();

        // --- Whiskers ---
        ctx.strokeStyle = "rgba(0,0,0,0.5)";
        ctx.lineWidth = radius * 0.02;

        const whiskerY = noseY + smallR * 0.2;    // vertical position of whiskers
        const whiskerLen = radius * 0.7;           // length of each whisker
        const whiskerSpread = radius * 0.07;       // vertical spread between whisker rows

        // Left whiskers (3 lines going left from nose)
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(offset - smallR * 0.7, whiskerY + i * whiskerSpread); // start near nose
            ctx.lineTo(offset - smallR * 0.7 - whiskerLen, whiskerY + i * whiskerSpread + i * whiskerSpread * 0.5); // end far left
            ctx.stroke();
        }
        // Right whiskers (3 lines going right from nose)
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(offset + smallR * 0.7, whiskerY + i * whiskerSpread);
            ctx.lineTo(offset + smallR * 0.7 + whiskerLen, whiskerY + i * whiskerSpread + i * whiskerSpread * 0.5);
            ctx.stroke();
        }

        return canvas; // return the finished canvas element
    }
}
