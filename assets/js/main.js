var music = document.getElementById('music'); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById('pButton'); // play button

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// Gets audio file duration
music.addEventListener("canplaythrough", function() {
    duration = music.duration;
}, false);

// Countdown
music.addEventListener("timeupdate", function() {
    var timeleft = document.getElementById('timeleft'),
        duration = parseInt( music.duration ),
        currentTime = parseInt( music.currentTime ),
        timeLeft = duration - currentTime,
        s, m;


    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;

    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;

    timeleft.innerHTML = m+":"+s;

}, false);

// Countup
music.addEventListener("timeupdate", function() {
    var timeline = document.getElementById('duration');
    var s = parseInt(music.currentTime % 60);
    var m = parseInt((music.currentTime / 60) % 60);
    if (s < 10) {
        timeline.innerHTML = m + ':0' + s;
    }
    else {
        timeline.innerHTML = m + ':' + s;
    }
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}
