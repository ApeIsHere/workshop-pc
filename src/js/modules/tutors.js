const tutors = function () {

    const teacherCards = document.querySelectorAll('.tutors__card'),
        teacherInners = document.querySelectorAll('.tutors__inner'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
    let removeCallBacks = [],
        clickedBtn = null,
        clicked = false;

    const clearCallBacks = () => removeCallBacks.forEach(c => c());

    buttons.forEach((btn, i) => {
        const init = () => {
            let positionX = [];

            const getCurrentPosition = () => {
                teacherCards.forEach((card, j) => {
                    positionX[j] = Math.floor(card.getBoundingClientRect().x);
                });
                console.log(positionX);
            };
            getCurrentPosition();

            const positionClicked = positionX[i],
                positionCenter = positionX[1];

            const changeCssVar = (toCenter = 0, toSide = 0, center, side) => {
                document.documentElement.style.setProperty('--to-center', toCenter);
                document.documentElement.style.setProperty('--to-side', toSide);
                document.documentElement.style.setProperty('--center-position', center);
                document.documentElement.style.setProperty('--side-position', side);
                console.log(document.documentElement.style.getPropertyValue('--to-center'));
                console.log(document.documentElement.style.getPropertyValue('--to-side'));
                console.log(document.documentElement.style.getPropertyValue('--center-position'));
                console.log(document.documentElement.style.getPropertyValue('--side-position'));
            }

            const calculateDistance = () => {
                const distance = positionCenter - positionClicked;
                changeCssVar(`${distance}px`, `${-distance}px`, positionCenter, positionClicked);
                console.log(distance);
            };
                
            //Slide the card title to 'close'
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
                bios.forEach((bio, index) => {
                    bio.style.display = 'none';
                    bio.classList.remove('animate__animated', 'animate__fadeInUp');
                    if (!clicked && index === i) {
                        bio.style.display = 'block';
                        bio.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                });
            };

            const showHideButtons = () => {
                buttons.forEach(button => {
                    if (!clicked) {
                        if (button !== btn) {
                            button.classList.remove('animate__animated', 'animate__fadeIn');
                            button.classList.add('button-hide');
                        }
                    } else {
                        button.style.display = 'initial';
                        button.classList.remove('button-hide');
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
                            card.style.animation = 'flowToCenter 1s ease-in-out forwards';
                            card.style.position = 'relative';
                            card.style.zIndex = 11;
                            teacherCards[1].style.animation = 'flowToSide 1s ease-in-out forwards';
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
                        card.style.animation = 'none';
                        teacherCards[1].style.animation = 'none';
                    } 
                    card.removeAttribute('data-clicked');
                });
            };

            // initiating sequence
            showHideBio();
            showHideButtons();
            clearCallBacks();

            if (!clicked) {
                animateButtons(-30, -24, 0, 1);
                animateForward();
                clicked = true;
                console.log(clicked);
            } else {
                animateButtons(0, 0, 1, 0);
                animateBackwards();
                clicked = false;
                console.log(clicked);
            }

            //initiating evetlistener to the clicked button only
            clickedBtn = btn;
            clickedBtn.addEventListener('click', init);
        };

        btn.addEventListener('click', init);
        removeCallBacks.push(() => btn.removeEventListener('click', init)); 
    });



    const checkClicked = document.querySelector('.clicked-111');

    checkClicked.addEventListener('click', () => {
        clicked = true;
        checkClicked.style.color = 'black';
    });
};

tutors();

export default tutors;