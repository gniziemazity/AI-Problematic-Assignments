class Cat {
    constructor(x, y, fur = "gray", eyes = "green") {
        this.x = x;
        this.y = y;
        this.fur = fur;
        this.eyes = eyes;
    }

    talk() {
        return "Meow!";
    }

    draw(ctx) {
        // Head
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = this.fur;
        ctx.fill();
        ctx.stroke();

        // Ears
        ctx.beginPath();
        ctx.moveTo(this.x - 10, this.y - 10);
        ctx.lineTo(this.x - 5, this.y - 25);
        ctx.lineTo(this.x, this.y - 10);
        ctx.closePath();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x + 10, this.y - 10);
        ctx.lineTo(this.x + 5, this.y - 25);
        ctx.lineTo(this.x, this.y - 10);
        ctx.closePath();
        ctx.stroke();

        // Eyes
        ctx.beginPath();
        ctx.arc(this.x - 5, this.y - 5, 3, 0, Math.PI * 2);
        ctx.arc(this.x + 5, this.y - 5, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes;
        ctx.fill();

        // Whiskers
        ctx.beginPath();
        ctx.moveTo(this.x - 15, this.y);
        ctx.lineTo(this.x - 25, this.y - 5);
        ctx.moveTo(this.x - 15, this.y + 5);
        ctx.lineTo(this.x - 25, this.y + 10);
        ctx.moveTo(this.x + 15, this.y);
        ctx.lineTo(this.x + 25, this.y - 5);
        ctx.moveTo(this.x + 15, this.y + 5);
        ctx.lineTo(this.x + 25, this.y + 10);
        ctx.stroke();
    }
}