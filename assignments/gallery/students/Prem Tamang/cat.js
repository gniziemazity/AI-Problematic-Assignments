class Cat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    talk() {
        console.log("Meow!");
        document.getElementById("catSound").play();
    }

    draw(ctx) {
        // head
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();

        // pointy ears (triangle)
        ctx.beginPath();
        ctx.moveTo(this.x - 10, this.y - 5);
        ctx.lineTo(this.x - 5, this.y - 15);
        ctx.lineTo(this.x, this.y - 5);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x + 10, this.y - 5);
        ctx.lineTo(this.x + 5, this.y - 15);
        ctx.lineTo(this.x, this.y - 5);
        ctx.fill();

        // whiskers
        ctx.beginPath();
        ctx.moveTo(this.x - 15, this.y);
        ctx.lineTo(this.x - 5, this.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.y);
        ctx.lineTo(this.x + 15, this.y);
        ctx.stroke();
    }
}