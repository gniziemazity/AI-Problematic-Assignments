class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log(`${this.name} says: Meow!`);
    }

    drawHead(ctx) {
        ctx.fillStyle = this.furr;

        // head
        ctx.beginPath();
        ctx.arc(100, 110, 50, 0, Math.PI * 2);
        ctx.fill();

        // ears
        ctx.beginPath();
        ctx.moveTo(65, 70);
        ctx.lineTo(82, 25);
        ctx.lineTo(98, 70);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(102, 70);
        ctx.lineTo(118, 25);
        ctx.lineTo(135, 70);
        ctx.closePath();
        ctx.fill();
    }

    drawEyes(ctx) {
        // white part
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(80, 100, 12, 0, Math.PI * 2);
        ctx.arc(120, 100, 12, 0, Math.PI * 2);
        ctx.fill();

        // pupils
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(80, 100, 5, 0, Math.PI * 2);
        ctx.arc(120, 100, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    drawMouth(ctx) {
        // nose
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(100, 112);
        ctx.lineTo(94, 120);
        ctx.lineTo(106, 120);
        ctx.closePath();
        ctx.fill();

        // mouth lines
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(100, 120);
        ctx.lineTo(100, 128);

        ctx.moveTo(100, 128);
        ctx.quadraticCurveTo(92, 136, 86, 130);

        ctx.moveTo(100, 128);
        ctx.quadraticCurveTo(108, 136, 114, 130);
        ctx.stroke();
    }

    drawWhiskers(ctx) {
        ctx.beginPath();

        // left
        ctx.moveTo(45, 110);
        ctx.lineTo(80, 115);
        ctx.moveTo(45, 120);
        ctx.lineTo(80, 120);
        ctx.moveTo(45, 130);
        ctx.lineTo(80, 125);

        // right
        ctx.moveTo(155, 110);
        ctx.lineTo(120, 115);
        ctx.moveTo(155, 120);
        ctx.lineTo(120, 120);
        ctx.moveTo(155, 130);
        ctx.lineTo(120, 125);

        ctx.stroke();
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 200, 200);

        this.drawHead(ctx);
        this.drawEyes(ctx);     
        this.drawMouth(ctx);
        this.drawWhiskers(ctx);
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;

        const ctx = canvas.getContext("2d");

        
        this.draw(ctx);

        return canvas;
    }
}