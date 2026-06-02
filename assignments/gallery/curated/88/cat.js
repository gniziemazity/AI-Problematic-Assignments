// Cat class - similar to the Dog class, but it behaves and looks like a cat.
// Compared to Dog, the talk() method meows and render() draws pointy ears
// and whiskers instead of floppy ears.
class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;        // the cat's name
    this.age = age;          // the cat's age (affects drawing size)
    this.furr = furrColor;   // colour used for the body / fur
    this.eyes = eyeColor;    // colour used for the eyes
  }

  // Cats meow instead of barking
  talk() {
    console.log("Meow! I'm " + this.name + " 🐱");
  }

  // Draws the cat onto a <canvas> element and returns it
  render(size = 400) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;                                  // centre of the canvas
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;    // head size grows with age

    // --- shadow circle behind the head (also holds the name) ---
    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();

    // --- the cat's name written under the head ---
    ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12);

    // --- pointy triangular ears (drawn before the head so the head overlaps them) ---
    const earSpread = radius * 0.65;   // how far the ears sit from the centre
    const earHeight = radius * 0.9;    // how tall the ears are
    ctx.fillStyle = this.furr;

    // left ear (triangle)
    ctx.beginPath();
    ctx.moveTo(offset - earSpread - radius * 0.35, offset - radius * 0.45);
    ctx.lineTo(offset - earSpread + radius * 0.35, offset - radius * 0.45);
    ctx.lineTo(offset - earSpread, offset - radius * 0.45 - earHeight);
    ctx.closePath();
    ctx.fill();

    // right ear (triangle)
    ctx.beginPath();
    ctx.moveTo(offset + earSpread - radius * 0.35, offset - radius * 0.45);
    ctx.lineTo(offset + earSpread + radius * 0.35, offset - radius * 0.45);
    ctx.lineTo(offset + earSpread, offset - radius * 0.45 - earHeight);
    ctx.closePath();
    ctx.fill();

    // --- inner pink ear triangles ---
    ctx.fillStyle = "#E89BB0";
    ctx.beginPath();
    ctx.moveTo(offset - earSpread - radius * 0.15, offset - radius * 0.5);
    ctx.lineTo(offset - earSpread + radius * 0.15, offset - radius * 0.5);
    ctx.lineTo(offset - earSpread, offset - radius * 0.5 - earHeight * 0.55);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(offset + earSpread - radius * 0.15, offset - radius * 0.5);
    ctx.lineTo(offset + earSpread + radius * 0.15, offset - radius * 0.5);
    ctx.lineTo(offset + earSpread, offset - radius * 0.5 - earHeight * 0.55);
    ctx.closePath();
    ctx.fill();

    // --- the round head ---
    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.furr;
    ctx.fill();

    // --- the nose (small triangle) ---
    const noseY = offset + radius * 0.28;
    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.12, noseY);
    ctx.lineTo(offset + radius * 0.12, noseY);
    ctx.lineTo(offset, noseY + radius * 0.14);
    ctx.closePath();
    ctx.fillStyle = "#E89BB0";
    ctx.fill();

    // --- the mouth (two small curves under the nose) ---
    ctx.strokeStyle = "black";
    ctx.lineWidth = radius * 0.03;
    ctx.beginPath();
    ctx.arc(offset - radius * 0.13, noseY + radius * 0.14, radius * 0.13, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(offset + radius * 0.13, noseY + radius * 0.14, radius * 0.13, 0, Math.PI);
    ctx.stroke();

    // --- the eyes (white almond shapes with a coloured iris) ---
    const eyeSpread = radius * 0.4;
    const eyeY = offset - radius * 0.15;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(offset - eyeSpread, eyeY, radius * 0.22, radius * 0.3, 0, 0, Math.PI * 2);
    ctx.ellipse(offset + eyeSpread, eyeY, radius * 0.22, radius * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // coloured iris of each eye
    ctx.fillStyle = this.eyes;
    ctx.beginPath();
    ctx.ellipse(offset - eyeSpread, eyeY, radius * 0.1, radius * 0.22, 0, 0, Math.PI * 2);
    ctx.ellipse(offset + eyeSpread, eyeY, radius * 0.1, radius * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // black slit pupils (the cat-eye look)
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(offset - eyeSpread, eyeY, radius * 0.03, radius * 0.18, 0, 0, Math.PI * 2);
    ctx.ellipse(offset + eyeSpread, eyeY, radius * 0.03, radius * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- the whiskers (three lines on each side of the nose) ---
    ctx.strokeStyle = "black";
    ctx.lineWidth = radius * 0.025;
    const whiskerY = noseY;                       // whiskers start near the nose height
    const whiskerStartX = radius * 0.18;          // how far from centre the whiskers begin
    const whiskerLength = radius * 0.95;          // how long the whiskers are
    for (let i = -1; i <= 1; i++) {               // draw 3 whiskers (above, middle, below)
      // left side whisker
      ctx.beginPath();
      ctx.moveTo(offset - whiskerStartX, whiskerY + i * radius * 0.12);
      ctx.lineTo(offset - whiskerStartX - whiskerLength, whiskerY + i * radius * 0.22);
      ctx.stroke();
      // right side whisker
      ctx.beginPath();
      ctx.moveTo(offset + whiskerStartX, whiskerY + i * radius * 0.12);
      ctx.lineTo(offset + whiskerStartX + whiskerLength, whiskerY + i * radius * 0.22);
      ctx.stroke();
    }

    return canvas;   // hand the finished drawing back to the caller
  }
}
