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
    const headerCenter: HTMLElement = document.getElementById('header-center');
    
    if (hamburgerIcon.classList.contains('is-active')) {
        hamburgerIcon.classList.remove('is-active');
        hamburgerIcon.classList.add('is-inactive');
        
        headerLeft.style.display = 'none';
        headerRight.style.display = 'none';
        headerCenter.style.width = '33.33vw';
        headerNav.style.display = 'flex';

        headerNav.appendChild(headerLeft);
        headerNav.appendChild(headerCenter);
        headerNav.appendChild(headerRight);
        

    } else {
        hamburgerIcon.classList.remove('is-inactive');
        hamburgerIcon.classList.add('is-active');
        
        headerNav.appendChild(headerRight);
        headerNav.appendChild(headerLeft);

        headerLeft.style.display = 'block';
        headerLeft.style.width = '100vw';
        headerRight.style.display = 'block';
        headerRight.style.width = '100vw';

        headerNav.style.paddingBottom = '25px';
        headerNav.style.flexWrap = 'wrap';
    }
}