document.addEventListener("deviceready", function () {
    let mediaFilePath;
    let mediaObject;

    // Record Audio
    document.getElementById("recordBtn").addEventListener("click", function () {
        navigator.device.capture.captureAudio(
            function (mediaFiles) {
                mediaFilePath = mediaFiles[0].fullPath;
                alert("Audio recorded successfully!");
                document.getElementById("playBtn").disabled = false;
            },
            function (error) {
                alert("Recording failed: " + error.code);
            },
            { limit: 1, duration: 10 } // Limit to 10 seconds
        );
    });

    // Play Audio
    document.getElementById("playBtn").addEventListener("click", function () {
        if (mediaFilePath) {
            mediaObject = new Media(
                mediaFilePath,
                function () { console.log("Audio played successfully."); },
                function (err) { console.error("Playback failed: " + JSON.stringify(err)); }
            );
            mediaObject.play();
        } else {
            alert("No audio to play!");
        }
    });
});
