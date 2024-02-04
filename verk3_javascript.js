let touchStartX = 0;
const swipeThreshold = 50; // Adjust this value as needed

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const touchEndX = event.touches[0].clientX;
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > swipeThreshold) {
        // Swipe right
        toggleFullscreen();
        showBall();
    }
}

function toggleFullscreen() {
    const element = document.getElementById('myElement');

    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (element.requestFullscreen) {
        element.requestFullscreen();
    }
}

function showBall() {
    const centeredBall = document.getElementById('centeredBall');
    centeredBall.style.display = 'block';
}
