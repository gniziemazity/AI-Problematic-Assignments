class Dog {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(this.name + " says: Woof!");
        document.getElementById("dogSound").play(); // play dog sound
    }

    draw(ctx, x, y, size) {
        ctx.strokeStyle = "black";

        // Head
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();

        // Ears
        ctx.beginPath();
        ctx.arc(x - size, y, size * 0.5, 0, Math.PI * 2);
        ctx.arc(x + size, y, size * 0.5, 0, Math.PI * 2);
        ctx.stroke();

        // Eyes
        ctx.beginPath();
        ctx.arc(x - size * 0.3, y - size * 0.2, size * 0.1, 0, Math.PI * 2);
        ctx.arc(x + size * 0.3, y - size * 0.2, size * 0.1, 0, Math.PI * 2);
        ctx.stroke();
    }
}