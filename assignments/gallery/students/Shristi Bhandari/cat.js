class Cat {

    constructor(name, age, furr, eyes){
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
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
        ctx.arc(50,50,30,0,Math.PI*2);
        ctx.fillStyle = this.furr;
        ctx.fill();

        // ears
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(40, 10);
        ctx.lineTo(50, 30);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(50, 30);
        ctx.lineTo(60, 10);
        ctx.lineTo(70, 30);
        ctx.fill();

        // whiskers
        ctx.beginPath();

        ctx.moveTo(20, 50);
        ctx.lineTo(40, 50);

        ctx.moveTo(20, 60);
        ctx.lineTo(40, 60);

        ctx.moveTo(60, 50);
        ctx.lineTo(80, 50);

        ctx.moveTo(60, 60);
        ctx.lineTo(80, 60);

        ctx.stroke();

        return canvas;
    }
}