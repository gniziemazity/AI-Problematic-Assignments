const reader = new Html5Qrcode("camera");
let scannerOn = false;

const mapContainer = document.getElementById("mapContainer");
const btn = document.getElementById("btn");
const marker = document.getElementById("marker");

const inventory = document.getElementById("inventory");
const itemName = document.getElementById("itemName");
const itemStatus = document.getElementById("itemStatus");
const itemPrice = document.getElementById("itemPrice");

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

            const data = JSON.parse(text);

            inventory.style.display = "block";

            itemName.innerText = "Name: " + data.name;
            itemStatus.innerText = "Latitude: " + data.latitude;
            itemPrice.innerText = "Longitude: " + data.longitude;

            showMarkerAt(data.latitude, data.longitude);

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
    marker.style.top = top + "px";
    marker.style.left = left + "px";
}