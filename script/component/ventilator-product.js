const carousel2 = document.querySelector(".carousel2");
const nextBtn2 = document.querySelector(".next-2");
const prevBtn2 = document.querySelector(".prev-2");

nextBtn2.addEventListener("click", () => {
  carousel2.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn2.addEventListener("click", () => {
  carousel2.scrollBy({ left: -300, behavior: "smooth" });
});

// Swipe functionality for mobile
// let startX = 0;
// carousel2.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX;
// });

carousel2.addEventListener("touchmove", (e) => {
  const diff = startX - e.touches[0].clientX;
  carousel2.scrollLeft += diff * 0.8;
});
