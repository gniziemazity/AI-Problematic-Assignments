class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Meow! I'm " + this.name + "😺");
  }

  render(size = 400) { 
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const offset = size / 2;
    const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

    // collar
    ctx.beginPath();
    ctx.arc(offset, offset + radius * 0.45, radius * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();

    // name
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

    // nose
    const smallCircleRadius = radius * 0.12;
    const verticalOffset = offset + radius * 0.3;
    ctx.beginPath();
    ctx.arc(offset, verticalOffset, smallCircleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // mouth
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

    // eyes outer
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

    // eyes center
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

    // ears
    const triangleWidth = radius * 0.8;
    /*
    ctx.beginPath();
    ctx.moveTo(offset, triangleOffsetAdjustment);
    ctx.lineTo(offset-triangleWidth/2, triangleOffsetAdjustment-triangleWidth*1.2);
    ctx.lineTo(offset-triangleWidth, triangleOffsetAdjustment);
    ctx.lineTo(offset, triangleOffsetAdjustment);
    ctx.fillStyle = this.furr;
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fill();
    */
    ctx.beginPath();
    ctx.moveTo(offset-radius, offset-radius);
    ctx.lineTo(offset-radius+triangleWidth, offset-radius);
    ctx.lineTo(offset-radius, offset-radius+triangleWidth);
    ctx.lineTo(offset-radius, offset-radius);
    ctx.fillStyle = this.furr;
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.3)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(offset+radius, offset-radius);
    ctx.lineTo(offset+radius-triangleWidth, offset-radius);
    ctx.lineTo(offset+radius, offset-radius+triangleWidth);
    ctx.lineTo(offset+radius, offset-radius);
    ctx.fillStyle = this.furr;
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.3)";
    ctx.fill();

    /*
    ctx.beginPath();
    ctx.moveTo(offset, triangleOffsetAdjustment);
    ctx.lineTo(offset+triangleWidth/2, triangleOffsetAdjustment-triangleWidth*1.2);
    ctx.lineTo(offset+triangleWidth, triangleOffsetAdjustment);
    ctx.lineTo(offset, triangleOffsetAdjustment);
    ctx.fillStyle = this.furr;
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0,0.5)";
    ctx.fill();
    */
    // whiskers
    // left
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.quadraticCurveTo(offset-halfCircleRadius*0.5, offset+halfCircleRadius*0.1, offset-halfCircleRadius*4, offset+halfCircleRadius*1.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.quadraticCurveTo(offset-halfCircleRadius*0.5, offset+halfCircleRadius*0.3, offset-halfCircleRadius*4, offset+halfCircleRadius*1.9);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.quadraticCurveTo(offset-halfCircleRadius*0.5, offset+halfCircleRadius*0.5, offset-halfCircleRadius*4, offset+halfCircleRadius*2.7);
    ctx.stroke();
    // right
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.quadraticCurveTo(offset+halfCircleRadius*0.5, offset+halfCircleRadius*0.1, offset+halfCircleRadius*4, offset+halfCircleRadius*1.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.quadraticCurveTo(offset+halfCircleRadius*0.5, offset+halfCircleRadius*0.3, offset+halfCircleRadius*4, offset+halfCircleRadius*1.9);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset);
    ctx.quadraticCurveTo(offset+halfCircleRadius*0.5, offset+halfCircleRadius*0.5, offset+halfCircleRadius*4, offset+halfCircleRadius*2.7);
    ctx.stroke();


    return canvas;
  }
}