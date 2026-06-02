class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log("Meow! I'm" + this.name + "🐱"); 
    }

    render(size = 150) {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext("2d");
        
        // furr/face
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, 2 * Math.PI );
        ctx.fillStyle = this.furr;
        ctx.fill();

        // eyes 
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(40, 45, 4, 0, 2 * Math.PI);
        ctx.arc(60, 45, 4, 0, 2 * Math.PI);
        ctx.fill();

        // ears 
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(38, 8);
        ctx.lineTo(48, 30);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(70, 30);
        ctx.lineTo(62, 8);
        ctx.lineTo(52, 30);
        ctx.closePath();
        ctx.fill();

        // nose 
        ctx.beginPath();
        ctx.moveTo(50, 55);
        ctx.lineTo(46, 60);
        ctx.lineTo(54, 60);
        ctx.closePath();
        ctx.fill();

        //whiskers 
        ctx.beginPath();

        //for left
        ctx.moveTo(46, 57); ctx.lineTo(20, 52);
        ctx.moveTo(46, 60); ctx.lineTo(20, 60);
        ctx.moveTo(46, 63); ctx.lineTo(20, 68);

        //for right
        ctx.moveTo(54, 57); ctx.lineTo(80, 52);
        ctx.moveTo(54, 60); ctx.lineTo(80, 60);
        ctx.moveTo(54, 63); ctx.lineTo(80, 68);

        ctx.stroke();
       
        //cat name 
       ctx.fillStyle = "Black";
       ctx.font = "bold 10px Arial";
       ctx.textAlign = "center";
       ctx.fillText(this.name, 50, 110);

        return canvas;
    }
}