const sections = document.querySelectorAll("section");
const body = document.body;

function getActiveSection() {
  let viewportCenter = window.innerHeight / 2;

  let closestSection = null;
  let closestDistance = Infinity;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section;
    }
  });

  if (closestSection) {
    body.style.backgroundColor = closestSection.dataset.color;
  }
}

window.addEventListener("scroll", getActiveSection);
window.addEventListener("resize", getActiveSection);

// Run once on load
getActiveSection();
