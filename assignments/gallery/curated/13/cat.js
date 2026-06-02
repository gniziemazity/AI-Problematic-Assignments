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

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext("2d");

        // Body
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.ellipse(50, 65, 25, 20, 0, 0, 2 * Math.PI);
        ctx.fill();

        // Head
        ctx.beginPath();
        ctx.ellipse(50, 35, 18, 18, 0, 0, 2 * Math.PI);
        ctx.fill();

        // Ears
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.moveTo(38, 25); ctx.lineTo(30, 10); ctx.lineTo(46, 25); ctx.fill();
        ctx.beginPath();
        ctx.moveTo(62, 25); ctx.lineTo(70, 10); ctx.lineTo(54, 25); ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(42, 35, 3, 0, 2 * Math.PI);
        ctx.arc(58, 35, 3, 0, 2 * Math.PI);
        ctx.fill();

        // Nose
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.arc(50, 42, 2, 0, 2 * Math.PI);
        ctx.fill();

        // Mouth
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(50, 44); ctx.lineTo(50, 48);
        ctx.moveTo(50, 48); ctx.lineTo(46, 50);
        ctx.moveTo(50, 48); ctx.lineTo(54, 50);
        ctx.stroke();

        // Whiskers
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(35, 42); ctx.lineTo(10, 38);
        ctx.moveTo(35, 45); ctx.lineTo(10, 45);
        ctx.moveTo(35, 48); ctx.lineTo(10, 52);
        ctx.moveTo(65, 42); ctx.lineTo(90, 38);
        ctx.moveTo(65, 45); ctx.lineTo(90, 45);
        ctx.moveTo(65, 48); ctx.lineTo(90, 52);
        ctx.stroke();

        // Tail
        ctx.strokeStyle = this.furr;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(75, 60);
        ctx.quadraticCurveTo(90, 50, 75, 40);
        ctx.stroke();

        return canvas;
    }
}