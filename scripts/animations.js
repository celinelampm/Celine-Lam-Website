document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const buttons = document.querySelectorAll('.hover-animate');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hover-effect');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover-effect');
        });
    });
});