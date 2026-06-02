const reader = new Html5Qrcode("camera");
let scannerOn = false;


const mapContainer = document.getElementById("mapContainer");
const btn = document.getElementById("btn");
const marker = document.getElementById("marker");
const inventoryDiv = document.getElementById("inventory"); // 




function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }
}


function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);



            const p = document.createElement("p");



                p.innerHTML = `
                    <strong>Name:</strong> ${place.name || "Unknown"} <br>
                    <strong>In Store:</strong> ${place.in_store ? "Yes" : "No"} <br>
                    <strong>Price:</strong> €${place.price !== undefined ? place.price.toFixed(2) : "0.00"}
                `;

                inventoryDiv.innerHTML = "";/*clear list and show new thing*/


                inventoryDiv.appendChild(p);

            toggleScanner();

        }
    ).catch(function (err) {
        console.error("invalid json " , err);
    });
}

////
function stopScanner() {
    reader.stop();
}


function showMarkerAt(top, left) {
    marker.style.top = top;
    marker.style.left = left;
}