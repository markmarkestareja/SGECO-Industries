class newsUpdateCard extends HTMLElement {
        connectedCallback() {
            const title = this.getAttribute("title") || "This is an untitled card";
            const img = this.getAttribute("img") || "";
            const link = this.getAttribute("link") || "#";
            const publishedDate = this.getAttribute("publishedDate") || "#";

            this.innerHTML = `
                <div class="news-update-card">
                    <div class="news-update-card-img">
                        <img src="${img}" alt="${title}">
                    </div>
                    <div class="news-update-content">
                        <h3>${title}</h3>
                        <div class="news-update-foot">
                            <p>${publishedDate}</p>
                            <a href="${link}">Read <span>→</span></a>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    customElements.define("news-update-card", newsUpdateCard);