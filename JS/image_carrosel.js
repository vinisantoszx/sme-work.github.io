let currentIndex = 0;
const intervalTime = 10000;
const slides = document.querySelector(".carossel-inner img");
const totalSlides = slides.length;

    function moveSlide(step) {
        const slides = document.querySelectorAll(".carossel-inner img");
        const totalSlides = slides.length;
        
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        const offset = -currentIndex * 100;
        document.querySelector(".carossel-inner").style.transform = `translateX(${offset}%)`;
    }

    function startAutoSlide() {
        setInterval(() => {
            moveSlide(1);
        }, intervalTime);
    }

startAutoSlide();