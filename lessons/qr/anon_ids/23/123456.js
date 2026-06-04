const reader = new Html5Qrcode("camera");
let scannerOn = false;
 // I do  not know why, I do not know how, I cannot begin to comprehend
 //the program works but looks absolutely ruined when opening the website.
 //There might be a typo somewhere, I simply cannot find it even though I did the code by the books
 //Is it a typo, is it because my computer is linux? I do not know.
function toggleScanner(){
    scannerOn = !scannerOn;
    if (scannerOn){
        startScanner();
        btn.innerText = "CANCEL";
    }
    else{
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }
}

function startScanner(){
    reader.start(
        { facingMode: "environment"},
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
            toggleScanner();
        }
    ).catch(function(err) {
        console.error(err);
    });
}

function stopScanner() {
    reader.stop();
}

function showMarkerAt(top,left){
    marker.style.top = top;
    marker.style.left = left;
}