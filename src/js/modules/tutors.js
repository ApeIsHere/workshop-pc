const tutors = function () {

    const teacherCards = document.querySelectorAll('.tutors__card'),
        teacherInners = document.querySelectorAll('.tutors__inner'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
    let clicked = false;

    buttons.forEach((btn, i) => {

        const init = () => {
            let positionX = [];

            const getCurrentPosition = () => {
                teacherCards.forEach((card, j) => {
                    positionX[j] = Math.floor(card.getBoundingClientRect().x);
                });
            };
            getCurrentPosition();

            const positionClicked = positionX[i],
                positionCenter = positionX[1];

            const changeCssVar = (toCenter = 0, toSide = 0, fromCenter, fromSide) => {
                document.documentElement.style.setProperty('--to-center', toCenter);
                document.documentElement.style.setProperty('--to-side', toSide);
                document.documentElement.style.setProperty('--from-center', fromCenter);
                document.documentElement.style.setProperty('--from-side', fromSide);
            }

            const calculateDistance = () => {
                const distance = positionCenter - positionClicked;
                changeCssVar(`${distance}px`, `${-distance}px`, positionCenter, positionClicked);
            };

            //Slide the card title from 'bio' to 'close'
            const animateButtons = (frontTranslate, backTranslate, frontOpacity, backOpacity) => {
                const btnFront = btn.querySelector('.front'),
                    btnBack = btn.querySelector('.back');

                btnFront.style.cssText = `
                    transform: translateY(${frontTranslate}px);
                    opacity: ${frontOpacity};			
                    `;
                btnBack.style.cssText = `
                    transform: translateY(${backTranslate}px);
                    opacity: ${backOpacity};			
                    `;
            };

            const showHideBio = () => {
                bios.forEach(bio => bio.classList.add('animate__animated'));

                bios.forEach((bio, index) => {
                    bio.style.display = 'none';
                    bio.classList.remove('animate__fadeInUp', 'animate__fadeOutDown');
                    if (!clicked && index === i) {
                        bio.style.display = 'block';
                        bio.classList.add('animate__fadeInUp');
                    } else if (clicked && index === i) {
                        bio.style.display = 'block';
                        bio.classList.add('animate__fadeOutDown');
                    }
                });
            };

            const showHideButtons = () => {
                buttons.forEach(button => {
                    if (!clicked) {
                        if (button !== btn) {
                            button.classList.remove('animate__animated', 'animate__fadeIn');
                            button.classList.add('button-hide');
                            button.disabled = true;
                        }
                    } else {
                        button.style.display = 'initial';
                        button.classList.remove('button-hide');
                        button.disabled = false;
                    }
                });
            };

            const animateForward = () => {
                teacherCards.forEach((card, j) => {
                    if (j !== i) {
                        teacherInners[j].style.animation = 'getSmaller 1s ease-in-out forwards';
                    } else {
                        card.setAttribute('data-clicked', 'true');
                        if (!card.getAttribute('data-center')) {
                            calculateDistance();

                            // we need to apply 2 diffirent animations to the same object
                            // that's why we use a wrapper teacherItem
                            // we apply 1 animation to the card and the second to the wrapper.
                            card.style.animation = 'flowToCenterForward 1s ease-in-out forwards';
                            // card.style.position = 'relative';
                            card.style.zIndex = 11;
                            teacherCards[1].style.animation = 'flowToSideForward 1s ease-in-out forwards';
                        }
                    }
                });
            };

            const animateBackwards = () => {
                teacherInners.forEach(inner => {
                    if (!inner.closest('[data-clicked]')) {
                        inner.style.animation = 'getBigger 1s ease-in-out forwards';
                    }
                });

                teacherCards.forEach(card => {
                    if (card.getAttribute('data-clicked') && !card.getAttribute('data-center')) {
                        card.style.position = 'initial';
                        card.style.zIndex = 1;
                        card.style.animation = 'flowToSideBack 1s ease-in-out forwards';
                        teacherCards[1].style.animation = 'flowToCenterBack 1s ease-in-out forwards';
                    }
                    card.removeAttribute('data-clicked');
                });
            };

            // initiating sequence
            showHideBio();
            showHideButtons();

            if (!clicked) {
                animateButtons(-30, -24, 0, 1);
                animateForward();
                clicked = true;
            } else {
                animateButtons(0, 0, 1, 0);
                animateBackwards();
                clicked = false;
            }
        };
        btn.addEventListener('click', init);
    });
};

tutors();

export default tutors;