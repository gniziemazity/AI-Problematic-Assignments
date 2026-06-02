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
// Array to store all scanned items
let allItems = [];

// This function runs whenever a QR code is scanned
function handleScan(qrData) {
    try {
        // Convert the QR code string into a JS object
        let item = JSON.parse(qrData);

        // Add the item to the list
        allItems.push(item);

        // Get the container where we will display the inventory
        let display = document.getElementById("display");

        // Clear previous content
        display.innerHTML = "";

        // Show all scanned items
        allItems.forEach(it => {
            display.innerHTML += `
                <p><strong>Name:</strong> ${it.name}</p>
                <p><strong>In Store:</strong> ${it.in_store ? "Yes" : "No"}</p>
                <p><strong>Price:</strong> €${it.price}</p>
                <hr>
            `;
        });

    } catch (error) {
        console.error("Invalid QR code JSON:", error);
    }
}
