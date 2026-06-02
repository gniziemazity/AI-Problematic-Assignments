class Dog {
  constructor(name, age, furColor, eyeColor) {  // Parameter naming fixed
    this.name = name;
    this.age = age;
    this.furColor = furColor;  // Fixed from 'furr' to 'furColor'
    this.eyeColor = eyeColor;  // Fixed from 'eyes' to 'eyeColor'
  }

  talk() {
    console.log(`Woof! I'm ${this.name} 🐶`);  // Console log dog sound
    let audio = new Audio('Dog.mp3');  // Load dog sound file
    // Sound source: Dog.mp3 (freesound.org)
    audio.play().catch(function(err) { console.error(err); });  // Play sound with error handling
  }

  draw(ctx, x, y, size) {  // New draw method added for consistency with Cat
    const offset = size / 2;  // Calculate center offset
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;  // Calculate dynamic radius based on age

    ctx.beginPath();  // Start new path
    ctx.arc(offset + x, offset + y + radius * 0.45, radius * 0.8, 0, Math.PI * 2);  // Draw name background
    ctx.fillStyle = "gold";  // Gold color for background
    ctx.fill();  // Fill background

    ctx.fillStyle = "black";  // Black text color
    ctx.font = `bold ${radius * 0.14}px Arial`;  // Set dynamic font size
    ctx.textAlign = "center";  // Center align text
    ctx.textBaseline = "middle";  // Middle baseline
    ctx.fillText(this.name.toUpperCase(), x + offset, y + offset + radius * 1.12);  // Draw name

    ctx.beginPath();  // Head circle
    ctx.arc(x + offset, y + offset, radius, 0, Math.PI * 2);  // Main head
    ctx.fillStyle = this.furColor;  // Use furColor
    ctx.fill();  // Fill head

    const smallCircleRadius = radius * 0.12;  // Nose radius
    const verticalOffset = y + offset + radius * 0.3;  // Nose position
    ctx.beginPath();
    ctx.arc(x + offset, verticalOffset, smallCircleRadius, 0, Math.PI * 2);  // Nose
    ctx.fillStyle = "black";  // Black nose
    ctx.fill();

    const halfCircleRadius = (radius * 0.4) / 2;  // Mouth half circles
    ctx.beginPath();
    ctx.arc(x + offset - halfCircleRadius, verticalOffset + smallCircleRadius, halfCircleRadius, 0, Math.PI);  // Left mouth
    ctx.stroke();  // Stroke line
    ctx.beginPath();
    ctx.arc(x + offset + halfCircleRadius, verticalOffset + smallCircleRadius, halfCircleRadius, 0, Math.PI);  // Right mouth
    ctx.stroke();

    const mediumCircleRadius = radius * 0.35;  // Eye whites
    const horizontalOffset = radius * 0.4;
    const verticalAdjustment = radius * 0.4;
    ctx.beginPath();
    ctx.arc(x + offset - horizontalOffset, verticalOffset - verticalAdjustment, mediumCircleRadius, 0, Math.PI * 2);  // Left eye white
    ctx.arc(x + offset + horizontalOffset, verticalOffset - verticalAdjustment, mediumCircleRadius, 0, Math.PI * 2);  // Right eye white
    ctx.fillStyle = "white";  // White eyes
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + offset - horizontalOffset + smallCircleRadius, verticalOffset - verticalAdjustment + smallCircleRadius, smallCircleRadius, 0, Math.PI * 2);  // Left pupil
    ctx.arc(x + offset + horizontalOffset - smallCircleRadius, verticalOffset - verticalAdjustment + smallCircleRadius, smallCircleRadius, 0, Math.PI * 2);  // Right pupil
    ctx.fillStyle = this.eyeColor;  // Use eyeColor
    ctx.fill();

    // Ears (simplified for dog)
    const ellipseWidth = radius * 0.5;
    const ellipseHeight = radius * 1.1;
    const ellipseOffsetAdjustment = horizontalOffset / 3;
    const ellipseRotation = 0.3;
    ctx.fillStyle = this.furColor;  // Fur for ears
    ctx.beginPath();
    ctx.ellipse(x + offset - ellipseOffsetAdjustment, y + offset, ellipseWidth, ellipseHeight, ellipseRotation, 0, Math.PI * 2);  // Left ear
    ctx.ellipse(x + offset + ellipseOffsetAdjustment, y + offset, ellipseWidth, ellipseHeight, -ellipseRotation, 0, Math.PI * 2);  // Right ear
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.5)";  // Shadow
    ctx.fill();
  }
}
