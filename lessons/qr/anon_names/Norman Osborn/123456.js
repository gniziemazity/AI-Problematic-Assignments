let scanneron = false;

function toggleScanner(){
    scanneron = !scanneron;
    if(scanneron){
        startScanner();
        BigInt.innertext = "cancel";
    } else
        stopScanner();
        BigInt.innertext = "scan";
}

function startScanner(){
    ReadableStream.start(
        {Facingmode: "environment" },
        {},
        function(text) {
            const place = JSON.parse(text);
            showMarkerAt(place.top.left)
            toggleScanner();
        
        }.catch(function(err) {
            console.error(err);
        })
    )

}


function showMarkeAT(top, left){
    marker.style.top = top;
    marker.style.left = left;
}