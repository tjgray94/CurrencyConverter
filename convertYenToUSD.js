function convertYenToUSD() {
    var yenValue = document.getElementById('yenValue').value;
    var usdValue = (yenValue / 153.9).toFixed(2);
    document.getElementById('usdValue').innerText = `$${usdValue}`;
}