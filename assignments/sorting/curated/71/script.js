var var_speed = 100;

var slider = document.getElementById("speedSlider");

slider.oninput = function(){
    var_speed = this.value;
}

function generateArray(){

    let container = document.getElementById("array-container");
    container.innerHTML = "";

    for(let i=0;i<20;i++){

        let value = Math.floor(Math.random()*200)+20;

        let bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = value + "px";

        container.appendChild(bar);
    }
}