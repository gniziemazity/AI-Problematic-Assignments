class Cat extends Dog {
    constructor(name, age, furr, eyes) {
        super(name, age, furr, eyes);
        this.kind = "cat";
    }

    talk() {
        return `${this.name} says: Meow!`;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 120, 120);

        // Body
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.ellipse(60, 74, 34, 24, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pointy ears
        ctx.beginPath();
        ctx.moveTo(38, 31);
        ctx.lineTo(47, 8);
        ctx.lineTo(56, 32);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(64, 32);
        ctx.lineTo(73, 8);
        ctx.lineTo(82, 31);
        ctx.closePath();
        ctx.fill();

        // Inner ears
        ctx.fillStyle = "#f3a8b8";
        ctx.beginPath();
        ctx.moveTo(43, 28);
        ctx.lineTo(47, 17);
        ctx.lineTo(52, 29);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(68, 29);
        ctx.lineTo(73, 17);
        ctx.lineTo(77, 28);
        ctx.closePath();
        ctx.fill();

        // Head
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(60, 42, 25, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.ellipse(50, 38, 4, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(70, 38, 4, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Nose and mouth
        ctx.fillStyle = "#f3a8b8";
        ctx.beginPath();
        ctx.moveTo(60, 46);
        ctx.lineTo(55, 52);
        ctx.lineTo(65, 52);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(60, 52);
        ctx.lineTo(60, 57);
        ctx.stroke();

        // Whiskers drawn with lines
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(55, 52);
        ctx.lineTo(31, 46);
        ctx.moveTo(55, 55);
        ctx.lineTo(30, 55);
        ctx.moveTo(55, 58);
        ctx.lineTo(32, 65);
        ctx.moveTo(65, 52);
        ctx.lineTo(89, 46);
        ctx.moveTo(65, 55);
        ctx.lineTo(90, 55);
        ctx.moveTo(65, 58);
        ctx.lineTo(88, 65);
        ctx.stroke();

        // Curved tail
        ctx.strokeStyle = this.furr;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(92, 72);
        ctx.quadraticCurveTo(110, 50, 91, 31);
        ctx.stroke();
    }
}
