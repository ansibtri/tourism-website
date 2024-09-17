const carousel = document.querySelector('#carousel div.slides');
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = carousel.children; // getting children of carousel slides
let currentSlide = document.querySelector('.slides .active');
let slideCount = 0;

const checkSlide = (slideCount) => {
    if (slideCount == 0) {
        prevBtn.classList.add('hide');
    }
    if (slideCount == slides.length -1) {
        nextBtn.classList.add('hide');
    }
    if (slideCount != 0 && slideCount != (slides.length-1)) {
        if (prevBtn.classList.contains('hide')) {
            prevBtn.classList.remove('hide')
        }
        if (nextBtn.classList.contains('hide')) {
            nextBtn.classList.remove('hide')
        }
    }
}
checkSlide(slideCount);
const nextSlide = () => {
    currentSlide.classList.remove('active');
    currentSlide.nextElementSibling.classList.add('active')
    currentSlide = document.querySelector('.slides .active');
    slideCount++;
    checkSlide(slideCount);
}
const prevSlide = () => {
    currentSlide.classList.remove('active');
    currentSlide.previousElementSibling.classList.add('active')
    currentSlide = document.querySelector('.slides .active');
    slideCount--;
    checkSlide(slideCount);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
