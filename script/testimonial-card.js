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