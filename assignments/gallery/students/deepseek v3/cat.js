// Cat class - similar to Dog class (from external dog.js)
// Contains: constructor(name, age, fur, eyes), talk(), render()
// Draws a cat face with pointy ears and whiskers

class Cat {
    constructor(name, age, fur, eyes) {
        this.name = name;
        this.age = age;
        this.fur = fur;
        this.eyes = eyes;
    }

    // talk() method – prints a meow message (like dog.js's talk)
    talk() {
        console.log(`${this.name} says: Meow! 😺`);
        // Also show a small alert for fun (optional, but matches typical demo)
        // Using alert would be intrusive, so we only console + could show a brief tooltip? 
        // We'll keep it subtle, but the requirement only says "trigger the talk method".
    }

    // render() returns a <canvas> element with a cat drawing: pointy ears + whiskers
    render() {
        const canvas = document.createElement('canvas');
        canvas.width = 80;
        canvas.height = 80;
        const ctx = canvas.getContext('2d');

        // Clear background (transparent / light cream)
        ctx.fillStyle = '#fffaf0';
        ctx.fillRect(0, 0, 80, 80);

        // ---- Face (round, slightly flattened) ----
        ctx.beginPath();
        ctx.arc(40, 45, 28, 0, Math.PI * 2);
        ctx.fillStyle = '#f5d0a9';   // warm fur tone
        ctx.fill();
        ctx.strokeStyle = '#b97f44';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // ---- Pointy ears (two triangles) ----
        ctx.fillStyle = '#e5b07b';
        // left ear
        ctx.beginPath();
        ctx.moveTo(18, 28);
        ctx.lineTo(30, 12);
        ctx.lineTo(38, 26);
        ctx.fill();
        ctx.stroke();
        // right ear
        ctx.beginPath();
        ctx.moveTo(62, 28);
        ctx.lineTo(50, 12);
        ctx.lineTo(42, 26);
        ctx.fill();
        ctx.stroke();

        // inner ear pink details
        ctx.fillStyle = '#f7bc9a';
        ctx.beginPath();
        ctx.moveTo(22, 27);
        ctx.lineTo(30, 16);
        ctx.lineTo(35, 26);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(58, 27);
        ctx.lineTo(50, 16);
        ctx.lineTo(45, 26);
        ctx.fill();

        // ---- Eyes (big and expressive) ----
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(30, 42, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(50, 42, 5, 0, Math.PI * 2);
        ctx.fill();
        // iris (color from this.eyes)
        let eyeColor = this.eyes || 'green';
        if (eyeColor === 'brown') ctx.fillStyle = '#6b3e1c';
        else if (eyeColor === 'blue') ctx.fillStyle = '#4f8bc9';
        else if (eyeColor === 'amber') ctx.fillStyle = '#d98c2b';
        else if (eyeColor === 'hazel') ctx.fillStyle = '#9c6e3e';
        else if (eyeColor === 'copper') ctx.fillStyle = '#b87333';
        else ctx.fillStyle = '#3a7c3a'; // default green
        ctx.beginPath();
        ctx.arc(30, 42, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(50, 42, 3, 0, Math.PI * 2);
        ctx.fill();
        // pupils (vertical slit effect)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(30, 42, 1.8, 3.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(50, 42, 1.8, 3.5, 0, 0, Math.PI * 2);
        ctx.fill();
        // eye highlights
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(28, 40, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(48, 40, 1.2, 0, Math.PI * 2);
        ctx.fill();

        // ---- Nose & mouth ----
        ctx.fillStyle = '#e6836e';
        ctx.beginPath();
        ctx.ellipse(40, 52, 3, 2, 0, 0, Math.PI * 2);
        ctx.fill();
        // mouth (simple curves)
        ctx.beginPath();
        ctx.strokeStyle = '#7a4c2c';
        ctx.lineWidth = 1.2;
        ctx.moveTo(40, 54);
        ctx.quadraticCurveTo(36, 59, 32, 57);
        ctx.moveTo(40, 54);
        ctx.quadraticCurveTo(44, 59, 48, 57);
        ctx.stroke();

        // ---- WHISKERS (6 lines, 3 each side) ----
        ctx.beginPath();
        ctx.strokeStyle = '#8b6946';
        ctx.lineWidth = 1;
        // left whiskers
        ctx.moveTo(20, 48);
        ctx.lineTo(6, 44);
        ctx.moveTo(20, 51);
        ctx.lineTo(5, 51);
        ctx.moveTo(20, 54);
        ctx.lineTo(6, 58);
        // right whiskers
        ctx.moveTo(60, 48);
        ctx.lineTo(74, 44);
        ctx.moveTo(60, 51);
        ctx.lineTo(75, 51);
        ctx.moveTo(60, 54);
        ctx.lineTo(74, 58);
        ctx.stroke();

        // add small dots for fur texture (optional)
        ctx.fillStyle = '#c98f5e';
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.arc(30 + i * 3, 62, 0.8, 0, Math.PI * 2);
            ctx.fill();
        }

        return canvas;
    }
}

// (optional) make Cat globally available if needed
if (typeof window !== 'undefined') {
    window.Cat = Cat;
}