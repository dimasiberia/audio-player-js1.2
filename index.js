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
let listSongs = [`./assets/audio/kino-spokoynaya-noch.mp3`, `./assets/audio/mixail_krug_devochka_pay.mp3`, `./assets/audio/Михаил\ Круг\ -\ Магадан.mp3`, `./assets/audio/Masha_i_medvedi_-_Zemlya_\(musmore.com\).mp3`, `./assets/audio/Zemfira_-_Iskala_\(musmore.com\).mp3`, `./assets/audio/KREC\ -\ Нежность.mp3`]
let listNameSongs = [`kino - spokoinaya noch'`, `mikhail krug - devochka pay`, `mikhail krug - magadan`, `masha i medvedi - zemlya`, `zemfira - iskala`, `krec - nezhnost'`]
let listIcons = [`./assets/image/pngimg.com\ -\ viktor_tsoi_PNG6.png`, `./assets/image/pngwing.com.png`, `./assets/image/free-icon-railroad-2539441.png`, `./assets/image/pngwing.com-2.png`, `./assets/image/zemfira.jpg.png`, `./assets/image/finger.png`]

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
function play1Audio() {
    audio.src = listSongs[0]
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audio.play();
    isPlay = true;
    songName.innerHTML = listNameSongs[0]
    songIcon.style.backgroundImage = `url('${listIcons[0]}')`;
}
function play2Audio() {
    audio.src = listSongs[1]
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audio.play();
    isPlay = true;
    songName.innerHTML = listNameSongs[1]
    songIcon.style.backgroundImage = `url('${listIcons[1]}')`;
}
function play3Audio() {
    audio.src = listSongs[2]
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audio.play();
    isPlay = true;
    songName.innerHTML = listNameSongs[2]
    songIcon.style.backgroundImage = `url('${listIcons[2]}')`;
}
function play4Audio() {
    audio.src = listSongs[3]
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        audio.play();
        isPlay = true;
        songName.innerHTML = listNameSongs[3]
        songIcon.style.backgroundImage = `url('${listIcons[3]}')`;
    
}
function play5Audio() {
    audio.src = listSongs[4]
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audio.play();
    isPlay = true;
    songName.innerHTML = listNameSongs[4]
    songIcon.style.backgroundImage = `url('${listIcons[4]}')`;
}
function play6Audio() {
    audio.src = listSongs[5]
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audio.play();
    isPlay = true;
    songName.innerHTML = listNameSongs[5]
    songIcon.style.backgroundImage = `url('${listIcons[5]}')`;
}

playBtn.addEventListener('click', playAudio);
document.querySelector('.track1').addEventListener('click',play1Audio)
document.querySelector('.track2').addEventListener('click',play2Audio)
document.querySelector('.track3').addEventListener('click',play3Audio)
document.querySelector('.track4').addEventListener('click',play4Audio)
document.querySelector('.track5').addEventListener('click',play5Audio)
document.querySelector('.track6').addEventListener('click',play6Audio)
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