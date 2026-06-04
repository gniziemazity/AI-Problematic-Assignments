const reader = new Html5Qrcode("camera");

let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "Cancel";
    } else {
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "Scan";
    }   
        // Start scanning logic here
    }

function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            // console.log(text);
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
    showMarkerAt.style.top = top;
    showMarkerAt.style.left = left;
}