const reader = new Html5Qrcode("camera");
let scannerOn = false;

const btn = document.getElementById("btn");
const itemName = document.getElementById("itemName");
const itemStock = document.getElementById("itemStock");
const itemPrice = document.getElementById("itemPrice");

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
            try {
                const item = JSON.parse(text);

                itemName.textContent = "Name: " + item.name;
                itemStock.textContent = "In store: " + (item.inStock ? "Yes" : "No");
                itemPrice.textContent = "Price: " + item.price + " €";

                toggleScanner();
            } catch (error) {
                console.error("Invalid QR JSON:", error);
                alert("This QR code does not contain valid inventory data.");
            }
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
