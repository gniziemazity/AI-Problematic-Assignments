class Cat {
  constructor(name, age, furColor, eyeColor) {
    this.name = name;         // Set cat name
    this.age = age;           // Set cat age
    this.furColor = furColor; // Set fur color
    this.eyeColor = eyeColor; // Set eye color
  }

  talk() {
    console.log(`${this.name} says: Meow!`);  // Print meow to console
    let audio = new Audio('Cat.mp3');          // Load cat audio file
    // Sound source: Cat.mp3 (freesound.org)
    audio.play().catch(function(err) { console.error(err); });  // Play with error catch
  }

  draw(ctx, x, y, size) {
    // Head
    ctx.beginPath();                           // Start new path
    ctx.arc(x, y, size, 0, Math.PI * 2);      // Draw head circle
    ctx.fillStyle = this.furColor;             // Set fur color
    ctx.fill();                                // Fill head
    ctx.strokeStyle = "#333";                  // Border color
    ctx.stroke();                              // Draw border

    // Left ear
    ctx.beginPath();                           // Start new path
    ctx.moveTo(x - size * 0.8, y - size * 0.5);  // Ear base left
    ctx.lineTo(x - size * 0.5, y - size * 1.2);  // Ear tip
    ctx.lineTo(x - size * 0.2, y - size * 0.8);  // Ear base right
    ctx.closePath();                           // Close ear shape
    ctx.fillStyle = this.furColor;             // Ear color
    ctx.fill();                                // Fill ear
    ctx.stroke();                              // Ear border

    // Right ear
    ctx.beginPath();                           // Start new path
    ctx.moveTo(x + size * 0.8, y - size * 0.5);  // Ear base right
    ctx.lineTo(x + size * 0.5, y - size * 1.2);  // Ear tip
    ctx.lineTo(x + size * 0.2, y - size * 0.8);  // Ear base left
    ctx.closePath();                           // Close ear shape
    ctx.fillStyle = this.furColor;             // Ear color
    ctx.fill();                                // Fill ear
    ctx.stroke();                              // Ear border

    // Whiskers
    ctx.beginPath();                           // Start new path
    ctx.strokeStyle = "#333";                  // Whisker color
    ctx.lineWidth = 1;                         // Whisker thickness
    ctx.moveTo(x - size * 0.2, y);             // Left upper whisker start
    ctx.lineTo(x - size * 1.1, y - size * 0.2);  // Left upper whisker end
    ctx.moveTo(x - size * 0.2, y + size * 0.1);  // Left lower whisker start
    ctx.lineTo(x - size * 1.1, y + size * 0.1);  // Left lower whisker end
    ctx.moveTo(x + size * 0.2, y);             // Right upper whisker start
    ctx.lineTo(x + size * 1.1, y - size * 0.2);  // Right upper whisker end
    ctx.moveTo(x + size * 0.2, y + size * 0.1);  // Right lower whisker start
    ctx.lineTo(x + size * 1.1, y + size * 0.1);  // Right lower whisker end
    ctx.stroke();                              // Draw all whiskers

    // Left eye
    ctx.beginPath();                           // Start new path
    ctx.arc(x - size * 0.3, y - size * 0.15, size * 0.12, 0, Math.PI * 2);  // Left eye
    ctx.fillStyle = this.eyeColor;             // Eye color
    ctx.fill();                                // Fill left eye

    // Right eye
    ctx.beginPath();                           // Start new path
    ctx.arc(x + size * 0.3, y - size * 0.15, size * 0.12, 0, Math.PI * 2);  // Right eye
    ctx.fillStyle = this.eyeColor;             // Eye color
    ctx.fill();                                // Fill right eye

    // Nose
    ctx.beginPath();                           // Start new path
    ctx.arc(x, y + size * 0.25, size * 0.08, 0, Math.PI * 2);  // Nose circle
    ctx.fillStyle = "pink";                    // Pink nose
    ctx.fill();                                // Fill nose

    // Mouth
    ctx.beginPath();                           // Start new path
    ctx.arc(x, y + size * 0.35, size * 0.15, 0, Math.PI);  // Smile curve
    ctx.strokeStyle = "#333";                  // Mouth color
    ctx.lineWidth = 2;                         // Line thickness
    ctx.stroke();                              // Draw mouth
  }
}