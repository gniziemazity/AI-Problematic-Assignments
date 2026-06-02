class Cat {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
    }

    talk() {
        console.log(`${this.name} says: Meow!`);
        // Play the meow audio file
        const audio = new Audio('meow.mp3');
        audio.play().catch(err => console.error("Audio playback failed:", err));
    }

    render() {
        // Create a 100x100 canvas element for the grid cell
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        canvas.style.border = "1px solid #ccc";
        canvas.style.cursor = "pointer";
        const ctx = canvas.getContext('2d');

        // Draw Head (Circle)
        ctx.beginPath();
        ctx.arc(50, 55, 30, 0, 2 * Math.PI);
        ctx.fillStyle = this.furr;
        ctx.fill();
        ctx.stroke();

        // Draw Left Pointy Ear (Triangle)
        ctx.beginPath();
        ctx.moveTo(25, 35); // Start on head
        ctx.lineTo(15, 10); // Tip of ear
        ctx.lineTo(40, 30); // Back to head
        ctx.closePath();
        ctx.fillStyle = this.furr;
        ctx.fill();
        ctx.stroke();

        // Draw Right Pointy Ear (Triangle)
        ctx.beginPath();
        ctx.moveTo(75, 35); // Start on head
        ctx.lineTo(85, 10); // Tip of ear
        ctx.lineTo(60, 30); // Back to head
        ctx.closePath();
        ctx.fillStyle = this.furr;
        ctx.fill();
        ctx.stroke();

        // Draw Eyes (Circles)
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(40, 50, 5, 0, 2 * Math.PI); // Left eye
        ctx.arc(60, 50, 5, 0, 2 * Math.PI); // Right eye
        ctx.fill();

        // Draw Whiskers (Lines)
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        
        // Left Whiskers
        ctx.beginPath();
        ctx.moveTo(35, 60); ctx.lineTo(10, 55);
        ctx.moveTo(35, 63); ctx.lineTo(8, 63);
        ctx.moveTo(35, 66); ctx.lineTo(10, 71);
        
        // Right Whiskers
        ctx.moveTo(65, 60); ctx.lineTo(90, 55);
        ctx.moveTo(65, 63); ctx.lineTo(92, 63);
        ctx.moveTo(65, 66); ctx.lineTo(90, 71);
        ctx.stroke();

        // Draw Text Label for Name
        ctx.fillStyle = "#000000";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.name, 50, 95);

        return canvas;
    }
}