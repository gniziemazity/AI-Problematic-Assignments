class Cat {
  constructor(name, age, fur, eyes) {
    this.name = name;
    this.age = age;
    this.fur = fur;
    this.eyes = eyes;
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

    // Collar
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.5, radius * 0.8, 0, Math.PI * 2);
    ctx.fill();
    // Name
    ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.15);

    // Head
    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.fur;
    ctx.fill();

    // Left ear
    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.95, offset - radius * 0.2);
    ctx.lineTo(offset - radius * 0.4, offset - radius * 1.5);
    ctx.lineTo(offset, offset - radius * 0.4);
    ctx.fill();
    // Right ear
    ctx.beginPath();
    ctx.moveTo(offset + radius * 0.95, offset - radius * 0.2);
    ctx.lineTo(offset + radius * 0.4, offset - radius * 1.5);
    ctx.lineTo(offset, offset - radius * 0.4);
    ctx.fill();

    // Eyes
    const eyeOffsetX = radius * 0.4;
    const eyeOffsetY = radius * 0.2;
    const eyeSize = radius * 0.3;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(offset - eyeOffsetX, offset - eyeOffsetY, eyeSize, 0, Math.PI * 2);
    ctx.arc(offset + eyeOffsetX, offset - eyeOffsetY, eyeSize, 0, Math.PI * 2);
    ctx.fill();
    // Pupils
    const pupilSize = radius * 0.1;
    ctx.fillStyle = this.eyes;
    ctx.beginPath();
    ctx.arc(offset - eyeOffsetX + pupilSize, offset - eyeOffsetY + pupilSize, pupilSize, 0, Math.PI * 2);
    ctx.arc(offset + eyeOffsetX - pupilSize, offset - eyeOffsetY + pupilSize, pupilSize, 0, Math.PI * 2);
    ctx.fill();

    // Nose
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Mouth
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // Left
    ctx.beginPath();
    ctx.arc(offset - radius * 0.2, offset + radius * 0.3, radius * 0.2, 0, Math.PI / 2);
    ctx.stroke();
    // Right
    ctx.beginPath();
    ctx.arc(offset + radius * 0.2, offset + radius * 0.3, radius * 0.2, Math.PI / 2, Math.PI);
    ctx.stroke();

    // Whiskers
    ctx.beginPath();
    // Left
    ctx.moveTo(offset - radius * 0.8, offset + radius * 0.2);
    ctx.lineTo(offset - radius * 0.2, offset + radius * 0.2);
    ctx.moveTo(offset - radius * 0.8, offset + radius * 0.35);
    ctx.lineTo(offset - radius * 0.2, offset + radius * 0.3);
    ctx.moveTo(offset - radius * 0.8, offset + radius * 0.05);
    ctx.lineTo(offset - radius * 0.2, offset + radius * 0.1);
    // Right
    ctx.moveTo(offset + radius * 0.8, offset + radius * 0.2);
    ctx.lineTo(offset + radius * 0.2, offset + radius * 0.2);
    ctx.moveTo(offset + radius * 0.8, offset + radius * 0.35);
    ctx.lineTo(offset + radius * 0.2, offset + radius * 0.3);
    ctx.moveTo(offset + radius * 0.8, offset + radius * 0.05);
    ctx.lineTo(offset + radius * 0.2, offset + radius * 0.1);
    ctx.stroke();

    return canvas;
  }
}