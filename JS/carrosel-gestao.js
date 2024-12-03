let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrossel-gestao img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Cíclico
    
    const carrossel = document.querySelector('.carrossel-gestao');
    const slideWidth = slides[0].clientWidth; // Usa a largura das imagens para mover o carrossel
    carrossel.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Movimenta o carrossel de forma fluida
}
