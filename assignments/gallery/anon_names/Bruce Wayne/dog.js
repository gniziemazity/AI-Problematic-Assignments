class Dog {
    constructor(x, y, fur = "brown", eyes = "black") {
        this.x = x;
        this.y = y;
        this.fur = fur;
        this.eyes = eyes;
    }

    talk() {
        return "Woof!";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2); // dog head
        ctx.fillStyle = this.fur;
        ctx.fill();
        ctx.stroke();

        // eyes
        ctx.beginPath();
        ctx.arc(this.x - 5, this.y - 5, 3, 0, Math.PI * 2);
        ctx.arc(this.x + 5, this.y - 5, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes;
        ctx.fill();
    }
}