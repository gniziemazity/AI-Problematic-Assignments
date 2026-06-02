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
    let info = document.getElementById("info");
    if (!info) {
        info = document.createElement("div");
        info.id = "info";
        document.body.appendChild(info);
    }

    const inStockText = place.inStock ? "In store: Yes" : "In store: No";
    const stockClass = place.inStock ? "item-stock-yes" : "item-stock-no";

    info.innerHTML = `
        <p class="item-name">${place.name.charAt(0).toUpperCase() + place.name.slice(1)}</p>
        <p class="${stockClass}">${inStockText}</p>
        <p class="item-price">Price: €${place.price}</p>
    `;
}
