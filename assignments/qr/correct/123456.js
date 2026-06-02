const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner(){
    scannerOn = !scannerOn;
    if(scannerOn){
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "CANCEL";
    } else{
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }

}

function startScanner(){
    reader.start(
        {facingMode: "environment" },
        {},
        function(text){
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left);
            toggleScanner();
            showInventory(place);
        }
    ).catch(function(err){
        console.error(err);
    });
}

function stopScanner(){
    reader.stop();
}

function showMarkerAt(top, left){
    marker.style.top = top;
    marker.style.left = left;
}

function showInventory(place){
    const name = document.createElement("p");
    const stock = document.createElement("p");
    const price = document.createElement("p");

    info.innerHTML = "";
    info.appendChild(name);
    info.appendChild(stock);
    info.appendChild(price);

    name.textContent = "Item: " + place.name;
    stock.textContent = "In store: " + (place.inStock ? "Yes" : "No");
    price.textContent = "Price: " + place.price + "€";
    
}