function convertUSDtoYen() {
    var usdValue = document.getElementById('usdValue').value;
    var yenValue = usdValue * 153.9;
    document.getElementById('yenValue').innerText = yenValue + ' Yen';
}