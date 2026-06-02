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
            showInventory(place);
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

function showInventory(place) {
    // Build three separate <p> tags for name, stock status and price
    const namePara = document.createElement("p");
    namePara.innerText = "Name: " + place.name;

    const stockPara = document.createElement("p");
    stockPara.innerText = place.inStock
        ? "There are items in store"
        : "There are no items in store";

    const pricePara = document.createElement("p");
    pricePara.innerText = "Price: " + place.price + " euros";

    // Clear previous item, then display the new one
    inventory.innerHTML = "";
    inventory.appendChild(namePara);
    inventory.appendChild(stockPara);
    inventory.appendChild(pricePara);
}
