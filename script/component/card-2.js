class Card1 extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "This is an untitled card";
    const img = this.getAttribute("img") || "";
    const link = this.getAttribute("link") || "#";

    this.innerHTML = `
            <div class="card2">
                <div class="card2-img">
                    <img src="${img}" alt="${title}" loading="lazy">
                </div>
                <div class="card2-content">
                    <h3>${title}</h3>
                    <a href="${link}">Discover More →</a>
                </div>
            </div>
            `;
  }
}

customElements.define("card-2", Card1);
