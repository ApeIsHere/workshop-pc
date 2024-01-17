const hamburger = function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        lines = hamburger.querySelectorAll('span');

    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;

        menu.classList.toggle('menu__active');
        animateHamburger(isOpen);
    };

    const closeMenu = () => {
        isOpen = !isOpen;

        menu.classList.remove('menu__active');
        animateHamburger(isOpen);
    }

    const animateHamburger = (isOpen) => {
        const angle = isOpen ? 45 : 0,
            top = isOpen ? '3.5px' : 'auto';
        lines[0].style.transform = `rotate(${angle}deg)`;
        lines[0].style.top = top;
        lines[1].style.transform = `rotate(-${angle}deg)`;
        lines[1].style.top = -top;
        lines[2].style.opacity = isOpen ? '0' : '1';
    };
    
    window.addEventListener('click', (e) => {
        if (isOpen && !menu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    hamburger.addEventListener('click', toggleMenu);
};

export default hamburger;
