class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Miow! I'm " + this.name + " 🐱");
  }

  render(size = 400) { 
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2); /*Collar */
    ctx.fillStyle = "gold";
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = `bold ${radius * 0.14}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.12); /*Name plate */

    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2); /*Main body / head */
    ctx.fillStyle = this.furr;
    ctx.fill();

    const smallCircleRadius = radius * 0.12;
    const verticalOffset = offset + radius * 0.3;
    ctx.beginPath();
    ctx.arc(offset, verticalOffset, smallCircleRadius, 0, Math.PI * 2);  /*Nose */
    ctx.fillStyle = "black";
    ctx.fill();

    const halfCircleWidth = radius * 0.4;
    const halfCircleRadius = halfCircleWidth / 2;
    ctx.beginPath();
    /*left side of mouth */
    ctx.arc(
      offset - halfCircleRadius,
      verticalOffset + smallCircleRadius,
      halfCircleRadius,
      0,
      Math.PI,
    );
    ctx.stroke();
  
    ctx.beginPath();
    /*Right side of mouth */
    ctx.arc(
    offset + halfCircleRadius,
    verticalOffset + smallCircleRadius,
    halfCircleRadius,
    0,
    Math.PI,
  );
  /*change from hardCode to variables this+ears */
    ctx.stroke();
  /*wiskers */
  /*left side */
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset - this.age * 1, verticalOffset - 2);
    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset - this.age * 1, verticalOffset + 2);
  /*right side */
    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset + this.age * 1, verticalOffset - 2);
    ctx.moveTo(offset, verticalOffset);
    ctx.lineTo(offset + this.age * 1, verticalOffset + 2);
    ctx.stroke();

    const mediumCircleRadius = radius * 0.35;
    const horizontalOffset = radius * 0.4;
    const verticalAdjustment = radius * 0.4;
    ctx.beginPath();
    /*left eye */
    ctx.arc(
      offset - horizontalOffset,
      verticalOffset - verticalAdjustment,
      mediumCircleRadius,
      0,
      Math.PI * 2,
    );  
    /*right eye */
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
    /*left pupil */
    ctx.arc(
      offset - horizontalOffset + smallCircleRadius,
      verticalOffset - verticalAdjustment + smallCircleRadius,
      smallCircleRadius,
      0,
      Math.PI * 2,
    );
    /*right pupil */
    ctx.arc(
      offset + horizontalOffset - smallCircleRadius,
      verticalOffset - verticalAdjustment + smallCircleRadius,
      smallCircleRadius,
      0,
      Math.PI * 2,
    ); 
    ctx.fillStyle = this.eyes;
    ctx.fill();
    ctx.fillStyle = this.furr;

    

    // EARS start here

    const earHeight = radius * -0.3;
    const earWidth = radius * -0.3;
    ctx.fillStyle = this.furr;

    // Left ear
    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.8, offset - radius * 1.3); // bottom point near head
    ctx.lineTo(offset - radius * 0.6 - earWidth / 2, offset - radius * 1.2 - earHeight); // top left
    ctx.lineTo(offset - radius * 0.7 + earWidth / 2, offset - radius * 0.8 - earHeight); // top right
    ctx.closePath();
  

    ctx.fill();
    
    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fill();
    
    // Right ear
    ctx.beginPath();
    ctx.moveTo(offset + radius * 0.8, offset - radius * 1.3); // bottom point near head
    ctx.lineTo(offset + radius * 0.7 - earWidth / 2, offset - radius * 0.8 - earHeight); // top left
    ctx.lineTo(offset + radius * 0.6 + earWidth / 2, offset - radius * 1.2 - earHeight); // top right
    ctx.closePath();
 
    ctx.fill();

    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fill();
   



    return canvas;
  }
}