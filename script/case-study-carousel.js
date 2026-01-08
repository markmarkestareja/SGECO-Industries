const caseStudyContainer = document.querySelector('.js-carousel2');

let caseStudyHtml = "";

const caseStudyData = [
    'American Plaque Factory', 
    'JJ Supermarket',
    'Philexcel Main Office',
    'Commercial Workspace',
    'Philexcel Business Center 2',
    'Lucena Bus Terminal',
    'Nippon Express',
    'Toyota Alabang',
    'Green Cross Office and Warehouse'

];

caseStudyData.forEach(caseStudyDatum => {
    caseStudyHtml += `
        <card-2 img="asset/img/main/main-case-study/${caseStudyDatum}.webp" title="${caseStudyDatum}"
            link="asset/pdf/case-studies/${caseStudyDatum}.pdf">
        </card-2>
    `;
});

caseStudyContainer.innerHTML = caseStudyHtml;