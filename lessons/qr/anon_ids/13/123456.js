const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapcontainer.style.display ="none";
        btn.innerText = "cancel";
    } else {
        stopScanner();
        mapcontainer.style.display = "block";
        btn.innerText = "scan";
    }
   
}  
function startScanner() {
    reader.start(
        { facingmode: "environment" },
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarKerAt(place.top, place.left);
            togglescanner();

        }
    ).catch(function (err) {
        console.error(err);
    });
}  



function showMarKerAt(top, left) {
    marker.style.top =top;
    marker.style.left =left;
}   
