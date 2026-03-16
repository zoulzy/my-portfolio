const portfolioData = [
  // Leadership & Ops
  {
    title: "Sprint Kumarn",
    category: "leadership",
    tag: "Project Leadership & Operations",
    image: "Project Leadership & Operations/Kumarn Management/Manage1.png",
  },
  {
    title: "Sprint Kumarn (Detail)",
    category: "leadership",
    tag: "Project Leadership & Operations",
    image: "Project Leadership & Operations/Kumarn Management/Manage2.jpg",
  },
  {
    title: "Milestone DST",
    category: "leadership",
    tag: "Project Leadership & Operations",
    image: "Project Leadership & Operations/DST/Milestone Management.png",
    link: "https://docs.google.com/spreadsheets/d/1QnkUdDcv5HduYNPQg3__1bGCbXnCSDsOKgE5rj_ELSY/edit?usp=sharing",
  },

  // Narrative
  {
    title: "GDD Kumarn - Breakdown",
    category: "narrative",
    tag: "Narrative & World Building",
    image: "Narrative & World Building/Kumarn/GameDesignBreakdown1.jpg",
  },
  {
    title: "GDD Kumarn - Level",
    category: "narrative",
    tag: "Narrative & World Building",
    image: "Narrative & World Building/Kumarn/GameDesignKumarn-Level.jpg",
  },
  {
    title: "GDD Kumarn - Backstory",
    category: "narrative",
    tag: "Narrative & World Building",
    image: "Narrative & World Building/Kumarn/Kumarn Compare backstory.jpg",
  },
  {
    title: "KhanKluay Concepts",
    category: "narrative",
    tag: "Narrative & World Building",
    image: "Narrative & World Building/KhanKluay/KhanKlauy-Concept1.png",
    gallery: [
      "Narrative & World Building/KhanKluay/KhanKlauy-Concept1.png",
      "Narrative & World Building/KhanKluay/KhanKlauy-Concept2.png",
      "Narrative & World Building/KhanKluay/KhanKlauy-Concept3.png",
    ],
  },

  // Mechanics
  {
    title: "JohnWickSlot",
    category: "mechanics",
    tag: "Mechanics & Probability Design",
    image:
      "Mechanics & Probability Design/JohnWickSlotMachine/GameDesignGambling1.png",
    link: "https://docs.google.com/document/d/1D9H2UX8fC2efIBoMHTmNcTkV9hq47plfhC-AU-eM-vo/edit?usp=sharing",
  },

  // Market Intelligence
  {
    title: "Research Reanimal",
    category: "market",
    tag: "Market Intelligence & Strategy",
    image: "Market Intelligence & Strategy/Reanimal/Research_Reanimal.png",
    link: "https://docs.google.com/presentation/d/1-_hK6gqyNwk6Ipk0eJAufhHt1T2ug4PwKQjuVFZHE9Y/edit?usp=sharing",
  },
  {
    title: "Research LittleNightmares2",
    category: "market",
    tag: "Market Intelligence & Strategy",
    image:
      "Market Intelligence & Strategy/LittleNightmares2/Research_LittleNightmares2.png",
    link: "https://docs.google.com/presentation/d/1yHX6UUGrVd1lR9XpC6XGOFFy1BR4EEAutv2o3PA3R_0/edit?usp=sharing",
  },
  {
    title: "2020 Top 100 Revenue Mobile Game",
    category: "market",
    tag: "Market Intelligence & Strategy",
    image:
      "Market Intelligence & Strategy/2020Top100RevenueMobileGameGrowth/2020 Top 100 Revenue Mobile game growth.png",
    link: "https://docs.google.com/spreadsheets/d/1oXY-mj9lTXtRx0H0yD7h1qFVIcSx5yS-RTjIu9-uWSA/edit?usp=sharing",
  },
  {
    title: "2022 Top 100 Revenue Mobile Game",
    category: "market",
    tag: "Market Intelligence & Strategy",
    image:
      "Market Intelligence & Strategy/2022Top100RevenueMobileGameGrowth/2022 Top 100 Revenue Mobile game growth.png",
    link: "https://docs.google.com/spreadsheets/d/1vksCCEjH6OwfkOWDxk7yXj-1LLpaMVTBFdpOq0X7qVU/edit?usp=sharing",
  },

  // Predictive Viability
  {
    title: "Forecast New Soul Land",
    category: "predictive",
    tag: "Predictive Market Viability",
    image:
      "Predictive Market Viability/Forecast_New_Soul_Land/Forecast New Soul Land.png",
    link: "https://docs.google.com/spreadsheets/d/1VKa2HEnaMNIYmheyPMbWyXr8rRq1AdB0I1hvKdSoYy8/edit?usp=sharing",
  },
  {
    title: "Forecast Hunter x Hunter",
    category: "predictive",
    tag: "Predictive Market Viability",
    image:
      "Predictive Market Viability/Forecast_HunterxHunter/Forecast Hunter x Hunter.png",
    link: "https://docs.google.com/spreadsheets/d/1xNqc4RAeF6zUjU1iqg70iXTD_UE0yafA/edit?usp=sharing&ouid=109769012892924036747&rtpof=true&sd=true",
  },
  {
    title: "Forecast LightOfHeaven",
    category: "predictive",
    tag: "Predictive Market Viability",
    image:
      "Predictive Market Viability/Forecast_Light_of_Heaven/Forecast_Light_of_Heaven.png",
    link: "https://docs.google.com/spreadsheets/d/1TumCEOd0NzaPpeeSIeY_qhJcJNa2zhIW51Aw_pR-e30/edit?usp=sharing",
  },

  // Assessment & QA (Merging tags internally under one logical filter button block, but distinct tags visually)
  {
    title: "GameTestingSheet",
    category: "assessment",
    tag: "Product Assessment",
    image: "Product Assessment/OutsourceAIS/Evaluation_1.png",
    link: "https://docs.google.com/spreadsheets/d/14AEOeP89ob9K37PJcHEdJEavgZ67Z0xx0xSVNyqQGVU/edit?usp=sharing",
  },
  {
    title: "QA Tree of Savior (PC)",
    category: "assessment",
    tag: "Quality Assurance",
    image: "Quality Assurance/TreeOfSavior(PC)/QA_TOS.png",
    link: "https://docs.google.com/spreadsheets/d/1vx22FpK6X0UVvdE8H2cQWFJ97QdakGGY3h8WjGABGCw/edit?usp=sharing",
  },
  {
    title: "LQA Magia (Mobile)",
    category: "assessment",
    tag: "Quality Assurance",
    image: "Quality Assurance/Magia(Mobile)/LQA_Magia.png",
    link: "https://docs.google.com/spreadsheets/d/1PBusWzWlax4TrObcPXrB9rvgBZKrbLDsbBnVmlYc6UQ/edit?usp=sharing",
  },

  // Web Solutions
  {
    title: "Company Website Werebuff",
    category: "web",
    tag: "Web Solutions",
    image: "Web Solutions/Company_Website_Werebuff/Website_Werebuff.png",
    link: "https://www.werebuffstudio.com/",
  },
];

const grid = document.getElementById("portfolio-grid");

function renderProjects(filterCategory = "all") {
  grid.innerHTML = "";

  const filtered =
    filterCategory === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filterCategory);

  // Announce to screen readers
  const announcer = document.getElementById("a11y-announcer");
  if (announcer) {
    announcer.textContent = `Showing ${filtered.length} project${filtered.length !== 1 ? "s" : ""}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
            <div class="empty-state">
                <i class="ri-folder-open-line"></i>
                <h3>No projects in this category</h3>
                <p>Try selecting a different filter above.</p>
            </div>
        `;
    return;
  }

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card fade-in";

    let linkHTML = "";
    if (project.link) {
      linkHTML = `<a href="${project.link}" target="_blank" class="card-link" title="Open external link" aria-label="Open external link for ${project.title} (opens in a new tab)">
                            <i class="ri-external-link-line" aria-hidden="true"></i>
                        </a>`;
    }

    let viewBtnParams;
    let linkParam = project.link ? `'${project.link}'` : "null";
    if (project.gallery) {
      viewBtnParams = `openModalGallery(${JSON.stringify(project.gallery).replace(/"/g, "&quot;")}, ${linkParam})`;
    } else {
      viewBtnParams = `openModal('${project.image}', ${linkParam})`;
    }

    card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${project.image}" alt="${project.title}" loading="lazy" class="card-img" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2327272a\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%2394a3b8\\' font-family=\\'sans-serif\\' font-size=\\'14\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'>Image unavailable</text></svg>';">
            </div>
            <div class="card-body">
                <span class="card-tag">${project.tag}</span>
                <h3 class="card-title">${project.title}</h3>
            </div>
            <div class="card-actions-bar">
                <button class="btn-view" onclick="${viewBtnParams}" aria-label="View ${project.title} image gallery">
                    <i class="ri-eye-line" aria-hidden="true"></i> View
                </button>
                ${linkHTML}
            </div>
        `;
    grid.appendChild(card);
  });

  // Trigger scroll animations for newly rendered cards
  if (typeof observeCards === "function") {
    observeCards();
  }
}

// Scroll Animation logic
const observeCards = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, index * 100); // 100ms stagger
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  document.querySelectorAll(".card").forEach((card) => observer.observe(card));
};

// Filtering Logic
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    // Add to clicked
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const filter = btn.getAttribute("data-filter");
    renderProjects(filter);
  });
});

// Modal Logic
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");
const prevBtn = document.getElementById("modal-prev");
const nextBtn = document.getElementById("modal-next");
const extLinkBtn = document.getElementById("modal-ext-link");

let currentGallery = [];
let currentIndex = 0;

function setupExternalLink(linkUrl) {
  if (linkUrl && linkUrl !== "null") {
    extLinkBtn.href = linkUrl;
    extLinkBtn.classList.remove("hidden");
  } else {
    extLinkBtn.classList.add("hidden");
  }
}

function openModal(imgSrc, linkUrl = null) {
  previouslyFocusedElement = document.activeElement;
  currentGallery = [];
  isGallery = false;
  modal.style.display = "flex"; // Ensure display is flex for transition
  modal.classList.add("is-active");
  modalImg.src = imgSrc;
  modalImg.onerror = function () {
    this.onerror = null;
    this.src =
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%2327272a'/><text x='50%' y='50%' fill='%2394a3b8' font-family='sans-serif' font-size='24' text-anchor='middle' dominant-baseline='middle'>Image unavailable</text></svg>";
  };
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  setupExternalLink(linkUrl);

  setTimeout(() => {
    modalImg.style.transform = "scale(1)";
    modalImg.style.opacity = "1";
  }, 10);
}

function openModalGallery(galleryArray, linkUrl = null) {
  previouslyFocusedElement = document.activeElement;
  currentGallery = galleryArray;
  currentIndex = 0;
  isGallery = true;
  modal.style.display = "flex"; // Ensure display is flex for transition
  modal.classList.add("is-active");
  setupExternalLink(linkUrl);
  updateModalImage();

  if (galleryArray.length > 1) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }

  setTimeout(() => {
    modalImg.style.transform = "scale(1)";
    modalImg.style.opacity = "1";
  }, 10);
}

function updateModalImage() {
  modalImg.style.opacity = "0.5";
  setTimeout(() => {
    modalImg.src = currentGallery[currentIndex];
    modalImg.onerror = function () {
      this.onerror = null;
      this.src =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%2327272a'/><text x='50%' y='50%' fill='%2394a3b8' font-family='sans-serif' font-size='24' text-anchor='middle' dominant-baseline='middle'>Image unavailable</text></svg>";
    };
    const caption = document.getElementById("caption");
    if (caption) {
      caption.innerHTML = `Image ${currentIndex + 1} of ${currentGallery.length}`;
    }
    modalImg.style.opacity = "1";
  }, 150);
}

if (prevBtn && nextBtn) {
  prevBtn.onclick = function (e) {
    e.stopPropagation();
    if (currentGallery.length > 0) {
      currentIndex =
        (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      updateModalImage();
    }
  };

  nextBtn.onclick = function (e) {
    e.stopPropagation();
    if (currentGallery.length > 0) {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      updateModalImage();
    }
  };
}

function closeModalAction() {
  modal.classList.remove("is-active");
  // Wait for transition to finish before hiding display
  setTimeout(() => {
    modal.style.display = "none";
    isGallery = false;

    // Return focus to the trigger element
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }, 400); // matches --ease-out-quart duration 0.4s
}

closeBtn.onclick = function () {
  closeModalAction();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModalAction();
  }
};

// Keyboard navigation for modal
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") {
      closeModalAction();
    } else if (
      e.key === "ArrowLeft" &&
      prevBtn &&
      prevBtn.style.display === "block"
    ) {
      prevBtn.click();
    } else if (
      e.key === "ArrowRight" &&
      nextBtn &&
      nextBtn.style.display === "block"
    ) {
      nextBtn.click();
    }

    // Focus Trap Logic
    if (e.key === "Tab") {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
});
