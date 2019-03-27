var track = document.getElementById('track'); // id for audio element
var pButton = document.getElementById('pButton'); // play button
var timeElapsed = document.getElementById('timeElapsed'); // elapsed time
var duration = document.getElementById('duration'); // track duration

// play button event listenter
pButton.addEventListener("click", play);

// Play and Pause
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

// current time elapsed
setInterval(function() {
    timeElapsed.textContent = formatTime(track.currentTime);
}, 100);

// duration
duration.innerHTML = formatTime(track.duration);

// nicer time formating
function formatTime(s, m) {
    s = Math.floor( s );
    m = Math.floor( s / 60 );
    m = m >= 10 ? m : '0' + m;
    s = Math.floor( s % 60 );
    s = s >= 10 ? s : '0' + s;
    return m + ':' + s;
}

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}
