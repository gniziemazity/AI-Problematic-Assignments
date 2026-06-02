const reader = new Html5Qrcode("camera");
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

function startScanner() {
    reader.start(
        { facingMode: "environment" }, 
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
            inventory(place);
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
function inventory(place) {
    document.getElementById("name").innerText = "Name: " + place.name;
    if (place.in_store) {
    document.getElementById("status").innerText = "In store: Yes";
    } else {
    document.getElementById("status").innerText = "In store: No";
    }
    document.getElementById("price").innerText = "Price: " + place.price + "€";
}


