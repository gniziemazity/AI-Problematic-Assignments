const inventory = document.getElementById("inventory");
const mapContainer = document.getElementById("mapContainer");
const btn = document.getElementById("btn");
const marker = document.getElementById("marker");

const reader = new Html5Qrcode("camera");

let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        inventory.style.display = "none";
        btn.innerText = "Cancel";
    } else {
        stopScanner();
        mapContainer.style.display = "block";
        inventory.style.display = "flex";
        btn.innerText = "Scan";
    }   
        // Start scanning logic here
    }

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            console.log(text);
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
            document.getElementById("name").innerText = 'Item name: ' + place.name;
            document.getElementById("price").innerHTML = 'Price (&#x20AC): ' + place.price;
            document.getElementById("inStock").innerText = 'In Stock: ' + Number(place.inStock);
            toggleScanner();
        }
    ).catch(function (err) {
        console.error(err);         
    });
}

function stopScanner() {
    reader.stop();
}

function showMarkerAt(top, left) {
    marker.style.top = top;
    marker.style.left = left;
}
