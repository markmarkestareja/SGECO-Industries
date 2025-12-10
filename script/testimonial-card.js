
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