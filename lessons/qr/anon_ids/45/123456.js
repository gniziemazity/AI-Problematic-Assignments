const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        btn.innerText();
        mapContainer.style.display = "none";
        BigInt.innerText = "CANCEl";
    } else {
    stopScanner();
    mapContainer.style.display = "block";
    btn.innerText = "SCAN";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment"},
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
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
    Marker.style.top = top;
    Marker.style.left = left;
}