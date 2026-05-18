document.addEventListener('DOMContentLoaded', function(){
    // Company Years Counter
    const companyYearsContainer = document.querySelectorAll('.companyYears');

    const startYear = 1988;
    const currentYear = new Date().getFullYear();
    const companyYears = currentYear - startYear;

    companyYearsContainer.forEach((item) => {
        item.textContent = `${companyYears}`;
    });
});