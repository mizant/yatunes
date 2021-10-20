import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');
const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const radioStop = document.querySelector('.radio-stop');
const audio = new Audio();

const toggleIcon = () => {
    if (videoPlayer.paused) {
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');
    } else {
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
    }
}
const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach((item) => {item.classList.remove('active')});
    playerBlock.forEach((item) => {item.classList.remove('active')});
}

const stopPlay = () => {
    videoPlayer.pause();
    audio.pause();
    videoPlayer.currentTime = 0;
    toggleIcon();
};

playerBtn.forEach((btn, i) => {
   btn.addEventListener('click', () => {
       deactivationPlayer();
       btn.classList.add('active');
       playerBlock[i].classList.add('active');
       stopPlay();

   })
})

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();