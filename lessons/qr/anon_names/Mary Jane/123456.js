const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn =!scannerOn;
    if(scannerOn) {
        StartScanner();
        mapContainer.style.display ="none";
        btn.innerText = "CANCEL";
        } else{
           stopScanner();
           mapContainer.style.display ="block";
           btn.innerText = "SCAN";
        }
}

function startsScanner() {
    reader.start(
        {  facingMode: "environment"},
        {},
        function (text) {
            const place =JSON.parse(text);
            showMarketAt(place.top, place.left);
            toggleScanner();
        }
    ).catch(function (err) {
        console.error(err);
    } );
}
 function stopScanner() {
    reader.stop();
 }

function showMarketAt(top, left) {
    marker.style.top = top;
    marker.style.left = left;
}