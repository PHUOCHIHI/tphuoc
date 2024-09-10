document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');

    function animateHeart() {
        heart.style.transform = `rotate(-45deg) scale(${1 + Math.sin(Date.now() / 500) * 0.1})`;
        requestAnimationFrame(animateHeart);
    }

    animateHeart();
});