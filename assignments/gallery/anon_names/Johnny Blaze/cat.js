class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    // Cat sound
    talk() {
        console.log(this.name + " says: Meow!");
    }

    // Draw the cat on canvas
    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;

        const ctx = canvas.getContext("2d");

        // 🟤 Head
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI * 2);
        ctx.fill();

        // 🔺 Left ear
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(40, 10);
        ctx.lineTo(50, 30);
        ctx.closePath();
        ctx.fill();

        // 🔺 Right ear
        ctx.beginPath();
        ctx.moveTo(50, 30);
        ctx.lineTo(60, 10);
        ctx.lineTo(70, 30);
        ctx.closePath();
        ctx.fill();

        // 👀 Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(40, 50, 5, 0, Math.PI * 2);
        ctx.arc(60, 50, 5, 0, Math.PI * 2);
        ctx.fill();

        // 👃 Nose
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.arc(50, 60, 3, 0, Math.PI * 2);
        ctx.fill();

        // 🧵 Whiskers
        ctx.strokeStyle = "black";
        ctx.beginPath();

        // left whiskers
        ctx.moveTo(30, 60);
        ctx.lineTo(10, 55);
        ctx.moveTo(30, 65);
        ctx.lineTo(10, 65);
        ctx.moveTo(30, 70);
        ctx.lineTo(10, 75);

        // right whiskers
        ctx.moveTo(70, 60);
        ctx.lineTo(90, 55);
        ctx.moveTo(70, 65);
        ctx.lineTo(90, 65);
        ctx.moveTo(70, 70);
        ctx.lineTo(90, 75);

        ctx.stroke();

        return canvas;
    }
}