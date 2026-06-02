const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;

    if (scannerOn) {
        startScanner();
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        btn.innerText = "SCAN";
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
    reader.stop().catch(function (err) {
        console.error(err);
    });
}

function showInventoryItem(item) {
    itemName.innerText = "Name: " + item.name;

    if (item.in_store) {
        itemInStore.innerText = "In store: Yes";
    } else {
        itemInStore.innerText = "In store: No";
    }

    itemPrice.innerText = "Price: " + item.price + " €";
}
