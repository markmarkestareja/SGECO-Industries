import {brochureData, guideData, otherData} from './data/download-data.js';

const brochureContainer = document.querySelector('.js-brochure');
const guideContainer = document.querySelector('.js-guide');
const otherContainer = document.querySelector('.js-other');

let brochureHtml = '';
let guideHtml = '';
let otherHtml = '';

function renderHtmlDownload(datum, folder){
    const cleanDatum = datum.replace(/:/g, '');

    return `<div class="download-card">
        <div class="download-card-img">
            <img src="asset/img/resources-menu/download/${cleanDatum}.webp" alt="${cleanDatum}">
        </div>

        <div class="download-card-text">
            <h3>${datum}</h3>
            <a href="asset/pdf/download/${folder}/${cleanDatum}.pdf">Read the PDF →</a>
        </div>
    </div>`;
}

brochureData.forEach(brochureDatum => {
    brochureHtml += `
        ${renderHtmlDownload(brochureDatum, 'brochure')}
    `;
});

guideData.forEach(guideDatum => {
    guideHtml += `
        ${renderHtmlDownload(guideDatum, 'instruction')}
    `;
});

otherData.forEach(otherDatum => {
    otherHtml += `
        ${renderHtmlDownload(otherDatum, 'other')}
    `;
});

brochureContainer.innerHTML = brochureHtml;
guideContainer.innerHTML = guideHtml;
otherContainer.innerHTML = otherHtml;