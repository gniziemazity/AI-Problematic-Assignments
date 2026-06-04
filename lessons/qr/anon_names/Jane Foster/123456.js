const readerv= new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner() {
    scannerOn =!scannerOn;
    if (scannerOn) {
        startscanner8();
        btn.innertext="scan";
    }
}
function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {

    }
). catch(