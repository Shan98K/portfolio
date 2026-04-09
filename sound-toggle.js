document.addEventListener('DOMContentLoaded', () => {
    const soundContainers = document.querySelectorAll('.sound');
    const allOffBtns = document.querySelectorAll('.s-off');
    const allOnBtns = document.querySelectorAll('.s-on');
    const introAudio = new Audio('./assets/bg-sound.mp3');

    // Initial State: Hide all 'On' buttons
    allOnBtns.forEach(btn => btn.style.display = 'none');

    const updateUI = (state) => {
        if (state === 'playing') {
            allOnBtns.forEach(btn => btn.style.display = 'block');
            allOffBtns.forEach(btn => btn.style.display = 'none');
        } else {
            allOnBtns.forEach(btn => btn.style.display = 'none');
            allOffBtns.forEach(btn => btn.style.display = 'block');
        }
    };

    soundContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Check if audio is currently paused
            if (introAudio.paused) {
                introAudio.currentTime = 0;
                introAudio.play();
                updateUI('playing');
            } else {
                introAudio.pause();
                introAudio.currentTime = 0;
                updateUI('paused');
            }
        });
    });

    // Reset everything when audio ends
    // introAudio.addEventListener('ended', () => {
    //     introAudio.currentTime = 0;
    //     updateUI('paused');
    // });
});