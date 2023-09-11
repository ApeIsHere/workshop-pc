const tutors = function () {

    const teacherItems = document.querySelectorAll('.tutors__item'),
        teacherCards = document.querySelectorAll('.tutors__card'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
    let position = {},
        removeCallBacks = [],
        clicked = false;


    const clearCallBacks = () => removeCallBacks.forEach(c => c());

    const changeCssVar = (center = 0, initial = 0) => {
        document.documentElement.style.setProperty('--center-position', center);
        document.documentElement.style.setProperty('--initial-position', initial);
    }

    buttons.forEach((btn, i) => {

        const showHideBio = () => {

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
            
            if(!clicked){
                animateButtons(-30, -24, 0, 1);
            } else {
                animateButtons(0, 0, 1, 0);
            }

            //Show corresponding bio
            bios.forEach((bio, index) => {
                bio.style.display = 'none';
                bio.classList.remove('animate__animated', 'animate__fadeInUp');
            if (!clicked && index === i) {
                    bio.style.display = 'block';
                    bio.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });

            // Hide-Show other btns
             buttons.forEach(button => {
                if (!clicked) {
                    if (button !== btn) {
                        button.classList.remove('animate__animated', 'animate__fadeIn');
                        button.classList.add('button-hide');
                    }
                } else {
                    button.classList.remove('button-hide');
                    button.classList.add('animate__animated', 'animate__fadeIn');
                }
             });

            //Getting all cards x-position
            teacherCards.forEach((card, j) => {
                position[`x${j}`] = Math.floor(card.getBoundingClientRect().x);
            });

            // Animating the correct card to the center using CSS variables to control @keyframe animation
            teacherCards.forEach((card, j) => {
                const clickedCardPos = position[`x${i}`],
                      centerCardPos = position.x1;

                if (j !== i) {
                    card.style.animation = 'getSmaller 1s ease-in-out forwards';
                } else {
                    if (clickedCardPos !== centerCardPos) {
                        const distance = centerCardPos - clickedCardPos;

                        changeCssVar(`${distance}px`, `${-distance}px`);

                        // we need to apply 2 diffirent animations to the same object
                        // that's why we use a wrapper teacherItem
                        // we apply 1 animation to the card and the second to the wrapper.
                        card.style.animation = 'flowToCenter 1s ease-in-out forwards';
                        card.style.position = 'relative';
                        card.style.zIndex = 11;
                        teacherItems[1].style.animation = 'flowToSide 1.2s ease-in-out forwards';
                    }
                }
            });

            clicked = true;
            // clearCallBacks();
        };

        btn.addEventListener('click', showHideBio);
        removeCallBacks.push(() => btn.removeEventListener('click', showHideBio));
    });

    const clickedBtn = document.querySelector('.clicked-111');

    clickedBtn.addEventListener('click', () => {
        clicked = true;
        clickedBtn.style.color = 'black';
    });
};

tutors();

export default tutors;