document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = [
    {
      title: "Snow Country",
      image: "./assets/images/Snow Country.jpeg",
      description: "oil acrylic on canvas, mulberry paper, ink, 32.5x32.5x1.5in, 2025."
    },
    {
      title: "Looking Forward from Yesterday",
      image: "./assets/images/Looking Forward from Yesterday.jpeg",
      description: "oil acrylic on canvas, sumi paper,34x34in, 2024."
    },
    {
      title: "Lost Cycle",
      image: "./assets/images/Lost Cycle.jpeg",
      description: "Oil, acrylic on canvas, inkjet paper, rice paper, ink. H44 x W38 x D1.5 in, 2025."
    },
    {
      title: "Adaptation",
      image: "./assets/images/adaptation.jpeg",
      description: "mixed media, 43 x 59 in, 2023."
    },
    {
      title: "Collective Decisions",
      image: "./assets/images/collective decisions.png",
      description: "Oil, paper, ink, acrylic on canvas, 32in x 35.5in x 1 in, 2025"
    },
    {
      title: "To Poets",
      image: "./assets/images/To Poets_.png",
      description: "34x34x1.5in, mixed media on canvas. 2024."
    },
    {
      title: "Blur",
      image: "./assets/images/Blur.png",
      description: "58x58x1.5in. Mixed medium Painting. 2025."
    }
  ];

  const portfolioGrid = document.querySelector(".portfolio-grid");
  if (!portfolioGrid) return;

  portfolioItems.forEach(item => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 5px; cursor: pointer;">
      <h3 style="margin-top: 10px;">${item.title}</h3>
      <p class="description">${item.description}</p>
    `;

    const img = projectDiv.querySelector("img");
    img.addEventListener("click", () => openModal(item.image, item.title));

    portfolioGrid.appendChild(projectDiv);
  });

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
  }
});