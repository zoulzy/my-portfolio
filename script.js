const portfolioData = [
    // Leadership & Ops
    {
        title: "Sprint Kumarn",
        category: "leadership",
        tag: "Project Leadership & Operations",
        image: "Project Leadership & Operations/Kumarn Management/Manage1.png"
    },
    {
        title: "Sprint Kumarn (Detail)",
        category: "leadership",
        tag: "Project Leadership & Operations",
        image: "Project Leadership & Operations/Kumarn Management/Manage2.jpg"
    },
    {
        title: "Milestone DST",
        category: "leadership",
        tag: "Project Leadership & Operations",
        image: "Project Leadership & Operations/DST/Milestone Management.png",
        link: "https://docs.google.com/spreadsheets/d/1QnkUdDcv5HduYNPQg3__1bGCbXnCSDsOKgE5rj_ELSY/edit?usp=sharing"
    },

    // Narrative
    {
        title: "GDD Kumarn - Breakdown",
        category: "narrative",
        tag: "Narrative & World Building",
        image: "Narrative & World Building/Kumarn/GameDesignBreakdown1.jpg"
    },
    {
        title: "GDD Kumarn - Level",
        category: "narrative",
        tag: "Narrative & World Building",
        image: "Narrative & World Building/Kumarn/GameDesignKumarn-Level.jpg"
    },
    {
        title: "GDD Kumarn - Backstory",
        category: "narrative",
        tag: "Narrative & World Building",
        image: "Narrative & World Building/Kumarn/Kumarn Compare backstory.jpg"
    },
    {
        title: "KhanKluay Concepts",
        category: "narrative",
        tag: "Narrative & World Building",
        image: "Narrative & World Building/KhanKluay/KhanKlauy-Concept1.png",
        gallery: [
            "Narrative & World Building/KhanKluay/KhanKlauy-Concept1.png",
            "Narrative & World Building/KhanKluay/KhanKlauy-Concept2.png",
            "Narrative & World Building/KhanKluay/KhanKlauy-Concept3.png"
        ]
    },

    // Mechanics
    {
        title: "JohnWickSlot",
        category: "mechanics",
        tag: "Mechanics & Probability Design",
        image: "Mechanics & Probability Design/JohnWickSlotMachine/GameDesignGambling1.png",
        link: "https://docs.google.com/document/d/1D9H2UX8fC2efIBoMHTmNcTkV9hq47plfhC-AU-eM-vo/edit?usp=sharing"
    },

    // Market Intelligence
    {
        title: "Research Reanimal",
        category: "market",
        tag: "Market Intelligence & Strategy",
        image: "Market Intelligence & Strategy/Reanimal/Research_Reanimal.png",
        link: "https://docs.google.com/presentation/d/1-_hK6gqyNwk6Ipk0eJAufhHt1T2ug4PwKQjuVFZHE9Y/edit?usp=sharing"
    },
    {
        title: "Research LittleNightmares2",
        category: "market",
        tag: "Market Intelligence & Strategy",
        image: "Market Intelligence & Strategy/LittleNightmares2/Research_LittleNightmares2.png",
        link: "https://docs.google.com/presentation/d/1yHX6UUGrVd1lR9XpC6XGOFFy1BR4EEAutv2o3PA3R_0/edit?usp=sharing"
    },
    {
        title: "2020 Top 100 Revenue Mobile Game",
        category: "market",
        tag: "Market Intelligence & Strategy",
        image: "Market Intelligence & Strategy/2020Top100RevenueMobileGameGrowth/2020 Top 100 Revenue Mobile game growth.png",
        link: "https://docs.google.com/spreadsheets/d/1oXY-mj9lTXtRx0H0yD7h1qFVIcSx5yS-RTjIu9-uWSA/edit?usp=sharing"
    },
    {
        title: "2022 Top 100 Revenue Mobile Game",
        category: "market",
        tag: "Market Intelligence & Strategy",
        image: "Market Intelligence & Strategy/2022Top100RevenueMobileGameGrowth/2022 Top 100 Revenue Mobile game growth.png",
        link: "https://docs.google.com/spreadsheets/d/1vksCCEjH6OwfkOWDxk7yXj-1LLpaMVTBFdpOq0X7qVU/edit?usp=sharing"
    },

    // Predictive Viability
    {
        title: "Forecast New Soul Land",
        category: "predictive",
        tag: "Predictive Market Viability",
        image: "Predictive Market Viability/Forecast_New_Soul_Land/Forecast New Soul Land.png",
        link: "https://docs.google.com/spreadsheets/d/1VKa2HEnaMNIYmheyPMbWyXr8rRq1AdB0I1hvKdSoYy8/edit?usp=sharing"
    },
    {
        title: "Forecast Hunter x Hunter",
        category: "predictive",
        tag: "Predictive Market Viability",
        image: "Predictive Market Viability/Forecast_HunterxHunter/Forecast Hunter x Hunter.png",
        link: "https://docs.google.com/spreadsheets/d/1xNqc4RAeF6zUjU1iqg70iXTD_UE0yafA/edit?usp=sharing&ouid=109769012892924036747&rtpof=true&sd=true"
    },
    {
        title: "Forecast LightOfHeaven",
        category: "predictive",
        tag: "Predictive Market Viability",
        image: "Predictive Market Viability/Forecast_Light_of_Heaven/Forecast_Light_of_Heaven.png",
        link: "https://docs.google.com/spreadsheets/d/1TumCEOd0NzaPpeeSIeY_qhJcJNa2zhIW51Aw_pR-e30/edit?usp=sharing"
    },

    // Assessment & QA (Merging tags internally under one logical filter button block, but distinct tags visually)
    {
        title: "GameTestingSheet",
        category: "assessment",
        tag: "Product Assessment",
        image: "Product Assessment/OutsourceAIS/Evaluation_1.png",
        link: "https://docs.google.com/spreadsheets/d/14AEOeP89ob9K37PJcHEdJEavgZ67Z0xx0xSVNyqQGVU/edit?usp=sharing"
    },
    {
        title: "QA Tree of Savior (PC)",
        category: "assessment",
        tag: "Quality Assurance",
        image: "Quality Assurance/TreeOfSavior(PC)/QA_TOS.png",
        link: "https://docs.google.com/spreadsheets/d/1vx22FpK6X0UVvdE8H2cQWFJ97QdakGGY3h8WjGABGCw/edit?usp=sharing"
    },
    {
        title: "LQA Magia (Mobile)",
        category: "assessment",
        tag: "Quality Assurance",
        image: "Quality Assurance/Magia(Mobile)/LQA_Magia.png",
        link: "https://docs.google.com/spreadsheets/d/1PBusWzWlax4TrObcPXrB9rvgBZKrbLDsbBnVmlYc6UQ/edit?usp=sharing"
    },

    // Web Solutions
    {
        title: "Company Website Werebuff",
        category: "web",
        tag: "Web Solutions",
        image: "Web Solutions/Company_Website_Werebuff/Website_Werebuff.png",
        link: "https://www.werebuffstudio.com/"
    }
];

const grid = document.getElementById('portfolio-grid');

function renderProjects(filterCategory = 'all') {
    grid.innerHTML = '';
    
    const filtered = filterCategory === 'all' 
        ? portfolioData 
        : portfolioData.filter(p => p.category === filterCategory);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        
        let linkHTML = '';
        if (project.link) {
            linkHTML = `<a href="${project.link}" target="_blank" class="card-link" title="Open Project Link">
                            <i class="ri-external-link-line"></i>
                        </a>`;
        }

        let viewBtnParams;
        let linkParam = project.link ? `'${project.link}'` : 'null';
        if (project.gallery) {
            viewBtnParams = `openModalGallery(${JSON.stringify(project.gallery).replace(/"/g, "&quot;")}, ${linkParam})`;
        } else {
            viewBtnParams = `openModal('${project.image}', ${linkParam})`;
        }

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${project.image}" alt="${project.title}" loading="lazy" class="card-img">
                <div class="card-overlay">
                    <button class="btn-view" onclick="${viewBtnParams}">
                        <i class="ri-eye-line"></i> View
                    </button>
                    ${linkHTML}
                </div>
            </div>
            <div class="card-body">
                <span class="card-tag">${project.tag}</span>
                <h3 class="card-title">${project.title}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
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
    if (linkUrl && linkUrl !== 'null') {
        extLinkBtn.href = linkUrl;
        extLinkBtn.style.display = "inline-flex";
    } else {
        extLinkBtn.style.display = "none";
    }
}

function openModal(imgSrc, linkUrl = null) {
    currentGallery = [];
    modal.style.display = "flex";
    modalImg.src = imgSrc;
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    setupExternalLink(linkUrl);

    setTimeout(() => {
        modalImg.style.transform = "scale(1)";
        modalImg.style.opacity = "1";
    }, 10);
}

function openModalGallery(galleryArray, linkUrl = null) {
    currentGallery = galleryArray;
    currentIndex = 0;
    modal.style.display = "flex";
    setupExternalLink(linkUrl);
    updateModalImage();
    
    if (galleryArray.length > 1) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
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
        modalImg.style.opacity = "1";
    }, 150);
}

if(prevBtn && nextBtn) {
    prevBtn.onclick = function(e) {
        e.stopPropagation();
        if (currentGallery.length > 0) {
            currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
            updateModalImage();
        }
    }

    nextBtn.onclick = function(e) {
        e.stopPropagation();
        if (currentGallery.length > 0) {
            currentIndex = (currentIndex + 1) % currentGallery.length;
            updateModalImage();
        }
    }
}

function closeModalAction() {
    modalImg.style.transform = "scale(0.95)";
    modalImg.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

closeBtn.onclick = function() {
    closeModalAction();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModalAction();
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});
