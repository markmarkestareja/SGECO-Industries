const links = document.querySelectorAll(".skylight-component-sidebar a");
const main = document.getElementById("component-content");

// 🔹 Function to load content dynamically
function loadComponent(url, link) {
  // Remove active class from all, add to clicked
  links.forEach((a) => a.classList.remove("active"));
  link.classList.add("active");

  // Change main class
  const name = link.textContent.trim().toLowerCase().replace(/\s+/g, "-");
  // Remove any old "active-*" classes
  main.classList.forEach((c) => {
    if (c.startsWith("active-")) main.classList.remove(c);
  });

  // Add the new active-* class
  main.classList.add(`active-${name}`);

  // Load content
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load content");
      return res.text();
    })
    .then((html) => {
      main.innerHTML = html;
    })
    .catch((err) => {
      main.innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
}

// 🔹 Add click event to each link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadComponent(link.getAttribute("href"), link);
  });
});

// 🔹 Load Diffusers by default on initial page load
window.addEventListener("DOMContentLoaded", () => {
  const defaultLink = document.querySelector(
    ".skylight-component-sidebar a.active"
  );
  if (defaultLink) loadComponent(defaultLink.getAttribute("href"), defaultLink);
});

const btnCollapse = document.querySelector(".btn-collapse");
const skylightComponentSidebar = document.querySelector(
  ".skylight-component-sidebar"
);

btnCollapse.addEventListener("click", () => {
  skylightComponentSidebar.classList.toggle("skylight-menu-open");
});
 