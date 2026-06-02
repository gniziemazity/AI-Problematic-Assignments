const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        inventory.style.display = "none";
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        inventory.style.display = "block";
        btn.innerText = "SCAN";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            const item = JSON.parse(text);
            showItem(item);
            toggleScanner();
        }
    ).catch(function (err) {
        console.error(err);
    });
}

function stopScanner() {
    reader.stop();
}

function showItem(item) {
    name.innerText = "Name: " + item.name;
    stock.innerText = item.in_store ? "In store: yes" : "In store: no";
    price.innerText = "Price: " + item.price + " €";
}
