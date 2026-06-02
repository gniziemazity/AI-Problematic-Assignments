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

            
            function onScanSuccess(decodedText, decodedResult) {
    try {
        const data = JSON.parse(decodedText);

        const name = data.name ?? "Unknown item";
        const inStore = data.in_store ? "Available in store" : "Not available";
        const price = data.price ? `${data.price} €` : "No price listed";

        document.getElementById("itemName").textContent = name;
        document.getElementById("itemStock").textContent = inStore;
        document.getElementById("itemPrice").textContent = price;

    } catch (e) {
        console.error("Invalid JSON in QR code", e);
        document.getElementById("itemName").textContent = "Invalid QR code data";
        document.getElementById("itemStock").textContent = "";
        document.getElementById("itemPrice").textContent = "";
    }
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