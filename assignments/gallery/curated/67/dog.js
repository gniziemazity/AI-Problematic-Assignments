class Dog {
    constructor(x, y, cellWidth, cellHeight) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
    }

    talk() {
        console.log("Bark!");
        new Audio("bark.mp3").play();
    }

    draw(ctx) {
        this.ctx = ctx;

        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;

        // body
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        // eyes
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(centerX - this.width / 4, centerY - this.height / 4, this.width / 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(centerX + this.width / 4, centerY - this.height / 4, this.width / 10, 0, Math.PI * 2);
        ctx.fill();

        
        // ears
        ctx.fillStyle = "brown";
        ctx.beginPath();
        //left ear
        ctx.ellipse(
            this.x - this.width / 8,          // X
            centerY - this.height / 4,        // Y
            this.width / 8,                    //width ear
            this.height / 3,                   // height
            Math.PI / 8,                       // rotation
            0,
            Math.PI * 2
        );
        ctx.fill();

        //right ear
        ctx.beginPath();
        ctx.ellipse(
            this.x + this.width + this.width / 8, 
            centerY - this.height / 4,             
            this.width / 8,                        
            this.height / 3,                       
            -Math.PI / 8,// rotation                          
            0,
            Math.PI * 2
        );
        ctx.fill();

        // nose
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + this.height / 4, this.width / 12, this.height / 20, 0, 0, Math.PI * 2);
        ctx.fill();

        // mouth
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY + this.height / 4 + this.height / 20, this.width / 8, 0, Math.PI);
        ctx.stroke();

        // path for click
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width, this.height);
    }

    isClicked(x, y) {
        return this.ctx.isPointInPath(this.path, x, y);
    }
}