class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr; // fur color
        this.eyes = eyes; // eye color
    }

    talk() {
        console.log("Meow!  My name is " + this.name + " 🐱");
    }

    render(size = 150) {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        //Face
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, 2 * Math.PI); // head circle
        ctx.fillStyle = this.furr;
        ctx.fill();

        //Outline so head is visible
        ctx.strokeStyle = "black";   // outline color
        ctx.lineWidth = 2;
        ctx.stroke();

        //Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(40, 45, 5, 0, 2 * Math.PI); // left eye
        ctx.arc(60, 45, 5, 0, 2 * Math.PI); // right eye
        ctx.fill();

    

        //Ears (slightly taller)
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(38, 5);
        ctx.lineTo(48, 30);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(70, 30);
        ctx.lineTo(62, 5);
        ctx.lineTo(52, 30);
        ctx.closePath();
        ctx.fill();

        // Nose (small triangle)
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(50, 55);
        ctx.lineTo(46, 60);
        ctx.lineTo(54, 60);
        ctx.closePath();
        ctx.fill();

        //Whiskers
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        // left
        ctx.moveTo(46, 57); ctx.lineTo(20, 52);
        ctx.moveTo(46, 60); ctx.lineTo(20, 60);
        ctx.moveTo(46, 63); ctx.lineTo(20, 68);
        // right
        ctx.moveTo(54, 57); ctx.lineTo(80, 52);
        ctx.moveTo(54, 60); ctx.lineTo(80, 60);
        ctx.moveTo(54, 63); ctx.lineTo(80, 68);
        ctx.stroke();

        //Name (slightly lower)
        ctx.fillStyle = "darkblue";
        ctx.font = "bold 10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(this.name, 50, 115);

        return canvas;
    }
}