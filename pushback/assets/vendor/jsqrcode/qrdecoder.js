function tick() {
    var video                   = document.getElementById("video-preview");
    var qrCanvasElement         = document.getElementById("qr-canvas");
    var qrCanvas                = qrCanvasElement.getContext("2d");
    var width, height;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        qrCanvasElement.height  = video.videoHeight;
        qrCanvasElement.width   = video.videoWidth;
        qrCanvas.drawImage(video, 0, 0, qrCanvasElement.width, qrCanvasElement.height);
        try {
            var result = qrcode.decode();
            console.log(result);
            if (result === 'CAG pushback app trial - A15') {
                // CAG pushback app trial - A15
                window.location = "pre-selected_different-A15.html";
            } else if (result === 'CAG pushback app trial - E20') {
                // CAG pushback app trial - E20
                window.location = "pre-selected-E20.html";
            } else {
                // CAG pushback app trial - D49
                window.location = "pre-selected_different-D49.html";
            }
            /* Video can now be stopped */
            video.pause();
            video.src = "";
            video.srcObject.getVideoTracks().forEach(track => track.stop());

            /* Display Canvas and hide video stream */
            qrCanvasElement.classList.remove("hidden");
            video.classList.add("hidden");
        } catch(e) {
            /* No Op */
        }
    }

    /* If no QR could be decoded from image copied in canvas */
    if (!video.classList.contains("hidden"))
        setTimeout(tick, 100);
}