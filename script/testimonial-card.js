const testimonialContainer = document.querySelector('.js-testimonial-card');

if (testimonialContainer) {
    let testimonialCard = '';

    testimonials.forEach((testimonial) => {
        testimonialCard += `
            <div class="testimonial-card">
                <p>"${testimonial.text}"</p>
                <p class="testimonial-name">${testimonial.name}</p>
                <p class="testimonial-position">${testimonial.position}</p>
            </div>
        `;
    });

    testimonialContainer.innerHTML = testimonialCard;
}



// Testimonial Card Slider

const container = document.querySelector(".testimonial-card-container");
const prevBtn3 = document.querySelector(".testimonial-btn.prev-3");
const nextBtn3 = document.querySelector(".testimonial-btn.next-3");

if (container && prevBtn3 && nextBtn3) {
    const scrollAmount = 360;

    prevBtn3.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn3.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}



// ==================== main-process.php (moving background as scrolled) =======================
const section = document.querySelector('.process-container');
const bg = document.querySelector('.m-bg-img-process');

window.addEventListener('scroll', () => {
  const sectionRect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Total scrollable distance of the section
  const totalScroll = section.offsetHeight - windowHeight;

  // How far we've scrolled inside the section
  let progress = (-sectionRect.top) / totalScroll;

  // Clamp between 0 and 1
  progress = Math.min(Math.max(progress, 0), 1);

  // Minimal zoom (1 → 1.06)
  const scale = 1 + progress * 0.1;

  bg.style.setProperty('--bg-scale', scale);
});