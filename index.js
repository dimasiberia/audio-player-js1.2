const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const playNext = document.querySelector('.next-btn');
const playPrew = document.querySelector('.prew-btn');
const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");
const playerImage = document.querySelector(".player");
const songName = document.querySelector('.songname');
const songIcon = document.querySelector('.iconSong');
let isPlay = false;
let playNum = 0;
let listSongs = [`./assets/audio/kino-spokoynaya-noch.mp3`, `./assets/audio/mixail_krug_devochka_pay.mp3`, `./assets/audio/Butyrka.mp3`,]
let listNameSongs = [`kino - spokoinaya noch'`, `mikhail krug - devochka pay`, `bytyrka - zapakhlo vesnoi`]
let listIcons = [`./assets/image/pngimg.com\ -\ viktor_tsoi_PNG6.png`, `./assets/image/pngwing.com.png`, `./assets/image/butyrka.png`]

function playAudio() {
    if (isPlay === false) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        audio.play();
        isPlay = true;
    } else {
        playBtn.style.display = 'inline';
        pauseBtn.style.display = 'none';
        audio.pause();
        isPlay = false;
    }
}
function playNextSong() {
    playNum += 1;
    if (playNum > listSongs.length - 1) {
        audio.src = listSongs[0]
        songName.innerHTML = listNameSongs[0];
        audio.play();
        playNum = 0;
        isPlay = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        songIcon.style.backgroundImage = `url('${listIcons[0]}')`;

    } else {
        audio.src = listSongs[playNum]
        songIcon.style.backgroundImage = `url('${listIcons[playNum]}')`;
        songName.innerHTML = listNameSongs[playNum];
        audio.play();
        isPlay = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    }
}
function playPrewSong() {
    playNum -= 1;
    if (playNum < 0) {
        audio.src = listSongs[listSongs.length - 1]
        audio.play();
        playNum = listSongs.length - 1;
        songName.innerHTML = listNameSongs[listNameSongs.length - 1]
        isPlay = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        songIcon.style.backgroundImage = `url('${listIcons[listNameSongs.length - 1]}')`;
    } else {
        audio.src = listSongs[playNum]
        audio.play();
        songName.innerHTML = listNameSongs[playNum]
        songIcon.style.backgroundImage = `url('${listIcons[playNum]}')`;
        isPlay = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    }
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', playAudio);
playNext.addEventListener('click', playNextSong);
playPrew.addEventListener('click', playPrewSong);

audio.addEventListener("timeupdate", () => {
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