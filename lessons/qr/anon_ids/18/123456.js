const reader= new Html5Qrcode("camere");
let scannerOn = false;

function toggleScanner(){
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

function startScanner(){
    reader.start(
        {facingMode: "environment"},
        {},
        function (text){
            console.place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
            toggleScanner();

        }
    
    ).catch(function(err){
        console.error(err);

    });
}

function showMarkerAt(top,left){
    marker.style.top = top;
    marker.style.left = left;
}