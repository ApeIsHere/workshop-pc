const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (!e.key.match(/[а-яёa-zA-Z0-9 ]/i)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;