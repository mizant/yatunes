export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioStop = document.querySelector('.radio-stop');
    const radioItem = document.querySelectorAll('.radio-item');
    const audioVolume = document.querySelector('.audio-volume');
    const volumeMute = document.querySelector('.fa-volume-down');
    const playerBtn = document.querySelectorAll('.player-btn');


    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

        const stopPlay = () => {
            audio.pause();
            changeIconPlay();
        };

        
        playerBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.classList.add('active');
                stopPlay();
         
            })
         });


    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

   const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select')) 
    elem.classList.add('select');
   }


    radioNavigation.addEventListener('change', event => {
        const target = event.target;
       const parrent = target.closest('.radio-item'); 
      selectItem(parrent);

      const title = parrent.querySelector('.radio-name').textContent;
       radioHeaderBig.textContent = title;

       const urlImg = parrent.querySelector('.radio-img').src;
       radioCoverImg.src=urlImg
       
        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    })


    volumeMute.addEventListener('click', () => {
        let volume = changeAudioValue;
        if (audio.volume > 0) {
            audio.volume = 0
        } else {
            audio.volume = document.querySelector("input[class='audio-volume']").value/100;
        };
    })
    
};