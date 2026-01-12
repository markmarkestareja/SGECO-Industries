import { historyTimelineData } from "./data/history-timeline-data.js";

const historyTimeline = document.querySelector('.js-history-timeline');

if (historyTimeline) {
    let historyCards = "";

    historyTimelineData.forEach(historyCard => {
        historyCards += `
            <div class="history-card">
                <div class="history-card-img">
                    ${historyCard.img ? `<img src="asset/img/about/history/${historyCard.img}" alt="History Image">` : ''}
                </div>
                <div class="history-card-text">
                    <h2 class="p-med">${historyCard.year}</h2>
                    <p>${historyCard.description}</p>
                </div>
            </div>
        `;
    });

    historyTimeline.innerHTML = historyCards;

}
// console.log(historyCards);