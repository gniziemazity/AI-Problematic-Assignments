class Dog {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    talk() {
        return "Woof!";
    }

    draw(ctx) {
        // head
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();

        // ears (simple)
        ctx.beginPath();
        ctx.moveTo(this.x - 10, this.y - 10);
        ctx.lineTo(this.x - 15, this.y - 20);

        ctx.moveTo(this.x + 10, this.y - 10);
        ctx.lineTo(this.x + 15, this.y - 20);
        ctx.stroke();
    }
}