let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const maxIndex = slides.length - 1;
    slideIndex += n;
    
    if (slideIndex < 0) {
        slideIndex = maxIndex;
    } else if (slideIndex > maxIndex) {
        slideIndex = 0;
    }
    
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-content').style.transform = `translateX(${offset}%)`;
}