class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    // Method: what the cat says
    talk() {
        console.log(this.name + " says: Meow 🐱");
    }

    // Method: draw the cat on canvas
    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 300;

        const ctx = canvas.getContext("2d");

        // Face (circle)
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(150, 150, 80, 0, Math.PI * 2);
        ctx.fill();

 // Eyes (white part)
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(120, 140, 15, 0, Math.PI * 2);
ctx.arc(180, 140, 15, 0, Math.PI * 2);
ctx.fill();

// Pupils 
ctx.fillStyle = "black";

ctx.fillRect(117, 130, 6, 20); // left eye
ctx.fillRect(177, 130, 6, 20); // right eye

        // Pointy ears (triangles)
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.moveTo(100, 100);   // left ear
        ctx.lineTo(130, 40);
        ctx.lineTo(160, 100);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(140, 100);  // right ear
        ctx.lineTo(170, 40);
        ctx.lineTo(200, 100);
        ctx.fill();

        // Nose
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(150, 160, 5, 0, Math.PI * 2);
ctx.fill();

// Mouth
ctx.beginPath();
ctx.arc(140, 170, 10, 0, Math.PI);
ctx.arc(160, 170, 10, 0, Math.PI);
ctx.stroke();

        // Whiskers
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(90, 150);
ctx.lineTo(130, 150);

ctx.moveTo(90, 160);
ctx.lineTo(130, 155);

// right
ctx.moveTo(210, 150);
ctx.lineTo(170, 150);

ctx.moveTo(210, 160);
ctx.lineTo(170, 155);
        ctx.stroke();

        return canvas;
    }
}