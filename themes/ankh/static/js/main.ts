function switchPortfolios() {
    const portfolioOne: HTMLElement = document.getElementById('portfolio-1');
    const portfolioTwo: HTMLElement = document.getElementById('portfolio-2');
    let checkBox = <HTMLInputElement> document.getElementById('portfolio-checkbox');

    if (checkBox.checked === true) {
        portfolioTwo.style.display = 'none';
        portfolioOne.style.display = 'flex';
    } else if (checkBox.checked === false) {
        portfolioOne.style.display = 'none';
        portfolioTwo.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', switchPortfolios);

function toggleHamburger() {
}