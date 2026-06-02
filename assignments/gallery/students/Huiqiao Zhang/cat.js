class Cat {
    constructor(name, age, furColor, eyeColor){
        this.name = name;
        this.age = age;
        this.fur = furColor;
        this.eyes = eyeColor;
    }

    talk(){
        console.log("Meow! I'm " + this.name + "\u{1F431}");
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

    ctx.beginPath();
    ctx.arc(offset, offset, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.fur;
    ctx.fill();

    const smallCircleRadius = radius * 0.12;
    const verticalOffset = offset + radius * 0.3;
    ctx.beginPath();
    ctx.moveTo(offset - smallCircleRadius, verticalOffset);
    ctx.lineTo(offset + smallCircleRadius, verticalOffset);
    ctx.lineTo(offset, verticalOffset + smallCircleRadius);
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(offset, verticalOffset + smallCircleRadius);
    ctx.quadraticCurveTo(
        offset - smallCircleRadius,
        verticalOffset + smallCircleRadius * 1.5,
        offset,
        verticalOffset + smallCircleRadius * 2,
    );
    ctx.quadraticCurveTo(
        offset + smallCircleRadius,
        verticalOffset + smallCircleRadius * 1.5,
        offset,
        verticalOffset + smallCircleRadius
    );
    ctx.stroke();

    

    const mediumCircleRadius = radius * 0.45;
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

    /* After asked AI, change the position of this part, but the whiskers are still missing.
    ctx.strokeStyle = this.fur;
    ctx.lineWidth = radius * 0.05;

    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.2, verticalOffset + smallCircleRadius);
    ctx.lineTo(offset - radius * 0.8, verticalOffset + smallCircleRadius - radius * 0.1);

    ctx.moveTo(offset - radius * 0.2, verticalOffset + smallCircleRadius + radius * 0.1);
    ctx.lineTo(offset - radius * 0.8, verticalOffset + smallCircleRadius + radius * 0.05);

    ctx.moveTo(offset - radius * 0.2, verticalOffset + smallCircleRadius + radius * 0.2);
    ctx.lineTo(offset - radius * 0.8, verticalOffset + smallCircleRadius + radius * 0.2);

    ctx.moveTo(offset + radius * 0.2, verticalOffset + smallCircleRadius);
    ctx.lineTo(offset + radius * 0.8, verticalOffset + smallCircleRadius - radius * 0.1);

    ctx.moveTo(offset + radius * 0.2, verticalOffset + smallCircleRadius + radius * 0.1);
    ctx.lineTo(offset + radius * 0.8, verticalOffset + smallCircleRadius + radius * 0.05);

    ctx.moveTo(offset + radius * 0.2, verticalOffset + smallCircleRadius + radius * 0.2);
    ctx.lineTo(offset + radius * 0.8, verticalOffset + smallCircleRadius + radius * 0.2);

    ctx.stroke();*/

    ctx.fillStyle = this.fur;
    ctx.beginPath();
    ctx.moveTo(offset - radius * 0.6, offset - radius * 1.2);
    ctx.lineTo(offset - radius * 1.0, offset - radius * 0.6);
    ctx.lineTo(offset - radius * 0.2, offset - radius * 0.6);
    ctx.closePath();
    ctx.fillStyle = this.fur;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(offset + radius * 0.6, offset - radius * 1.2);
    ctx.lineTo(offset + radius * 1.0, offset - radius * 0.6);
    ctx.lineTo(offset + radius * 0.2, offset - radius * 0.6);
    ctx.closePath();
    ctx.fill();
    
    
    return canvas;
  }
}