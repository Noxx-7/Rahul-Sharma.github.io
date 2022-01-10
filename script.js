const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', function() {
    if (navMenu.classList.contains('d-none')) {
        navMenu.classList.add('d-flex');
        navMenu.classList.remove('d-none');

    } else {
        navMenu.classList.remove('d-flex');
        navMenu.classList.add('d-none');
    }


});

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 450
});