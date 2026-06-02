class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(this.name + " says: Meow");
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;

        const ctx = canvas.getContext("2d");

        // head
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI * 2);
        ctx.stroke();

        // ears (triangles)
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(40, 10);
        ctx.lineTo(50, 30);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50, 30);
        ctx.lineTo(60, 10);
        ctx.lineTo(70, 30);
        ctx.stroke();

        // eyes
        ctx.beginPath();
        ctx.arc(40, 50, 3, 0, Math.PI * 2);
        ctx.arc(60, 50, 3, 0, Math.PI * 2);
        ctx.fill();

        // whiskers
        ctx.beginPath();
        ctx.moveTo(20, 55);
        ctx.lineTo(40, 55);

        ctx.moveTo(20, 60);
        ctx.lineTo(40, 58);

        ctx.moveTo(80, 55);
        ctx.lineTo(60, 55);

        ctx.moveTo(80, 60);
        ctx.lineTo(60, 58);

        ctx.stroke();

        return canvas;
    }
}