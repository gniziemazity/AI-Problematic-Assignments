class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        // Triggers the text output
        console.log(`${this.name} says: Meow!`);
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext("2d");

        // Face
        ctx.beginPath();
        ctx.arc(50, 60, 25, 0, Math.PI * 2);
        ctx.fillStyle = this.furr;
        ctx.fill();

        // Pointy Ears (Requirement: look like a cat)
        ctx.beginPath();
        ctx.moveTo(30, 45); ctx.lineTo(20, 15); ctx.lineTo(45, 40); // Left
        ctx.moveTo(70, 45); ctx.lineTo(80, 15); ctx.lineTo(55, 40); // Right
        ctx.fillStyle = this.furr;
        ctx.fill();
        ctx.stroke();

        // Whiskers (Requirement: draw lines)
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.moveTo(35, 65); ctx.lineTo(5, 60);  // Left side
        ctx.moveTo(35, 70); ctx.lineTo(5, 75);
        ctx.moveTo(65, 65); ctx.lineTo(95, 60); // Right side
        ctx.moveTo(65, 70); ctx.lineTo(95, 75);
        ctx.stroke();

        return canvas;
    }
}