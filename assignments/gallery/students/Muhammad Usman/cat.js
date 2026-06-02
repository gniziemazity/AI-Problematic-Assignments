class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log(this.name + " says: Meow!");
    }

    draw(ctx, blink) {
        ctx.clearRect(0, 0, 200, 200);

        // head
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(100, 110, 50, 0, Math.PI * 2);
        ctx.fill();

        // left ear
        ctx.beginPath();
        ctx.moveTo(65, 70);
        ctx.lineTo(82, 25);
        ctx.lineTo(98, 70);
        ctx.closePath();
        ctx.fill();

        // right ear
        ctx.beginPath();
        ctx.moveTo(102, 70);
        ctx.lineTo(118, 25);
        ctx.lineTo(135, 70);
        ctx.closePath();
        ctx.fill();

        // eyes
        if (!blink) {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(80, 100, 12, 0, Math.PI * 2);
            ctx.arc(120, 100, 12, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = this.eyes;
            ctx.beginPath();
            ctx.arc(80, 100, 5, 0, Math.PI * 2);
            ctx.arc(120, 100, 5, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(68, 100);
            ctx.lineTo(92, 100);
            ctx.moveTo(108, 100);
            ctx.lineTo(132, 100);
            ctx.stroke();
        }

        // nose
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(100, 112);
        ctx.lineTo(94, 120);
        ctx.lineTo(106, 120);
        ctx.closePath();
        ctx.fill();

        // mouth
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

        // whiskers
        ctx.beginPath();
        ctx.moveTo(45, 110);
        ctx.lineTo(80, 115);

        ctx.moveTo(45, 120);
        ctx.lineTo(80, 120);

        ctx.moveTo(45, 130);
        ctx.lineTo(80, 125);

        ctx.moveTo(155, 110);
        ctx.lineTo(120, 115);

        ctx.moveTo(155, 120);
        ctx.lineTo(120, 120);

        ctx.moveTo(155, 130);
        ctx.lineTo(120, 125);
        ctx.stroke();
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;

        const ctx = canvas.getContext("2d");
        let blink = false;

        this.draw(ctx, blink);

        setInterval(() => {
            blink = !blink;
            this.draw(ctx, blink);
        }, 800);

        return canvas;
    }
}