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

function toggleHamburger(hamburgerIcon: HTMLElement) {
    const headerNav: HTMLElement = document.getElementById('header-nav');
    const headerLeft: HTMLElement = document.getElementById('header-left');
    const headerRight: HTMLElement = document.getElementById('header-right');
    
    if (hamburgerIcon.style.transform == 'rotate(90deg)') {
        hamburgerIcon.style.transform = 'none';
        headerLeft.style.display = 'none';
        headerRight.style.display = 'none';
        headerNav.style.display = 'none';
    } else {
        hamburgerIcon.style.transform = 'rotate(90deg)';
        headerLeft.style.display = 'block';
        headerRight.style.display = 'block';
        headerNav.style.display = '80vh';
    }
}