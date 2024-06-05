window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    if (screenWidth <= 900) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }
});

// JavaScript to toggle the visibility of the menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('show');
});