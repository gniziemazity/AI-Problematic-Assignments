const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;

    if (scannerOn) {
        startScanner();
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        btn.innerText = "SCAN ITEM";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            const item = JSON.parse(text);
            showInventoryItem(item);
            toggleScanner();
        }
    ).catch(function (err) {
        console.error(err);
    });
}

function stopScanner() {
    reader.stop();
}

function showInventoryItem(item) {
    itemName.innerText = "Name: " + item.name;
    itemStore.innerText = "In store: " + (item.inStock ? "yes" : "no");
    itemPrice.innerText = "Price: €" + item.price;
}
