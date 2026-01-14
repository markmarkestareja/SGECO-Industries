<div class="gallery-container">
    <!-- Gallery Text -->
    <div class="gallery-text">
        <h2>Gallery</h2>
        <p class="p-large">Our Custom Manufacturing Services in Action</p>
    </div> 

    <!-- Custom Carousel -->
    <div class="carousel animate">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="asset/img/product-service/hatchway/Insulated Lid - Open 2.webp" alt="Insulated Lid - Open 2">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/product-service/hatchway/Hatch - Elmer.webp" alt="Hatch - Elmer">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/product-service/thermoforming/thermoforming img.webp" alt="thermoforming img">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/product-service/sheet-metal/sheet metal.webp" alt="sheet metal">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/skylight-component/IMG_5157.webp" alt="Pressing the sheetmetal to suit various products">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/skylight-component/Direct Zinc.webp" alt="Direct Zinc">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/product-service/custom-skylight/custom-skylight.webp" alt="custom-skylight">
            </div>
            <div class="carousel-item active">
                <img src="asset/img/product-service/sheet-metal/sheet metal stock.webp" alt="sheet metal stock">
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