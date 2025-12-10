class atticCard extends HTMLElement {
  connectedCallback() {
    const img = this.getAttribute("atticImg") || "";
    const title = this.getAttribute("atticTitle") || "";
    const paragraph = this.getAttribute("atticParagraph") || "";
    const length = this.getAttribute("atticLength") || "";
    const size = this.getAttribute("atticSize") || "";

    this.innerHTML = `
                <div class="attic-card">
                    <div class="attic-img">
                        <img src="${img}" alt="">
                    </div>

                    <div class="attic-text">
                        <h2>${title}</h2>
                        
                        ${paragraph}

                        ${length}

                        ${size}
                        

                        <button class="btn-1">
                            <a href="contact">Inquire about this product</a>
                        </button>

                    </div>
                </div>
            `;
  }
}

customElements.define("attic-card", atticCard);
