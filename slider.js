let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-play functionality
let autoplay = setInterval(() => moveSlide(1), 3000);

// Pause autoplay when user interacts
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoplay);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    autoplay = setInterval(() => moveSlide(1), 3000);
});
