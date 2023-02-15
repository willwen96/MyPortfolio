function initMobileMenu() {
    const x = document.getElementById('X');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobile_menu');
    const header = document.querySelector('header');
    const bg = document.querySelector('body');
    const content = document.getElementById('main_page');

    hamburger.addEventListener('click', () => {
        menu.style.display = 'grid';
        bg.style.backgroundColor = '#87CEFA';
        bg.style.overflow = 'hidden';
        header.style.background = 'transparent';
        content.style.display = 'none';
        x.style.visibility = 'visible';
        hamburger.style.visibility = 'hidden';
    });

    x.addEventListener('click', () => {
        menu.style.display = 'none';
        bg.style.backgroundColor = 'var(--background-color)';
        bg.style.overflow = 'auto';
        header.style.background = 'white';
        content.style.display = 'flex';
        x.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
    });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);