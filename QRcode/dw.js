	document.getElementById('qrcode').addEventListener('click', function() {
    this.href = document.getElementById("script").toDataURL();
    this.download = 'test.png';
}