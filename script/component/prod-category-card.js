class ProductCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "This is an untitled card";
    const img = this.getAttribute("img") || "";
    const link = this.getAttribute("link") || "#";
    const alt = this.getAttribute("alt") || title;

    this.innerHTML = `
        <div class="prod-category-card">
            <div class="prod-category-img">
                <img src="${img}" alt="${alt}" loading="lazy">
            </div>

            <div class="prod-category-text">
                <h3>${title}</h3>
                <a class="btn-3" href="${link}">Discover More →</a>
            </div>
        </div>
        `;
  }
}

customElements.define("product-card", ProductCard);
 