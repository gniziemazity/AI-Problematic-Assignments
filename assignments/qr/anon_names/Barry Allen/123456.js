const reader = new Html5Qrcode("camera");
let scannerOn = false;
 //fixed display issue, one line missing in css xd

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
            console.log(place); // prints the information in console log of the print
            /*use the "place" to create a visual print on the website.*/
            inventoryDisplay(place); //calls the qr code inventory. Code is below!
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

function inventoryDisplay(place){
    let stockStatus = "no";
    const paragraphTagCont = document.getElementById("paragraphContainer"); //html 
    const name = document.createElement("p"); //had to swap the createElement for this to work
    const stock = document.createElement("p"); //ok this is very important
    const price = document.createElement("p"); //it HAS TO BE a "p" and not "paragraph" because
    if (place.stockStatus == true){ //p is an "official" html element while paragraph is not.
        stockStatus = "yes";
    }
    name.textContent = String("Item in question : " + place.name); // textContent allows you to create text 
    stock.textContent = String("Any in stock? : " + stockStatus); //in these cases it is used to make the UI
    price.textContent = String("Price : " + place.price + "€"); //for string text next to the qr values
    paragraphTagCont.appendChild(name); //QR values added to the const that is the div ID in index
    paragraphTagCont.appendChild(stock); //which means they get called and displayed due to 
    paragraphTagCont.appendChild(price); //startscanner having inventoryDIsplay(place) added to it


}