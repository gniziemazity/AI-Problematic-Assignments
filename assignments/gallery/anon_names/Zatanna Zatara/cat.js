class Cat { //1st question
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log(this.name + " says meow");
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;

        const ctx = canvas.getContext("2d");

        // Face (circle)
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(80, 90, 5, 0, Math.PI * 2);
        ctx.arc(120, 90, 5, 0, Math.PI * 2);
        ctx.fill();

        // years(triangle)
        ctx.fillStyle = this.furr;

        ctx.beginPath();
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 30);
        ctx.lineTo(100, 60);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(100, 60);
        ctx.lineTo(120, 30);
        ctx.lineTo(140, 60);
        ctx.fill();

        // WHISKERS
        ctx.strokeStyle = "black";

        // left whiskers
        ctx.beginPath();
        ctx.moveTo(50, 110);
        ctx.lineTo(80, 105);
        ctx.moveTo(50, 120);
        ctx.lineTo(80, 120);
        ctx.moveTo(50, 130);
        ctx.lineTo(80, 135);
        ctx.stroke();

        // right whiskers
        ctx.beginPath();
        ctx.moveTo(150, 110);
        ctx.lineTo(120, 105);
        ctx.moveTo(150, 120);
        ctx.lineTo(120, 120);
        ctx.moveTo(150, 130);
        ctx.lineTo(120, 135);
        ctx.stroke();

        return canvas;
    }
}
