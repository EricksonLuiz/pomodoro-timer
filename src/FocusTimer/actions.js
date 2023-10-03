import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if (state.isMute) {
        sounds.bgAudio.loop = true;
        sounds.bgAudioThunder.loop = true;
        sounds.bgAudioThunder.volume = 0.4;
        sounds.bgAudio.play();
        sounds.bgAudioThunder.play();

        const thunderDuration = sounds.bgAudioThunder.duration;
        sounds.bgAudioThunder.addEventListener('timeupdate', () => {
            const currentTime = sounds.bgAudioThunder.currentTime;
            if (thunderDuration - currentTime <= 5) {
                sounds.bgAudioThunder2.volume = 0.4;
                sounds.bgAudioThunder2.play();
            }
        });
    } else {
        sounds.bgAudio.loop = false; 
        sounds.bgAudioThunder.loop = false;
        sounds.bgAudioThunder2.loop = false;
        sounds.bgAudio.pause();
        sounds.bgAudioThunder.pause();
        sounds.bgAudioThunder2.pause();
    }
}
