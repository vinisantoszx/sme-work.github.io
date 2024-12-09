let gestaoCurrentSlide = 0; // Índice atual do carrossel de gestão

function moveGestaoSlide(step) {
    const gestaoCarousel = document.querySelector('.carrossel-gestao');
    const gestaoSlides = gestaoCarousel.querySelectorAll('img');
    const totalGestaoSlides = gestaoSlides.length;

    // Atualiza o índice de forma cíclica
    gestaoCurrentSlide = (gestaoCurrentSlide + step + totalGestaoSlides) % totalGestaoSlides;

    // Calcula a largura de um slide e movimenta o carrossel
    const slideWidth = gestaoSlides[0].clientWidth;
    gestaoCarousel.style.transform = `translateX(-${gestaoCurrentSlide * slideWidth}px)`;
}

// Ajusta o carrossel ao redimensionar a janela
window.addEventListener('resize', () => {
    const gestaoCarousel = document.querySelector('.carrossel-gestao');
    const gestaoSlides = gestaoCarousel.querySelectorAll('img');
    const slideWidth = gestaoSlides[0].clientWidth;
    gestaoCarousel.style.transform = `translateX(-${gestaoCurrentSlide * slideWidth}px)`;
});
