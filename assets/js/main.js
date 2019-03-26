var track = document.getElementById('track'); // id for audio element
var duration = track.duration; // Duration of audio clip, calculated here for embedding purposes
var currentTime = track.currentTime;
var pButton = document.getElementById('pButton'); // play button

// play button event listenter
pButton.addEventListener("click", play);

//Play and Pause
function play() {
    // start music
    if (track.paused) {
        track.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        track.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}
