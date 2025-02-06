function animateElements() {
    const elementsLeft = document.querySelectorAll('.slide-in-left');
    const elementsRight = document.querySelectorAll('.slide-in-right');
    const elementsFade = document.querySelectorAll('.fade-in');

    function handleAnimation(elements) {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            // Check if element is in viewport on initial load or on scroll
            if ((elementTop < viewportHeight && scrollPosition === 0) || scrollPosition > elementTop - viewportHeight * 0.2) {
                element.classList.add('active');
            } else if (scrollPosition < elementBottom - viewportHeight * 0.8) {
                element.classList.remove('active');
            }
        });
    }

    handleAnimation(elementsLeft);
    handleAnimation(elementsRight);
    handleAnimation(elementsFade);
}

// Call on initial load
animateElements();

// And on scroll
window.addEventListener('scroll', animateElements);
