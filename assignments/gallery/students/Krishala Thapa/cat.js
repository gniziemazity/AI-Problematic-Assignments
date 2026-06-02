class Cat {
    constructor() {
        this.type = "cat";
    }

    talk() {
        console.log("Meow!");
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(40, 40, 25, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(20, 10);
        ctx.lineTo(30, 25);
        ctx.lineTo(10, 25);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(60, 10);
        ctx.lineTo(70, 25);
        ctx.lineTo(50, 25);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(30, 35, 5, 0, Math.PI * 2);
        ctx.arc(50, 35, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(20, 45); ctx.lineTo(5, 45);
        ctx.moveTo(20, 50); ctx.lineTo(5, 55);
        ctx.moveTo(20, 40); ctx.lineTo(5, 35);

        ctx.moveTo(60, 45); ctx.lineTo(75, 45);
        ctx.moveTo(60, 50); ctx.lineTo(75, 55);
        ctx.moveTo(60, 40); ctx.lineTo(75, 35);
        ctx.stroke();
    }
}