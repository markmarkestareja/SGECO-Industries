class FAQItem extends HTMLElement{
        connectedCallback(){
            const question = this.getAttribute("question") || "";
            const answer = this.getAttribute("answer") || "";

            this.innerHTML = `
                <div class="faq-item">
                    <button class="faq-question">${question}</button>
                    <div class="faq-answer">
                        <p>${answer}</p>
                    </div>
                </div>
            `;
        }
    }

    customElements.define("faq-item", FAQItem);
    
    
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            // Close all other items
            faqItems.forEach((i) => {
                if (i !== item) i.classList.remove("active");
            });

            // Toggle current one
            item.classList.toggle("active");
        });
    });