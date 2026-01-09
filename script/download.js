import { brochureData, guideData, otherData } from './data/download-data.js';

/**
 * Render a single download card
 */
function renderHtmlDownload(datum, folder) {
    const cleanDatum = datum.replace(/:/g, '');

    return `
        <div class="download-card">
            <div class="download-card-img">
                <img 
                    src="asset/img/resources-menu/download/${cleanDatum}.webp" 
                    alt="${cleanDatum}"
                    loading="lazy"
                >
            </div>

            <div class="download-card-text">
                <h3>${datum}</h3>
                <a href="asset/pdf/download/${folder}/${cleanDatum}.pdf">
                    Read the PDF →
                </a>
            </div>
        </div>
    `;
}

/**
 * Safely render a list of downloads into a container
 */
function renderDownloadSection(containerSelector, data, folder) {
    const container = document.querySelector(containerSelector);
    if (!container || !Array.isArray(data)) return;

    container.innerHTML = data
        .map(item => renderHtmlDownload(item, folder))
        .join('');
}

/**
 * INIT
 * These calls will silently do nothing if the container doesn't exist
 */
renderDownloadSection('.js-brochure', brochureData, 'brochure');
renderDownloadSection('.js-guide', guideData, 'instruction');
renderDownloadSection('.js-other', otherData, 'other');
