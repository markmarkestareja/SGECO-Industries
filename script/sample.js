// scroll-speed.js
(function () {
  const baseSections = document.querySelectorAll(".base-speed");

  baseSections.forEach((base) => {
    const slows = base.querySelectorAll(".slow");
    const fasts = base.querySelectorAll(".fast");

    if (slows.length === 0 && fasts.length === 0) return;

    const speed = 0.10;     // slow layer
    const speed2 = -0.10;   // fast layer
    const max = 50;
    const min = -50;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    function update() {
      const rect = base.getBoundingClientRect();

      slows.forEach((el) => {
        const y = -rect.top * speed;
        el.style.setProperty("--parallax-y", `${Math.max(Math.min(y, max), min)}px`);
      });

      fasts.forEach((el) => {
        const y2 = -rect.top * speed2;
        el.style.setProperty("--parallax-y", `${Math.max(Math.min(y2, max), min)}px`);
      });

      ticking = false;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();


//scroll-smooth.js
document.addEventListener("DOMContentLoaded", () => {
  // 🚫 Disable Lenis on selected pages
  if (document.body.dataset.disableLenis === "true") {
    document.documentElement.classList.remove("lenis");
    document.body.classList.remove("lenis");
    return;
  }

  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

//change-background.js
const sections = document.querySelectorAll("section");
const body = document.body;

function getActiveSection() {
  let viewportCenter = window.innerHeight / 2;

  let closestSection = null;
  let closestDistance = Infinity;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section;
    }
  });

  if (closestSection) {
    body.style.backgroundColor = closestSection.dataset.color;
  }
}

window.addEventListener("scroll", getActiveSection);
window.addEventListener("resize", getActiveSection);

// Run once on load
getActiveSection();


//reveal-animation.js
const add_reveals = document.querySelectorAll('.add-reveal');

const observerAddReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('reveal');
        } 
        // else {
        //     entry.target.classList.remove('reveal');
        // }
    });
}, {
    threshold:0.3
});

add_reveals.forEach(add_reveal => observerAddReveal.observe(add_reveal));


//header.js
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Toggle main mobile menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Toggle dropdowns for mobile
document.querySelectorAll(".dropdown-sub > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 1300) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 1300) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("open");
    }
  });
});


//ventilator-product.js
const carousel2 = document.querySelector(".carousel2");
const nextBtn2 = document.querySelector(".next-2");
const prevBtn2 = document.querySelector(".prev-2");

if (carousel2 && nextBtn2 && prevBtn2){
  nextBtn2.addEventListener("click", () => {
    carousel2.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn2.addEventListener("click", () => {
    carousel2.scrollBy({ left: -300, behavior: "smooth" });
  });

  carousel2.addEventListener("touchmove", (e) => {
    const diff = startX - e.touches[0].clientX;
    carousel2.scrollLeft += diff * 0.8;
  });
}

//card-2.js

class Card1 extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "This is an untitled card";
    const img = this.getAttribute("img") || "";
    const link = this.getAttribute("link") || "#";

    this.innerHTML = `
            <div class="card2">
                <div class="card2-img">
                    <img src="${img}" alt="${title}" loading="lazy">
                </div>
                <div class="card2-content">
                    <h3>${title}</h3>
                    <a href="${link}">Discover More →</a>
                </div>
            </div>
            `;
  }
}

customElements.define("card-2", Card1);


//news-update-card.js

class newsUpdateCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "This is an untitled card";
    const img = this.getAttribute("img") || "";
    const link = this.getAttribute("link") || "#";
    const publishedDate = this.getAttribute("publishedDate") || "#";

    this.innerHTML = `
                <div class="news-update-card">
                    <div class="news-update-card-img">
                        <img src="${img}" alt="${title}" loading="lazy">
                    </div>
                    <div class="news-update-content">
                        <h3>${title}</h3>
                        <div class="news-update-foot">
                            <p>${publishedDate}</p>
                            <a href="${link}">Read <span>→</span></a>
                        </div>
                    </div>
                </div>
            `;
  }
}

customElements.define("news-update-card", newsUpdateCard);

// card-small-1.js

class CardSmall1 extends HTMLElement{
    connectedCallback(){
        const svg = this.getAttribute("svg") || ""
        const title = this.getAttribute("title") || "This is untitled";
        const desc = this.getAttribute("desc") || "";

        this.innerHTML = `
            <div class="card-small-1">
                <img src="${svg}" alt="${title}">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>
        `;
    }
}

customElements.define("card-small-1", CardSmall1); 


//prod-category-card.js

class ProductCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "This is an untitled card";
    const img = this.getAttribute("img") || "";
    const link = this.getAttribute("link") || "#";

    this.innerHTML = `
        <div class="prod-category-card">
            <div class="prod-category-img">
                <img src="${img}" alt="${title}" loading="lazy">
            </div>

            <div class="prod-category-text">
                <h3>${title}</h3>
                <a class="btn-3" href="${link}">Discover More →</a>
            </div>
        </div>
        `;
  }
}

customElements.define("product-card", ProductCard);


//about-history.js
const slides = document.querySelectorAll(".history-card");

const observerAbout = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

slides.forEach(slide => observerAbout.observe(slide));


//faq.js

class FAQItem extends HTMLElement{
        connectedCallback(){
            const question = this.getAttribute("question") || "";
            const answer = this.getAttribute("answer") || "";

            this.innerHTML = `
                <div class="faq-item">
                    <button class="faq-question">${question}</button>
                    <div class="faq-answer">
                        <p>${answer}</p>
                    </div>
                </div>
            `;
        }
    }

    customElements.define("faq-item", FAQItem);
    
    
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            // Close all other items
            faqItems.forEach((i) => {
                if (i !== item) i.classList.remove("active");
            });

            // Toggle current one
            item.classList.toggle("active");
        });
    });

// skylight-component-sidebar.js

const links = document.querySelectorAll(".skylight-component-sidebar a");
const main = document.getElementById("component-content");

/* ===============================
   Load Component via AJAX
================================ */
function loadComponent(url, link) {
  links.forEach((a) => a.classList.remove("active"));
  link.classList.add("active");

  const name = link.textContent.trim().toLowerCase().replace(/\s+/g, "-");
  main.classList.forEach((c) => {
    if (c.startsWith("active-")) main.classList.remove(c);
  });
  main.classList.add(`active-${name}`);

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load content");
      return res.text();
    })
    .then((html) => {
      main.innerHTML = html;

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      initRevealAnimations(); // ✅ re-init after AJAX load
    })
    .catch((err) => {
      main.innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
}

/* ===============================
   Sidebar Navigation Click
================================ */
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadComponent(link.getAttribute("href"), link);
  });
});

/* ===============================
   Sidebar Collapse
================================ */
const btnCollapse = document.querySelector(".btn-collapse");
const skylightComponentSidebar = document.querySelector(
  ".skylight-component-sidebar"
);

if (btnCollapse && skylightComponentSidebar) {
  btnCollapse.addEventListener("click", () => {
    skylightComponentSidebar.classList.toggle("skylight-menu-open");
  });
}

/* ===============================
   Reveal Animation (IntersectionObserver)
================================ */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal2");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ===============================
   Initial Page Load
================================ */
window.addEventListener("DOMContentLoaded", () => {
  const defaultLink = document.querySelector(
    ".skylight-component-sidebar a.active"
  );

  if (defaultLink) {
    loadComponent(defaultLink.getAttribute("href"), defaultLink);
  }
});


// attic-card.js

class atticCard extends HTMLElement {
  connectedCallback() {
    const img = this.getAttribute("atticImg") || "";
    const title = this.getAttribute("atticTitle") || "";
    const paragraph = this.getAttribute("atticParagraph") || "";
    const length = this.getAttribute("atticLength") || "";
    const size = this.getAttribute("atticSize") || "";

    this.innerHTML = `
                <div class="attic-card">
                    <div class="attic-img">
                        <img src="${img}" alt="">
                    </div>

                    <div class="attic-text">
                        <h2>${title}</h2>
                        
                        ${paragraph}

                        ${length}

                        ${size}
                        

                        <button class="btn-1">
                            <a href="contact">Inquire about this product</a>
                        </button>

                    </div>
                </div>
            `;
  }
}

customElements.define("attic-card", atticCard);

// gvs-table.js
document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector(".fan-table");
  if (!table) return;

  const headers = Array.from(table.querySelectorAll("thead th")).map(
    (th) => th.textContent
  );

  table.querySelectorAll("tbody tr").forEach((row) => {
    row.querySelectorAll("td").forEach((cell, i) => {
      cell.setAttribute("data-label", headers[i]);
    });
  });
});



// img-gallery.js
const fullImgBox = document.getElementById("full-img-box");
const fullImg = document.getElementById("full-img");
const fullImgClass = document.querySelector(".full-img");

// Full Image Open
function openFullImg(pic) {
    fullImg.src = pic;
    fullImgBox.classList.add("show");
    fullImgClass.style.height = "100vh";

    headerNav.style.display = "none";

    document.body.style.overflow = "hidden";
    if (window.lenis) lenis.stop();
}

// Full Image Close
function closeFullImg() {
    fullImgBox.classList.remove("show");
    fullImgClass.style.height = "0";

    setTimeout(() => {
        headerNav.style.display = "block";
        document.body.style.overflow = "auto";
        if (window.lenis) lenis.start();
    }, 350);
}



// ------------------------------------
// GALLERY SYSTEM
// ------------------------------------
const galleryBasePath = "asset/img/resources-menu/gallery/";
const galleryFolders = {
    residential: "skylight-residential/",
    industrial: "skylight-industrial/",
    gvs: "gvs/",
    gvw: "gvw/",
    hatchway: "hatchway/"
};

const galleryData = {
    residential: [
        "Bathroom 2.webp",
        "Bathroom 3.webp",
        "C-Orb2 (sml).webp",
        "Couple on sofa copy.webp",
        "Dining sml.webp",
        "Hallway.webp",
        "Les Walk In Robe.webp",
        "Suntrenz - 05.webp",
        "Suntrenz - 06.webp",
        "Suntrenz - After.webp",
        "Tile - 01.webp",
        "VL Open Kitchen.webp"
    ],

    industrial: [
        "After - Pulu Amsic (Sml).webp",
        "APF - 03.webp",
        "APF - 05.webp",
        "Art Centre (Sml).webp",
        "Avanti - 02.webp",
        "CO-01.webp",
        "CO-03.webp",
        "Factory 1.webp",
        "Jotun (sml).webp",
        "Jumbo Jenra - 03.webp",
        "Lucena Bus Terminal.webp",
        "Office Toilets.webp",
        "SG Eco Factory 2.webp",
        "SG Eco Factory 3.webp"
    ],

    gvs: [
        "GVS - Panel Adjust.webp",
        "GVS - Panel Swivel.webp",
        "In the Roof 4.webp",
        "GVS x 3.webp",
        "GVS - 01.webp"
    ],

    gvw: [
        "GVW - 09.webp",
        "GVW - Hamilton 2.webp",
        "GVW - Hamilton 1.webp",
        "GVW - 07.webp",
        "GV - SG Eco.webp",
        "GVW - 04.webp",
        "IMG_9891.webp",
        "IMG_9890.webp",
        "GVW - 06.webp",
        "AGA - Peoples Air Cargo.webp",
        "SG ECO - 02.webp",
        "SG ECO - 01.webp"
    ],

    hatchway: [
        "Hatch - Climbing 2.webp",
        "Hatch - Climbing out.webp",
        "Hatch & Ladder.webp",
        "81996270_662524937850068_2353140378783186944_n.webp",
        "83027098_3295719483776868_7159180453402902528_n.webp",
        "IMG-b51698b48f216cb39cf8684b1d99c931-V.webp",
        "IMG-d09d36844db663ba514e0d30090b5808-V.webp"
    ]
};



// Create Image Card
function createGalleryImgCard(src, containerSelector) {
    const container = document.querySelector(containerSelector);
    if(!container) return;

    const galleryImgCard = document.createElement("div");
    galleryImgCard.classList.add("gallery-img-card");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "gallery image";
    img.onclick = () => openFullImg(src);

    galleryImgCard.appendChild(img);
    document.querySelector(containerSelector).appendChild(galleryImgCard);
}

// Load Gallery by Category
function loadGallery(category, containerSelector) {
    const folder = galleryFolders[category];

    galleryData[category].forEach(fileName => {
        createGalleryImgCard(
            galleryBasePath + folder + fileName,
            containerSelector
        );
    });
}

// Load Image gallery
loadGallery("residential", "#residential-gallery");
loadGallery("industrial", "#industrial-gallery");
loadGallery("gvs", "#gvs-gallery");
loadGallery("gvw", "#gvw-gallery");
loadGallery("hatchway", "#hatchway-gallery");


// eco-blog.js
const ecoBlog = [
    {
        img: "asset/img/resources-menu/eco-blog/Worldbex 2015 - 04 1.webp",
        title: "Why Should you Choose SG ECO Products?",
        desc: "Climate change is a global issue. We may not stop it from happening over the next 10 to 20 years but we can find ways to mitigate its potentially huge impact on humanity.",
        date: "June 22, 2014",
        link: "eco-blog-list?ecoBlog=Why-Should-you-Choose-SG-ECO-Products"
    },
    {
        img: "asset/img/resources-menu/eco-blog/website.webp",
        title: "SG ECO Industries Premieres Newly Designed Website",
        desc: "Clark, Pampanga, May 2014 — SG Eco Industries, a leading manufacturer of tubular skylights and ventilators, recently announced the launch of their newly redesigned website which can be viewed by visiting www.eco.ph.",
        date: "May 27, 2014",
        link: "eco-blog-list?ecoBlog=SG-ECO-Industries-Premieres-Newly-Designed-Website"
    },
    {
        img: "asset/img/resources-menu/eco-blog/CO-02.webp",
        title: "Sky Tunnel - Energy Efficient Skylight Indoor Lighting",
        desc: "Sky Tunnel is a tubular skylight which allows for the transfer of daylight from above the roof to pass into the interior of the building or office. The device requires no electricity to function and...",
        date: "June 22, 2014",
        link: "eco-blog-list?ecoBlog=Sky-Tunnel-Energy-Efficient-Skylight-Indoor-Lighting"
    },
    {
        img: "asset/img/resources-menu/eco-blog/IMG_9890.webp",
        title: "How SG Eco Ventilators Promote a Better Working Environment within Commercial Spaces",
        desc: "Ventilators improve the indoor air quality and energy efficiency of any building. The functionality of ventilation systems vary depending on the kind of ventilators used and the area that it covers.  SG Eco provides a",
        date: "July 21, 2014",
        link: "eco-blog-list?ecoBlog=How-SG-Eco-Ventilators-Promote-a-Better-Working-Environment-within-Commercial-Spaces"
    },
    {
        img: "asset/img/resources-menu/eco-blog/sge office.webp",
        title: "Welcome to the SG Eco Green Construction Blog",
        desc: "SG Eco Industries is a pioneering manufacturer and distributor of tubular Skylights, Ventilation Systems, their components and custom OEM manufacturing for the green energy industry. With more than 2 decades of experience, we are specialists...",
        date: "May 12, 2014",
        link: "eco-blog-list?ecoBlog=Welcome-to-the-SG-Eco-Green-Construction-Blog"
    },
    {
        img: "asset/img/resources-menu/eco-blog/gvw.webp",
        title: "Solve Your Ventilation Issues with SG Eco Ventilators",
        desc: "Ventilators improve the indoor air quality and energy efficiency of any building.",
        date: "July 6, 2014",
        link: "eco-blog-list?ecoBlog=Solve-Your-Ventilation-Issues-with-SG-Eco-Ventilators"
    },
    {
        img: "asset/img/resources-menu/eco-blog/man working.webp",
        title: "Natural Light in Offices Boosts Health",
        desc: "A study conducted by researchers at the Northwest Medicine and the University of Illinois at Urbana-Champaign shows how natural light can boost workers' health in the office.  SG Eco's Skylights are designed to...",
        date: "August 11, 2014",
        link: "eco-blog-list?ecoBlog=Natural-Light-in-Offices-Boosts-Health"
    }
    // ,
    // {
    //     img: "asset/img/resources-menu/eco-blog/man working.webp",
    //     title: "The Benefits of Installing Skylights in Your Property",
    //     desc: "Since moving into the age of the ‘green revolution’, property owners have been looking for ways to improve the safety and comfort of their homes and buildings utilizing environmentally friendly products.",
    //     date: "August 28, 2014",
    //     link: "eco-blog-list?ecoBlog=The-Benefits-of-Installing-Skylights-in-Your-Property"
    // }

]


function createEcoBlogCard(img, title, desc, date, link){
    const container = document.querySelector(".eco-blog-card-container")
    if (!container) return;

    const ecoBlogCard = document.createElement("div");
    ecoBlogCard.classList.add("eco-blog-card");

    ecoBlogCard.innerHTML = `
        <div class="eco-blog-img">
            <img src="${img}" alt="">
        </div>
        <div class="eco-blog-text">
            <div class="eco-blog-text-top">
                <h2>${title}</h2>
                <p>${desc}</p>
            </div>
            <div class="eco-blog-text-footer">
                <p>${date}</p>
                <a href="${link}">Read More ↗</a>
            </div>
        </div>
    `;

    document.querySelector(".eco-blog-card-container").appendChild(ecoBlogCard);

}

ecoBlog.forEach(post => {
    createEcoBlogCard(post.img, post.title, post.desc, post.date, post.link);
});

// case-study-carousel.js

const caseStudyContainer = document.querySelector('.js-carousel2');


if(caseStudyContainer) {
    let caseStudyHtml = "";

    const caseStudyData = [
        'American Plaque Factory', 
        'JJ Supermarket',
        'Philexcel Main Office',
        'Commercial Workspace',
        'Philexcel Business Center 2',
        'Lucena Bus Terminal',
        'Nippon Express',
        'Toyota Alabang',
        'Green Cross Office and Warehouse'

    ];

    caseStudyData.forEach(caseStudyDatum => {
        caseStudyHtml += `
            <card-2 img="asset/img/main/main-case-study/${caseStudyDatum}.webp" title="${caseStudyDatum}"
                link="asset/pdf/case-studies/${caseStudyDatum}.pdf">
            </card-2>
        `;
    });

    caseStudyContainer.innerHTML = caseStudyHtml;
}


// ajax-contact.js
const contactForm = document.getElementById('contactForm');

if(contactForm) {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const form = this;
        const responseBox = form.querySelector('.form-response');
        const formData = new FormData(form);

        responseBox.textContent = "Sending...";
        responseBox.style.color = "#555";

        fetch("/SGECO-Industries/section/contact/contact-submit.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            responseBox.textContent = data.message;
            responseBox.style.color = data.success ? "#d4ffdcff" : "#ffb4b4";

            if (data.success) form.reset();
        })
        .catch(error => {
            responseBox.textContent = "Something went wrong. Please try again.";
            responseBox.style.color = "#ffb4b4";
            console.error(error);
        });
    });

}

