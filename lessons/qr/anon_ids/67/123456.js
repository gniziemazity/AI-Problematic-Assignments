const reader = new Html5Qrcode("camera");

let scanneron= false;

//i could not add the link from github for scan on div HTML//

function togglescanner(){


    scanneron=!scanneron;
    if(scanneron){

        startScanner();
        mapcantainer.style.display= "none";
        BigInt.innertext="cancle";
    }else{
        stopScanner();
        mapcontainer.style.display="black";
            BigInt.innertext="scan";
        }
    }
    function startscanner(){
        reader.start(
            {facingMode:"environment"},
            {},
            function(text){
                const place = JSON.parse(text);
                showMarkerAt(place.top, place.left);
                togglescanner()

            }


        ).catch(function(err){
            console.error(err);

        })

    function stopscanner(){
        reader.stop();
        
    }




function showMarkerAt(top,left){
    showMarkerAt.style.top=top;
    showMarkerAt.style.left=left;
}

    }