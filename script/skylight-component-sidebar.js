const links = document.querySelectorAll(".skylight-component-sidebar a");
const main = document.getElementById("component-content");

/* ===============================
   Load Component via AJAX
================================ */
function loadComponent(url, link) {
  links.forEach((a) => a.classList.remove("active"));
  link.classList.add("active");

  const name = link.textContent.trim().toLowerCase().replace(/\s+/g, "-");
  main.classList.forEach((c) => {
    if (c.startsWith("active-")) main.classList.remove(c);
  });
  main.classList.add(`active-${name}`);

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load content");
      return res.text();
    })
    .then((html) => {
      main.innerHTML = html;

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      initRevealAnimations(); // ✅ re-init after AJAX load
    })
    .catch((err) => {
      main.innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
}

/* ===============================
   Sidebar Navigation Click
================================ */
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadComponent(link.getAttribute("href"), link);
  });
});

/* ===============================
   Sidebar Collapse
================================ */
const btnCollapse = document.querySelector(".btn-collapse");
const skylightComponentSidebar = document.querySelector(
  ".skylight-component-sidebar"
);

if (btnCollapse && skylightComponentSidebar) {
  btnCollapse.addEventListener("click", () => {
    skylightComponentSidebar.classList.toggle("skylight-menu-open");
  });
}

/* ===============================
   Reveal Animation (IntersectionObserver)
================================ */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal2");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ===============================
   Initial Page Load
================================ */
window.addEventListener("DOMContentLoaded", () => {
  const defaultLink = document.querySelector(
    ".skylight-component-sidebar a.active"
  );

  if (defaultLink) {
    loadComponent(defaultLink.getAttribute("href"), defaultLink);
  }
});
