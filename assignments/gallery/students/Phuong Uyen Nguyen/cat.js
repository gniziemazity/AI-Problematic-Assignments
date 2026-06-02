class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    draw(ctx) {
        // Head
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(400, 200, 80, 0, Math.PI * 2);
        ctx.fill();

        // Ears
        ctx.beginPath();
        ctx.moveTo(330, 140);
        ctx.lineTo(360, 60);
        ctx.lineTo(390, 140);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(410, 140);
        ctx.lineTo(440, 60);
        ctx.lineTo(470, 140);
        ctx.fill();

        // Eyes
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(370, 190, 20, 0, Math.PI * 2);
        ctx.arc(430, 190, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(370, 190, 8, 0, Math.PI * 2);
        ctx.arc(430, 190, 8, 0, Math.PI * 2);
        ctx.fill();

        // Nose
        ctx.beginPath();
        ctx.arc(400, 215, 6, 0, Math.PI * 2);
        ctx.fill();

        // Mouth
        ctx.beginPath();
        ctx.arc(390, 225, 10, 0, Math.PI);
        ctx.arc(410, 225, 10, 0, Math.PI);
        ctx.stroke();

        // Whiskers
        ctx.beginPath();
        ctx.moveTo(350, 215);
        ctx.lineTo(310, 205);
        ctx.moveTo(350, 225);
        ctx.lineTo(310, 225);

        ctx.moveTo(450, 215);
        ctx.lineTo(490, 205);
        ctx.moveTo(450, 225);
        ctx.lineTo(490, 225);
        ctx.stroke();

        // Collar
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(400, 260, 40, 0, Math.PI);
        ctx.fill();

        // Name
        ctx.fillStyle = "black";
        ctx.fillText(this.name, 385, 275);
    }
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create objects
const cat = new Cat("MIMI", "orange");

// Draw them
cat.draw(ctx);