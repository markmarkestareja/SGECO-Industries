<section class="testimonial">
    <div class="testimonial-text">
        <h1 class="p-large">What People Say About Tubular Skylight & Solar Roof Ventilation Products</h1>
    </div>

    <div class="testimonial-card-container js-testimonial-card">
        <!-- testimonial-card.js and testimonial-card-data.js will dynamically generate testimonial cards here -->
    </div>

    <div class="testimonial-btn-container">
        <button class="testimonial-btn prev-3" aria-label="Previous testimonial">
            &#10094;
        </button>
        <button class="testimonial-btn next-3" aria-label="Next testimonial">
            &#10095;
        </button>
    </div>
</section>

<script>
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
</script>