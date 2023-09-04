const hamburger = function() {
    
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu__active');
    });
};

hamburger();

export default hamburger;