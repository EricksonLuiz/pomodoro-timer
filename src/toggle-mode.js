let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');
const videoOverlay = document.querySelector('.video-overlay');
const overlay = document.querySelector('.overlay');

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');
    const mode = darkMode ? 'light' : 'dark';
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;
    darkMode = !darkMode;

    if (darkMode) {
        videoOverlay.classList.remove('video-overlay-light');
        overlay.classList.remove('overlay-light');
    } else {
        videoOverlay.classList.add('video-overlay-light');
        overlay.classList.add('overlay-light');
    }
});