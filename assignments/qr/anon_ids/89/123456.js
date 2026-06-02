const reader = new Html5Qrcode("camera");
let scannerOn = false;

// Grab references to our HTML elements
const mapContainer = document.getElementById("mapContainer");
const btn = document.getElementById("btn");
const marker = document.getElementById("marker");

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
            // Parse the incoming JSON data from the QR Code
            const place = JSON.parse(text);
            
            // 1. Handle original positioning logic
            showMarkerAt(place.top, place.left);
            
            // 2. Handle new Inventory System logic
            document.getElementById("itemName").innerText = "Product: " + (place.name || "N/A");
            
            // Check if the item is in store (true/false) and display a user-friendly message
            if (place.in_store) {
                document.getElementById("itemStatus").innerText = "Status: In Stock";
                document.getElementById("itemStatus").style.color = "green";
            } else {
                document.getElementById("itemStatus").innerText = "Status: Out of Stock";
                document.getElementById("itemStatus").style.color = "red";
            }
            
            // Display price in Euros (€)
            if (place.price !== undefined) {
                document.getElementById("itemPrice").innerText = "Price: €" + Number(place.price).toFixed(2);
            } else {
                document.getElementById("itemPrice").innerText = "Price: N/A";
            }
            
            // Close camera and bring back the map view
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