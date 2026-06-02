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
            const item = JSON.parse(text);
            showMarkerAt(item.top, item.left);
            displayInventory(item);
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

function displayInventory(item) {
    /*  or another way: 
        const inventory = document.getElementById("inventory");
        inventory.innerHTML */
    const name = document.getElementById("name"); 
    const stock = document.getElementById("stock");
    const price = document.getElementById("price");

    name.textContent = "Name: " + item.name;
    stock.textContent = "In stock: " + (item.inStock ? "yes" : "no");
    price.textContent = "Price: " + item.price + " €";
}