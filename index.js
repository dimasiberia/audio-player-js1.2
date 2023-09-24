const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const playNext = document.querySelector('.next-btn');
const playPrew = document.querySelector('.prew-btn');
const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");
let isPlay = false;
let playNum = 0;
let listSongs = [`./assets/audio/beyonce.mp3`, `./assets/audio/dontstartnow.mp3`]

function playAudio() {
    audio.src = listSongs[0];
    if (isPlay === false) {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        audio.play();
        isPlay = true;
    }
}
function pauseAudio() {
    if (isPlay === true) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        audio.pause();
        isPlay = false;
    }
}
function playNextSong() {
    playNum += 1;
    if (playNum > listSongs.length - 1) {
        audio.src = listSongs[0]
        audio.play();
        playNum = 0;
    } else {
        audio.src = listSongs[playNum]
        audio.play();
    }
}
function playPrewSong() {
    playNum -= 1;
    if (playNum < 0) {
        audio.src = listSongs[listSongs.length - 1]
        audio.play();
        playNum = listSongs.length - 1;
    } else {
        audio.src = listSongs[playNum]
        audio.play();
    }
}

playBtn.addEventListener('click', playAudio);
pBtn.addEventListener('click', pauseAudio);
playNext.addEventListener('click', playNextSong);
playPrew.addEventListener('click', playPrewSong);

audio.addEventListener("timeupdate", () => {
    if (!progress.getAttribute("max"))
        progress.setAttribute("max", audio.duration);
    progress.value = audio.currentTime;
    progressBar.style.width = `${Math.floor(
        (audio.currentTime * 100) / audio.duration,
    )}%`;
});
progress.addEventListener("click", (e) => {
    const rect = progress.getBoundingClientRect();
    const pos = (e.pageX - rect.left) / progress.offsetWidth;
    audio.currentTime = pos * audio.duration;
});

//   function setTime() {
//     const minutes = Math.floor(audio.currentTime / 60);
//     const seconds = Math.floor(audio.currentTime - minutes * 60);

//     const minuteValue = minutes.toString().padStart(2, "0");
//     const secondValue = seconds.toString().padStart(2, "0");

//     const mediaTime = `${minuteValue}:${secondValue}`;
//     timer.textContent = mediaTime;

//     const barLength =
//       timerWrapper.clientWidth * (audio.currentTime / audio.duration);
//     timerBar.style.width = `${barLength}px`;
//   }

setInterval(
    () => document.getElementById('span').innerHTML = Math.floor(audio.currentTime / 60).toString().padStart(2, "0") + ':' + Math.floor(audio.currentTime - Math.floor(audio.currentTime / 60) * 60).toString().padStart(2, "0") + '/' + Math.floor(audio.duration / 60).toString().padStart(2, "0") + ':' + Math.floor(audio.duration - Math.floor(audio.duration / 60) * 60).toString().padStart(2, "0"),
    1000
);