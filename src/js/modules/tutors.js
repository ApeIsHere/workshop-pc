const tutors = function () {

    const tutorsCard = document.querySelectorAll('.tutors__card'),
        tutorsInner = document.querySelectorAll('.tutors__inner'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
    let clicked = false;

    buttons.forEach((btn, i) => {
        const init = () => {
            let cardRect = [],
                middleElement;

            const getCurrentPosition = () => {
                tutorsCard.forEach((card, j) => {
                    cardRect[j] = card.getBoundingClientRect();
                });
            };
            getCurrentPosition();

            const isMobile = () => {
                return window.innerWidth <= 768;
            };

            const changeCssVar = (distance, distanceNeg, center, side) => {
                document.documentElement.style.setProperty('--distance', distance);
                document.documentElement.style.setProperty('--distanceNeg', distanceNeg);
                document.documentElement.style.setProperty('--center', center);
                document.documentElement.style.setProperty('--sside', side);

                console.log("--distance:", distance);
                console.log("--distanceNeg:", distanceNeg);
                console.log("--center:", center);
                console.log("--side:", side);
            }

            const calculateDistance = () => {
                middleElement = Math.floor(cardRect.length / 2);
                const positionClickedX = cardRect[i].x,
                    positionCenter = cardRect[middleElement].x,
                    distance = positionCenter - positionClickedX;

                changeCssVar(`${distance}px`, `${-distance}px`, positionCenter, positionClickedX);
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
                // clone and append the copy of bio for mobile
                if (isMobile()) {
                    console.log('Si Senor');
                    bios.forEach((bio, j) => {
                        if (j === i) {
                            const bioCopy = bio.cloneNode(true);

                            tutorsCard.forEach((card, n) => {
                                if (n === i) {
                                    const appendCopy = card.querySelector('.tutors__bio-copy');

                                    if(!appendCopy) {
                                        card.appendChild(bioCopy);
                                        bioCopy.classList.add('tutors__bio-copy');
                                    } else {
                                        appendCopy.classList.toggle('tutors__bio-copy__active');
                                    }

                                    // setTimeout(() => {
                                    //     appendCopy.classList.toggle('tutors__bio-copy__active');
                                    // }, 10);
                                    // if (!card.querySelector('.tutors__bio-copy')) {
                                    //     card.appendChild(bioCopy);
                                    //     bioCopy.classList.add('tutors__bio-copy');
                                    //     setTimeout(() => {
                                    //         bioCopy.classList.add('tutors__bio-copy__active');
                                    //     }, 10);
                                    // } else {
                                    //     const appendCopy = card.querySelector('.tutors__bio-copy');
                                    //     console.log('Already there')
                                    //     appendCopy.classList.remove('tutors__bio-copy__active');
                                    // }
                                }
                            });
                        }
                    });
                } else {
                    bios.forEach(bio => bio.classList.add('animate__animated'));

                    bios.forEach((bio, j) => {
                        bio.style.display = 'none';
                        bio.classList.remove('animate__fadeInUp', 'animate__fadeOutDown');
                        if (!clicked && j === i) {
                            bio.style.display = 'block';
                            bio.classList.add('animate__fadeInUp');
                        } else if (clicked && j === i) {
                            bio.style.display = 'block';
                            bio.classList.add('animate__fadeOutDown');
                            setTimeout(() => {
                                bio.style.display = 'none';
                            }, 800);
                        }
                    });
                }
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
                tutorsCard.forEach((card, j) => {
                    if (j !== i) {
                        if (isMobile()) {
                            tutorsInner[j].style.animation = 'getSmallerMobile 1s ease-in-out forwards';
                        } else {
                            tutorsInner[j].style.animation = 'getSmaller 1s ease-in-out forwards';
                        }
                    } else {
                        card.setAttribute('data-clicked', 'true');
                        if (isMobile()) {
                            card.style.animation = 'cardUp 1s ease-in-out forwards';
                        } else {
                            calculateDistance();
                            if (!card.getAttribute('data-center')) {
                                // we need to apply 2 diffirent animations to the same object
                                // that's why we use a wrapper teacherItem
                                // we apply 1 animation to the card and the second to the wrapper.
                                card.style.animation = 'toCenterForward 1s ease-in-out forwards';
                                card.style.zIndex = 11;
                                tutorsCard[middleElement].style.animation = 'toSideForward 1s ease-in-out forwards';
                            }
                        }
                    }
                });
            };

            const animateBackwards = () => {
                tutorsInner.forEach(inner => {
                    if (!inner.closest('[data-clicked]')) {
                        if (isMobile()) {
                            inner.style.animation = 'getBiggerMobile 1s ease-in-out forwards';
                        } else {
                            inner.style.animation = 'getBigger 1s ease-in-out forwards';
                        }
                    }
                });

                tutorsCard.forEach((card, j) => {
                    if (card.getAttribute('data-clicked') && !card.getAttribute('data-center')) {
                        card.style.position = 'initial';
                        card.style.zIndex = 1;
                        card.style.animation = 'toSideBack 1s ease-in-out forwards';
                        tutorsCard[1].style.animation = 'toCenterBack 1s ease-in-out forwards';
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

export default tutors;