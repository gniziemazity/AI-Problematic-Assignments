let speed = 100;

const slider = document.getElementById("speedSlider");
const barsContainer = document.getElementById("bars");

slider.oninput = function(){
    speed = this.value;
}

let values = [];

// create random bars
function createBars(){

    barsContainer.innerHTML="";
    values=[];

    for(let i=0;i<40;i++){

        let value = Math.floor(Math.random()*250)+20;

        values.push(value);

        let bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=value+"px";

        barsContainer.appendChild(bar);
    }
}

createBars();

async function startSorting(){

    let bars=document.getElementsByClassName("bar");

    for(let i=0;i<values.length;i++){

        for(let j=0;j<values.length-i-1;j++){

            if(values[j]>values[j+1]){

                let temp=values[j];
                values[j]=values[j+1];
                values[j+1]=temp;

                bars[j].style.height=values[j]+"px";
                bars[j+1].style.height=values[j+1]+"px";

                await sleep(speed);
            }
        }
    }

    moveMotorcycle();
}

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function moveMotorcycle(){

    let bars=document.getElementsByClassName("bar");
    let bike=document.getElementById("bike");

    let left=0;

    for(let i=0;i<bars.length;i++){

        let height=bars[i].offsetHeight;

        bike.style.left=left+"px";
        bike.style.bottom=height+"px";

        left+=19;

        await sleep(speed);
    }
}