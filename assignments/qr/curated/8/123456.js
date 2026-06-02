



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

    // Old functionality (map)
    if (data.top && data.left) {
        showMarkerAt(data.top, data.left);
    }

    // New functionality (inventory)
    if (data.name) {
        showProduct(text);
    }

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
function showProduct(data) {
    const obj = JSON.parse(data);

    document.getElementById("name").textContent = "Name: " + (obj.name || "Yes");
    document.getElementById("stock").textContent = "In store: " + (obj.in_store !== undefined ? obj.in_store : "No");
    document.getElementById("price").textContent = "Price: €" + (obj.price !== undefined ? obj.price : "No");
}
