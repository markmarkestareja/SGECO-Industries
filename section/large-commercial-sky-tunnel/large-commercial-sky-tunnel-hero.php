<section class="large-commercial-hero">
    <h1 class="p-large">Large Commercial Skylight</h1>
    <div class="large-commercial-img animated-item">
        <img src="asset/img/skylight-component/large commercial.webp" alt="">
    </div>
</section>



<script>
    const animatedItems = document.querySelectorAll('.animated-item');

    animatedItems.forEach(item => {
        // Save original position + scale
        item.dataset.originalTop = item.style.top || "0px";
        item.dataset.originalScale = "1";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const item = entry.target;

            if (entry.isIntersecting) {
                // Animate on scroll when visible
                window.addEventListener('scroll', () => {
                    const rect = item.getBoundingClientRect();
                    const scrollAmount = window.pageYOffset || document.documentElement.scrollTop;

                    // Move + scale smoothly
                    const newTop = scrollAmount * 1.1;
                    const newScale = 1 + scrollAmount / 500;

                    item.style.top = `${newTop}px`;
                    item.style.transform = `scale(${Math.min(newScale, 3)})`;
                });
            } else {
                // Reset when it leaves the screen
                item.style.transform = `translateY(0px) scale(1)`;
            }
        });
    }, { threshold: 0.1 });

    animatedItems.forEach(item => observer.observe(item));
</script>
