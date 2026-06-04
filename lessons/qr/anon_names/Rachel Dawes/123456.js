const reader = new Html5Qrcode("camera");
let scannerON = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "CANCLE";
    }else{
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";    
    }
}

function startScanner() {
    reader.strat(
        { facingMode: "enviroment" },
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarketAt(place.top, place.left);
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