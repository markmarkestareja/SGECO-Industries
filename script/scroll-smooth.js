document.addEventListener("DOMContentLoaded", () => {
  // 🚫 Disable Lenis on selected pages
  if (document.body.dataset.disableLenis === "true") {
    document.documentElement.classList.remove("lenis");
    document.body.classList.remove("lenis");
    return;
  }

  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
