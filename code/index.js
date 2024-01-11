window.onload = function() {
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData('Hi!');
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag();
}
