class CardSmall1 extends HTMLElement{
    connectedCallback(){
        const svg = this.getAttribute("svg") || ""
        const title = this.getAttribute("title") || "This is untitled";
        const desc = this.getAttribute("desc") || "";

        this.innerHTML = `
            <div class="card-small-1">
                <img src="${svg}" alt="${title}">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>
        `;
    }
}

customElements.define("card-small-1", CardSmall1); 