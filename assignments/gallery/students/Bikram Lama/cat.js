class Cat {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(this.name + " says: Meow!");
        document.getElementById("catSound").play(); // play cat sound
    }

    draw(ctx, x, y, size) {
        ctx.strokeStyle = "black";

        // Head
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();

        // Pointy ears
        ctx.beginPath();
        ctx.moveTo(x - size * 0.6, y - size * 0.5);
        ctx.lineTo(x - size * 0.2, y - size * 1.2);
        ctx.lineTo(x, y - size * 0.4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + size * 0.6, y - size * 0.5);
        ctx.lineTo(x + size * 0.2, y - size * 1.2);
        ctx.lineTo(x, y - size * 0.4);
        ctx.stroke();

        // Eyes
        ctx.beginPath();
        ctx.arc(x - size * 0.3, y - size * 0.2, size * 0.1, 0, Math.PI * 2);
        ctx.arc(x + size * 0.3, y - size * 0.2, size * 0.1, 0, Math.PI * 2);
        ctx.stroke();

        // Whiskers
        ctx.beginPath();
        ctx.moveTo(x - size * 0.2, y);
        ctx.lineTo(x - size * 0.8, y - size * 0.2);
        ctx.moveTo(x - size * 0.2, y + size * 0.2);
        ctx.lineTo(x - size * 0.8, y + size * 0.4);

        ctx.moveTo(x + size * 0.2, y);
        ctx.lineTo(x + size * 0.8, y - size * 0.2);
        ctx.moveTo(x + size * 0.2, y + size * 0.2);
        ctx.lineTo(x + size * 0.8, y + size * 0.4);
        ctx.stroke();
    }
}