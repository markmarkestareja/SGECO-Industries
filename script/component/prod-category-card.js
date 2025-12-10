class ProductCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "This is an untitled card";
    const img = this.getAttribute("img") || "";
    const link = this.getAttribute("link") || "#";

    this.innerHTML = `
        <div class="prod-category-card">
            <div class="prod-category-img">
                <img src="${img}" alt="${title}">
            </div>

            <div class="prod-category-text">
                <h3>${title}</h3>
                <button class="btn-3">
                    <a href="${link}">Discover More →</a>
                </button>
            </div>
        </div>
        `;
  }
}

customElements.define("product-card", ProductCard);
