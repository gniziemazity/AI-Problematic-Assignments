// DOM elements
const cameraDiv = document.getElementById("camera");
const btn = document.getElementById("btn");
const mapContainer = document.getElementById("mapContainer");
const marker = document.getElementById("marker");
const inventoryInfoDiv = document.getElementById("inventoryInfo");

let html5QrCode = null;      // will hold Html5Qrcode instance
let scannerOn = false;

// Helper: update inventory panel with product data
function updateInventoryDisplay(product) {
    // Clear previous content
    inventoryInfoDiv.innerHTML = "";

    if (!product) {
        // fallback placeholder
        const placeholder = document.createElement("p");
        placeholder.className = "info-placeholder";
        placeholder.innerText = "🔍 Scan a QR code to see inventory data";
        inventoryInfoDiv.appendChild(placeholder);
        return;
    }

    // 1) Name tag
    const nameP = document.createElement("p");
    nameP.innerHTML = `<span style="font-size:1.3rem;">📦</span> <strong>Product:</strong> ${escapeHtml(product.name) || "Unknown"}`;

    // 2) In-store status tag (boolean / string)
    let inStoreText = "";
    let inStoreIcon = "";
    const inStore = product.in_store;
    if (inStore === true || inStore === "true" || inStore === 1) {
        inStoreText = "✅ In store";
        inStoreIcon = "🏪";
    } else {
        inStoreText = "❌ Out of stock";
        inStoreIcon = "🚫";
    }
    const stockP = document.createElement("p");
    stockP.innerHTML = `<span style="font-size:1.3rem;">${inStoreIcon}</span> <strong>Availability:</strong> ${inStoreText}`;

    // 3) Price in euros
    let priceValue = product.price;
    let priceFormatted = "—";
    if (priceValue !== undefined && priceValue !== null) {
        const numericPrice = parseFloat(priceValue);
        if (!isNaN(numericPrice)) {
            priceFormatted = `€ ${numericPrice.toFixed(2)}`;
        } else {
            priceFormatted = String(priceValue);
        }
    }
    const priceP = document.createElement("p");
    priceP.innerHTML = `<span style="font-size:1.3rem;">💰</span> <strong>Price:</strong> ${priceFormatted}`;

    inventoryInfoDiv.appendChild(nameP);
    inventoryInfoDiv.appendChild(stockP);
    inventoryInfoDiv.appendChild(priceP);
}

// simple XSS guard
function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Show marker on map (legacy positioning, kept for consistency)
function showMarkerAt(top, left) {
    if (marker) {
        marker.style.top = top;
        marker.style.left = left;
    }
}

// Stop scanner and clean up UI
async function stopScanner() {
    if (html5QrCode && scannerOn) {
        try {
            await html5QrCode.stop();
        } catch (err) {
            console.warn("Stop error:", err);
        }
        html5QrCode.clear();
    }
    scannerOn = false;
    cameraDiv.style.display = "none";
    mapContainer.style.display = "block";  // show map container (if needed)
    btn.innerText = "📷 SCAN QR";
    btn.classList.remove("scanning");
}

// Start scanner (camera)
async function startScanner() {
    if (!html5QrCode) {
        html5QrCode = new Html5Qrcode("camera");
    }

    try {
        await html5QrCode.start(
            { facingMode: "environment" },   // back camera
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
                aspectRatio: 1.0
            },
            (decodedText) => {
                // --- SUCCESSFUL SCAN: process QR data as inventory JSON ---
                try {
                    const productData = JSON.parse(decodedText);
                    // Validate required fields for inventory (name, in_store, price)
                    if (productData && typeof productData === 'object') {
                        // extract inventory fields
                        const inventoryItem = {
                            name: productData.name || "Unnamed product",
                            in_store: productData.in_store,
                            price: productData.price
                        };
                        // Update inventory display
                        updateInventoryDisplay(inventoryItem);
                        
                        // optional: legacy marker positioning if top/left exist in JSON
                        if (productData.top !== undefined && productData.left !== undefined) {
                            showMarkerAt(productData.top, productData.left);
                        }
                    } else {
                        // If JSON is not an object, show error
                        updateInventoryDisplay({ name: "Invalid QR", in_store: false, price: null });
                        inventoryInfoDiv.innerHTML += `<p style="color:red;">⚠️ QR does not contain valid inventory data.</p>`;
                    }
                } catch (e) {
                    console.warn("QR content is not valid JSON:", decodedText);
                    updateInventoryDisplay({ name: "Invalid format", in_store: false, price: null });
                    inventoryInfoDiv.innerHTML += `<p style="color:red;">❌ Scan failed: data not JSON. Use format: {"name":"...", "in_store":true/false, "price":12.99}</p>`;
                }
                // Auto stop scanner after successful read (good UX)
                toggleScanner();
            },
            (errorMessage) => {
                // optional: ignore scanning errors (frame scanning)
                // console.debug(errorMessage);
            }
        ).catch(err => {
            console.error("Start error", err);
            alert("Could not start camera. Please allow permissions.");
            toggleScanner(); // reset state
        });
        
        scannerOn = true;
        cameraDiv.style.display = "block";
        mapContainer.style.display = "none";
        btn.innerText = "❌ CANCEL";
        btn.classList.add("scanning");
    } catch (err) {
        console.error("Camera initialization error", err);
        alert("Camera error: " + err.message);
        scannerOn = false;
        cameraDiv.style.display = "none";
        btn.innerText = "📷 SCAN QR";
    }
}

// Toggle scanner on/off
function toggleScanner() {
    if (scannerOn) {
        stopScanner();
    } else {
        startScanner();
    }
}

// Attach event listener to button (avoid inline onclick to keep modern style)
if (btn) {
    btn.addEventListener("click", toggleScanner);
}

// Initial UI setup: hide camera, show map container (empty if no map.png)
cameraDiv.style.display = "none";
if (mapContainer) mapContainer.style.display = "block";
// Show default inventory placeholder
updateInventoryDisplay(null);

// Graceful cleanup on page unload
window.addEventListener("beforeunload", () => {
    if (html5QrCode && scannerOn) {
        html5QrCode.stop().catch(e => console.log);
    }
});