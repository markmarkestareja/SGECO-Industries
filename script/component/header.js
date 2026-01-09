const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Toggle main mobile menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Toggle dropdowns for mobile
document.querySelectorAll(".dropdown-sub > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 1300) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 1300) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("open");
    }
  });
});
