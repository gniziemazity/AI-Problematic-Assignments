class Dog {
    constructor(name, age, furr, eyes) {
        this.name = name;
        this.age = age;
        this.furr = furr;
        this.eyes = eyes;
        this.soundFile = "sounds/dog.mp3";
    }

    talk() {
        console.log(`${this.name} says: Woof!`);
        alert(`${this.name} says: Woof!`);
    }

    playSound() {
        const audio = new Audio(this.soundFile);
        audio.play().catch(function(err) {
            console.error("Could not play sound:", err);
        });
    }

    draw(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Head
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.arc(50, 48, 28, 0, Math.PI * 2);
        ctx.fill();

        // Floppy ears
        ctx.fillStyle = this.furr;
        ctx.beginPath();
        ctx.ellipse(22, 48, 10, 22, 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(78, 48, 10, 22, -0.3, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(40, 42, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(60, 42, 4, 0, Math.PI * 2);
        ctx.fill();

        // Nose
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(50, 54, 5, 0, Math.PI * 2);
        ctx.fill();

        // Mouth
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(44, 60, 7, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(56, 60, 7, 0, Math.PI);
        ctx.stroke();
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        canvas.title = `${this.name}, age ${this.age}`;
        const ctx = canvas.getContext("2d");
        this.draw(ctx);
        canvas.onmousedown = () => {
            this.talk();
            this.playSound();
        };
        return canvas;
    }
}
