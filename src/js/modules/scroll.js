const scroll = function () {
    
    const toTopbtn = document.querySelector('.toTop');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            toTopbtn.classList.add('show');
        } else {
            toTopbtn.classList.remove('show');
        }
    });
};

scroll();

export default scroll;