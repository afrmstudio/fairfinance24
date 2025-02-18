// Función para añadir delays a las animaciones
function setStaggeredAnimations() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Animación de elementos al hacer scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Inicializar animaciones
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', () => {
    handleScrollAnimation();
    setStaggeredAnimations();
});

// Hacer las tarjetas de servicio interactivas
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});