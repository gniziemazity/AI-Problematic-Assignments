class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Meow! I'm " + this.name + " 🐱");
  }

  render(size = 400) { 
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.fillStyle = "gold";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12);

    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.furr;
    ctx.fill();

    const smallCircleRadius = radius * 0.1080;
    const verticalOffset = offset + radius * 0.3;
    ctx.beginPath();
    ctx.arc(offset, verticalOffset, smallCircleRadius * 1.15, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();

// WHISKERS START

    const halfCircleWidth = radius * 0.15;
    const halfCircleRadius = halfCircleWidth / 1;
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

    ctx.beginPath();
    ctx.arc(
      offset + halfCircleRadius * 7,
      verticalOffset - smallCircleRadius * 0.5,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
ctx.beginPath();
    ctx.arc(
      offset - halfCircleRadius * 6,
      verticalOffset - smallCircleRadius * 0.7,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
ctx.beginPath();
    ctx.arc(
      offset + halfCircleRadius * 6,
      verticalOffset - smallCircleRadius * 0.7,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
ctx.beginPath();
    ctx.arc(
      offset - halfCircleRadius * 7,
      verticalOffset - smallCircleRadius * 0.5,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      offset + halfCircleRadius * 7,
      verticalOffset - smallCircleRadius * -0.2,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
ctx.beginPath();
    ctx.arc(
      offset - halfCircleRadius * 6,
      verticalOffset - smallCircleRadius * -0.2,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
ctx.beginPath();
    ctx.arc(
      offset + halfCircleRadius * 6,
      verticalOffset - smallCircleRadius * -0.2,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
ctx.beginPath();
    ctx.arc(
      offset - halfCircleRadius * 7,
      verticalOffset - smallCircleRadius * -0.2,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();

// WHISKERS END

    const mediumCircleRadius = radius * 0.30;
    const horizontalOffset = radius * 0.54;
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

// EARS start here

const earHeight = radius * -0.3;
const earWidth = radius * -0.3;

// LEFT EAR
ctx.beginPath();
ctx.moveTo(offset - radius * 0.8, offset - radius * 1); // bottom point near head
ctx.lineTo(offset - radius * 0.6 - earWidth / 2, offset - radius * 0.8 - earHeight);
ctx.lineTo(offset - radius * 0.8 + earWidth / 2, offset - radius * 0.8 - earHeight); 
ctx.closePath();
ctx.fillStyle = "pink";
ctx.fill()

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(offset + radius * 0.8, offset - radius * 1); // bottom point near head
ctx.lineTo(offset + radius * 0.8 - earWidth / 2, offset - radius * 0.8 - earHeight); 
ctx.lineTo(offset + radius * 0.6 + earWidth / 2, offset - radius * 0.8 - earHeight); 
ctx.closePath();
ctx.fillStyle = "pink";
ctx.fill()

// EARS end here

    return canvas;
  }
}

