(function () {
  const baseSections = document.querySelectorAll(".base-speed");

  baseSections.forEach((base) => {
    const slows = base.querySelectorAll(".slow");
    const fasts = base.querySelectorAll(".fast");

    if (slows.length === 0 && fasts.length === 0) return;

    const speed = 0.10;     // slow layer
    const speed2 = -0.10;   // fast layer
    const max = 50;
    const min = -50;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    function update() {
      const rect = base.getBoundingClientRect();

      slows.forEach((el) => {
        const y = -rect.top * speed;
        el.style.setProperty("--parallax-y", `${Math.max(Math.min(y, max), min)}px`);
      });

      fasts.forEach((el) => {
        const y2 = -rect.top * speed2;
        el.style.setProperty("--parallax-y", `${Math.max(Math.min(y2, max), min)}px`);
      });

      ticking = false;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
