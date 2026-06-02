class Dog {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
        this.kind = "dog";
    }

    talk() {
        return `${this.name} says: Woof!`;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 120, 120);

        // Body
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.ellipse(60, 72, 38, 25, 0, 0, Math.PI * 2);
        ctx.fill();

        // Head
        ctx.beginPath();
        ctx.arc(60, 42, 26, 0, Math.PI * 2);
        ctx.fill();

        // Floppy ears
        ctx.fillStyle = shadeColor(this.furr, -25);
        ctx.beginPath();
        ctx.ellipse(34, 42, 10, 22, 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(86, 42, 10, 22, -0.3, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(50, 37, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(70, 37, 4, 0, Math.PI * 2);
        ctx.fill();

        // Snout and nose
        ctx.fillStyle = "#f2d2a9";
        ctx.beginPath();
        ctx.ellipse(60, 50, 13, 9, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(60, 46, 4, 0, Math.PI * 2);
        ctx.fill();

        // Tail
        ctx.strokeStyle = this.furr;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(94, 66);
        ctx.quadraticCurveTo(112, 48, 104, 34);
        ctx.stroke();
    }

    render(size = 120) {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        this.draw(ctx);
        return canvas;
    }
}

function shadeColor(color, percent) {
    const hex = color.replace("#", "");
    if (hex.length !== 6) {
        return color;
    }
    const number = parseInt(hex, 16);
    let r = (number >> 16) + percent;
    let g = ((number >> 8) & 0x00ff) + percent;
    let b = (number & 0x0000ff) + percent;
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return `#${(b | (g << 8) | (r << 16)).toString(16).padStart(6, "0")}`;
}
