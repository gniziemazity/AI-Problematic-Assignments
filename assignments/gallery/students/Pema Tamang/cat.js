class Cat {

    talk() {
        console.log(this.name + " says Meow");
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;

        const ctx = canvas.getContext("2d");

        // face
        ctx.fillStyle = this.fur;
        ctx.beginPath();
        ctx.arc(40, 40, 25, 0, Math.PI * 2);
        ctx.fill();

        // ears
        ctx.beginPath();
        ctx.moveTo(20, 25);
        ctx.lineTo(30, 5);
        ctx.lineTo(40, 25);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(60, 25);
        ctx.lineTo(50, 5);
        ctx.lineTo(40, 25);
        ctx.fill();

        // whiskers
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(10, 40);
        ctx.lineTo(30, 40);

        ctx.moveTo(10, 45);
        ctx.lineTo(30, 43);

        ctx.moveTo(70, 40);
        ctx.lineTo(50, 40);

        ctx.moveTo(70, 45);
        ctx.lineTo(50, 43);
        ctx.stroke();

        return canvas;
    }
}