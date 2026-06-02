class Cat {

constructor(name, age, furr, eyes) {
this.name = name;
this.age = age;
this.furr = furr;
this.eyes = eyes;
}

talk() {
console.log(this.name + " says: Meow!");
}

render(size = 200) {

const canvas = document.createElement("canvas");
canvas.width = size;
canvas.height = size;

const ctx = canvas.getContext("2d");

const scale = size / 200;
ctx.scale(scale, scale);


// HEAD
ctx.beginPath();
ctx.arc(100,100,50,0,Math.PI*2);
ctx.fillStyle = this.furr || "orange";
ctx.fill();
ctx.stroke();


// LEFT EAR POINTY
ctx.beginPath();
ctx.moveTo(60,60);
ctx.lineTo(80,20);
ctx.lineTo(100,60);
ctx.stroke();


// RIGHT EAR POINTY
ctx.beginPath();
ctx.moveTo(100,60);
ctx.lineTo(120,20);
ctx.lineTo(140,60);
ctx.stroke();


// EYES
ctx.beginPath();
ctx.arc(80,100,6,0,Math.PI*2);
ctx.arc(120,100,6,0,Math.PI*2);
ctx.fillStyle = this.eyes || "black";
ctx.fill();


// NOSE
ctx.beginPath();
ctx.moveTo(100,110);
ctx.lineTo(95,120);
ctx.lineTo(105,120);
ctx.closePath();
ctx.fillStyle="pink";
ctx.fill();


// WHISKERS
ctx.beginPath();

ctx.moveTo(60,115);
ctx.lineTo(30,110);

ctx.moveTo(60,120);
ctx.lineTo(30,120);

ctx.moveTo(60,125);
ctx.lineTo(30,130);

ctx.moveTo(140,115);
ctx.lineTo(170,110);

ctx.moveTo(140,120);
ctx.lineTo(170,120);

ctx.moveTo(140,125);
ctx.lineTo(170,130);

ctx.stroke();

return canvas;

}

}