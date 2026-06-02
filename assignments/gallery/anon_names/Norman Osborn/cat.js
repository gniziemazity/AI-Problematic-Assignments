class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Meow! I'm " + this.name + " 🐱");
    document.getElementById("catSound")?.play();
  }

  render(size = 500) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.furr;
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.7, offset - radius * 0.5);
    ctx.lineTo(offset - radius * 0.3, offset - radius * 1.5);
    ctx.lineTo(offset, offset - radius * 0.5);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(offset + radius * 0.7, offset - radius * 0.5);
    ctx.lineTo(offset + radius * 0.3, offset - radius * 1.5);
    ctx.lineTo(offset, offset - radius * 0.5);
    ctx.fill();

    const eyeOffset = radius * 0.4;
    const eyeSize = radius * 0.3;

    ctx.beginPath();
    ctx.arc(offset - eyeOffset, offset - eyeOffset * 0.5, eyeSize, 0, Math.PI * 2);
    ctx.arc(offset + eyeOffset, offset - eyeOffset * 0.5, eyeSize, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    const pupilSize = radius * 0.12;
    ctx.beginPath();
    ctx.arc(offset - eyeOffset, offset - eyeOffset * 0.5, pupilSize, 0, Math.PI * 2);
    ctx.arc(offset + eyeOffset, offset - eyeOffset * 0.5, pupilSize, 0, Math.PI * 2);
    ctx.fillStyle = this.eyes;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.2, radius * 0.08, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(offset - radius * 0.1, offset + radius * 0.35, radius * 0.2, 0, Math.PI);
    ctx.arc(offset + radius * 0.1, offset + radius * 0.35, radius * 0.2, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.2, offset + radius * 0.2);
    ctx.lineTo(offset - radius * 0.8, offset + radius * 0.1);

    ctx.moveTo(offset - radius * 0.2, offset + radius * 0.3);
    ctx.lineTo(offset - radius * 0.8, offset + radius * 0.3);

    ctx.moveTo(offset + radius * 0.2, offset + radius * 0.2);
    ctx.lineTo(offset + radius * 0.8, offset + radius * 0.1);

    ctx.moveTo(offset + radius * 0.2, offset + radius * 0.3);
    ctx.lineTo(offset + radius * 0.8, offset + radius * 0.3);

    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.2);

    return canvas;
  }
}