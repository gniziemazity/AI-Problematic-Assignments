class Cat {
    constructor(name, age, fur, eyes, ears) {
        this.name = name;      // cat's name
        this.age = age;        // cat's age
        this.fur = fur;        // face/fur color
        this.eyes = eyes;      // eye color
        this.ears = ears;      // ear color
    }

    talk() {
        console.log(this.name + " says Meow!"); // cat talk method
    }

    render() {
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext("2d");

        //  Face 
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI * 2); 
        ctx.fillStyle = this.fur;
        ctx.fill();
        ctx.strokeStyle = "black"; 
        ctx.stroke();

        //  Ears 
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(40, 5);
        ctx.lineTo(50, 25);
        ctx.fillStyle = this.ears;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50, 25);
        ctx.lineTo(60, 5);
        ctx.lineTo(75, 25);
        ctx.fillStyle = this.ears;
        ctx.fill();
        ctx.stroke();

        // Left eye
        ctx.beginPath();
        ctx.arc(35, 45, 5, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();

        // Right eye
        ctx.beginPath();
        ctx.arc(65, 45, 5, 0, Math.PI * 2);
        ctx.fillStyle = this.eyes;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();

        // nose
        ctx.beginPath();
        ctx.arc(50, 55, 3, 0, Math.PI * 2); 
        ctx.fillStyle = "yellow";               
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();

        //  Whiskers 
        ctx.strokeStyle = "black"; // all whiskers black
        ctx.lineWidth = 3;

        // Left side (2 whiskers)
        ctx.beginPath();
        ctx.moveTo(10, 55); ctx.lineTo(35, 55); // whisker 1, angled slightly upward
        ctx.moveTo(10, 65); ctx.lineTo(35, 55); // whisker 2, angled slightly downward
        ctx.stroke();

        // Right side (2 whiskers)
        ctx.beginPath();
        ctx.moveTo(90, 55); ctx.lineTo(65, 55); 
        ctx.moveTo(90, 65); ctx.lineTo(65,55); 
        ctx.stroke();

        //  Mouth 
        ctx.beginPath();
        // nose
        ctx.moveTo(47, 58);  // left side of mouth
        ctx.lineTo(50, 62);  // bottom middle
        ctx.lineTo(53, 58);  // right side of mouth
        ctx.strokeStyle = "black";
        ctx.stroke();

        return canvas;
    }
}