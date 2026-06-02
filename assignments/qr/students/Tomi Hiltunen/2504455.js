const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        if (inventory.children.length > 0) {
            inventory.replaceChildren(); // resets the inventory listing if something has already been scanned
        }
        inventory.style.display = "none";
        mapContainer.style.display = "none";
        btn.innerText = "CANCEL";
    } else {
        stopScanner();
        inventory.style.display = "grid";
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            const place = JSON.parse(text); // parsing the JSON from the QR code
            showMarkerAt(place.top, place.left);

            // adding inventory information from QR code as paragraphs
            const labelName = document.createElement("p");
            labelName.innerHTML = "Name:";
            inventory.appendChild(labelName);
            const objectName = document.createElement("p");
            objectName.innerHTML = place.name;
            inventory.appendChild(objectName);
            
            const labelInStock = document.createElement("p");
            labelInStock.innerHTML = "In stock:";
            inventory.appendChild(labelInStock);
            const objectInStock = document.createElement("p");
            if (place.inStock) {
                objectInStock.innerHTML = "1 or more";
            } else {
                objectInStock.innerHTML = "0 :(";
            }
            inventory.appendChild(objectInStock);

            const labelPrice = document.createElement("p");
            labelPrice.innerHTML = "Price:";
            inventory.appendChild(labelPrice);
            const objectPrice = document.createElement("p");
            objectPrice.innerHTML = place.price + "€";
            inventory.appendChild(objectPrice);
            
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