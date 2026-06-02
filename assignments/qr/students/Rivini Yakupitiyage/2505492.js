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

            // INVENTORY SYSTEM

            document.getElementById("name").textContent =
                "Name: " + place.name;

            if (place.inStock) {
                document.getElementById("stock").textContent =
                    "In store: Yes";
            } else {
                document.getElementById("stock").textContent =
                    "In store: No";
            }

            document.getElementById("price").textContent =
                "Price: €" + place.price;
            
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
