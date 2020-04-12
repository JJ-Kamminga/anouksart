function switchPortfolios() {
    var portfolioOne = document.getElementById('portfolio-1');
    var portfolioTwo = document.getElementById('portfolio-2');
    var checkBox = document.getElementById('portfolio-checkbox');
    console.log("switchportfolios() ran" + checkBox);
    if (checkBox.checked === true) {
        portfolioTwo.style.display = 'none';
        portfolioOne.style.display = 'flex';
    }
    else if (checkBox.checked === false) {
        portfolioOne.style.display = 'none';
        portfolioTwo.style.display = 'flex';
    }
}
document.addEventListener('DOMContentLoaded', switchPortfolios);
