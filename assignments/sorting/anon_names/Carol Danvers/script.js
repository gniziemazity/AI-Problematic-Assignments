// global variables
            const count = 50;
            const array = new Array(count);
            let speed = 100; // global variable controlling animation speed

            for (let i = 0; i < count; i++) {
                array[i] = Math.random(); // numbers between 0 and 1
            }

            const visualizer = document.getElementById("vis-123456");
            for (let i = 0; i < array.length; i++) {
                const bar = document.createElement("div");
                visualizer.appendChild(bar);
                bar.classList.add("bar");
                bar.style.height = array[i] * 100 + "%"; /* + here is
                    string concatenation because
                    the second item "%" is a string */
            }

            startSort();
            async function startSort() {
                await bubbleSort(array);
                rideMotorcycle();
            }

            function updateBars() {
                const bars = document.getElementsByClassName("bar");
                for (let i = 0; i < bars.length; i++) {
                    bars[i].style.height = array[i] * 100 + "%";
                }
            }

            async function bubbleSort(arr) {
                do {
                    var swapped = false;
                    for (let i = 1; i < arr.length; i++) {
                        if (arr[i - 1] > arr [i]) {
                            const aux = arr[i - 1];
                            arr[i -1] = arr[i];
                            arr[i] = aux;
                            swapped = true;
                            updateBars();
                            await new Promise(resolve => setTimeout(resolve, speed)); // changed "100" to variable "speed" from line 4 
                        }
                    }
                } while (swapped);
            }

            /* motorcycle animation*/
            async function rideMotorcycle() {

                const bike = document.getElementById("motorcycle");
                const bars = document.getElementsByClassName("bar");

                for (let i = 0; i < bars.length; i++) {

                    const barHeight = array[i] * 200; // match container height
                    const barWidth = 9; // width + margin

                    bike.style.left = i * barWidth + "px";
                    bike.style.bottom = barHeight + "px";

                    await new Promise(resolve =>
                        setTimeout(resolve, speed)
                    );
                }
            }