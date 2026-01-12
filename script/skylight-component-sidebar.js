const links = document.querySelectorAll(".skylight-component-sidebar a");
const main = document.getElementById("component-content");

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
    })
    .catch((err) => {
      main.innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadComponent(link.getAttribute("href"), link);
  });
});

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

if (btnCollapse && skylightComponentSidebar) {
  btnCollapse.addEventListener("click", () => {
    skylightComponentSidebar.classList.toggle("skylight-menu-open");
  });
}