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
// Add this inside your openModal function for better mobile UX
function openModal(imageSrc, title) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="${imageSrc}" alt="${title}">
      <p>${title}</p>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.remove();
  });
  
  // Prevent scrolling when modal is open
  document.body.style.overflow = "hidden";
  
  // Re-enable scrolling when modal closes
  modal.addEventListener("click", () => {
    document.body.style.overflow = "auto";
  });
}
