// global variables
            const count = 50;
            const array = new Array(count);

            let speed = 50; // required variable as per question

            for (let i = 0; i < count; i++) {
                array[i] = Math.random(); // numbers between 0 and 1
            }

            const visualizer = document.getElementById("vis-654321");
            for (let i = 0; i < array.length; i++) {
                const bar = document.createElement("div");
                visualizer.appendChild(bar);
                bar.classList.add("bar");
                bar.style.height = array[i] * 100 + "%"; /* + here is 
                    string concatenation because 
                    the second item "%" is a string */
            }
            
            bubbleSort(array);

            function updateBars() {
                const bars = document.getElementsByClassName("bar");
                for (let i = 0; i < bars.length; i++) {
                    bars[i].style.height = array[i] * 100 + "%";
                }
            }
            
            function changeSpeed(value){
                speed = value;
            }

            async function bubbleSort(arr) {
                do {
                    var swapped = false;
                    for (let i = 1; i < arr.length; i++) {
                        if (arr[i - 1] > arr[i]) {
                            const aux = arr[i - 1];
                            arr[i - 1] = arr[i];
                            arr[i] = aux;
                            swapped = true;
                            updateBars();
                            await new Promise(resolve => setTimeout(resolve, speed));
                        }
                    }
                } while (swapped);

                showMotorcycle();  //  motorcycle will go after this
            }

function showMotorcycle() {

    const bike = document.createElement("div");
    bike.innerHTML = "🏍️";

    bike.style.position = "absolute";
    bike.style.left = "0px";
    bike.style.top = "-35px";  // above bars
    bike.style.fontSize = "31px";

    visualizer.appendChild(bike);

    let position = 0;

    const move = setInterval(() => {
        position += 5;
        bike.style.left = position + "px";

        if (position > visualizer.offsetWidth) {
            clearInterval(move);
        }
    }, speed);
}