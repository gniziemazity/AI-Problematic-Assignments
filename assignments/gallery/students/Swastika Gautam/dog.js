class Dog {
    constructor(name,age,furr,eyes){
        this.name = name; // dog name
        this.age = age; // dog age
        this.furr = furr; // furr color
        this.eyes = eyes; // eye color
    }
    talk(){
        console.log(this.name + " says woof!");
    }

    render(){
        const canvas=document.createElement("canvas");
        canvas.width=80;
        canvas.height=80;
        
        const ctx=canvas.getContext("2d");

        // head
        ctx.beginPath();
        ctx.arc(40,40,25,0,Math.PI*2);
        ctx.fillStyle=this.furr;
        ctx.fill();

        // eyes
        ctx.beginPath();
        ctx.arc(30,35,5,0,Math.PI*2);
        ctx.fillStyle=this.eyes;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(50,35,5,0,Math.PI*2);
        ctx.fill();

        return canvas;
        }
    }