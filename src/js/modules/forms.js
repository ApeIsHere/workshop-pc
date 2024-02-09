const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        server = 'assets/server.php';

    const message = {
        loading: 'Loading...',
        success: 'Thank you',
        contact: "We'll contact you soon",
        login: "Log-in success",
        failure: 'Something went wrong...',
        spinner: 'assets/icons/footer/spinner.gif',
        ok: 'assets/icons/footer/ok.png',
        fail: 'assets/icons/footer/fail.png'
    };

    const clearInputs = () => {
        inputs.forEach(input => input.value = '');
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return await res.text();
    };

    const animateStatus = (item) => {
        item.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
            item.classList.remove('animate__fadeIn');
            item.classList.add('animate__fadeOut');
            setTimeout(() => {
                item.style.display = 'none';
            }, 800);
        }, 3000);
    };

    const showBtnImg = (parent, src, alt) => {
        const img = document.createElement('img');

        img.style.width = '30px';
        img.src = src;
        img.alt = alt;
        parent.innerHTML = '';
        animateStatus(img);
        parent.appendChild(img);
    };

    forms.forEach(form => {
        const button = form.querySelector('button'),
            mainInput = form.querySelector('[data-main-input]'),
            oldValue = button.innerHTML;
        let isModal = false,
            modalMessage;


        if (form.closest('.popup')) {
            modalMessage = document.createElement('div');
            modalMessage.classList.add('subtitle');
            modalMessage.style.marginTop = '10px';
            form.appendChild(modalMessage);
            isModal = true;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            showBtnImg(button, message.spinner, 'loading...');
            if (!isModal) {
                mainInput.value = message.loading;
            } else {
                modalMessage.textContent = message.loading;
                modalMessage.style.display = 'block';
            }

            postData(server, formData)
                .then(res => {
                    showBtnImg(button, message.ok, 'ok');
                    if (!isModal) {
                        mainInput.value = message.success;
                    } else if (form.closest('.popup-enroll')) {
                        modalMessage.textContent = message.contact;
                        modalMessage.style.display = 'block';
                    } else {
                        modalMessage.textContent = message.login;
                        modalMessage.style.display = 'block';
                    }
                    console.log(res);
                })
                .catch(() => {
                    showBtnImg(button, message.fail, 'fail');
                    if (!isModal) {
                        mainInput.value = message.failure;
                    } else {
                        modalMessage.textContent = message.failure;
                        modalMessage.style.display = 'block';
                    }
                })
                .finally(() => {
                    setTimeout(() => {
                        clearInputs();
                        button.innerHTML = oldValue;
                        if (isModal){
                            modalMessage.style.display = 'none';
                        }
                    }, 3800);
                });
        });
    });

};

export default forms;