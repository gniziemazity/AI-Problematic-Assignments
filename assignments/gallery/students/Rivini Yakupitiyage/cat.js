class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log(`${this.name} says: Meow!`);  
        
    }

    render() {
    const canvas = document.createElement("canvas");
    canvas.width = 50;
    canvas.height = 50;
    const ctx = canvas.getContext("2d");

    // Center
    const cx = 25;
    const cy = 25;

    // Face
    ctx.fillStyle = this.furr;
    ctx.beginPath();
    ctx.arc(cx, cy, 15, 0, 2 * Math.PI);
    ctx.fill();

    // Eyes
    ctx.fillStyle = this.eyes;
    ctx.beginPath();
    ctx.arc(cx - 7, cy - 5, 2, 0, 2 * Math.PI);
    ctx.arc(cx + 7, cy - 5, 2, 0, 2 * Math.PI);
    ctx.fill();

    // Nose  
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(cx, cy, 2, 0, 2 * Math.PI);
    ctx.fill();

    // Mouth 
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, cy + 4);            
    ctx.lineTo(cx - 2, cy + 7);        
    ctx.moveTo(cx, cy + 4);            
    ctx.lineTo(cx + 2, cy + 7);        
    ctx.stroke();


    // Ears
    ctx.fillStyle = this.furr;
    ctx.beginPath();
    ctx.moveTo(cx - 10, cy - 10);
    ctx.lineTo(cx - 5, cy - 20);
    ctx.lineTo(cx, cy - 10);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cx + 10, cy - 10);
    ctx.lineTo(cx + 5, cy - 20);
    ctx.lineTo(cx, cy - 10);
    ctx.fill();

    // Whiskers
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy);
    ctx.lineTo(cx - 5, cy);

    ctx.moveTo(cx - 15, cy + 3);
    ctx.lineTo(cx - 5, cy + 3);

    ctx.moveTo(cx + 5, cy);
    ctx.lineTo(cx + 15, cy);

    ctx.moveTo(cx + 5, cy + 3);
    ctx.lineTo(cx + 15, cy + 3);

    ctx.stroke();

    return canvas;
}
}