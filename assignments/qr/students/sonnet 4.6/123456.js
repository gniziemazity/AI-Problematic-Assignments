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
            showItemInfo(place);
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

function showItemInfo(place) {
    const itemInfo = document.getElementById("itemInfo");
    const itemName = document.getElementById("itemName");
    const inStock = document.getElementById("inStock");
    const itemPrice = document.getElementById("itemPrice");

    itemName.textContent = place.name;

    if (place.in_store) {
        inStock.textContent = "In stock: Yes ✓";
        inStock.className = "yes";
    } else {
        inStock.textContent = "In stock: No ✗";
        inStock.className = "no";
    }

    itemPrice.textContent = "Price: €" + place.price.toFixed(2);

    itemInfo.style.display = "block";
}