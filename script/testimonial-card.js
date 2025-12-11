
let testimonialCard = '';

testimonials.forEach((testimonial) => {
    testimonialCard += `
        <div class="testimonial-card">
            <p>"${testimonial.text}"</p>
            <p class="testimonial-name">${testimonial.name}</p>
            <p class="testimonial-position">${testimonial.position}</p>
        </div>
    `;
})

document.querySelector('.js-testimonial-card').innerHTML = testimonialCard;



// Testimonial Card Slider

const container = document.querySelector(".testimonial-card-container");
    const prevBtn = document.querySelector(".testimonial-btn.prev-3");
    const nextBtn = document.querySelector(".testimonial-btn.next-3");

    const scrollAmount = 360; // one card width

    prevBtn.addEventListener("click", () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });