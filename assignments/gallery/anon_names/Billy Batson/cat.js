class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log(this.name + " says Meow!");
        document.getElementById("catSound").play();
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 60;
        canvas.height = 60;

        const ctx = canvas.getContext("2d");

        // face
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(30, 30, 20, 0, Math.PI * 2);
        ctx.fill();

        // eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(22, 25, 3, 0, Math.PI * 2);
        ctx.arc(38, 25, 3, 0, Math.PI * 2);
        ctx.fill();

        // ears (pointy)
        ctx.beginPath();
        ctx.moveTo(15, 15);
        ctx.lineTo(25, 5);
        ctx.lineTo(30, 15);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(45, 15);
        ctx.lineTo(35, 5);
        ctx.lineTo(30, 15);
        ctx.fill();

        // whiskers
        ctx.beginPath();
        ctx.moveTo(10, 30);
        ctx.lineTo(25, 30);
        ctx.moveTo(10, 35);
        ctx.lineTo(25, 33);

        ctx.moveTo(50, 30);
        ctx.lineTo(35, 30);
        ctx.moveTo(50, 35);
        ctx.lineTo(35, 33);
        ctx.stroke();

        return canvas;
    }
}
