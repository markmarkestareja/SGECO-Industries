<div class="gallery-container light-bg">
    <!-- Gallery Text -->
    <div class="gallery-text">
        <h2>Gallery</h2>
        <p class="p-large">Skylight in Action</p>
    </div>

    <!-- Custom Carousel -->
    <div class="carousel animate">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="asset/img/gallery/ventilator/1.webp" alt="Hotel Amenities">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/gallery/ventilator/2.webp" alt="Hotel Amenities">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/gallery/ventilator/3.webp" alt="Hotel Amenities">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/gallery/ventilator/4.webp" alt="Hotel Amenities">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/gallery/ventilator/5.webp" alt="Hotel Amenities">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/gallery/ventilator/6.webp" alt="Hotel Amenities">
            </div>
        </div>

        <!-- Navigation Buttons -->
        <button class="carousel-control prev">&#10094;</button>
        <button class="carousel-control next">&#10095;</button>
    </div>
</div>
<script>
    const carouselInner = document.querySelector(".carousel-inner");
    const prevBtn = document.querySelector(".carousel-control.prev");
    const nextBtn = document.querySelector(".carousel-control.next");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;
    const totalItems = items.length;
    let autoPlay;
    function showSlide(i) {
    index = (i + totalItems) % totalItems;
    carouselInner.style.transform = `translateX(${-index * 100}%)`;
    }
    function startAutoPlay() {
    stopAutoPlay();
    autoPlay = setInterval(() => {
        showSlide(index + 1);
    }, 10000);
    }
    function stopAutoPlay() {
    if (autoPlay) clearInterval(autoPlay);
    }
    nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
    startAutoPlay();
    });
    prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
    startAutoPlay();
    });
    showSlide(index);
    startAutoPlay();

</script>