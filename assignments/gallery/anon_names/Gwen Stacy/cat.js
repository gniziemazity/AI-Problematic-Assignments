class Cat {
    constructor(name, age, fur, eyes) {
        this.name = name;
        this.age = age;
        this.fur = fur;
        this.eyes = eyes;
        this.sounds = ["meow1.mp3", "meow2.mp3"];
    }

    talk() {
        console.log(`${this.name} says Meow!`);
        const soundFile = this.sounds[Math.floor(Math.random() * this.sounds.length)];
        const audio = new Audio(soundFile);
        audio.play().catch(err => console.error(err));
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");

        // body
        ctx.fillStyle = this.fur;
        ctx.beginPath();
        ctx.arc(100, 120, 50, 0, Math.PI * 2);
        ctx.fill();

        // head
        ctx.beginPath();
        ctx.arc(100, 70, 35, 0, Math.PI * 2);
        ctx.fill();

        // pointy ears
        ctx.beginPath();
        ctx.moveTo(70, 50);
        ctx.lineTo(85, 20);
        ctx.lineTo(100, 50);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(130, 50);
        ctx.lineTo(115, 20);
        ctx.lineTo(100, 50);
        ctx.fill();

        // eyes
        ctx.fillStyle = this.eyes;
        ctx.beginPath();
        ctx.arc(85, 65, 5, 0, Math.PI * 2);
        ctx.arc(115, 65, 5, 0, Math.PI * 2);
        ctx.fill();

        // nose
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.arc(100, 80, 4, 0, Math.PI * 2);
        ctx.fill();

        // whiskers
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(85, 80); ctx.lineTo(55, 75);
        ctx.moveTo(85, 85); ctx.lineTo(55, 85);
        ctx.moveTo(85, 90); ctx.lineTo(55, 95);
        ctx.moveTo(115, 80); ctx.lineTo(145, 75);
        ctx.moveTo(115, 85); ctx.lineTo(145, 85);
        ctx.moveTo(115, 90); ctx.lineTo(145, 95);
        ctx.stroke();

        return canvas;
    }
}