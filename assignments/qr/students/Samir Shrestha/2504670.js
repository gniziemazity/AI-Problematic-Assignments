const reader = new Html5Qrcode("camera");
let scannerOn = false;

// Cache elements for cleaner logic
const btn = document.getElementById("btn");
const mapContainer = document.getElementById("mapContainer");
const marker = document.getElementById("marker");
const inventoryDiv = document.getElementById("inventory");

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        inventoryDiv.innerHTML = ""; // Reset display for new scan
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
            try {
                const data = JSON.parse(text); // Parse QR JSON data
                
                // Update position on map
                showMarkerAt(data.top, data.left);
                
                // Update Inventory Display (Requirement: separate p tags)
                inventoryDiv.innerHTML = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>In Store:</strong> ${data.inStore ? "Yes" : "No"}</p>
                    <p><strong>Price:</strong> ${data.price}€</p>
                `;
                
                toggleScanner();
            } catch (e) {
                console.error("Invalid QR format", e);
            }
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