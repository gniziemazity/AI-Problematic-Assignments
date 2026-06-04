const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner(){
    scannerOn =!scannerOn;
    if(scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "Stop";
    }
    else{
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "Scan";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment" },
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
    marker.style.top = top; /*use in console showMarkerAt("smth", "smth") */
    marker.style.left = left;

}