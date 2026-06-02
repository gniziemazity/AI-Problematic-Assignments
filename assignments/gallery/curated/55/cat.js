class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("MEOW! I'm " + this.name + " 🐱");
  }

  render(size = 400) { 
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;                                        
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;
    
    canvas.style.cursor = "pointer"; // NEW
    canvas.onmousedown = () => { // NEW
      this.talk(); // NEW

      const sound = new Audio("dragon-studio-cat-meow-401729.mp3"); // NEW
      sound.play(); // NEW
    }

    // name badge
    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12);

    // head
    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.furr;
    ctx.fill();

    // ears (triangles)
    const earHeight = radius * 1.9;
    const earWidth = radius * 1.5;

    // left ear
    ctx.beginPath();
    ctx.moveTo(offset - earWidth * 0.75, offset - radius * 0.01);
    ctx.lineTo(offset - earWidth * 0.9, offset - radius - earHeight * 0.1);
    ctx.lineTo(offset - earWidth * 0.05, offset - radius - earHeight * 0.1);
    ctx.closePath();
    ctx.fillStyle = this.furr;
    ctx.fill();

    // right ear
    ctx.beginPath();
    ctx.moveTo(offset + earWidth * 0.75, offset - radius * 0.);
    ctx.lineTo(offset + earWidth * 0.9, offset - radius - earHeight * 0.1);
    ctx.lineTo(offset + earWidth * 0.05, offset - radius - earHeight * 0.1);
    ctx.closePath();
    ctx.fillStyle = this.furr;
    ctx.fill();

    // inner ears
    ctx.beginPath();
    ctx.moveTo(offset - earWidth * 0.68, offset - radius * 0.1);
    ctx.lineTo(offset - earWidth * 0.75, offset - radius - earHeight * 0.05);
    ctx.lineTo(offset - earWidth * 0.1, offset - radius - earHeight * 0.05);
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(offset + earWidth * 0.68, offset - radius * 0.1);
    ctx.lineTo(offset + earWidth * 0.75, offset - radius - earHeight * 0.05);
    ctx.lineTo(offset + earWidth * 0.1, offset - radius - earHeight * 0.05);
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.fill();

    // nose (small triangle)
    const noseRadius = radius * 0.1;
    const noseY = offset + radius * 0.1;
    ctx.beginPath();
    ctx.moveTo(offset, noseY);
    ctx.lineTo(offset - noseRadius, noseY + noseRadius);
    ctx.lineTo(offset + noseRadius, noseY + noseRadius);
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.fill();

    // mouth
    ctx.beginPath();
    ctx.arc(offset - noseRadius * 0.8, noseY + noseRadius * 1.2, noseRadius, 0, Math.PI);
    ctx.arc(offset + noseRadius * 0.8, noseY + noseRadius * 1.2, noseRadius, 0, Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // eyes white
    const mediumCircleRadius = radius * 0.30;
    const horizontalOffset = radius * 0.36;
    const verticalAdjustment = radius * 0.25;
    ctx.beginPath();
    ctx.arc(
      offset - horizontalOffset,
      offset - verticalAdjustment,
      mediumCircleRadius,
      0,
      Math.PI * 2
    );
    ctx.arc(
      offset + horizontalOffset,
      offset - verticalAdjustment,
      mediumCircleRadius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "amber";
    ctx.fill();

    // pupils
    const pupilRadius = radius * 0.18;
    ctx.beginPath();
    ctx.arc(
      offset - horizontalOffset,
      offset - verticalAdjustment,
      pupilRadius,
      0,
      Math.PI * 2
    );
    ctx.arc(
      offset + horizontalOffset,
      offset - verticalAdjustment,
      pupilRadius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = this.eyes;
    ctx.fill();

    // whiskers
    const whiskerLen = radius * 0.4;
    const whiskerY = noseY + noseRadius * 0.76;

    ctx.strokeStyle = "white";
    

    // left whiskers
    ctx.beginPath();
    ctx.moveTo(offset - noseRadius * 0.8, whiskerY);
    ctx.lineTo(offset - noseRadius * 0.6 - whiskerLen, whiskerY - radius * 0.05);

    ctx.moveTo(offset - noseRadius * 0.6, whiskerY + radius * 0.07);
    ctx.lineTo(offset - noseRadius * 0.6 - whiskerLen, whiskerY + radius * 0.02);

    ctx.moveTo(offset - noseRadius * 0.6, whiskerY + radius * 0.14);
    ctx.lineTo(offset - noseRadius * 0.6 - whiskerLen, whiskerY + radius * 0.11);

    // right whiskers
    ctx.moveTo(offset + noseRadius * 0.6, whiskerY);
    ctx.lineTo(offset + noseRadius * 0.6 + whiskerLen, whiskerY - radius * 0.05);

    ctx.moveTo(offset + noseRadius * 0.6, whiskerY + radius * 0.07);
    ctx.lineTo(offset + noseRadius * 0.6 + whiskerLen, whiskerY + radius * 0.02);

    ctx.moveTo(offset + noseRadius * 0.6, whiskerY + radius * 0.14);
    ctx.lineTo(offset + noseRadius * 0.6 + whiskerLen, whiskerY + radius * 0.11);
    ctx.stroke();


    return canvas;
  }
}

class Dog {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Woof! I'm " + this.name + " ðŸ¶");
  }

  render(size = 400) { 
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

    canvas.style.cursor = "pointer"; // NEW
    canvas.onmousedown = () => { // NEW
      this.talk(); // NEW

      const sound = new Audio("u_5wgfa0ekjt-dog-bark-179915.mp3"); // NEW
      sound.play(); // NEW
    };


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
    ctx.ellipse(
      offset - ellipseOffsetAdjustment,
      offset,
      ellipseWidth,
      ellipseHeight,
      +ellipseRotation,
      0,
      Math.PI * 2,
    );
    ctx.ellipse(
      offset + ellipseOffsetAdjustment,
      offset,
      ellipseWidth,
      ellipseHeight,
      -ellipseRotation,
      0,
      Math.PI * 2,
    );
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fill();

    return canvas;
  }
}

/*https://pixabay.com/sound-effects/search/meow/ cat sound 
https://pixabay.com/sound-effects/search/dog-bark/ */