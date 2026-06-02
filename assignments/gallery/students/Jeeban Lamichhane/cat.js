class Cat{
    constructor(name,age,furrColor,eyeColor) {
        this.name = name;
        this.age = age;
        this.furr = furrColor;
        this.eyes = eyeColor;
    }

    talk() {
    console.log("Meow! I'm" + this.name + " 🐱");
    }

    render(size = 400) {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext("2d");
        const offset = size / 2;
        const radius = (size * 0.4 * Math.sqrt(this.age)) / 5;

        //HEAD
        ctx.beginPath();
        ctx.arc(offset, offset, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.furr;
        ctx.fill();

        //EAR
        ctx.fillStyle = this.furr;

        //left ear
        ctx. beginPath();
        ctx.moveTo(offset - radius * 0.6, offset - radius * 0.2);
        ctx.lineTo(offset - radius * 0.2, offset - radius * 1.2);
        ctx.lineTo(offset, offset - radius * 0.2);
        ctx.fill();

        //right ear
        ctx.beginPath();
        ctx.moveTo(offset + radius * 0.6, offset - radius * 0.2);
        ctx.lineTo(offset + radius * 0.2, offset - radius * 1.2);
        ctx.lineTo(offset, offset - radius * 0.2);
        ctx.fill();

        //EYES
        const eyeOffsetX = radius * 0.4;
        const eyeOffsetY = radius * 0.3;

        ctx.beginPath();
        ctx.arc(offset - eyeOffsetX, offset - eyeOffsetY, radius * 0.2, 0, Math.PI * 2);
        ctx.arc(offset + eyeOffsetX, offset - eyeOffsetY, radius * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(offset - eyeOffsetX, offset - eyeOffsetY, radius * 0.1, 0, Math.PI * 2);
        ctx.arc(offset + eyeOffsetX, offset - eyeOffsetY, radius * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes;
        ctx.fill();

        //NOSE
        ctx.beginPath();
        ctx.arc(offset, offset + radius * 0.2, radius * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();

        //WHISKERS
        ctx.beginPath();

        //left side
        ctx.moveTo(offset - radius * 0.2, offset + radius * 0.2);
        ctx.lineTo(offset - radius * 0.8, offset + radius * 0.1);

        ctx.moveTo(offset - radius * 0.2, offset + radius * 0.3);
        ctx.lineTo(offset - radius * 0.8, offset + radius * 0.3);

        //right side
        ctx.moveTo(offset + radius * 0.2, offset + radius * 0.2);
        ctx.lineTo(offset + radius * 0.8, offset + radius * 0.1);

        ctx.moveTo(offset + radius * 0.2, offset + radius * 0.3);
        ctx.lineTo(offset + radius * 0.8, offset + radius * 0.3);

        ctx.stroke();

        //STYLE
        ctx.fillStyle = "black";
        ctx.font = `bold ${radius * 0.14}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.name.toUpperCase(), offset, offset + radius * 1.2);

        return canvas;

    }
}