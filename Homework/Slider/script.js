// let offsetLeft = 0;
// const sliderContent = document.querySelector('.slider-content');
// const prevButton = document.querySelector('#prev');
// const nextButton = document.querySelector('#next');

// nextButton.addEventListener('click', () => {
//     offsetLeft += 256; // offsetLeft = offsetLeft + 256
//     if(offsetLeft > 768) {
//         offsetLeft = 0;
//     }
//     sliderContent.style.left = -offsetLeft + 'px';
// });

// prevButton.addEventListener('click', () => {
//     offsetLeft -= 256;
//     if(offsetLeft < 0) {
//         offsetLeft = 768;
//     }
//     sliderContent.style.left = -offsetLeft + 'px';
// })

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length; 
let slideIndex = 0;

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();

}

function showNextSlider() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if(index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlider);

updateSlider();












