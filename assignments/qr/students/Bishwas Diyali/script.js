function startScan() {
    const qrResult = prompt("Paste QR JSON:");

    const data = JSON.parse(qrResult);

    document.getElementById("name").textContent = "Name: " + data.name;
    document.getElementById("stock").textContent =
        "In stock: " + (data.inStock ? "Yes" : "No");
    document.getElementById("price").textContent =
        "Price: €" + data.price;

    const marker = document.getElementById("marker");
    marker.style.top = data.top;
    marker.style.left = data.left;
}
