        // global variables
            const count = 50;
            const array = new Array(count);

            // controls animation speed. Smaller = faster
            let var_speed =100;
            const speedSlider = document.getElementById("speedSlider");
            const speedValue = document.getElementById("speedValue");
            var_speed = Number(speedSlider.value);
            speedValue.textContent = var_speed;
            speedSlider.onchange = function () {
                var_speed = Number(this.value);
                speedValue.textContent = var_speed;
            };

            for (let i =0; i < count; i++) {
                 array[i] = Math.random(); // numbers between 0 and 1
            }

           

            const visualizer = document.getElementById("vis-123456");
            for (let i = 0; i < array.length; i++) {
                const bar = document.createElement("div");
                visualizer.appendChild(bar);
                bar.classList.add("bar");
                bar.style.height = array[i] * 100 + "%"; /* + here isstring concatentation becausethe second item "%" is a string */
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
                    for (let i = 1; i <arr.length; i++) {
                        if (arr[i - 1] > arr[i]) {
                            const aux = arr[i - 1];
                            arr[i - 1] = arr[i];
                            arr[i] = aux;
                            swapped = true;
                            updateBars();
                            await new Promise(resolve => setTimeout(resolve,  var_speed));
                }
            }
        } while (swapped);
    }