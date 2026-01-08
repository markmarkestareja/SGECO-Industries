document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".img-banner");
  const img = banner?.querySelector("img");

  if (!banner || !img) return;

  const speed = 0.15; // parallax strength

  window.addEventListener("scroll", () => {
    const rect = banner.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only animate when visible
    if (rect.bottom > 0 && rect.top < windowHeight) {
      const offset = -1 * rect.top * speed;
      img.style.transform = `translateY(${offset}px)`;
    }
  });
});
