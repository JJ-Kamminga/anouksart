function switchPortfolios() {
    var portfolioOne = document.getElementById('portfolio-1');
    var portfolioTwo = document.getElementById('portfolio-2');
    if (portfolioOne.style.display === 'none') {
        portfolioTwo.style.display = 'none';
        portfolioOne.style.display = 'flex';
    }
    else if (portfolioTwo.style.display === 'none') {
        portfolioOne.style.display = 'none';
        portfolioTwo.style.display = 'flex';
    }
}
