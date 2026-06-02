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

            
            document.getElementById("item-name").textContent = "Name: " + data.name;
            document.getElementById("item-stock").textContent = "In store: " + (data.in_store ? "Yes" : "No");
            document.getElementById("item-price").textContent = "Price: €" + data.price;

            
            showMarkerAt(data.top, data.left);

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
