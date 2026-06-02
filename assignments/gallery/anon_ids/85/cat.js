class Cat extends Dog {
    constructor(name, age, furr, eyes) {
        super(name, age, furr, eyes);
        this.soundFile = "sounds/cat.mp3";
    }

    talk() {
        console.log(`${this.name} says: Meow!`);
        alert(`${this.name} says: Meow!`);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Face
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(50, 52, 28, 0, Math.PI * 2);
        ctx.fill();

        // Pointy ears
        ctx.beginPath();
        ctx.moveTo(27, 35);
        ctx.lineTo(35, 10);
        ctx.lineTo(45, 31);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(55, 31);
        ctx.lineTo(65, 10);
        ctx.lineTo(73, 35);
        ctx.closePath();
        ctx.fill();

        // Inner ears
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(34, 31);
        ctx.lineTo(36, 18);
        ctx.lineTo(41, 32);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(59, 32);
        ctx.lineTo(64, 18);
        ctx.lineTo(66, 31);
        ctx.closePath();
        ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(40, 47, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(60, 47, 4, 0, Math.PI * 2);
        ctx.fill();

        // Nose
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(46, 56);
        ctx.lineTo(54, 56);
        ctx.lineTo(50, 61);
        ctx.closePath();
        ctx.fill();

        // Mouth
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 61);
        ctx.lineTo(50, 66);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(45, 66, 5, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(55, 66, 5, 0, Math.PI);
        ctx.stroke();

        // Whiskers
        ctx.beginPath();
        ctx.moveTo(42, 58);
        ctx.lineTo(16, 51);
        ctx.moveTo(42, 62);
        ctx.lineTo(15, 62);
        ctx.moveTo(42, 66);
        ctx.lineTo(16, 73);
        ctx.moveTo(58, 58);
        ctx.lineTo(84, 51);
        ctx.moveTo(58, 62);
        ctx.lineTo(85, 62);
        ctx.moveTo(58, 66);
        ctx.lineTo(84, 73);
        ctx.stroke();
    }
}
