const checkEmailInputs = (selector) => {
    const emailInputs = document.querySelectorAll(selector);

    const properEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInputs.forEach(input => {
        input.addEventListener('input', function() {
            const inputValue = input.value.trim();
            const isValidEmail = properEmail.test(inputValue);

            if (!isValidEmail) {
                // Optionally, you can add visual feedback or take other actions for invalid emails
                console.log('Invalid email format');
            }
        });
    });
};

export default checkEmailInputs;
