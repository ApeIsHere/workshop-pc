const checkNumInputs = (selector) => {
    const numberInputs = document.querySelectorAll(selector);

    numberInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (!e.key.match(/[0-9+()-.]/)) {
                e.preventDefault();
            }
        });
    });
};

export default checkNumInputs;
