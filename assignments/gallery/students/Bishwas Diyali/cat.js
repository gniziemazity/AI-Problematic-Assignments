class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        alert(this.name + " says: Meow!");
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 80;
        canvas.height = 80;

        const ctx = canvas.getContext("2d");

        // head
        ctx.beginPath();
        ctx.arc(40, 40, 25, 0, Math.PI * 2);
        ctx.fillStyle = this.furr;
        ctx.fill();

        // ears (triangles)
        ctx.beginPath();
        ctx.moveTo(20, 25);
        ctx.lineTo(30, 5);
        ctx.lineTo(40, 25);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(40, 25);
        ctx.lineTo(50, 5);
        ctx.lineTo(60, 25);
        ctx.fill();

        // eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(30, 40, 4, 0, Math.PI * 2);
        ctx.arc(50, 40, 4, 0, Math.PI * 2);
        ctx.fill();

        // whiskers (lines)
        ctx.beginPath();
        ctx.moveTo(10, 40);
        ctx.lineTo(30, 40);

        ctx.moveTo(10, 45);
        ctx.lineTo(30, 45);

        ctx.moveTo(50, 40);
        ctx.lineTo(70, 40);

        ctx.moveTo(50, 45);
        ctx.lineTo(70, 45);

        ctx.stroke();

        return canvas;
    }
}