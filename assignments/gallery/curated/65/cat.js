class Cat {
  constructor(name, age, furColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furColor = furColor;
    this.eyeColor = eyeColor;
  }

  talk() {
    console.log(`${this.name} says: Meow!`);
  }

  render() {
    const canvas = document.createElement("canvas");
    canvas.width = 340;
    canvas.height = 240;

    const ctx = canvas.getContext("2d");
    this.draw(ctx);

    return canvas;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 240, 240);

    const cx = 120;
    const cy = 130;
    const r = 70;

    // --- EARS (pointy triangles) ---
    ctx.fillStyle = this.furColor;
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 3;

    // left ear
    ctx.beginPath();
    ctx.moveTo(cx - 55, cy - 55);   // left base
    ctx.lineTo(cx - 30, cy - 115);  // tip
    ctx.lineTo(cx - 5,  cy - 55);   // right base
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // right ear
    ctx.beginPath();
    ctx.moveTo(cx + 5,  cy - 55);
    ctx.lineTo(cx + 30, cy - 115);
    ctx.lineTo(cx + 55, cy - 55);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // --- HEAD (circle) ---
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // --- EYES ---
    ctx.fillStyle = this.eyeColor;

    ctx.beginPath();
    ctx.arc(cx - 25, cy - 10, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx + 25, cy - 10, 10, 0, Math.PI * 2);
    ctx.fill();

    // pupils
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(cx - 25, cy - 10, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx + 25, cy - 10, 4, 0, Math.PI * 2);
    ctx.fill();

    // --- NOSE (small triangle) ---
    ctx.fillStyle = "#d77";
    ctx.beginPath();
    ctx.moveTo(cx, cy + 8);
    ctx.lineTo(cx - 8, cy + 20);
    ctx.lineTo(cx + 8, cy + 20);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#111";
    ctx.stroke();

    // --- MOUTH (small curves/lines) ---
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(cx, cy + 20);
    ctx.lineTo(cx, cy + 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx - 10, cy + 32, 10, Math.PI * 1.1, Math.PI * 1.9);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx + 10, cy + 32, 10, Math.PI * 1.1, Math.PI * 1.9);
    ctx.stroke();

    // --- WHISKERS (lines) ---
    ctx.lineWidth = 2;

    // left whiskers
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy + 20);
    ctx.lineTo(cx - 85, cy + 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - 15, cy + 25);
    ctx.lineTo(cx - 90, cy + 25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - 15, cy + 30);
    ctx.lineTo(cx - 85, cy + 45);
    ctx.stroke();

    // right whiskers
    ctx.beginPath();
    ctx.moveTo(cx + 15, cy + 20);
    ctx.lineTo(cx + 85, cy + 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + 15, cy + 25);
    ctx.lineTo(cx + 90, cy + 25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + 15, cy + 30);
    ctx.lineTo(cx + 85, cy + 45);
    ctx.stroke();
  }
}