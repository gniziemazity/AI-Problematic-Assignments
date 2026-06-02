class Cat {
    constructor(name, age, color, eyes) {
        this.name = name;
        this.age = age;
        this.furr = color;
        this.eyes = eyes;
    }

    talk() {
        console.log(this.name + " says Meow!");
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 250;
        canvas.height = 250;
        const ctx = canvas.getContext("2d");

        // head
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(125, 125, 60, 0, 2*Math.PI);
        ctx.fill();

        // ears (outer)
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.moveTo(70, 70);
        ctx.lineTo(100, 20);
        ctx.lineTo(120, 70);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(130, 70);
        ctx.lineTo(150, 20);
        ctx.lineTo(180, 70);
        ctx.fill();

        // ears (inner pink)
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(85, 65);
        ctx.lineTo(100, 30);
        ctx.lineTo(115, 65);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(135, 65);
        ctx.lineTo(150, 30);
        ctx.lineTo(165, 65);
        ctx.fill();

        // eyes
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(100, 120, 10, 0, 2*Math.PI);
        ctx.arc(150, 120, 10, 0, 2*Math.PI);
        ctx.fill();

        // pupils
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(100, 120, 5, 0, 2*Math.PI);
        ctx.arc(150, 120, 5, 0, 2*Math.PI);
        ctx.fill();

        // whiskers
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(60, 125); ctx.lineTo(95, 125);
        ctx.moveTo(60, 135); ctx.lineTo(95, 130);
        ctx.moveTo(155, 125); ctx.lineTo(190, 125);
        ctx.moveTo(155, 135); ctx.lineTo(190, 130);
        ctx.stroke();

        // mouth (smile)
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(125, 145, 15, 0, Math.PI, false); // half circle
        ctx.stroke();

        // optional tail
        ctx.strokeStyle = this.furr;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(50, 180);
        ctx.quadraticCurveTo(20, 150, 50, 130);
        ctx.stroke();

        return canvas;
    }
}