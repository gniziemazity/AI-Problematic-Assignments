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

            if (data.top && data.left) {
                showMarkerAt(data.top, data.left);
            }

            if (data.name) {
                showInventory(data);
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

function showInventory(data) {
    document.getElementById("itemName").innerText = "Name: " + data.name;
    document.getElementById("itemStore").innerText = "In store: " + (data.in_store ? "Yes" : "No");
    document.getElementById("itemPrice").innerText = "Price: " + data.price + " €";
}
