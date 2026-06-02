class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name; // cat name
        this.age = age; // cat age
        this.furr = furr; // fur color
        this.eyes = eyes; // eye color
    }

    talk() {
        console.log(this.name + " says: Meow!");
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;

        const ctx = canvas.getContext("2d");

        // head
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI * 2);
        ctx.fillStyle = this.furr;
        ctx.fill();

        // left ear (triangle)
        ctx.beginPath();
        ctx.moveTo(30,30); // start
        ctx.lineTo(40,10); // top point
        ctx.lineTo(50,30); // end
        ctx.lineTo(30,30); // close triangle
        ctx.stroke();

        // right ear
        ctx.beginPath();
        ctx.moveTo(70,30);
        ctx.lineTo(60,10);
        ctx.lineTo(50,30);
        ctx.lineTo(70,30);
        ctx.stroke();

        // whiskers left
        ctx.beginPath();
        ctx.moveTo(20,50);
        ctx.lineTo(40,50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20,55);
        ctx.lineTo(40,53);
        ctx.stroke();

        // whiskers right
        ctx.beginPath();
        ctx.moveTo(60,50);
        ctx.lineTo(80,50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60,53);
        ctx.lineTo(80,55);
        ctx.stroke();

        return canvas;
    }
}