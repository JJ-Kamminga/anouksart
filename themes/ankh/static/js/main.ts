function switchPortfolios() {
    const portfolioOne: HTMLElement = document.getElementById('portfolio-1');
    const portfolioTwo: HTMLElement = document.getElementById('portfolio-2');

    if (portfolioOne.style.display === 'none') {
        portfolioTwo.style.display = 'none';
        portfolioOne.style.display = 'flex';
    } else if (portfolioTwo.style.display === 'none') {
        portfolioOne.style.display = 'none';
        portfolioTwo.style.display = 'flex';
    }
}