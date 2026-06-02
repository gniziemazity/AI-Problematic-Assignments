class Cat {
  constructor(name, age, furrColor, eyeColor) {
    this.name = name;
    this.age = age;
    this.furr = furrColor;
    this.eyes = eyeColor;
  }

  talk() {
    console.log("Roar! I'm " + this.name + " 😼");
    return "Roar! I'm " + this.name + " 😼";
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
//nose
    const smallCircleRadius = radius * 0.12;
    const verticalOffset = offset + radius * 0.3;
    ctx.beginPath();
    ctx.arc(offset, verticalOffset, smallCircleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
//mouth
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

    //mustache left
    ctx.beginPath();
    ctx.moveTo(offset - halfCircleRadius,
        verticalOffset + smallCircleRadius);
    ctx.lineTo(offset - halfCircleRadius - radius * 0.5, 
        verticalOffset + smallCircleRadius - radius * 0.1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset - halfCircleRadius,
        verticalOffset + smallCircleRadius);
    ctx.lineTo(offset - halfCircleRadius - radius, 
        verticalOffset + smallCircleRadius);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset - halfCircleRadius,
        verticalOffset + smallCircleRadius);
    ctx.lineTo(offset - halfCircleRadius - radius, 
        verticalOffset + smallCircleRadius + radius * 0.4);
    ctx.stroke();

    //mustache right
    ctx.beginPath();
    ctx.moveTo(offset + halfCircleRadius,
        verticalOffset + smallCircleRadius);
    ctx.lineTo(offset + halfCircleRadius +  radius * 0.5, 
        verticalOffset + smallCircleRadius - radius * 0.1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset + halfCircleRadius,
        verticalOffset + smallCircleRadius);
    ctx.lineTo(offset + halfCircleRadius + radius, 
        verticalOffset + smallCircleRadius);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset + halfCircleRadius,
        verticalOffset + smallCircleRadius);
    ctx.lineTo(offset + halfCircleRadius + radius, 
        verticalOffset + smallCircleRadius + radius * 0.4);
    ctx.stroke();

    const mediumCircleRadius = radius * 0.35;
    const horizontalOffset = radius * 0.4;
    const verticalAdjustment = radius * 0.4;
   
   //eyes
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

//ears left
    ctx.beginPath();
    ctx.moveTo(offset - radius, offset);
    ctx.lineTo(offset - radius, offset - radius * 1.5);
    ctx.lineTo(offset - radius * 0.5, offset - radius * 0.85);
    ctx.lineWidth = 0.1;
    ctx.stroke();
    ctx.fillStyle = this.furr;
    ctx.fill();
//ears right
    ctx.beginPath();
    ctx.moveTo(offset + radius, offset);
    ctx.lineTo(offset + radius, offset - radius * 1.5);
    ctx.lineTo(offset + radius * 0.5, offset - radius * 0.85);
    ctx.stroke();
    ctx.fillStyle = this.furr;
    ctx.fill();

    // const ellipseWidth = radius * 0.5;
    // const ellipseHeight = radius * 1.1;
    // const ellipseOffsetAdjustment = horizontalOffset * 3;
    // const ellipseRotation = 0.3;
    // ctx.fillStyle = this.furr;
    // ctx.beginPath();
    // ctx.ellipse(
    //   offset - ellipseOffsetAdjustment,
    //   offset,
    //   ellipseWidth,
    //   ellipseHeight,
    //   +ellipseRotation,
    //   0,
    //   Math.PI * 2,
    // );
    // ctx.ellipse(
    //   offset + ellipseOffsetAdjustment,
    //   offset,
    //   ellipseWidth,
    //   ellipseHeight,
    //   -ellipseRotation,
    //   0,
    //   Math.PI * 2,
    // );
    // ctx.fill();
    // ctx.fillStyle = "rgb(0,0,0,0.5)";
    // ctx.fill();

    return canvas;
  }
}