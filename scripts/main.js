document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemDetails = item.dataset.details;
            modalContent.innerHTML = itemDetails;
            modal.classList.add('open');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });
});