const reader = new Html5Qrcode("camera");
let scannerOn = false;
function toggleScanner(){
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
        { facingMode: "environment"}, {};
        function (text) {
         const place = JSON.parse(text);
         showMarketAt(place.top, place.left);
         toggleScanner();
        }
    ). catch(function (err) {
        console.error(err);
    });
}

function stopScanner(){
    reader.stop();
}
function showMarketAt(top, left) {
    marker.style.top = top;
    marker.style.left - left;
}