const reader = new HTML5QRcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        bnt.innerText = "CANCEL";
    } else {
        stopScanner();
        mapContainer.style.display = "block";
        bnt.innerText = "SCAN";
    }
}
function startScanner() {
    reader.start(
        {facingMode: "environment" },
        {},
        function (text) {
            const place = JSON.parse(text);
            showmarkerAt(place.top, place.left);
            toggleScanner();
        }
    ).catch(function (err) {
        console.error (err);
    });
}

function stopScanner() {
    reader.stop();
}

function showMarkerAt(top, left) {
    maker.style.top = top;
    maker.style.top = left;
}