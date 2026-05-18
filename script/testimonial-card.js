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

const testimonialContainerSlider = document.querySelector(".testimonial-card-container");
const prevBtn3 = document.querySelector(".testimonial-btn.prev-3");
const nextBtn3 = document.querySelector(".testimonial-btn.next-3");

if (testimonialContainerSlider && prevBtn3 && nextBtn3) {
    const scrollAmount = 360;

    prevBtn3.addEventListener("click", () => {
        testimonialContainerSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn3.addEventListener("click", () => {
        testimonialContainerSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}



// ==================== main-process.php (moving background as scrolled) =======================
(() => {
  const section = document.querySelector('.process-container');
  const bg = document.querySelector('.m-bg-img-process');

  if (!section || !bg) return;

  window.addEventListener('scroll', () => {
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScroll = section.offsetHeight - windowHeight;

    let progress = (-sectionRect.top) / totalScroll;
    progress = Math.min(Math.max(progress, 0), 1);

    const scale = 1 + progress * 0.1;
    bg.style.setProperty('--bg-scale', scale);
  });
})();
