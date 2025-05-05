function generateQR() {
    const inputText = document.getElementById("text-input").value;
    const colorDark = document.getElementById("color-dark").value;
    const colorLight = document.getElementById("color-light").value;
    const size = parseInt(document.getElementById("qr-size").value);
    
    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";
    
    // Generate new QR code
    new QRCode(document.getElementById("qrcode"), {
        text: inputText,
        width: size,
        height: size,
        colorDark: colorDark,
        colorLight: colorLight,
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Show download button
    document.getElementById("download").style.display = "inline-block";
}

function downloadQR() {
    const qrElement = document.getElementById("qrcode");
    const canvas = qrElement.querySelector("canvas");
    
    if (canvas) {
        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }
}

// Generate on page load
window.onload = generateQR;

// Generate when any option changes
document.getElementById("color-dark").addEventListener("change", generateQR);
document.getElementById("color-light").addEventListener("change", generateQR);
document.getElementById("qr-size").addEventListener("change", generateQR);