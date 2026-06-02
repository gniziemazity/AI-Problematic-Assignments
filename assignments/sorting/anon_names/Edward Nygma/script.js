//Task1: Removing and inserting a javascript file. This file contains the relevant script for assignment 3//


// global variables
            const count = 50;
            const array = new Array(count);
            let speed = 100 // Task2: creating global variable 

            const slider = document.getElementById("myRange"); //Task3: fetching by id "myRange" storing as variable slider

            slider.oninput = function() {
                speed = 101 - this.value; // Task3: Here we create a small fucntion that passes the current value to the global vairable speed
            }
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
            
            bubbleSort(array);

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
            }
