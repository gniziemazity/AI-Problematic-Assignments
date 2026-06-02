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
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
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
function handleQRScan(qrData) {
    const item = JSON.parse(qrData);

    document.getElementById("itemName").textContent =
        "Name: " + item.name;

    document.getElementById("itemStock").textContent =
        "In Store: " + (item.in_store ? "Yes" : "No");

    document.getElementById("itemPrice").textContent =
        "Price: €" + item.price;
}
