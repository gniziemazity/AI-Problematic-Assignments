class Cat {
    constructor(name, age, fur, eyes) {
        this.name = name;
        this.age = age;
        this.fur = "white";   
        this.eyes = "black";  
    }

    talk() {
        console.log(`${this.name} says: Meow!`);
        document.getElementById("catSound").play();
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");
        this.draw(ctx);
        return canvas;
    }

    draw(ctx) {
       
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fillStyle = this.fur;
        ctx.fill();
        ctx.stroke();

        
        ctx.beginPath();
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 20);
        ctx.lineTo(100, 60);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        
        ctx.beginPath();
        ctx.moveTo(140, 60);
        ctx.lineTo(120, 20);
        ctx.lineTo(100, 60);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        
        ctx.beginPath();
        ctx.arc(80, 100, 8, 0, Math.PI * 2);
        ctx.arc(120, 100, 8, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes;
        ctx.fill();

       
        ctx.beginPath();
        ctx.arc(100, 120, 5, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();

        
        ctx.beginPath();
        ctx.moveTo(50, 110);
        ctx.lineTo(20, 110);
        ctx.moveTo(50, 120);
        ctx.lineTo(20, 130);
        ctx.moveTo(150, 110);
        ctx.lineTo(180, 110);
        ctx.moveTo(150, 120);
        ctx.lineTo(180, 130);
        ctx.stroke();
    }
}