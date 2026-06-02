class Cat {
  constructor(name, age, furColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.fur = furColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Meow! I'm " + this.name + " 😺");
  }

  render(size = 400) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const center = size / 2;
    const radius = size * 0.25;

    // Collar
    ctx.beginPath();
    ctx.arc(center, center + radius * 0.58, radius * 0.72, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();

    // Face
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.fur;
    ctx.fill();

    // Left ear
    ctx.fillStyle = this.fur;

    ctx.beginPath();
    ctx.moveTo(center - radius * 0.7, center - radius * 0.4);
    ctx.lineTo(center - radius * 0.3, center - radius * 1.2);
    ctx.lineTo(center - radius * 0.05, center - radius * 0.3);
    ctx.closePath();
    ctx.fill();

    // Right ear
    ctx.beginPath();
    ctx.moveTo(center + radius * 0.7, center - radius * 0.4);
    ctx.lineTo(center + radius * 0.3, center - radius * 1.2);
    ctx.lineTo(center + radius * 0.05, center - radius * 0.3);
    ctx.closePath();
    ctx.fill();

    // Eyes
    ctx.beginPath();
    ctx.arc(
      center - radius * 0.32,
      center - radius * 0.12,
      radius * 0.18,
      0,
      Math.PI * 2,
    );
    ctx.arc(
      center + radius * 0.32,
      center - radius * 0.12,
      radius * 0.18,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = "white";
    ctx.fill();

    // Pupils
    ctx.beginPath();
    ctx.arc(
      center - radius * 0.32,
      center - radius * 0.12,
      radius * 0.08,
      0,
      Math.PI * 2,
    );
    ctx.arc(
      center + radius * 0.32,
      center - radius * 0.12,
      radius * 0.08,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = this.eyes;
    ctx.fill();

    // Nose
    ctx.beginPath();
    ctx.moveTo(center, center + radius * 0.12);
    ctx.lineTo(center - radius * 0.08, center + radius * 0.25);
    ctx.lineTo(center + radius * 0.08, center + radius * 0.25);
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.fill();

    // Whiskers
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    ctx.moveTo(center - radius * 0.08, center + radius * 0.16);
    ctx.lineTo(center - radius * 0.62, center + radius * 0.08);

    ctx.moveTo(center - radius * 0.08, center + radius * 0.24);
    ctx.lineTo(center - radius * 0.68, center + radius * 0.24);

    ctx.moveTo(center - radius * 0.08, center + radius * 0.32);
    ctx.lineTo(center - radius * 0.62, center + radius * 0.4);

    ctx.moveTo(center + radius * 0.08, center + radius * 0.16);
    ctx.lineTo(center + radius * 0.62, center + radius * 0.08);

    ctx.moveTo(center + radius * 0.08, center + radius * 0.24);
    ctx.lineTo(center + radius * 0.68, center + radius * 0.24);

    ctx.moveTo(center + radius * 0.08, center + radius * 0.32);
    ctx.lineTo(center + radius * 0.62, center + radius * 0.4);

    ctx.stroke();

    // Name inside collar
    ctx.fillStyle = "black";
    ctx.font = radius * 0.15 + "px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), center, center + radius * 1.14);

    return canvas;
  }
}

const myCat = new Cat("Pinky", 3, "gray", "green");
console.log(myCat);
myCat.talk();
const catCanvas = myCat.render();
mainContainer.appendChild(catCanvas);
