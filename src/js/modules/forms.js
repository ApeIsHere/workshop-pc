const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        server = 'assets/server.php';

    const message = {
        loading: 'Loading...',
        success: 'Thank you',
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

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            showBtnImg(button, message.spinner, 'loading...');
            mainInput.value = message.loading;

            postData(server, formData)
                .then(res => {
                    showBtnImg(button, message.ok, 'ok');
                    mainInput.value = message.success
                    console.log(res);
                })
                .catch(() => {
                    showBtnImg(button, message.fail, 'fail');
                    mainInput.value = message.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        clearInputs();
                        button.innerHTML = oldValue;
                    }, 3800);
                });
        });
    });

};

export default forms;