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
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");

        // head //
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fill();

        // pointy ears //
        ctx.beginPath();
        ctx.moveTo(70, 60);
        ctx.lineTo(85, 30);
        ctx.lineTo(100, 60);
        ctx.moveTo(100, 60);
        ctx.lineTo(115, 30);
        ctx.lineTo(130, 60);
        ctx.closePath();
        ctx.fill();

        // eyes //
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(80, 90, 8, 0, Math.PI * 2);
        ctx.arc(120, 90, 8, 0, Math.PI * 2);
        ctx.fill();

        // mouth //
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(100, 115);
        ctx.lineTo(100, 120); 
        ctx.moveTo(100, 120);
        ctx.lineTo(95, 125); 
        ctx.moveTo(100, 120);
        ctx.lineTo(105, 125); 
        ctx.stroke();

        // whiskers //
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(75, 110); ctx.lineTo(45, 105);
        ctx.moveTo(75, 120); ctx.lineTo(45, 120);
        ctx.moveTo(125, 110); ctx.lineTo(155, 105);
        ctx.moveTo(125, 120); ctx.lineTo(155, 120);
        ctx.stroke();

        return canvas;
    }
}