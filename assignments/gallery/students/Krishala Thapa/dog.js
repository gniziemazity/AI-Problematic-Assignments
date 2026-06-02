class Dog {
    constructor() {
        this.type = "dog";
    }

    talk() {
        console.log("Woof!");
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(40, 40, 25, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "brown";
        ctx.fillRect(10, 5, 20, 20);
        ctx.fillRect(50, 5, 20, 20);

        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(30, 35, 5, 0, Math.PI * 2);
        ctx.arc(50, 35, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "yellow";
        ctx.fillRect(20, 60, 40, 10);
    }
}