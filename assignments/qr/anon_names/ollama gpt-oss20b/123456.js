// ---- GLOBAL REFERENCES ----------------------------------------------------
const reader   = new Html5Qrcode("camera");
const mapContainer = document.getElementById("mapContainer");
const marker = document.getElementById("marker");
const btn = document.getElementById("btn");
const info = document.getElementById("info");

let scannerOn = false;

// ---- SCANNER CONTROL -------------------------------------------------------
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
        clearInfo();          // hide inventory data when scanner is off
    }
}

// ---- SCANNER LOGIC ---------------------------------------------------------
function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            try {
                const place = JSON.parse(text);
                showMarkerAt(place.top, place.left);
                showInfo(place);          // display inventory data
            } catch (e) {
                console.error("Invalid QR data:", e);
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

// ---- MARKER DISPLAY -------------------------------------------------------
function showMarkerAt(top, left) {
    marker.style.top = top;
    marker.style.left = left;
}

// ---- INVENTORY INFO DISPLAY -----------------------------------------------
function showInfo(item) {
    // Destructure with defaults
    const {
        name = "Unnamed",
        in_store = 0,
        price = 0.00
    } = item;

    const inStoreText = in_store > 0 ? `${in_store} item(s)` : "none";

    info.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>In Store:</strong> ${inStoreText}</p>
        <p><strong>Price:</strong> €${parseFloat(price).toFixed(2)}</p>
    `;
}

function clearInfo() {
    info.innerHTML = "";
}
