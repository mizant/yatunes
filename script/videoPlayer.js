export const videoPlayerInit = () => {
    console.log ('VideoPlayer init');
   
// video-player
// video-button__play
// video-button__stop
// video-time__passed
// video-progress
// video-time__total

const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const videoProgress = document.querySelector('.video-progress');
 const videoTimePassed = document.querySelector('.video-time__passed');
const videoTimeTotal = document.querySelector('.video-time__total');
const videoVolume = document.querySelector('.video-volume');
const volumeMute = document.querySelector('.fa-volume-down');
const videoFullscreen = document.querySelector('.video-fullscreen');
const volumeOff = document.querySelector('.fa-volume-off');



videoFullscreen.addEventListener('click', ()=> {
    videoPlayer.requestFullscreen();
})


const toggleIcon = () => {
    if (videoPlayer.paused) {
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');
    } else {
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
    }
}

const togglePlay = () => {
    if (videoPlayer.paused){
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
    toggleIcon();
}

const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    toggleIcon();
};

const addZero = n => n <10 ? '0'+ n : n; 

const changeValue = () => {
    const valueVolume = videoVolume.value;
    videoPlayer.volume = valueVolume / 100;
};

videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);

videoButtonStop.addEventListener('click', stopPlay);

videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100;
 
    let minutePassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor (currentTime % 60);

    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor (duration % 60);

    videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed);
    videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);
})

videoProgress.addEventListener('input', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) /100;
})

videoVolume.addEventListener('input', changeValue);

volumeMute.addEventListener('click', () => {
    let volume = changeValue;
    if (videoPlayer.volume > 0) {
        videoPlayer.volume = 0
        volumeOff.style.display = 'block';
        volumeMute.style.display = 'none';
    } else {
        videoPlayer.volume = document.querySelector("input[class='video-volume']").value/100;
        volumeOff.style.display = 'none';
        volumeMute.style.display = 'block';
    };
})

volumeOff.addEventListener('click', () => {
    videoPlayer.volume = document.querySelector("input[class='video-volume']").value/100;
    volumeOff.style.display = 'none';
    volumeMute.style.display = 'block';

})

changeValue();

};

