const reader = new Html5Qrcode("camera");
let scannerOn = false;

// Cache DOM elements
const mapContainer = document.getElementById("mapContainer");
const btn = document.getElementById("btn");
const itemName = document.getElementById("itemName");
const itemAvailability = document.getElementById("itemAvailability");
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
            try {
                // Parse the QR code text payload into an object
                const data = JSON.parse(text);
                
                // Call display function to populate data on-screen
                displayInventory(data);
                
                // Automatically close the scanner after a successful find
                toggleScanner();
            } catch (e) {
                console.error("Scanned data is not valid JSON:", e);
            }
        }
    ).catch(function (err) {
        console.error(err);
    });
}

function stopScanner() {
    reader.stop();
}

function displayInventory(item) {
    // 1. Display Item Name
    itemName.innerHTML = `<strong>Product Name:</strong> ${item.name || "N/A"}`;
    
    // 2. Check and evaluate the structural "in_store" boolean variable status 
    if (item.in_store === true || item.in_store === "true") {
        itemAvailability.innerHTML = `<strong>Availability:</strong> <span style="color: green;">In Stock</span>`;
    } else {
        itemAvailability.innerHTML = `<strong>Availability:</strong> <span style="color: red;">Out of Stock</span>`;
    }
    
    // 3. Format currency properly to Euros (€)
    if (item.price !== undefined) {
        itemAvailability.innerHTML += ` (${item.in_store ? 'Available' : 'Unavailable'})`; // optional detail matching
        itemPrice.innerHTML = `<strong>Price:</strong> €${parseFloat(item.price).toFixed(2)}`;
    } else {
        itemPrice.innerHTML = `<strong>Price:</strong> N/A`;
    }
}

// Keeping original positional logic placeholder just in case your map implementation depends on it.
function showMarkerAt(top, left) {
    const marker = document.getElementById("marker");
    if(marker) {
        marker.style.top = top;
        marker.style.left = left;
    }
}