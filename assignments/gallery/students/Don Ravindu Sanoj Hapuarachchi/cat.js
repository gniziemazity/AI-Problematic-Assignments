class Cat {
    constructor(name, age, fur, eyes) {
        this.name = name;
        this.age = age;
        this.fur = fur;
        this.eyes = eyes;
    }

    talk() {
        console.log(`${this.name} says: Meow!`);
    }

    render() {
        // Create a canvas element
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");

        // Draw head
        ctx.fillStyle = this.fur;
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2); // head
        ctx.fill();

        // Draw ears (pointy)
        ctx.beginPath();
        ctx.moveTo(60, 60); ctx.lineTo(80, 20); ctx.lineTo(100, 60); ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(140, 60); ctx.lineTo(120, 20); ctx.lineTo(100, 60); ctx.closePath();
        ctx.fill();

        // Draw eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(80, 90, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(120, 90, 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw whiskers
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        // Left whiskers
        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.lineTo(80, 100);
        ctx.moveTo(50, 110);
        ctx.lineTo(80, 110);
        ctx.moveTo(50, 90);
        ctx.lineTo(80, 90);
        ctx.stroke();
        // Right whiskers
        ctx.beginPath();
        ctx.moveTo(120, 100);
        ctx.lineTo(150, 100);
        ctx.moveTo(120, 110);
        ctx.lineTo(150, 110);
        ctx.moveTo(120, 90);
        ctx.lineTo(150, 90);
        ctx.stroke();

        return canvas;
    }
}