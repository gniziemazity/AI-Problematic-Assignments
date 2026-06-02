class Cat {
    constructor(x, y, cellWidth, cellHeight) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
    }

    talk() {
        console.log("Meow!");
        new Audio("meow.mp3").play();
    }

    draw(ctx) {
        this.ctx = ctx;

        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;

        // body cat
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(centerX, centerY, this.width / 2, 0, Math.PI * 2);
        ctx.fill();

        
        
        // cat ears
        ctx.fillStyle = "black";

        // left
        ctx.beginPath();
        ctx.ellipse(
            centerX - this.width / 4,   
            centerY - this.height / 2,  
            this.width / 8,              
            this.height / 8,             
            0,                           
            0,
            Math.PI * 2
        );
        ctx.fill();

        //right 
        ctx.beginPath();
        ctx.ellipse(
            centerX + this.width / 4,   
            centerY - this.height / 2,  
            this.width / 8,             
            this.height / 8,            
            0,                         
            0,
            Math.PI * 2
        );
        ctx.fill();


        // nose
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(centerX, centerY + this.height / 6, this.width / 12, 0, Math.PI * 2);
        ctx.fill();

        // whiskers
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX - this.width / 8, centerY + this.height / 6);
        ctx.lineTo(centerX - this.width / 3, centerY + this.height / 12);
        ctx.moveTo(centerX - this.width / 8, centerY + this.height / 6 + 5);
        ctx.lineTo(centerX - this.width / 3, centerY + this.height / 12 + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(centerX + this.width / 8, centerY + this.height / 6);
        ctx.lineTo(centerX + this.width / 3, centerY + this.height / 12);
        ctx.moveTo(centerX + this.width / 8, centerY + this.height / 6 + 5);
        ctx.lineTo(centerX + this.width / 3, centerY + this.height / 12 + 5);
        ctx.stroke();




        // eyes
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(centerX - this.width / 6, centerY - this.height / 8, this.width / 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX + this.width / 6, centerY - this.height / 8, this.width / 20, 0, Math.PI * 2);
        ctx.fill();




        // path for click
        this.path = new Path2D();
        this.path.arc(centerX, centerY, this.width / 2, 0, Math.PI * 2);
    }

    isClicked(x, y) {
        return this.ctx.isPointInPath(this.path, x, y);
    }
}